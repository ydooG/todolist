from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()


class UserSignUpSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password_confirm')

    def validate_password_confirm(self, password_confirm):
        if self.initial_data['password'] != password_confirm:
            raise serializers.ValidationError('Passwords doesn\'t match')
        return password_confirm

    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()

        return user


class TokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super(TokenObtainSerializer, self).validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['user'] = {
            'id': self.user.id,
            'username': self.user.username
        }
        return data
