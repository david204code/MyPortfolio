import React from "react";
import "./TechStack.scss";
import TechStackList from "../techStackList/TechStackList";

export default function TechStack() {
  return (
    <div className="techStack" id="techStack">
      <h1>My Tech Stack ... train in Full Stack</h1>
      <ul>
        <TechStackList />
      </ul>
    </div>
  );
}
