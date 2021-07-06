import React from 'react';
import image from "../assets/cities/sydney.jpg";
function Sydney() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Sydney, Australia!</h2>
        <div>
            <img src={image} className="cityImage" style={{ width: "65%" }} alt="cityImage" />
        </div>
        <br></br>
        <h3 className="intro">
          Sydney is both a laid-back beachside town and a thriving metropolis that boasts some of the Southern Hemisphere's best surf, landmarks and activities. Whether you're looking to watch a show at the iconic Opera House, take to the waves at Bondi Beach or explore trendy areas like The Rocks and Darling Harbour, Sydney features something for everyone. Even Sydneysiders have an ideal mix of both worlds: Fashion-forward attire and British-style sarcasm combine with a "no worries" attitude and relaxed coastal vibe. It's no wonder this vibrant city down under is a natural choice for first-time Aussie visitors.
        <br></br>
        <br></br>
          In addition to tons of beaches and top-notch restaurants and bars, Australia's most populous city features an array of things to do. Thrill-seekers can participate in heart-pounding activities like a Sydney Harbour Bridge climb, while visitors looking to unwind will appreciate a relaxing day at Coogee or Manly Beach or a peaceful stroll through the Royal Botanic Garden. There's also plenty of seasonal Sydney festivals and events to experience, such as Sculpture by the Sea, the Festival of the Winds and the Night Noodle Markets. Whether you're looking to enjoy a rugby match, hit up the city's museums or lounge along the shore, Sydney's got you covered.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Sydney_Australia/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default Sydney;