import React, { useState } from "react";
import keys from "../../keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Weather() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div>
      <main className="weatherBody">
      <h1 id="header" className="navbar-brand mb-0 h1 w-100 text-center">check the weather!</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            className="input"
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="weatherStats">
              <div className="weatherStats">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weatherStats">
              <div className="temp weatherStats">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather weatherStats">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Weather;

