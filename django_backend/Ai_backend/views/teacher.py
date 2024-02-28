import json
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse


def register(request):
    if request.method == 'POST':
        return JsonResponse({'Registered': 'user Registered'})
    else:
        return JsonResponse({'NotRegistered': 'Request Not Post'})
    

def login_view(request):
    if request.method == 'POST':
        return JsonResponse({'LogedIn': 'user Loged in'})
    else:
        return JsonResponse({'LogIn Failed': 'Request is not POST'})