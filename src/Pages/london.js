import React from 'react';
import image from "../assets/cities/london.jpg";
function London() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">London!</h2>
        <div>
            <img src={image} className="cityImage" style={{ width: "65%" }} alt="cityImage" />
        </div>
        <br></br>
        <h3 className="intro">
          The English writer Samuel Johnson famously said, "You find no man, at all intellectual, who is willing to leave London. No, Sir, when a man is tired of London, he is tired of life; for there is in London all that life can afford." More than two centuries have passed since Johnson's era, but his words still ring true. Life in London is nothing short of invigorating, and travelers find that one visit isn't enough to experience everything this two-millennia-old city has to offer.
        <br></br>
        <br></br>
          Here, the antiquated clasps hands with the contemporary. You'll find the historic Tower of London and the avant-garde Tate Modern both considered must-sees. Shakespeare's sonnets are still being uttered by actors who don modern garb. Londoners most certainly still respect the royals, but they also jam to the likes of Arctic Monkeys and Adele. And while they still praise the power of tea, they now make room for some Starbucks here and there, and pressed juice too. A current leader in everything from politics and banking to fashion and music, London's culture compass is always attuned to what's next. Discover it all on one of London's best tours.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/London_England/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default London;