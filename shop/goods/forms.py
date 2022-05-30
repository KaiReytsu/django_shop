from tkinter import Widget
import django


from django.forms import DateInput, ModelForm
from .models import Purchase
class ParchaseForm(ModelForm):
    
    class Meta:
        model = Purchase
        fields = ('product', 'date_of_purchase', 'amount')
        widgets = {'date_of_purchase': DateInput(attrs={'type': 'datetime-local'})}