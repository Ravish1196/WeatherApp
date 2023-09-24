import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url =
        "https://api.weatherapi.com/v1/current.json?key=4ec2f6a8627a4a62a69183257232309 &q="+search+"&aqi=no";
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.current);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No data found</p>
        ) : (
          <div className="info">
            <h2 className="location">{search}</h2>
            <h1 className="temp">{city.temp_c}</h1>
            <h5 className="tempmin_max">
              Min: 5.25 degree cel | Max: 5.25 degree
            </h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;

