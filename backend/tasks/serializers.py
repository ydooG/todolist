from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Task
        fields = ('user', 'title', 'description', 'is_done', 'created_at')
