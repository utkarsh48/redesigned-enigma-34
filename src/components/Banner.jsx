import React from "react";

export default function Banner(props){
  const {label, content, color} = props;

  let colorClass;
  switch (color) {
    case "green":
      colorClass = "green";
      break;
    case "red":
      colorClass = "red";
      break;
    default:
      colorClass = "";
  }

  return (<div className="banner-container b-shadow-01">
    <div className={`banner-content ${colorClass}`}>{content}</div>
    <div className="banner-label">{label}</div>
  </div>);
}