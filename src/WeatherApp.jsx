import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState ({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    
  return (
    <div style={{ textAlign: "center" }}>
    <h1>Weather checking Widget</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
      <br /><hr />
      <p>Weather app by Sanam yadav</p>
    </div>
  );
}
