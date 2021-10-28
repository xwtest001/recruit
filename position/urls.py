from django.urls import path

from position import views

urlpatterns = [
    path('', views.index, name="index"),
    path('detail/', views.detail, name="detail"),
]