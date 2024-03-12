from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def index(request):
    return render(request, 'Ai_backend/index.html')


def dashboard(request):
    return JsonResponse({"dashboard": "dashboard"})