import React from "react";
import "./TechStackList.scss";

export default function TechStackList({ title, setSelected, id, active }) {
  return (
    <li
      className={active ? "techStackList active" : "techStackList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
