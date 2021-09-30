from django.shortcuts import render


def index(request,path=''):
    return render(request, 'front_end/index.html')


