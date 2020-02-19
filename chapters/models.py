from django.db import models

# Create your models here.
# a label has many chapters and a chapters has many labels
# a chapter has many tasks but a task only has one chapter

class Label(models.Model):
    label = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.label}'


class Chapter(models.Model):
    name = models.CharField(max_length=50)
    labels = models.ManyToManyField(Label, related_name='chapters', blank=True)
    
    def __str__(self):
        return f'{self.name}'


class Task(models.Model):
    text = models.CharField(max_length=100)
    chapter = models.ForeignKey(
        Chapter, related_name='tasks', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.text}'

