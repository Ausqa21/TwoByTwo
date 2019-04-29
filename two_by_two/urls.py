from django.urls import path
from . import views

app_name = "two_by_two"

urlpatterns = [
    path('', views.index, name="index"),
    path('details', views.details, name="details"),
    path('form2', views.form2_calc, name="form2"),
    path('form3', views.form3_calc, name="form3"),
    path('form4', views.form4_calc, name="form4"),
]
