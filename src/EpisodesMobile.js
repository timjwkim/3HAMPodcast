import React, { useEffect, Component } from 'react';
import './EpisodesMobile.css';
import Aos from "aos";

function AllowAOS() {
  useEffect(() => {
    Aos.init();
  }, []);
}

class EpisodesMobile extends Component {
  render() {
    return (
      <div className="M-Episodes" id="M-EPS">
        <div className="M-Latest-ep" data-aos="fade-up" data-aos-duration="750">
          <header className="M-Latest-ep-title">
            <h2 className="M-Latest-ep-title-desc">Latest Episode!</h2>
            <div className="M-YT-res-1">
              <iframe className="M-YT-latest" width="560" height="315" src="https://www.youtube.com/embed/_BoJMalBPiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <figcaption className="M-Latest-ep-desc">Episode 11: "Most Likely to Have a Podcast"</figcaption>
          </header>
        </div>
        <div className="M-Other-ep" data-aos="fade-up" data-aos-duration="750">
          <header className="M-All-eps">
            <h2 className="M-Ep-title">All Episodes!</h2>
            <iframe className="M-YT-all" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL937mUeeiKlNEAOYdax-2fqSPQ_qBJ3pj" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </header>
        </div>
      </div>
    );
  }
}

export default EpisodesMobile;
