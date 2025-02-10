import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "3a2cbd603181caacbea1e436668d5bbd"; // Your API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}${city}&appid=${API_KEY}`);

      // Check if the API response is valid
      if (response.data.cod !== 200) {
        throw new Error(response.data.message || "City not found");
      }

      setWeather(response.data);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <SearchBar
        city={city}
        onCityChange={setCity}
        onSearch={fetchWeather}
        loading={loading}
      />

      {error && <NotFound message={error} />}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default App;
