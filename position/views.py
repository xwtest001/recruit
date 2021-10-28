from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):

    print("结束")

    return render(request, 'index.html', context={"list": [1, 2, 3, 4]})


def detail(request):

    return render(request, 'detail.html')
