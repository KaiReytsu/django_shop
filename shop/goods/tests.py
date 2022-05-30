from django.test import TestCase
from django.test import Client
from .models import Goods, Purchase

class TestShop(TestCase):
    def setUp(self):
        self.client = Client()

    def teststatuscode(self):
        response = self.client.post('/', {
            'product': 'test',
            'price': 50,
            'amountgoods': 100
        })
        self.assertEqual(response.status_code, 200)

    def testpurchase(self):
        response = self.client.post('/purchase/', {
            'product': 'test',
            'date_of_purchase': '22-03-2022 22:30',
            'amount': 10
        })
        self.assertEqual(response.status_code, 200)

class ModelsTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        goods = Goods(product='Тестовый товар', price=51.5, amount=200)
        goods.save()
        purchase = Purchase(date_of_purchase='2022-03-20 22:30', amount=20, product_id=goods.id)
        purchase.save()
    
    def setUp(self):
        self.client = Client()

    def test_models_goods(self):
        result = Goods.objects.all().values()[0]['product']
        self.assertEqual(result, 'Тестовый товар')
    
