import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Quiz from './components/Quiz';
import Weather from './components/Weather';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    console.log(setCurrentPage);
    switch(currentPage) {
      case 'about':
        return <About setCurrentPage={() => {setCurrentPage()}} />;
      case 'quiz':
        return <Quiz />;
      case 'weather':
        return <Weather />;
      default:
        return <About setCurrentPage={() => {setCurrentPage()}} />
    }
  }

  return (
    <div >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}></Navbar>
      <main>
        {renderPage(currentPage)}
      </main>
       <Footer />
    </div>
  );
}

export default App;

//run npm run deploy after commiting
