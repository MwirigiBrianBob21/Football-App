import React, { useEffect, useState } from 'react'
import axios from "axios";
const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v4/leagues',
    headers: {
      'X-RapidAPI-Key': 'ea6bf7b95bmshc2107c4860f5799p1ce596jsn1f6d79c099ec',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
const RapidApi = () => {

const [data, setData] = useState();




useEffect(() => {
    axios.request(options).then(function (response) {
        console.log(response.data.response);
        setData(response.data.response)
    }).catch(function (error) {
        console.error(error);
    
        
    });
}, []);

return (
    <div>
        {/* {data.map((data) => ( */}
            <div > <h1>league name</h1></div>
        {/* ))} */}
    </div>
  )
}

export default RapidApi