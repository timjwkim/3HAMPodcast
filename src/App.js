import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import alex from './images/alex.png';
import chan from './images/chan.png';
import tarek from './images/tarek.png';
import tim from './images/tim.png';
import Episodes from './Episodes.js';
import About from './About.js';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <div className="Head">
        <header className="App-header" data-aos="fade" data-aos-duration="10000">
          <h1>Three and a Half Asian Men Podcast</h1>
          <img className="Banner-a" src={alex}
               data-aos="fade-up-right" data-aos-duration="3000"/>
          <img className="Banner-b" src={chan}
               data-aos="fade-right" data-aos-duration="3000"/>
          <img className="Banner-c" src={tarek}
               data-aos="fade-left" data-aos-duration="3000"/>
          <img className="Banner-d" src={tim}
               data-aos="fade-up-left" data-aos-duration="3000"/>
        </header>
      </div>
      <About/>
      <Episodes/>
    </div>
  );
}

export default App;
