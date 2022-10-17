import React from 'react'
import '../styles.css';
import International_Space_Station from '../Assets/International_Space_Station.jpg';
import OLD from '../Assets/iss067e378050.jpg';
import structure from '../Assets/iss_expanded_view_large_text_2022b.png';

export default function AboutsISS (props){
    return (
        <>        
        <div id='info' className='box' style={{backgroundColor: props.isDark?'#171f2e':'#f6f7f8'}}>
        
        <div className="card mb-3" style={{backgroundColor: 'transparent',border: 'none'}}></div>
        
        <div className="card mb-3" style={{backgroundColor: 'transparent',border: 'none'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={International_Space_Station} className="img-fluid rounded-start" alt="The International Space Station"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h2 className="card-title">What is the ISS?</h2>
                <p className="card-text">The International Space Station is a large spacecraft in orbit around Earth. 
                      It serves as a home where crews of astronauts and cosmonauts live.  
                      The space station is also a unique science laboratory. 
                      Several nations worked together to build and use the space station. 
                      The space station is made of parts that were assembled in space by astronauts. 
                      It orbits Earth at an average altitude of approximately 250 miles. 
                      It travels at 17,500 mph. This means it orbits the Earth every 90 minutes. 
                      NASA is using the space station to learn more about living and working in space. 
                      These lessons will make it possible to send humans farther into space than ever before.
                </p>
              </div>
            </div>
          </div>
        </div>        
        
        <div className="card mb-3" style={{backgroundColor: 'transparent',border: 'none'}}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">How Old Is the Space Station?</h2>
                <p className="card-text">The first piece of the International Space Station was launched in November 1998.
                  A Russian rocket launched the Russian Zarya (zar EE uh) control module. About two weeks later, the space shuttle Endeavour met Zarya in orbit. 
                  The space shuttle was carrying the U.S. Unity node. The crew attached the Unity node to Zarya. 
                  More pieces were added over the next two years before the station was ready for people to live there. The first crew arrived on November 2, 2000. 
                  People have lived on the space station ever since. More pieces have been added over time. 
                  NASA and its partners from around the world completed construction of the space station in 2011.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={OLD} className="img-fluid rounded-start" alt="The International Space Station"/>
            </div>
          </div>
        </div>        
        </div>

        <div className='box' style={{backgroundColor: props.isDark?'#171f2e':'#f6f7f8'}}>
            <h2>How Big Is the Space Station?</h2>
            <p>The space station has the volume of a five-bedroom house or two Boeing 747 jetliners. 
              It is able to support a crew of six people, plus visitors. 
              On Earth, the space station would weigh almost a million pounds. 
              Measured from the edges of its solar arrays, the station covers the area of a football field including the end zones. 
              It includes laboratory modules from the United States, Russia, Japan and Europe.</p>
        </div>

        <div className='box' style={{backgroundColor: props.isDark?'#171f2e':'#f6f7f8'}}>
            <h2>Why Is the Space Station Important?</h2>
            <p>The space station has made it possible for people to have an ongoing presence in space. 
              Human beings have been living in space every day since the first crew arrived. 
              The space station's laboratories allow crew members to do research that could not be done anywhere else. This scientific research benefits people on Earth. Space research is even used in everyday life. 
              The results are products called "spinoffs." Scientists also study what happens to the body when people live in <b>microgravity</b> for a long time. NASA and its partners have learned how to keep a spacecraft working well. 
              All of these lessons will be important for future space exploration.
              NASA is currently working on a plan to explore other worlds. The space station is one of the first steps. NASA will use lessons learned on the space station to prepare for human missions that reach farther into space than ever before.
              <br/>International Space Station Size & Mass :
              <ul>
                <li>Pressurized Module Length: 218 feet along the major axis (67 meters)</li>
                <li>Truss Length: 310 feet (94 meters)</li>
                <li>Solar Array Length: 239 feet across both longitudinally aligned arrays (73 meters)</li>
                <li>Mass: 925,335 pounds (419,725 kilograms)</li>
                <li>Habitable Volume: 13,696 cubic feet (388 cubic meters) not including visiting vehicles</li>
                <li>Pressurized Volume: 32,333 cubic feet (916 cubic meters)</li>
                <li>With BEAM expanded: 32,898 cubic feet (932 cubic meters)</li>
                <li>Power Generation: 8 solar arrays provide 75 to 90 kilowatts of power</li>
                <li>Lines of Computer Code: approximately 1.5 million</li>
              </ul>
            </p>
            <div style={{width: '100%',textAlign: 'center'}}>
              <figure className="figure">
                <img src={structure} className="figure-img img-fluid rounded" alt="Structure of the ISS"/>
                <figcaption className="figure-caption">Structure of the ISS</figcaption>
              </figure>
            </div>
        </div>
      </>
    );
}
