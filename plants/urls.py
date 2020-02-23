from django.urls import path
from .views import PlantsListView, PlantDetailView, ImagesListView, ImageDetailView

urlpatterns = [
    path('plants', PlantsListView.as_view()),
    path('plants/<int:pk>', PlantDetailView.as_view()),
    path('plants/<int:pk>/images', ImagesListView.as_view()),
    path('plants/<int:pk>/images/<int:image_pk>', ImageDetailView.as_view()),
]
