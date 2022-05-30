from django.views.generic.edit import CreateView
from django.shortcuts import render
from django.urls import reverse_lazy
from .models import Goods, Purchase
from .forms import ParchaseForm
import json

class PurchaseView(CreateView):
    form_class = ParchaseForm
    model = Purchase
    template_name = 'purchase.html'
    success_url = reverse_lazy('purchase')

def goods_view(request):
    if str(request.method).lower() == 'post':
        if 'product' in request.POST.keys():
            content = request.POST
        else:
            data = request.body.decode('utf-8')
            content = json.loads(data)
        goods = Goods(
            product=content['product'], 
            price=content['price'],
            amount = content['amountgoods'])
        goods.save()

    return render(request, 'goods.html')