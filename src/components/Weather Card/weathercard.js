import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./weather.css";
import moment from "moment";

let Weathercard = ({ key, date, temprature, max_temp, min_temp }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} border="success">
        <Card.Body>
          <Card.Title>
            <h1>{date}</h1>
          </Card.Title>
          <Card.Title>{moment().format("dddd")}</Card.Title>
          <Card.Text>
            <h1> {temprature}°C </h1>
          </Card.Text>
          <Card.Title>
            {" "}
            {min_temp}°C - {max_temp}°C
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weathercard;
