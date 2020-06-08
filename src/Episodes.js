import React, { useEffect, Component } from 'react';
import './Episodes.css';
import Aos from "aos";

function AllowAOS() {
  useEffect(() => {
    Aos.init();
  }, []);
}

class Episodes extends Component {
  render() {
    return (
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
    );
  }
}

export default Episodes;
