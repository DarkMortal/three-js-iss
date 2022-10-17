import React from 'react';
import logo from '../Assets/Logo.png';

export default function AboutTeam(props) {
  return (
    <div id='aboutUs' className='box' style={{backgroundColor: props.isDark?'#171f2e':'#f6f7f8'}}>
        <div className="card mb-3" style={{backgroundColor: 'transparent',border: 'none'}}>
        <div className="card mb-3" style={{backgroundColor: 'transparent',border: 'none'}}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">About Us</h2>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iste, eaque molestiae omnis nulla odio delectus error? Incidunt facere qui sint itaque rem libero. Ipsam ullam et eum neque quisquam inventore accusantium quod, perferendis provident laborum? Laboriosam provident praesentium nam vero minus dolorem? Fugit velit excepturi laborum illo ex error iusto alias officia, possimus nostrum praesentium laboriosam veniam dolorum quae, consectetur quasi ducimus beatae esse soluta repellendus fuga porro debitis iure. Dignissimos nihil a repellat sit quaerat reprehenderit fugit amet totam. Repudiandae delectus fuga nulla quas tempore tempora, obcaecati sed odio culpa! Ratione, consectetur laboriosam! Ullam veritatis iste facilis labore?
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={logo} className="img-fluid rounded-start" alt="ThinkSpace"/>
            </div>
          </div>
        </div>        
        </div>
    </div>
  )
}
