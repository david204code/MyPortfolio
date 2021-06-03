import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro">
      <div className="wrapper">
        <div className="heading">
          <h1>Hello and welcome!</h1>
          <h3>
            I am glad you are here to view my work and want to find out more.
          </h3>
          <h3>Thank you for your time.</h3>
        </div>
        <div className="text">
          <p>
            My name is David Wu. A FullStack Software Developer based in London,
            UK. From more of a web developement background, constantly I am
            learning and completeing projects. I am opened to new opportunies in
            the field tech.
          </p>
        </div>
        <div className="ending">
          <h4>Contact me at: 356davidwu@gmail.com</h4>
          <p>
            Meanwhile please a good look around and see some of the skills on
            display.
          </p>
        </div>
      </div>
    </div>
  );
}
