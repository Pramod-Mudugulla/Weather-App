from django.urls import path, include
from .views import get_weather, WeatherDataViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'weatherdata', WeatherDataViewSet)

urlpatterns = [
    path('weather/', get_weather, name='get_weather'),
    path('', include(router.urls))
]
