from django.shortcuts import render, redirect
from django.http import JsonResponse
from math import log, ceil
# Create your views here.


def index(request):
    return render(request, "two_by_two/index.html")


# def form1_calc(request):
#     if request.method == "POST":
#         investment = float(request.POST["input11"])
#         interest = float(request.POST["input12"])
#         days_inv = float(request.POST["input13"])
#         value = investment*(1+(interest/100))**days_inv
#         if request.is_ajax():
#             json_data = {
#                 "value": value
#             }
#             return JsonResponse(json_data)
#         return redirect("two_by_two:index")
#     else:
#         return redirect("two_by_two:index")


def form2_calc(request):
    if request.method == "POST":
        target = float(request.POST["input21"])
        interest = float(request.POST["input22"])
        days_inv = float(request.POST["input23"])
        value = target/(1 + (interest/100))**days_inv
        if request.is_ajax():
            json_data = {
                "value": '{:f}'.format(value)
            }
            return JsonResponse(json_data)
        return redirect("two_by_two:index")
    else:
        return redirect("two_by_two:index")


def form3_calc(request):
    if request.method == "POST":
        investment = float(request.POST["input31"])
        interest = float(request.POST["input32"])
        target = float(request.POST["input33"])
        value = log(target/investment)/log(1+(interest/100))
        if request.is_ajax():
            json_data = {
                "value": ceil(value)
            }
            return JsonResponse(json_data)
        return redirect("two_by_two:index")
    else:
        return redirect("two_by_two:index")


def form4_calc(request):
    if request.method == "POST":
        investment = float(request.POST["input41"])
        days_inv = float(request.POST["input42"])
        target = float(request.POST["input43"])
        value = (target/investment)**(1/days_inv)-1
        value *= 100
        if request.is_ajax():
            json_data = {
                "value": '{:f}'.format(value)
            }
            return JsonResponse(json_data)
        return redirect("two_by_two:index")
    else:
        return redirect("two_by_two:index")


def details(request):
    if request.method == "POST":
        investment = float(request.POST["input11"])
        interest = float(request.POST["input12"])
        days_inv = float(request.POST["input13"])
        years = 1
        a_list = []

        while days_inv:
            inv_int = investment * (interest / 100)
            temp_inv = investment
            investment += inv_int
            a_list.append([years, '{:f}'.format(temp_inv), '{:f}'.format(inv_int), '{:f}'.format(investment)])
            years += 1
            days_inv -= 1
        return render(request, "two_by_two/details.html", {'a_list': a_list})
    else:
        return redirect('two_by_two:index')
