# Generated by Django 3.0.8 on 2020-07-08 09:17

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0003_taggeditem_add_unique_index'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SubmittedIdea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('slug', models.SlugField(unique=True)),
                ('idea_type', models.PositiveSmallIntegerField(blank=True, choices=[(1, 'Bill Opinion'), (2, 'Petition'), (3, 'Memorandum ')], default=1, null=True, verbose_name='Idea Type')),
                ('submit_to', models.PositiveSmallIntegerField(blank=True, choices=[(1, 'National Assembly'), (2, 'Senate')], default=1, null=True, verbose_name='Submit to')),
                ('content', ckeditor.fields.RichTextField(help_text='What do you have in mind?')),
                ('draft', models.BooleanField(default=True, verbose_name='Draft')),
                ('private', models.BooleanField(default=True, verbose_name='Private')),
                ('publish', models.DateField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('tags', taggit.managers.TaggableManager(blank=True, help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
            ],
            options={
                'verbose_name': 'idea',
                'verbose_name_plural': 'ideas',
                'ordering': ['-publish'],
            },
        ),
    ]
