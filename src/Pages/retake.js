import React from 'react';

function Retake() {

  return (
      <div className="home">
        <h2 className="welcome">Oops! Please re-take the quiz!</h2>
        <button className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" data-testid="button" type="submit" >re-do quiz!
        </button>
      </div>
  )
}

export default Retake;