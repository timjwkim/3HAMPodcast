import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";


function clock() {
  return (
    new Date().toLocaleTimeString()
  )
}

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <div className="Head">
        <header className="App-header" data-aos="fade" data-aos-duration="10000">
          <h1>Three and a Half Asian Men Podcast</h1>
          <img className="Banner-a" src="./images/alex.png"
               data-aos="fade-up-right" data-aos-duration="3000"/>
          <img className="Banner-b" src="./images/chan.png"
               data-aos="fade-right" data-aos-duration="3000"/>
          <img className="Banner-c" src="./images/tarek.png"
               data-aos="fade-left" data-aos-duration="3000"/>
          <img className="Banner-d" src="./images/tim.png"
               data-aos="fade-up-left" data-aos-duration="3000"/>

        </header>
      </div>

      <div className="About">
        <header className="About-us" data-aos="fade-down" data-aos-duration="1000">
          <h2>Meet the Cast!</h2>
        </header>
        <div className="About-img">
          <div className="Alex">
            <img className="Alex-img" src="./images/alex.png"
                 data-aos="fade-down-left" data-aos-duration="1500"/>
            <figcaption className="Alex-name" data-aos="fade" data-aos-duration="2000">Alex</figcaption>
            <figcaption data-aos="slide-up" data-aos-duration="1500">Alex is a rising
              junior studying communications at Villanova University. As the mc
              and host of the podcast, Alex leads the discussion and is an important
              and necessary ground for a group that likes to go on tangents. When
              not podcasting, Alex enjoys making music and creating banger Spotify
              playlists of all genres.</figcaption>
          </div>
          <div className="Chan">
            <img className="Chan-img" src="./images/chan.png"
                 data-aos="fade-down" data-aos-duration="1500"/>
            <figcaption className="Chan-name" data-aos="fade" data-aos-duration="2000">Chan</figcaption>
            <figcaption data-aos="slide-up" data-aos-duration="1500">Chan is a rising
              junior studying material science engineering at Carnegie Mellon University.
              Truly a wildcard and x-factor to the group, Chan can stumble into the
              butt end of many jokes while also sharing some very surprising and intriguing
              experiences. Throughout the day, Chan will be decimating his opponents
              in Tetris, eating, or slumbering.</figcaption>
          </div>
          <div className="Tarek">
            <img className="Tarek-img" src="./images/tarek.png"
                 data-aos="fade-down" data-aos-duration="1500"/>
            <figcaption className="Tarek-name" data-aos="fade" data-aos-duration="2000">Tarek</figcaption>
            <figcaption data-aos="slide-up" data-aos-duration="1500">Tarek is a rising
              junior studying mathematics at Rutgers University. A natural-born jokester
              and storyteller, Tarek exudes charisma and enthusiasm as he shares
              some of his hilarious past experiences. You can often find Tarek watching
              all things basketball, always looking to add to his plethora of Carmelo
              Anthony or New York Knicks highlights.</figcaption>
          </div>
          <div className="Tim">
            <img className="Tim-img" src="./images/tim.png"
                 data-aos="fade-down-right" data-aos-duration="1500"/>
            <figcaption className="Tim-name" data-aos="fade" data-aos-duration="2000">Tim</figcaption>
            <figcaption data-aos="slide-up" data-aos-duration="1500">Tim is a rising
              junior studying computer science at the University of Michigan. Known
              as the IT/Tech guy, Tim manages the audio, visual, and web for the
              podcast. Typically, you’ll hear him making sarcastic one line comments
              or trying to tell his stories with questionable English. In his free
              time, Tim enjoys going on scenic drives and cooking with his sister.</figcaption>
          </div>
        </div>
      </div>

      <div className="Episodes">
        <div className="Latest-ep" data-aos="slide-right" data-aos-duration="1500">
          <header className="Latest-ep-title">
            <h2>Latest Episode!</h2>
            <div className="YT-res-1">
              <iframe className="YT-latest" width="560" height="315" src="https://www.youtube.com/embed/K3Ven6AHMho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <figcaption className="Latest-ep-desc">The Three and a Half Asian Men
                Podcast is back for our 7th episode: "Goldfish and Subways and Excuses,
                Oh My!" (Wizard of Oz is a classic, no cap). For this episode, we
                talk about our pet peeves, which happen to range from very legitimate
                things, to just plain stupidity. We have a number of stories on this
                podcast, so if you want to learn how to annoy Chan, please tune in.</figcaption>
          </header>
        </div>
        <div className="Other-ep" data-aos="slide-left" data-aos-duration="1500">
          <header className="Featured-ep">
            <h2>Featured Episode!</h2>
            <iframe className="YT-featured" width="560" height="315" src="https://www.youtube.com/embed/BSUs6LnncO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </header>
          <header className="All-eps">
            <h2>All Episodes!</h2>
            <iframe className="YT-all" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL937mUeeiKlNEAOYdax-2fqSPQ_qBJ3pj" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </header>
        </div>
      </div>

    </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
