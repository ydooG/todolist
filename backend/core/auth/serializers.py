from django.contrib.auth import get_user_model
from rest_framework import serializers

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
