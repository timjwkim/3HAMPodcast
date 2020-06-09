import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Mobile.css';
import Aos from "aos";
import { isMobile } from "react-device-detect";
import "aos/dist/aos.css";
import alex from './images/alex.png';
import chan from './images/chan.png';
import tarek from './images/tarek.png';
import tim from './images/tim.png';
import Episodes from './Episodes.js';
import About from './About.js';
import { Link } from 'react-scroll';
import AboutMobile from './AboutMobile.js';
import EpisodesMobile from './EpisodesMobile.js';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  if (!isMobile) {
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
          <header className="Eps-nav" data-aos="fade-up" data-aos-duration="3000">
            <Link className="To-Eps" to="EPS" smooth="true" duration="1500">Click here for Episodes!</Link>
          </header>
        </div>
        <About/>
        <Episodes/>
      </div>
    );
  }

  else {
    return (
      <div className="Mobile">
        <div className="M-Head">
          <header className="M-App-header" data-aos="fade" data-aos-duration="5000">
            <h1>Three and a Half Asian Men Podcast</h1>
            <img className="M-Banner-a" src={alex}
                 data-aos="fade-up-right" data-aos-duration="1500"/>
            <img className="M-Banner-b" src={chan}
                 data-aos="fade-right" data-aos-duration="1500"/>
            <img className="M-Banner-c" src={tarek}
                 data-aos="fade-left" data-aos-duration="1500"/>
            <img className="M-Banner-d" src={tim}
                 data-aos="fade-up-left" data-aos-duration="1500"/>
          </header>
          <header className="M-Eps-nav" data-aos="fade-up" data-aos-duration="3000">
            <Link className="M-To-Eps" to="M-EPS" smooth="true" duration="1500">Click here for Episodes!</Link>
          </header>
        </div>
        <AboutMobile/>
        <EpisodesMobile/>
      </div>
    );
  }
}

export default App;
