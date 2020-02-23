# pylint: disable=no-member,arguments-differ,unused-argument

from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from jwt_auth.authentication import JWTAuthentication
from .models import Plant, Image
from .serializers import PlantsSerializer, ImagesSerializer, PopulatedPlantSerializer


# Create your views here.
class PlantsListView(APIView): # extend the APIView
    authentication_classes = (JWTAuthentication, )

    def get(self, _request):
        user = JWTAuthentication.get_user(self, _request)
        # only get the plants that belong to the user who is signed in
        plants = Plant.objects.all().filter(user=user)
        serializer = PlantsSerializer(plants, many=True)

        return Response(serializer.data, status=HTTP_200_OK) # send the JSON to the client

    def post(self, request):
        request.data['user'] = request.user.id
        plant = PlantsSerializer(data=request.data)
        if plant.is_valid():
            plant.save(user=request.user)
            return Response(plant.data, status=HTTP_201_CREATED)
        return Response(plant.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class PlantDetailView(APIView): # extend the APIView
    authentication_classes = (JWTAuthentication, )

    def get(self, _request, pk):
        user = JWTAuthentication.get_user(self, _request)
        plant = Plant.objects.get(pk=pk)

        if plant.user.id != user:
            return Response(status=HTTP_401_UNAUTHORIZED)
        serializer = PopulatedPlantSerializer(plant)

        return Response(serializer.data, status=HTTP_200_OK) # send the JSON to the client

    def put(self, request, pk):
        user = JWTAuthentication.get_user(self, request)
        plant = Plant.objects.get(pk=pk)

        if plant.user.id != user:
            return Response(status=HTTP_401_UNAUTHORIZED)
        updated_plant = PlantsSerializer(plant, data=request.data)
        if updated_plant.is_valid():
            updated_plant.save()
            return Response(updated_plant.data)
        return Response(updated_plant.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        user = JWTAuthentication.get_user(self, request)
        plant = Plant.objects.get(pk=pk)

        if plant.user.id != user:
            print(plant.user.id, user)
            return Response(status=HTTP_401_UNAUTHORIZED)
        plant.delete()
        return Response(status=HTTP_204_NO_CONTENT)


class ImagesListView(APIView):
    authentication_classes = (JWTAuthentication, )

    def post(self, request, pk):
        request.data['plant'] = pk
        image = ImagesSerializer(data=request.data)
        if image.is_valid():
            image.save()
            plant = Plant.objects.get(pk=pk)
            serialized_plant = PopulatedPlantSerializer(plant)
            return Response(serialized_plant.data)
        return Response(image.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class ImageDetailView(APIView):
    authentication_classes = (JWTAuthentication, )

    def delete(self, _request, image_pk, **kwargs):
        image = Image.objects.get(pk=image_pk)
        image.delete()
        return Response(status=HTTP_204_NO_CONTENT)
