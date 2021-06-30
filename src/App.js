import React from "react";
import About from './components/About';
import Quiz from './components/Quiz';
import Weather from './components/Weather';
import Footer from './components/Footer';
import planeIcon from "./assets/icon/icon.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <h1 className="header-title px-2 mx-2">
            <img src={planeIcon} className="my-2 planeIcon" style={{ width: "7%" }} alt="cover" />
            Next Destination
          </h1>
          <div className="collapse navbar-collapse justify-content-end p-2 mx-4" id="navbarNavAltMarkup">
            <div className="navbar-nav none">
              <ul className="nav-items justify-content-end p-2 mx-4">
                <li>
                  <NavLink className="nav-item" to="/">home</NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to="/quiz">quiz</NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to="/weather">weather</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
};

