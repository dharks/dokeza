# Generated by Django 3.1 on 2021-04-26 13:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('highlights', '0004_merge_20210329_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timeline',
            name='createdon',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 26, 16, 1, 53, 913975)),
        ),
    ]
