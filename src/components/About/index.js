import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function About() {

  return (
    <section>
      <div className="home">
        <h2 className="welcome">Welcome to your Next Destination!</h2>
        <h4 className="intro">Don't know where to travel next? Not to worry, with Next Destination you will get different travel destination recommendations based on your own preferences. Complete our quiz and pack your bags, because your Next Destination trip begins here!</h4>
        <Link to="/quiz">
          <Button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button">
              start quiz!
          </Button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="weblinkBody">
        <div className="row m-4 p-5 col-10 row shadow text-center webLinks">
          <h2 className="introLinks">Check out these travel websites!</h2>
          <div className="text-center col-4 icon">
              <a to="route" target="_blank" rel="noopener noreferrer" href="https://www.studentuniverse.com/" className=" fa1 fa fa-plane"> </a>
              <p>student universe</p>
          </div>
          <div className="text-center col-4 icon">
              <a to="route" target="_blank" rel="noopener noreferrer" href="https://www.kayak.com/flights" className="fa2 fa fa-plane"> </a>
              <p>kayak</p>
          </div>
          <div className="text-center col-4 icon">
              <a to="route" target="_blank" rel="noopener noreferrer" href="https://www.expedia.com/" className="fa3 fa fa-plane"> </a>
              <p>expedia</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;