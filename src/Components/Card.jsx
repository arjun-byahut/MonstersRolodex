import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "../App";

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      {/* Link to={`/CardDetails/${props.monster.id}`} component={CardDetails}> */}
      <h2> {props.monster.name}</h2>
      {/* </Link> */}
      <p>{props.monster.email}</p>
    </div>
  );
}
