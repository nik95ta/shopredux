import React from "react";

class ShowDate extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    let color;
    if (hours < 12) {
      timeOfDay = "morning";
      color = "gold";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
      color = "hotPink";
    } else {
      timeOfDay = "night";
      color = "#647fda";
    }

    return (
      <>
        <h1 style={{ color: color }}>Good {timeOfDay} to you sweety!</h1>
      </>
    );
  }
}
export default ShowDate;
