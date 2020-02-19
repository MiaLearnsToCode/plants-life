# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY
from .models import Chapter
from .serializers import PopulatedChapterSerializer, ChapterSerializer
# Create your views here.


class ChaptersListView(APIView):
    # add permission classes in here
    def get(self, _request):
        chapters = Chapter.objects.all()
        serialized_chapters = PopulatedChapterSerializer(chapters, many=True)
        return Response(serialized_chapters.data)

    def post(self, request):
        chapter = ChapterSerializer(data=request.data)
        if chapter.is_valid():
            chapter.save()
            return Response(chapter.data, status=HTTP_201_CREATED)
        return Response(chapter.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class ChapterDetailView(APIView):
    def get(self, _request, pk):
        chapter = Chapter.objects.get(pk=pk)
        serialized_chapter = PopulatedChapterSerializer(chapter)
        return Response(serialized_chapter.data)
