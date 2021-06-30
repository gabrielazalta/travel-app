import React from 'react';

function Paris() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Paris, France!</h2>
        <h3 className="intro">
          The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture, further enhanced by cascading trees and glowing streetlamps. Peppering the Seine's cobbled walks and graceful bridges are impossibly chic Parisians, probably on their way to the market, cafe or cinema.
        <br></br>
        <br></br>
          Containing world-class museums, fashion, cuisine and an atmosphere all its own, Paris is also a city of "many splendors," as Ernest Hemingway recalled in his memoir, "A Moveable Feast." Visit the beloved Musée d'Orsay, shop the biggest designers on the Champs Élysées or hit the boutiques in Le Marais, take in the view atop the Eiffel Tower, or even plan a day trip to Versailles Palace. But don't miss out on the simple pleasure of meandering the marvelous arrondissements districts, or snacking on street crepes either.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Paris_France/">US News</a></h4>
          <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
          </button>
      </div>
  )
}

export default Paris;