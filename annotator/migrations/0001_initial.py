# Generated by Django 3.0.8 on 2020-07-08 09:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Annotation',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('annotator_schema_version', models.CharField(default='v1.0', max_length=8)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('text', models.TextField()),
                ('quote', models.TextField()),
                ('uri', models.CharField(blank=True, max_length=4096)),
                ('consumer', models.CharField(blank=True, default='Mzalendo Dokeza', max_length=64)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('created',),
            },
        ),
        migrations.CreateModel(
            name='Range',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.CharField(max_length=128)),
                ('end', models.CharField(max_length=128)),
                ('startOffset', models.IntegerField()),
                ('endOffset', models.IntegerField()),
                ('annotation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ranges', to='annotator.Annotation')),
            ],
        ),
    ]