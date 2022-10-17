import React from 'react';
import '../styles.css';
import data from '../missions.json';
import img1 from "../Assets/1st misiion crew members.jpg";
import img2 from "../Assets/Expedition_34.jpg";
import img3 from "../Assets/5th state of matter.jpg";
import img4 from "../Assets/Collection of more than 100 billion cosmic particles.jpg";
import img5 from "../Assets/current mission.jpg";

const images = [img1,img2,img3,img4,img5];

const lightTheme = {
    backgroundColor: '#f6f7f8',
    color: '#171f2e'
}, darkTheme = {
    backgroundColor: '#171f2e',
    color: '#f6f7f8'
};

export default function Missions(props) {
    
  return (
        <div id="missions" className="accordion accordion-flush box" style={{padding: '0px', borderRadius: '0px'}}>
            {
                Array.from(data,elm =>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`accrdionHeading${elm.id}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#accrdionCollapse${elm.id}`} aria-controls={`accrdionCollapse${elm.id}`} aria-expanded="false" style={props.isDark?darkTheme:lightTheme}>
                            <b>{elm.heading}</b>
                        </button>
                        </h2>
                        <div id={`accrdionCollapse${elm.id}`} className="accordion-collapse collapse" aria-labelledby={`accrdionHeading${elm.id}`} data-bs-parent="#missions">
                        <div className="accordion-body" style={{backgroundColor: props.isDark?'#171f2e':'#f6f7f8'}}>
                        <div className="card mb-3" style={{backgroundColor: 'inherit'}}>
                            <img src={images[elm.id]} className="card-img-top" alt="Expedition 1"/>
                            <div className="card-body">
                                <p className="card-text">{elm.body}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }
        </div>
  )
}
