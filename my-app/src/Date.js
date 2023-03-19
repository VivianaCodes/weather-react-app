import React from "react";

export default function Date(props) {
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
  let day = days[props.getDay()];
  let month = months[props.getMonth()];
  let date = props.getDate();
  let hour = props.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="current-date">
      <p>
        {day}, {month} {date} {hour}:{minute};
      </p>
    </div>
  );
}
