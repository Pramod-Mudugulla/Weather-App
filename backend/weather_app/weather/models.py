from django.db import models

class WeatherData(models.Model):
    location = models.CharField(max_length=255)
    date = models.DateField()
    temperature = models.FloatField()
    humidity = models.FloatField()
    wind_speed = models.FloatField()
