# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-26 11:13
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('annotator', '0004_auto_20170404_0221'),
    ]

    operations = [
        migrations.AlterField(
            model_name='annotation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]