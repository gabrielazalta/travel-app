import React from 'react';

function Tahiti() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Tahiti, French Polynesia!</h2>
        <h3 className="intro">
          Miles of shoreline, dozens of resorts, French cuisine to die for - Tahiti has all the makings of a honeymoon destination. But beach bums often pass over Tahiti's sands in favor of Bora Bora's ivory shores. Despite its idyllic reputation and accessibility, Tahiti is more of an off-the-beaten-path stop than a romantic getaway. However, that doesn't mean Tahiti should be ignored.
        <br></br>
        <br></br>
          Leafy forests sit beside sandy shores, French crêpes are served alongside Tahitian poisson cru, raw fish. If there ever was a place that embodies the beautiful duality of the French Polynesian archipelago, it's Tahiti. Here, the quirky, often chaotic atmosphere of the island's capital, Papeete, rubs elbows with uncorrupted natural beauty. In fact, Tahiti - the largest of French Polynesia's 118 islands - is often referred to as two separate islands despite them being joined by a tiny land bridge. Tahiti Nui is the larger, northern section where Papeete can be found. Tahiti Iti, the smaller half, is less accessible, although many visitors make the trek here for a taste of seclusion. Just note that spending a week on either part of Tahiti will cost you quite a chunk of change. But travelers agree that the warm waters, the lush jungles and the luxurious resorts are worth the splurge.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Tahiti_French_Polynesia/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default Tahiti;