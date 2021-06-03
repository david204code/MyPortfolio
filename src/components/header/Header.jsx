import React from "react";
import "./Header.scss";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

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

        <IconContext.Provider value={{ size: "2em" }}>
          <div className="right">
            <div className="rightWrapper">
              <span>
                <a
                  href="https://github.com/david204code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FaGithub size="2em" title="Github icon" /> */}
                  <FaGithub title="Github icon" />
                </a>
              </span>
              {/* <span>GitHub</span> */}
            </div>
            <div className="rightWrapper">
              <a
                href="https://www.linkedin.com/in/davidwu356/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <SiLinkedin size="2em" color="#0050DA" title="Linkedin icon" /> */}
                <SiLinkedin color="#0050DA" title="Linkedin icon" />
              </a>
              {/* <span>LinkedIn</span> */}
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
