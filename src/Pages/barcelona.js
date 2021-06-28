import React from 'react';

function Barcelona() {

  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Barcelona!</h2>
        <h3 className="intro">About Barcelona</h3>
        <button className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" data-testid="button" type="submit" >re-do quiz!
        </button>
      </div>
  )
}

export default Barcelona;