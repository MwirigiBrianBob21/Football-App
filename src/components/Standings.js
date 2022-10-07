import React, { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap";
import { FallingLines } from "react-loader-spinner";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import FallingLines from "react-loader-spinner"

import axios from "axios";

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedLeagueCode, setSelectedLeagueCode] = useState("PL");

  useEffect(() => {
    setLoading(true);

    const options = {
      method: "GET",
      url: `https://api.football-data.org/v2/competitions/${selectedLeagueCode}/standings?season=${selectedYear}`,

      headers: { "X-Auth-Token": "9225ece0729c45aeae5d345f68930109" },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.standings[0].table);
        setData(response.data.standings[0].table);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeagueCode]);

  return (
    <div className="standings-container">
      <div className="select-container">
        <select
          name="select-competition"
          id="select-league"
          defaultValue={selectedLeagueCode}
          onChange={(e) => setSelectedLeagueCode(e.target.value)}
        >
          <option value="PL" name="PL">
            English Premier League
          </option>

          <option value="FL1" name="FL1">
            Ligue 1
          </option>
          <option value="BL1" name="BL1">
            Bundesliga
          </option>
          <option value="SA" name="SA">
            Serie A
          </option>
          <option value="PPL" name="PPL">
            Primeira Liga
          </option>
          {/* <option value="CL">UEFA Champions League</option> */}
        </select>

        <select
          name="select-year"
          id="select-year"
          defaultValue={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2011"> 2011</option>
          <option value="2012"> 2012</option>
          <option value="2013"> 2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div className="standings-results">
        {loading ? (
          // <Spinner animation="grow" variant="success" />
          <FallingLines
            color="#e78709"
            width="100%"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        ) : (
          data.map((item) => (
            <div key={item.id} className="standing-info-div">
              {/* {console.log(item)} */}

              {/* <h1>
                <span>
                  {`${index + 1}.`}
                  <img
                    src={item.team.crestUrl}
                    alt="#"
                    style={{ width: "30px" }}
                  />
                </span>
                {item.team.name}
                <span style={{ color: "green", marginLeft: "40px" }}>
                  {item.points}
                </span>
              </h1> */}

              <table>
                {/* <tr>
                  <th>No.</th>
                  <th>Team logo</th>
                  <th>Team Name</th>
                  <th>Points</th>

                </tr> */}

                <tbody>
                  <tr>
                    <td>{item.position}. </td>
                    <td>
                      <img
                        src={item.team.crestUrl}
                        alt="#"
                        style={{ width: "30px" }}
                      />
                    </td>
                    <td>{item.team.name}</td>
                    <td>
                      <span style={{ color: "green", marginLeft: "40px" }}>
                        {item.points}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Standings;
