from rest_framework import serializers

from classwork.models import Plan


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = [
            "uid",
            "items",
            "created_at",
        ]
