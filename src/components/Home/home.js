import React, { useState } from "react";
import Weathercard from "../Weather Card/weathercard";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

let Home=()=> {
  const [cityName, setcityName] = useState("");
  const [Data, setData] = useState([]);

  let getWeather=async (e)=>{
    e.preventDefault();
    console.log("I will fetch weather Data ");
    try{
      let response=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=1d2eb597e3b0049208ac6ce0c9f32e8c&units=metric`);
      console.log(response);
      setData(response.data.list);
    }
    catch(error){
      console.log("Error : ",error);
    }
  }
  return (
    <div>
      <h1>Weather App Home</h1>
      <Form onSubmit={getWeather}>
        <FloatingLabel
          controlId="floatingInput"
          label="City name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => {
              setcityName(e.target.value);
            }}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Get Weather
        </Button>

        {
          Data.map((Forecast,index)=>{
            return(
              <div  key={index}>
              <Weathercard
              key={index}
              date={Forecast.dt_txt}
              temprature={Forecast.main.temp}
              max_temp={Forecast.main.temp_max}
              min_temp={Forecast.main.temp_min}
              />
              </div>
            )
          })
        }
      </Form>
    </div>
  );
}

export default Home;
