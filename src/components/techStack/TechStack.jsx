import React from "react";
import { useState, useEffect } from "react";
import "./TechStack.scss";
import TechStackList from "../techStackList/TechStackList";
import { frontEnd, backEnd, others } from "./data";

export default function TechStack() {
  // for the purpose of the active option on the menu
  const [selected, setSelected] = useState("all");

  // use the imported data
  const [data, setData] = useState([]);

  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "front-end",
      title: "FrontEnd",
    },
    {
      id: "back-end",
      title: "BackEnd",
    },
    {
      id: "others",
      title: "Others",
    },
  ];

  useEffect(() => {
    // merge all the objects of the data
    const everyThing = [...frontEnd, ...backEnd, ...others];

    switch (selected) {
      case "front-end":
        setData(frontEnd);
        break;
      case "back-end":
        setData(backEnd);
        break;
      case "others":
        setData(others);
        break;
      case "all":
        setData(everyThing);
        break;
      default:
        setData(everyThing);
    }
  }, [selected]);

  return (
    <div className="techStack" id="techStack">
      <h1>My Tech Stack ... train in Full Stack</h1>
      <ul>
        {list.map((item) => (
          <TechStackList
            key={item.id}
            title={item.title}
            setSelected={setSelected}
            id={item.id}
            active={selected === item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <d.image size={130} color={d.color}/>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
