from django.urls import path

from .views import views, teacher, student

urlpatterns = [
    path('', views.index, name='index'),
    path('register', teacher.register, name='register'),
    path('login', teacher.login_view, name='login' ),
    path('dashboard', views.dashboard, name='dashboard'),
]