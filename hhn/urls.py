from django.urls import path 
from . import views 

app_name = 'hhn'


urlpatterns = [
    path('', views.index, name='index'),

]

