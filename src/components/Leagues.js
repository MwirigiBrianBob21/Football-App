import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import {FallingLines} from "react-loader-spinner"

const Leagues = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      // url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      url: "https://api.football-data.org/v2/competitions",

      
      headers: { "X-Auth-Token": "9225ece0729c45aeae5d345f68930109" },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.competitions);
        setData(response.data.competitions);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="leagues-container">
      {loading ? (
          <FallingLines
          color="#e78709"
          alignItem= "center"
          width="100%"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      ) : (
        data.map((item) => (
          // console.log(item.name)
          <div key={item.name} className="leagues-div">
            <img
              src={item.area.ensignUrl}
              alt="#"
              style={{ borderRadius: "20%", width: "20px" }}
            />
            <h4>{item.name}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default Leagues;
