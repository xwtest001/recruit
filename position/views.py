from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):

    # return HttpResponse("ok")
    return render(request, 'index.html', context={"list": [1,2,3,4]})
