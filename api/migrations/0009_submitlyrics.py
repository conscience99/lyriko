# Generated by Django 3.2.7 on 2021-11-10 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_delete_submitlyrics'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubmitLyrics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artist', models.CharField(max_length=250)),
                ('title', models.CharField(max_length=250)),
                ('body', models.TextField()),
            ],
        ),
    ]
