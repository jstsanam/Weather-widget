import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error,setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "d70e94cded9028b9dfb6fec7d44ce778";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
  
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
    
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo();
      updateInfo(info);
    } catch(err) {
      setError(true)
    }
  };

  return (
    <div className="search-box">
      <h2>Search for weather :</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>We could not find the mentioned city :(</p>}
      </form>
    </div>
  );
}
