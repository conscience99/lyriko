# Generated by Django 3.2.7 on 2021-10-11 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_lyrics_title_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='lyrics',
            name='title_slug',
            field=models.SlugField(null=True),
        ),
    ]
