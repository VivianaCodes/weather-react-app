import React from "react";
import "./Overview.css";
import Date from "./Date";

export default function Overview(props) {
  let weatherOverview = {
    city: "Naples",
    temperature: 18,
    humidity: 80,
    wind: 2,
    description: "Clear Sky",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  };

  return (
    <div className="card-now justify-content-center align-items-center">
      <div className="card-body-now">
        <h3 className="card-title" id="current-city">
          {weatherOverview.city}
        </h3>
        <div className="current-time">
          <Date date={props.data.date} />
        </div>
        <h4>
          <span id="temp-number">{weatherOverview.temperature}</span>
          <span className="units">
            <a href="/" id="celsius-link">
              °C
            </a>
            |
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
        </h4>
        <span id="sky">{weatherOverview.description}</span>
        <img
          src={weatherOverview.imgUrl}
          alt=""
          id="weather-icon"
          className="float-left"
        />
        <span id="humidity">{weatherOverview.humidity}</span>
        <span id="wind">{weatherOverview.wind}</span>
        <form>
          <button className="btn btn-primary-location" id="search-location">
            Current
          </button>
        </form>
      </div>
    </div>
  );
}
