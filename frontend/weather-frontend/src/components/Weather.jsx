import React, { useState } from 'react';
import axios from 'axios';
import styles from './Weather.module.css'; 
import { WiDaySunny, WiCloud, WiRain } from 'react-icons/wi';



const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/weather/', {
                params: { location }
            });
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('Invalid location. Please try again.');
            setWeatherData(null);
        }
    };

    return (
        <div className={styles.everything}>
            <div className={styles.container}>
                <h2>Weather App</h2>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button onClick={fetchWeather}>Get Weather</button>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                {weatherData && (
                    <div className={styles.weatherInfo}>
                        <h3>Weather in {weatherData.name}</h3>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                        <p>Main: {weatherData.weather[0].main}</p>

                        {weatherData.weather[0].main === "Clear" && <WiDaySunny size={50} />}
                        {weatherData.weather[0].main === "Clouds" && <WiCloud size={50} />}
                        {weatherData.weather[0].main === "Rain" && <WiRain size={50} />}
                    </div>
                )}
            </div>
        </div>        
    );
};

export default Weather;
