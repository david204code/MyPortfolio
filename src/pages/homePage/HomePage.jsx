import React from "react";
import "./HomePage.scss";
import Intro from "../../components/intro/Intro";

export default function HomePage() {
  return (
    <div className="homepage">
      <Intro />
      <p>top</p>
      <p>top -intro -portfolio -work ...</p>
      <p>sec -intro -portfolio -work ...</p>
      <p>-intro -portfolio -work ...</p>
      <p>-portfolio -work ...</p>
      <p>-work ...</p>
    </div>
  );
}
