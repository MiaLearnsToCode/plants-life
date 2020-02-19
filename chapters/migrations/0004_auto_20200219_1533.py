# Generated by Django 3.0.3 on 2020-02-19 15:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chapters', '0003_auto_20200219_1419'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='chapters.Chapter'),
        ),
    ]
