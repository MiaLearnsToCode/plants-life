from django.db import models
from jwt_auth.models import User

# Create your models here.
class Plant(models.Model):
    nickname = models.CharField(max_length=50)
    species = models.CharField(max_length=50)
    growing_season = models.CharField(max_length=50)
    ideal_temp = models.IntegerField()
    ideal_hum = models.IntegerField()
    water_frequency = models.IntegerField()
    last_watered = models.DateField()
    user = models.ForeignKey(User, related_name='plants', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.nickname}'


# add related models later when testing is done
# set up comments and categories
class Image(models.Model):
    image_url = models.TextField(max_length=1000, blank=True)
    posted_on = models.DateField(auto_now_add=True)
    plant = models.ForeignKey(
        Plant,
        related_name='images',
        on_delete=models.CASCADE,
        null=True,  #foreign key is an int so this needs to be null
        blank=True)
