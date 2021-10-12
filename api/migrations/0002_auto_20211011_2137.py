# Generated by Django 3.2.7 on 2021-10-11 21:37

from django.db import migrations
import django_extensions.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lyrics',
            name='artist_slug',
            field=django_extensions.db.fields.AutoSlugField(blank=True, editable=False, null=True, populate_from=['artist']),
        ),
        migrations.AlterField(
            model_name='lyrics',
            name='title_slug',
            field=django_extensions.db.fields.AutoSlugField(blank=True, editable=False, null=True, populate_from=['title']),
        ),
    ]