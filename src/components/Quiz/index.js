import React,{useState} from 'react';
import Barcelona from '../../Pages/barcelona';
import GrandCanyon from '../../Pages/grandCanyon';
import London from '../../Pages/london';
import MaccuPicchu from '../../Pages/maccuPicchu';
import NewZealand from '../../Pages/newZealand';
import Paris from '../../Pages/paris';
import Rome from '../../Pages/rome';
import Sydney from '../../Pages/sydney';
import Tahiti from '../../Pages/tahiti';
import Tokyo from '../../Pages/tokyo';
import Retake from '../../Pages/retake';

function Quiz() {

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
      score: [
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        [9, 3, 5, 10, 2, 6, 6, 6, 10, 8],
        [9, 1, 1, 10, 1, 1, 2, 2, 10, 2],
        [2, 7, 8, 4, 9, 2, 4, 2, 2, 2],
        [8, 5, 1, 8, 2, 7, 7, 4, 9, 7],
        [1, 10, 3, 1, 7, 3, 2, 3, 2, 1]
      ]
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
      score: [
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        [9, 2, 1, 9, 2, 2, 2, 6, 1, 8],
        [6, 8, 10, 7, 9, 8, 9, 8, 10, 8],
        [9, 10, 10, 7, 10, 9, 8, 9, 10, 8],
        [9, 7, 2, 9, 9, 8, 8, 10, 1, 8],
        [5, 9, 3, 6, 8, 8, 9, 10, 2, 7]
      ]
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
      score: [
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        [9, 1, 1, 10, 2, 2, 3, 9, 1, 8],
        [3, 10, 10, 2, 10, 10, 7, 10, 8, 8],
        [10, 3, 10, 10, 3, 3, 5, 7, 10, 9],
        [8, 8, 1, 8, 8, 7, 7, 10, 1, 8],
        [9, 3, 8, 8, 4, 4, 6, 9, 10, 9]
      ]
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
      score: [
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        [8, 8, 8, 9, 8, 8, 8, 9, 5, 7],
        [2, 4, 6, 2, 4, 4, 2, 4, 7, 6],
        [4, 10, 1, 4, 10, 8, 9, 8, 2, 7],
        [3, 8, 2, 3, 8, 8, 4, 6, 4, 8],
        [9, 6, 10, 10, 6, 6, 7, 8, 9, 6]
      ]
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
      score: [
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        [9, 3, 10, 10, 3, 3, 5, 7, 10, 8],
        [1, 10, 1, 1, 4, 1, 9, 1, 1, 3],
        [9, 1, 1, 10, 2, 2, 3, 9, 1, 7],
        [5, 9, 1, 4, 8, 6, 9, 9, 1, 7],
        [3, 10, 10, 2, 10, 10, 6, 10, 8, 8]
      ]
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
      score: [
        //newZeland, paris, maccuPicchu, tahiti, london, rome, tokyo, barcelona, grandCanyon, sydney
        [8, 8, 8, 4, 6, 5, 5, 5, 8, 5],
        [9, 10, 9, 10, 7, 7, 9, 7, 9, 6],
        [8, 8, 8, 8, 8, 8, 8, 8, 8, 7],
        [6, 5, 7, 8, 6, 7, 5, 9, 8, 7],
        [7, 4, 6, 7, 7, 7, 6, 8, 7, 6]
      ],
    },
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState([0,0,0,0,0,0,0,0,0,0]);

  const handleAnswerButtonClick = (answerIndex) => {
        
    const scoreResult = score.map((cityScore, cityIndex) => {
        return cityScore + questions[currentQuestion].score[answerIndex][cityIndex];
    })
    
    console.log(scoreResult);
    setScore(scoreResult);
    setCurrentQuestion(currentQuestion + 1); 
  }

  const renderQuestions = () => (
    <div className="quiz mt-5 container quiz-body">
      <p>
        <div className="row">
          <div className="col-12 question-section">
            <div className="question-count text-center">
                <span>{currentQuestion + 1}</span>/{questions.length}
            </div>         
            <div className="question-text text-center">{questions[currentQuestion].question}</div>
          </div>
          <div className="col-12 answer-section">
            {questions[currentQuestion].answer.map((answerText, index) =>( 
              <button 
                style={{ marginLeft: "auto" }}
                className="answer-btn btn btn-outline-dark btn-block btn-lg" 
                onClick={() =>handleAnswerButtonClick(index)}>{answerText}
              </button>
            ))}
          </div>
        </div>
      </p>
    </div>
  )
  const cityPages = (pageIndex) => {
    switch(pageIndex) {
      case 0: 
          return <NewZealand />;
      case 1:
          return <Paris />;
      case 2: 
          return <MaccuPicchu />;
      case 3:
          return <Tahiti />;
      case 4: 
          return <London />;
      case 5:
          return <Rome />;
      case 6: 
          return <Tokyo />;
      case 7:
          return <Barcelona />;
      case 8: 
          return <GrandCanyon />;
      case 9:
          return <Sydney />;
      default:
          return <Retake />;
    }
  }

  if (currentQuestion < 6) {
    return renderQuestions();
  } else {
    const maxScoreIndex = score.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    console.log(maxScoreIndex)
    return cityPages(maxScoreIndex);
  }

}

export default Quiz;
