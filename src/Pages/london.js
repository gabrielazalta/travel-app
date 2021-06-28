import React from 'react';

function London() {

  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">London!</h2>
        <h3 className="intro">About London</h3>
        <button className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" data-testid="button" type="submit" >re-do quiz!
        </button>
      </div>
  )
}

export default London;