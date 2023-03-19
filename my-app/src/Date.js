import React from "react";

export default function Date() {
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
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0{hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0{minute}`;
  }
  return (
    <p>
      {day}, {month} {date} {hour}:{minute};
    </p>
  );
}
