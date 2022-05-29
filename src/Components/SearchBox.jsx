import React from "react";
import "../style.css";

export default function SearchBox(props) {
  return (
    <input
      className={props.className}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
}
