# Generated by Django 5.0.dev20230322073524 on 2023-03-30 10:47

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_categories_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categories',
            name='name',
            field=models.CharField(max_length=255, verbose_name=api.models.Product),
        ),
    ]