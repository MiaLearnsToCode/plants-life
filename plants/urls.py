from django.urls import path
from .views import PlantsListView, PlantDetailView, ImagesListView, ImageDetailView

app_name = 'plants'

urlpatterns = [
    path('plants', PlantsListView.as_view(), name="list"),
    path('plants/<int:pk>', PlantDetailView.as_view(), name="detail"),
    path('plants/<int:pk>/images', ImagesListView.as_view(),),
    path('plants/<int:pk>/images/<int:image_pk>', ImageDetailView.as_view(),),
]
