import React from "react";
import { Avatar } from "@material-ui/core";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
    
      <div className="profile_picture">
        <Avatar src={props.avatar} className="image" />
      </div>
      <div className="user_detail">
      <h1 className>Personal_id: {props.id}</h1>
        <h3 className="name">Name: {props.name}</h3>
       
        <h3>Email: {props.email}</h3>
      </div>
    </div>
  );
}

export default Card;
