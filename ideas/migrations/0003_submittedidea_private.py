# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2019-02-23 08:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ideas', '0002_auto_20190222_2032'),
    ]

    operations = [
        migrations.AddField(
            model_name='submittedidea',
            name='private',
            field=models.BooleanField(default=True, verbose_name='Private'),
        ),
    ]
