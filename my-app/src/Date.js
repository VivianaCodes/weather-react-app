import React, { useState } from "react";

export default function Date() {
  const [loaded, setLoaded] = useState("");
  setLoaded(true);
  let now = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = now.date.getDay();
  let month = now.date.getMonth();
  let currentDate = now.date.getDate();
  let hour = now.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (loaded) {
    return (
      <div className="current-date">
        <h5>
          ({days[day]}, {months[month]} {currentDate} {hour}:{minute});
        </h5>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}
