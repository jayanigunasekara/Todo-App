import React from 'react'

function Expo() {
    const d = new Date();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = weekday[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    const time = d.toLocaleTimeString();

  return (
    <>
    <div className = "date-time">
        <h2>{day}</h2>
        <h3>{date} {month} {year}</h3>
        <h4>{time}</h4>
    </div>
    </>
  );
}

export default Expo
