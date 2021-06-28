import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Quiz() {

  var newZealand = 0;
  var paris = 0;
  var machuPicchu = 0;
  var tahiti = 0;
  var london = 0;
  var rome = 0;
  var tokyo = 0;
  var barcelona = 0;
  var grandCanyon = 0;
  var sydney = 0;


  const questions = [
    {
      question: 'What weather do you prefer?',
      answer:[
        'Sunny all day',
        'Tropical',
        'Cold & Rainy',
        'Warm & Humid',
        'All of the seasons!'
      ],
      score: [{
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        one: [9, 3, 5, 10, 2, 6, 6, 6, 10, 9],
        two: [10, 1, 1, 10, 1, 1, 2, 2, 10, 2],
        three: [2, 7, 8, 4, 9, 2, 4, 2, 2, 2],
        four: [8, 5, 1, 8, 2, 7, 7, 4, 9, 7],
        five: [1, 10, 3, 1, 7, 3, 2, 3, 2, 1]
      }]
    },
    {
      question: 'What do you want most out of your trip?',
      answer:[
        'To relax',
        'To be active',
        'To explore',
        'To party',
        'To eat out'
      ],
      score: [{
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        one: [10, 2, 1, 9, 2, 2, 2, 6, 1, 8],
        two: [6, 8, 10, 7, 9, 8, 9, 8, 10, 8],
        three: [9, 10, 10, 7, 10, 9, 9, 9, 10, 8],
        four: [9, 7, 2, 9, 9, 8, 9, 10, 1, 8],
        five: [5, 9, 3, 6, 8, 8, 9, 10, 2, 8]
      }]
    },
    {
      question: 'What activity do you enjoy the most?',
      answer:[
        'To be by the water and relax',
        'To go to museums and explore the history',
        'To be surrounded by nature and go on hikes',
        'To go out and enjoy the nightlife',
        'To take risks and go on adventures'
      ],
      score: [{
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        one: [10, 1, 1, 10, 2, 2, 3, 9, 1, 10],
        two: [3, 10, 10, 2, 10, 10, 7, 10, 8, 9],
        three: [10, 3, 10, 10, 3, 3, 5, 7, 10, 10],
        four: [8, 8, 1, 8, 8, 7, 7, 10, 1, 8],
        five: [9, 3, 8, 8, 4, 4, 6, 9, 10, 9]
      }]
    },
    {
      question: 'What kind of foods do you like most?',
      answer:[
        'I like to try new cuisines and flavors',
        'I like bland flavors and simple dishes',
        'I like fancy restaurants and fine dining',
        'I like fast food',
        'I like healthy meals and vegetarian options'
      ],
      score: [{
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        one: [9, 8, 8, 9, 8, 8, 9, 9, 5, 7],
        two: [2, 4, 6, 2, 4, 4, 2, 4, 7, 6],
        three: [4, 10, 1, 4, 10, 10, 9, 8, 2, 7],
        four: [3, 8, 2, 3, 8, 8, 4, 6, 4, 8],
        five: [10, 6, 10, 10, 6, 6, 7, 8, 9, 7]
      }]
    },
    {
      question: 'What kind of day plans are you looking for?',
      answer:[
        'Daytrips/roadtrips/hikes',
        'Visiting theme parks',
        'Spending all day by the water',
        'Going to the mall',
        'Exploring the city and going on all tourist destinations'
      ],
      score: [{
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        one: [10, 3, 10, 10, 3, 3, 5, 7, 10, 10],
        two: [1, 10, 1, 1, 4, 1, 10, 1, 1, 3],
        three: [10, 1, 1, 10, 2, 2, 3, 9, 1, 10],
        four: [5, 9, 1, 4, 8, 6, 9, 9, 1, 7],
        five: [3, 10, 10, 2, 10, 10, 7, 10, 8, 9]
      }]
    },
    {
      question: 'Who are you going to be traveling with?',
      answer:[
        'Alone',
        'With a partner',
        'With my best friend',
        'Family',
        'Co-workers'
      ],
      score: [{
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        one: [8, 8, 8, 4, 6, 5, 5, 5, 8, 6],
        two: [10, 10, 9, 10, 7, 7, 9, 7, 9, 8],
        three: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        four: [6, 5, 7, 8, 6, 7, 5, 9, 8, 8],
        five: [7, 4, 6, 7, 7, 7, 6, 8, 7, 7]
      }],
    },
];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {

      if(isCorrect === true ){
          setScore(score + 1);
      }

      const nextQuestion = currentQuestion +1;
      if (nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion);
      }
      else{
          setShowScore(true);
      }  
  }

  return (
  <div className="app quiz mt-5 container">
    {}
    {showScore ? (
              <div>
      <div className="score-section text-center question-text">You completed {score} out of {questions.length} goals this week!</div>
              <Link className="nav-link back" to="/profile"><i class="fas fa-long-arrow-alt-left"></i> back to my profile</Link>
              </div>
    ) : (
      <p>
              <div className="row m-3">
        <div className="col-12 question-section">
          <div className="question-count text-center">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>

                      
          <div className="question-text text-center">{questions[currentQuestion].questionText}</div>
        </div>

    
        <div className="col-12 answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) =>( 
                      <button 
                      style={{ marginLeft: "auto" }}
                      className="answerBtn btn btn-outline-success quiz-button btn-block btn-lg" 
                      onClick={() =>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}
                      </button>
                      ))}
          
        </div>
              </div>
      </p>
    )}
  </div>
  );
}

export default Quiz;