# Generated by Django 3.1.3 on 2020-12-04 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='billtracker',
            name='description',
            field=models.TextField(null=True),
        ),
    ]