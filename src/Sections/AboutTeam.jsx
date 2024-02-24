import React from 'react';
import logo from '../Assets/Logo.png';

export default function AboutTeam(props) {
  return (
    <div
      id="aboutUs"
      className="box"
      style={{ backgroundColor: props.isDark ? "#171f2e" : "#f6f7f8" }}
    >
      <div
        className="card mb-3"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <div
          className="card mb-3"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <div className="row g-2">
            <div className="col-md-9">
              <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p className="card-text">
                I am an engineer, I love to build tech that is useful and helps a lot of people in their lives. This project was a challenge for me, and I love to take on challenges, that's why I selected this <a href="https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/teams/thinkspace/project" target='_blank' style={{color: "inherit"}}><strong>Problem Statement</strong></a> in the first place. I learned a lot of things not only about the tech that I used, but also about NASA and space itself. Most importantly, I enjoyed the process entirely.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img style={{borderRadius: '5px'}}
                src={logo}
                className="img-fluid rounded-start"
                alt="ThinkSpace"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
