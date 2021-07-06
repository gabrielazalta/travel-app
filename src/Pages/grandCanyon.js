import React from 'react';
import image from "../assets/cities/canyon.jpg";

function GrandCanyon() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">The Grand Canyon!</h2>
        <div>
            <img src={image} className="cityImage" style={{ width: "65%" }} alt="cityImage" />
        </div>
        <br></br>
        <h3 className="intro">
          "Grand" doesn't begin to do this canyon justice. Measuring approximately 277 river miles in length, up to 18 miles in width and a mile deep, this massive chasm in northern Arizona is truly a natural wonder. For six million years, the Grand Canyon has expanded with the help of the mighty Colorado River, and for centuries, people from all over the globe have traveled to gaze out over its red and orange grandeur. Managed by the National Park Service and officially designated as a UNESCO World Heritage site, the Grand Canyon leaves its approximately 6 million visitors per year awestruck.
        <br></br>
        <br></br>
          But if you're seeking a secluded escape to Mother Nature, you should be prepared: The Grand Canyon can be very crowded. The South Rim – home to the Grand Canyon Village and the well-worn Bright Angel Trail – is particularly popular for sightseers and hikers. It is on this side that you'll find the most amenities. For a break from the crowds, head to the North Rim. This is the place for backwoods camping and hardcore hiking. And for an unforgettable view of the canyon, consider signing up for a helicopter tour.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Grand_Canyon_AZ/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default GrandCanyon;