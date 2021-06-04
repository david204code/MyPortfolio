import React from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  // HTML node reference for react use
  const greetingText = useRef();
  const thankYou = useRef();

  // useEffect instead of componenentDidMount()
  useEffect(() => {
    // console.log(greetingText);
    init(greetingText.current, {
      strings: [
        "I am glad you are here to view my work and want to find out more.",
      ],
      typeSpeed: 90,
      backSpeed: 70,
    });

    init(thankYou.current, {
      strings: ["Thank you for your time!"],
    });
  }, []);

  return (
    <div className="intro">
      <div className="wrapper">
        <div className="heading">
          <h1>Hello and welcome!</h1>
          <h3>
            {/* I am glad you are here to view my work and want to find out more. */}
            <span ref={greetingText}></span>
          </h3>
          <h3>
            {/* Thank you for your time! */}
            <span ref={thankYou}></span>
          </h3>
        </div>
        <div className="text">
          <p>
            My name is David Wu. A FullStack Software Developer based in London,
            UK. From more of a web developement background, constantly I am
            learning and completeing projects. I am opened to new opportunies in
            the field of tech.
          </p>
        </div>
        <div className="ending">
          <h4>
            Contact me at: <span>356davidwu@gmail.com</span>{" "}
          </h4>
          <p>
            Meanwhile please a good look around and see some of my skills on
            display.
          </p>
        </div>
      </div>
    </div>
  );
}
