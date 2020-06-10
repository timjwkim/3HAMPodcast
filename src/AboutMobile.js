import React, { useEffect, Component } from 'react';
import './AboutMobile.css';
import Aos from "aos";
import alex from './images/alex.png';
import chan from './images/chan.png';
import tarek from './images/tarek.png';
import tim from './images/tim.png';

function AllowAOS() {
  useEffect(() => {
    Aos.init();
  }, []);
}

class AboutMobile extends Component {
  render() {
    return (
      <div className="M-About">
        <header className="M-About-us" data-aos="fade" data-aos-duration="2000">
          <h2>Meet the Cast!</h2>
        </header>
        <div className="M-About-img">
          <div className="M-Alex">
            <img className="M-Alex-img" src={alex} data-aos="slide-right" data-aos-duration="750"/>
            <figcaption className="M-Alex-name" data-aos="fade" data-aos-duration="1000">Alex</figcaption>
            <figcaption className="M-Alex-desc" data-aos="fade" data-aos-duration="1000">MC</figcaption>
            <img className="M-Chan-img" src={chan} data-aos="slide-right" data-aos-duration="750"/>
            <figcaption className="M-Chan-name" data-aos="fade" data-aos-duration="1000">Chan</figcaption>
            <figcaption className="M-Chan-desc" data-aos="fade" data-aos-duration="1000">X-Factor</figcaption>
          </div>
          <div className="M-Tarek">
            <img className="M-Tarek-img" src={tarek} data-aos="slide-left" data-aos-duration="750"/>
            <figcaption className="M-Tarek-name" data-aos="fade" data-aos-duration="1000">Tarek</figcaption>
            <figcaption className="M-Tarek-desc" data-aos="fade" data-aos-duration="1000">Storyteller</figcaption>
            <img className="M-Tim-img" src={tim} data-aos="slide-left" data-aos-duration="750"/>
            <figcaption className="M-Tim-name" data-aos="fade" data-aos-duration="1000">Tim</figcaption>
            <figcaption className="M-Alex-desc" data-aos="fade" data-aos-duration="1000">Techie</figcaption>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMobile;
