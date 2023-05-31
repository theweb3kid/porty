import React from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react";

import controlPanel from "../assets/control-panel.png";
import cryptoWallet from "../assets/crypto-wallet.png";
import folder from "../assets/folder.png";
import github from "../assets/github.png";
import browser from "../assets/browser.png";

const DesktopIcons = ({ windowDisplay, setWindowDisplay }) => {
  const onClickFunction = () => {
    if (windowDisplay === "none") {
      setWindowDisplay("");
    } else {
      setWindowDisplay("none");
    }
  };

  const { user, handleLogOut, setShowAuthFlow } = useDynamicContext();

  const buttonClickHandler = () => {
    if (user) {
      handleLogOut();
    } else {
      setShowAuthFlow(true);
    }
  };

  return (
    <div className="desktop-icons">
      <div className="desktop-icon">
        <img
          onClick={onClickFunction}
          className="desktop-icon-img"
          src={controlPanel}
          alt="desktop-icon-recycle-bin"
        />
        <div className="desktop-icon-text">Control Panel</div>
      </div>

      <div className="desktop-icon">
        <img
          onClick={buttonClickHandler}
          className="desktop-icon-img"
          src={cryptoWallet}
          alt="desktop-icon-recycle-bin"
        />
        <div className="desktop-icon-text">Crypto Wallet</div>
      </div>

      <div className="desktop-icon">
        <img
          onClick={onClickFunction}
          className="desktop-icon-img"
          src={folder}
          alt="desktop-icon-recycle-bin"
        />
        <div className="desktop-icon-text">Projects</div>
      </div>

      <div className="desktop-icon">
        <img
          onClick={onClickFunction}
          className="desktop-icon-img"
          src={github}
          alt="desktop-icon-recycle-bin"
        />
        <div className="desktop-icon-text">Github Profile</div>
      </div>

      <div className="desktop-icon">
        <img
          onClick={onClickFunction}
          className="desktop-icon-img"
          src={browser}
          alt="desktop-icon-recycle-bin"
        />
        <div className="desktop-icon-text">Browser</div>
      </div>
    </div>
  );
};

export default DesktopIcons;
