from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Plant, Image
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id',)


class PlantsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plant
        fields = ('id', 'user', 'nickname', 'species', 'growing_season',
                  'ideal_temp', 'ideal_hum', 'water_frequency', 'last_watered',
                  'images')
        extra_kwargs = {'images': {'required': False},}


class ImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('__all__')


class NestedImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('id', 'image_url', 'posted_on')


class PopulatedPlantSerializer(PlantsSerializer):

    images = NestedImageSerializer(many=True)
    user = UserSerializer()
