# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-03 23:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('annotator', '0003_auto_20170329_2302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='annotation',
            name='consumer',
            field=models.CharField(blank=True, default='Mzalendo Dokeza', max_length=64),
        ),
    ]
