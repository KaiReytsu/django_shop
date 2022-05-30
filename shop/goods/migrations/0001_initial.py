# Generated by Django 4.0.4 on 2022-05-30 16:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Goods',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.CharField(max_length=50, verbose_name='Наименование товара')),
                ('price', models.FloatField(verbose_name='цена за единицу товара')),
                ('amount', models.PositiveIntegerField(verbose_name='Количество товаров в магазине')),
            ],
            options={
                'verbose_name': 'Goods',
                'verbose_name_plural': 'Goods',
            },
        ),
        migrations.CreateModel(
            name='Purchase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_purchase', models.DateTimeField(verbose_name='Дата и время покупки')),
                ('amount', models.PositiveBigIntegerField(verbose_name='Количество купленного товара')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.goods', verbose_name='Покупаемый товар')),
            ],
        ),
    ]