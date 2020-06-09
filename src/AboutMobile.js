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
      <div className="About">
        <header className="About-us" data-aos="fade" data-aos-duration="2000">
          <h2>Meet the Cast!</h2>
        </header>
        <div className="About-img">
          <div className="Alex">
            <img className="Alex-img" src={alex} data-aos="slide-right" data-aos-duration="750"/>
            <figcaption className="Alex-name" data-aos="fade" data-aos-duration="1000">Alex</figcaption>
            <figcaption className="Alex-desc" data-aos="fade" data-aos-duration="1000">MC</figcaption>
            <img className="Chan-img" src={chan} data-aos="slide-right" data-aos-duration="750"/>
            <figcaption className="Chan-name" data-aos="fade" data-aos-duration="1000">Chan</figcaption>
            <figcaption className="Chan-desc" data-aos="fade" data-aos-duration="1000">X-Factor</figcaption>
          </div>
          <div className="Tarek">
            <img className="Tarek-img" src={tarek} data-aos="slide-left" data-aos-duration="750"/>
            <figcaption className="Tarek-name" data-aos="fade" data-aos-duration="1000">Tarek</figcaption>
            <figcaption className="Tarek-desc" data-aos="fade" data-aos-duration="1000">Storyteller</figcaption>
            <img className="Tim-img" src={tim} data-aos="slide-left" data-aos-duration="750"/>
            <figcaption className="Tim-name" data-aos="fade" data-aos-duration="1000">Tim</figcaption>
            <figcaption className="Alex-desc" data-aos="fade" data-aos-duration="1000">Techie</figcaption>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMobile;
