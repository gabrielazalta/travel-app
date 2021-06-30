import React from 'react';

function Rome() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Rome, Italy!</h2>
        <h3 className="intro">
          Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus - twin brothers who were nursed by a she-wolf and fathered by a war god - reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome. Whether it's the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on Piazza Navona or a piled-high plate of pasta at a trattoria, Roma is sure to enchant.
        <br></br>
        <br></br>
          Italy's capital city, Rome is also known for a history that dates back to the eras of Octavian, Julius Caesar and Hadrian, among others. Left behind are structures like the Pantheon, the Roman Forum and dozens of churches, among other historic gems. Art enthusiasts will relish the trove of art housed at the Vatican Museums, and foodies will enjoy the splendid Italian fare, not to mention the gelato. And though its momentous past is the focus for many vacationers, Rome is also a fast-paced, modern and relevant city, with gleaming designer storefronts, sleek hotels and cutting-edge restaurants.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Rome_Italy/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default Rome;