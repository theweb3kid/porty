import React, { useEffect } from "react";

import home from "../assets/home.png";
import explorer from "../assets/explorer.png";

const Taskbar = ({
  windowDisplay,
  setWindowDisplay,
  menuDisplay,
  setMenuDisplay
}) => {
  const setDay = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    document.getElementsByClassName("day")[0].innerHTML =
      dd + "-" + mm + "-" + yyyy;
  };

  function setTime() {
    const d = new Date();
    document.getElementsByClassName(
      "time"
    )[0].innerHTML = d.toLocaleTimeString();
  }

  useEffect(() => {
    setInterval(setTime, 1000);
    setInterval(setDay, 1000);
  }, []);

  return (
    <div className="taskbar">
      <img
        onClick={() => {
          if (menuDisplay === "none") {
            setMenuDisplay("");
          } else {
            setMenuDisplay("none");
          }
        }}
        className="taskbar-icon"
        src={home}
        alt="taskbar-icon-menu"
      />
      <img
        onClick={() => {
          if (windowDisplay === "none") {
            setWindowDisplay("");
          } else {
            setWindowDisplay("none");
          }
        }}
        className="taskbar-icon"
        src={explorer}
        alt="taskbar-icon-explorer"
      />
      <div className="timer">
        <div className="time" />
        <div className="day" />
      </div>
    </div>
  );
};

export default Taskbar;
