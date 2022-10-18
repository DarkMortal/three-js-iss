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
                <h2 className="card-title">About Us</h2>
                <p className="card-text">
                  We are engineers, we love to build techs that are useful, and
                  help a lot of people in their life. This project was a challenge for us, and
                  we love to take challenges, that's why we selected this project
                  in the first place. We learned a lot of things not only about the
                  tech that we used, also about NASA and Space itself. Most important of
                  all we enjoyed the process entirely.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
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
