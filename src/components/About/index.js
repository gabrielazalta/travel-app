import React from 'react';
// import {Link } from "react-router-dom";

function About() {

  return (
      <div className="home">
        <h2 className="welcome">Welcome to your Next Destination!</h2>
        <h3 className="intro">Don't know where to travel next? Not to worry, with Next Destination you will get different travel destination recommendations based on your own preferences. Complete our quiz and pack your bags, because your Next Destination trip begins here!</h3>
        {/* <Link to="/quiz"> */}
        <button className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" data-testid="button" type="submit" >start quiz!
        </button>
        {/* </Link> */}
      </div>
  )
}

export default About;