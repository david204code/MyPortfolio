import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            &#60; David Wu &#62;
          </a>
        </div>
        <div className="middle">
          <div className="middleWrapper">
            <a href="#mywork">My work</a>
          </div>
        </div>
        <div className="right">
          <div className="rightWrapper">
            <span>GitHub</span>
          </div>
          <div className="rightWrapper">
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
