import React, { useState } from "react";
import { motion } from "framer-motion";

import minimize from "../assets/minimize.png";
import maximize from "../assets/maximize.png";
import close from "../assets/close.png";

const Window = ({ constraintsRef, windowDisplay, setWindowDisplay }) => {
  const [windowFullScreen, setWindowFullScreen] = useState(false);
  const [browserInput, setBrowserInput] = useState("https://example.com");
  const fullscreen = () => {
    const window = document.getElementsByClassName("window")[0];
    if (!windowFullScreen) {
      window.style.width = "100vw";
      window.style.height = "calc(100% - 50px)";
      window.style.top = "0";
      window.style.left = "0";
      window.style.right = "0";
      setWindowFullScreen(!windowFullScreen);
    } else {
      window.style.width = "800px";
      window.style.height = "550px";
      setWindowFullScreen(!windowFullScreen);
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      style={{ display: windowDisplay }}
      className="window"
    >
      <div className="window-header">
      <div className="window-name">Browser</div>
        <img
          className="window-top-icon"
          onClick={() => {
            if (windowDisplay === "none") {
              setWindowDisplay("");
            } else {
              setWindowDisplay("none");
            }
          }}
          src={minimize}
          alt="window-top-icon"
        />
        <img
          className="window-top-icon"
          onClick={fullscreen}
          src={maximize}
          alt="window-top-icon"
        />
        <img
          className="window-top-icon"
          onClick={() => {
            if (windowDisplay === "none") {
              setWindowDisplay("");
            } else {
              setWindowDisplay("none");
            }
          }}
          src={close}
          alt="window-top-icon"
        />
      </div>
      <div className="window-header-2">
        <input
          type="search"
          placeHolder="Input Complete Link (https://example.com)"
          className="browser-input"
          onChange={e => {
            setBrowserInput(e.target.value);
          }}
        />
        <a href={browserInput} target="browser">
          <button className="browser-button">Go</button>
        </a>
      </div>

      <div className="browser-div">
        <iframe
          title="Browser"
          className="browser-iframe"
          name="browser"
          src="https://example.com"
        >
          <p>Your browser does not support iFrames</p>
        </iframe>
      </div>
    </motion.div>
  );
};

export default Window;
