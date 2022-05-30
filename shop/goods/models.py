from django.db import models

class Goods(models.Model):

    class Meta():
        verbose_name = 'Goods'
        verbose_name_plural = 'Goods'
    product = models.CharField('Наименование товара', max_length=50)
    price = models.FloatField('цена за единицу товара')
    amount = models.PositiveIntegerField('Количество товаров в магазине')
    def __str__(self):
        return self.product
        
class Purchase(models.Model):
    date_of_purchase = models.DateTimeField('Дата и время покупки')
    product = models.ForeignKey(Goods, verbose_name='Покупаемый товар', on_delete=models.CASCADE)
    amount = models.PositiveBigIntegerField('Количество купленного товара')
