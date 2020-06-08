import React, { useEffect, Component } from 'react';
import './About.css';
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

class About extends Component {
  state = {
    visible: false
  }

  render() {
    const buttonText = this.state.visible ? '(Hide)' : '(Click Here For More Info)';
    const slider1 = this.state.visible ? (
      <figcaption data-aos="fade" data-aos-duration="1500">Alex is a rising
        junior studying communications at Villanova University. As the MC
        and host of the podcast, Alex leads the discussion and is an important
        and necessary ground for a group that likes to go on tangents. When
        not podcasting, Alex enjoys making music and creating banger Spotify
        playlists of all genres.</figcaption>
    ) : (
      null
    );
    const slider2 = this.state.visible ? (
      <figcaption data-aos="fade" data-aos-duration="1500">Chan is a rising
        junior studying material science engineering at Carnegie Mellon University.
        Truly a wildcard and x-factor to the group, Chan can stumble into the
        butt end of many jokes while also sharing some very surprising and intriguing
        experiences. Throughout the day, Chan will be decimating his opponents
        in Tetris, eating, or slumbering.</figcaption>
    ) : (
      null
    );
    const slider3 = this.state.visible ? (
      <figcaption data-aos="fade" data-aos-duration="1500">Tarek is a rising
        junior studying mathematics at Rutgers University. A natural-born jokester
        and storyteller, Tarek exudes charisma and enthusiasm as he shares
        some of his hilarious past experiences. You can often find Tarek watching
        all things basketball, always looking to add to his plethora of Carmelo
        Anthony or New York Knicks highlights.</figcaption>
    ) : (
      null
    );
    const slider4 = this.state.visible ? (
      <figcaption data-aos="fade" data-aos-duration="1500">Tim is a rising
        junior studying computer science at the University of Michigan. Known
        as the IT/Tech guy, Tim manages the audio, visual, and web for the
        podcast. Typically, you’ll hear him making sarcastic one line comments
        or trying to tell his stories with questionable English. In his free
        time, Tim enjoys going on scenic drives and cooking with his sister.</figcaption>
    ) : (
      null
    );

    return (
      <div className="About">
        <header className="About-us" data-aos="fade" data-aos-duration="2000">
          <h2>Meet the Cast!</h2>
        </header>
        <button className="Toggle-info" data-aos="fade" data-aos-duration="2500"
                onClick={() => { this.setState({ visible: !this.state.visible }); }}>
          {buttonText}</button>
        <div className="About-img">
          <div className="Alex">
            <img className="Alex-img" src={alex}
                 data-aos="fade-down-left" data-aos-duration="1500"/>
            <figcaption className="Alex-name" data-aos="fade" data-aos-duration="2000">Alex</figcaption>
            {slider1}
          </div>
          <div className="Chan">
            <img className="Chan-img" src={chan}
                 data-aos="fade-down" data-aos-duration="1500"/>
            <figcaption className="Chan-name" data-aos="fade" data-aos-duration="2000">Chan</figcaption>
            {slider2}
          </div>
          <div className="Tarek">
            <img className="Tarek-img" src={tarek}
                 data-aos="fade-down" data-aos-duration="1500"/>
            <figcaption className="Tarek-name" data-aos="fade" data-aos-duration="2000">Tarek</figcaption>
            {slider3}
          </div>
          <div className="Tim">
            <img className="Tim-img" src={tim}
                 data-aos="fade-down-right" data-aos-duration="1500"/>
            <figcaption className="Tim-name" data-aos="fade" data-aos-duration="2000">Tim</figcaption>
            {slider4}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
