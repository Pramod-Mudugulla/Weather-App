# from django.shortcuts import render

import requests
from django.http import JsonResponse
from django.conf import settings

from rest_framework import viewsets
from .models import WeatherData
from .serializers import WeatherDataSerializer

API_KEY = "YOUR_API_KEY"  # Replace with your actual API key

def get_weather(request):
    location = request.GET.get('location', '')
    if not location:
        return JsonResponse({'error': 'No location provided'}, status=400)

    api_url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}&units=metric"
    response = requests.get(api_url)

    if response.status_code == 200:
        return JsonResponse(response.json(), safe=False)
    else:
        return JsonResponse({'error': 'Invalid location'}, status=404)


class WeatherDataViewSet(viewsets.ModelViewSet):
    queryset = WeatherData.objects.all()
    serializer_class = WeatherDataSerializer
