/* eslint-disable react/prop-types */
import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://www.shutterstock.com/image-vector/girl-kid-sitting-under-tree-260nw-1762899719.jpg";
  const COLD_URL =
    "https://img.lovepik.com/original_origin_pic/18/11/08/4c29d58e489f87f57684d3f328cfeb33.jpg_wh860.jpg";
  const RAIN_URL =
    "https://img.freepik.com/free-vector/nature-raining-scene_1308-22369.jpg";
  return (
    <div className="info-box">
      <div className="card-content">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            {info.humidity > 80 ?
                <ThunderstormIcon />
               : info.temp > 15 ? 
                <WbSunnyIcon />
               : <AcUnitIcon />
            }
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp} &deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Minimum Temp = {info.tempMin} &deg;C</p>
              <p>Maximum Temp = {info.tempMax} &deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike} &deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
