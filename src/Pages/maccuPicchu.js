import React from 'react';
import image from "../assets/cities/maccu.jpg";
function MaccuPicchu() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Maccu Picchu!</h2>
        <div>
            <img src={image} className="cityImage" style={{ width: "65%" }} alt="cityImage" />
        </div>
        <br></br>
        <h3 className="intro">
          A visit to the "Lost City of the Incas" is not for the faint of heart, but it is often described as a life-changing experience (once you acclimate to the altitude). While the four-day hike along the Inca Trail is challenging, arriving at the Peruvian site during sunrise is well worth the effort, according to past travelers. If you're not up for the trek, you can also hop on a PeruRail train to the mountain base for an easier route to the top.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/rankings/worlds-best-vacations/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default MaccuPicchu;