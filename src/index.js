import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
