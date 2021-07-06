import React from 'react';
import image from "../assets/cities/barcelona.jpg";

function Barcelona() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Barcelona, Spain!</h2>
        <div>
          <img src={image} className="cityImage" style={{ width: "65%" }} alt="cityImage" />
        </div>
        <br></br>
        <h3 className="intro">
          Barcelona contains both the authentically historic and the wildly bizarre. From the scenic trails of the colorful Park Güell to the romantic narrow alleys of Barri Gòtic; from the beachside nightclubs to the city's dozens of sacred churches and architectural marvels, this city by the sea seems to attract all types: the adventurer, the couple, the partier, the culture lover - and more - with an almost overwhelming variety of things to do. You could stay for a few days, but chances are you'll need a whole week to explore.
        <br></br>
        <br></br>
          In Barcelona, even the beach is bustling, but it's really the cosmopolitan city that gets all the attention. Much of the activity revolves around Las Ramblas, a series of narrow streets and alleys packed with restaurants, nightclubs and a vibrant pedestrian market. But you should also take a tour of Antoni Gaudí's masterpieces; Gaudí is responsible for sites like Casa Milà, Casa Batlló and La Sagrada Familia. You also shouldn't miss out on the eclectic shopping scene and the region's exquisite food and wine. You see why we suggest a week vacation? To get a lay of the land, consider signing up for one of the city's best guided tours.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Barcelona_Spain/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default Barcelona;