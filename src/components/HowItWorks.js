import React, { useState } from 'react';
import '../index.css';
import Workapi from '../API/workApi';

function HowItWorks() {
  const [workData, showworkData] = useState(Workapi);

  return (
    <div className='section'>
      <div className='container work-container'>
        <h1 className='main-heading text-center'>How does it work</h1>
        <div className='row'>
          {workData.map((item) => {
            const { id, logo, title, info } = item;

            return (
              <>
                <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                  <i className={`fontawesome-style ${logo}`}> </i>
                  <h2 className='sub-heading'>{title}</h2>
                  <p className='main-hero-para w-100'>{info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
