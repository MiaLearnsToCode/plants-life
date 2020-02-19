from .views import ChaptersListView, ChapterDetailView
from django.urls import path

urlpatterns = [
    path('chapters', ChaptersListView.as_view()),
    path('chapters/<int:pk>/', ChapterDetailView.as_view()),
]
