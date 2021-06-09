import React from "react";
import "./TechStackList.scss";

export default function TechStackList({ title, setSelected, id, active }) {
  return (
    <li className="techStackList" onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}
