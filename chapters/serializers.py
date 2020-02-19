from rest_framework import serializers
from .models import Chapter, Task, Label


class ChapterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chapter
        fields = ('id', 'name', 'labels', 'tasks')


class LabelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Label
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'


class NestedLabelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Label
        fields = ('id', 'label',)


class NestedTaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'text',)


class PopulatedChapterSerializer(ChapterSerializer):

    tasks = NestedTaskSerializer(many=True, )
    labels = NestedLabelSerializer(many=True, )

class PopulatedLabelSerializer(LabelSerializer):

    chapters = ChapterSerializer(many=True, )


class PopulatedTaskSerializer(TaskSerializer):

    chapter = ChapterSerializer()

