import React, { useState } from "react";
import keys from "../../keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
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

export default App;



// import React, {useState} from "react";
// import keys from "../../keys";

// function Weather() {
 
//   const api = {
//     key: keys.API_KEY,
//     base: keys.BASE_URL,
//   };
  
//   const dateBuild = (d) => {
//     let date = String(new window.Date());
//     date = date.slice(3, 15);
//     return date;
//   };

//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});
//   const search = (e) => {
//     if (e.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setQuery("");
//           setWeather(result);
//           console.log(result);
//         });
//     }
//   };


//   return (
//     <div  
//       className={
//         typeof weather.main != "undefined"
//           ? weather.main.temp > 18
//             ? "App hot"
//             : "App cold"
//           : "App"
//     }>
//       <main className="my-5 weatherBody" >
//         <h1 id="header" className="navbar-brand mb-0 h1 w-100 text-center">check the weather!</h1>
//         <div className="container m-0">
//             <div className="row">
//                 <div id= "searchContainer" className="col-4 bg-light p-3">

//                     <div className="row">
//                     <h4 className="p-2 search">search for a city:</h4>
//                         <div className="input-group mb-3 p-3">
//                         <input
//                           type="text"
//                           placeholder="Search..."
//                           className="search-bar form-container"
//                           onChange={(e) => setQuery(e.target.value)}
//                           value={query}
//                           onKeyPress={search}
//                         />
//                         <div className="input-group-append">
//                             <button id="submit" type="button" className="searchBtn btn btn-primary">
//                                 search
//                             </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                         <div className="col" id="searchBlock"></div>
//                     </div>
//                 </div>

//                 <div className="col-8">
//                     <div className="row mr-0">

//                         <div className="col-12 border border-dark rounded m-3 p-4 infoWeather" >
//                             <div className="row">
//                                 <div className="col-12">
//                                     <h1 id="city" className="city-name p-1">.</h1>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <h5 id="temperature" className="temp font-weight-normal p-1">temperature: </h5>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <h5 id="humidity" className="humidity font-weight-normal p-1">humidity: </h5>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <h5 id="wind" className="wind font-weight-normal p-1">wind speed: </h5>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <h5 className="uv font-weight-normal p-1">uv index: <strong id="uvIndex"></strong></h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row forecast">
//                         <div className="col-12">
//                             <h4>5-day forecast:</h4>
//                         </div>
//                     </div>
//                     <div id="fiveDay" className="row">


//                     </div>
//                 </div>
                
//             </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Weather;
