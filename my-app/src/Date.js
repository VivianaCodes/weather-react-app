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
  let day = props.date.getDay();
  let month = props.date.getMonth();
  let currentDate = props.date.getDate();
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="current-date">
      <p>
        ({days[day]}, {months[month]} {currentDate} {hour}:{minute});
      </p>
    </div>
  );
}
