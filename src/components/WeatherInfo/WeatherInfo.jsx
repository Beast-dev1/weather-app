import React from "react";
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";
import "./WeatherInfo.css";

const WeatherInfo = ({ weather }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return <WiDaySunny />;
      case "Rain":
        return <WiRain />;
      case "Clouds":
        return <WiCloudy />;
      default:
        return <WiDaySunny />;
    }
  };

  return (
    <div className="weather-info">
      <h2>
        {weather?.name}, {weather?.sys?.country}
      </h2>
      <div className="weather-icon">
        {getWeatherIcon(weather?.weather?.[0]?.main)}
      </div>
      <p>Temperature: {Math.round(weather?.main?.temp)}°C</p>
      <p>Humidity: {weather?.main?.humidity}%</p>
      <p>Wind Speed: {weather?.wind?.speed} m/s</p>
      <p>Condition: {weather?.weather?.[0]?.description}</p>
    </div>
  );
};

export default WeatherInfo;
