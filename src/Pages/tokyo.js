import React from 'react';

function Tokyo() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
      <div className="home">
        <h2 className="welcome">Your Next Destination is...</h2>
        <h2 className="welcome">Tokyo!</h2>
        <h3 className="intro">
          "Animated" is perhaps the best word to describe Tokyo. Crazy about its anime, Japan's mega city is constantly buzzing with movement - feet clacking down sidewalks, cars zooming along streets, subway trains humming below ground, ships cruising in and out. And yet bright lights and loud signs beg you to pause, to break your motion for just one second to pray at the altar of consumerism. This is a city that feeds on motion and progress.
        <br></br>
        <br></br>
          But when you want to stop in Tokyo, the city will certainly make it worth your while. The tech-savvy locals may whizz past the monuments and urban parks daily (except during the cherry blossom season when everyone floods the green space), but, we assure you, the museums and historical sites are world-class. Here, there are photos to be taken, sushi to be eaten and a lot of shopping to be done. So what are you waiting for? You better get a move on.
        </h3>
        <h4 className="source">Source: <a to="route" target="_blank" rel="noopener noreferrer" href="https://travel.usnews.com/Tokyo_Japan/">US News</a></h4>
        <button 
            className="mt-3 pt-2 btn btn-light btn-lg btn-block quizButton" 
            data-testid="button" 
            onClick={refreshPage}
            type="submit" >re-take quiz!
        </button>
      </div>
  )
}

export default Tokyo;