# Generated by Django 3.1 on 2020-11-12 22:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('other_docs', '0002_doc_regulation'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doc',
            old_name='pdf',
            new_name='word_doc',
        ),
    ]
