import React from 'react';
import '../index.css';
import howToUseApp from '../API/howToUseTheApp';

function AboutUs() {
  const [use, showuse] = howToUseApp;
  return (
    <div>
      <section className='common-section our-services'>
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
              <img
                src='https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='about us'
              />
            </div>

            {/* first section right side data */}
            <div className='col-12 col-lg-7 our-services-list'>
              <h3 className='mini-title'>
                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className='main-heading'>How to use the App</h1>

              {howToUseApp.map((item) => {
                const { id, title, info } = item;
                return (
                  <>
                    <div className='row our-services-info ' key={id}>
                      <div className='col-1 our-services-number'>{id}</div>
                      <div className='col-10 our-services-data'>
                        <h2>{title}</h2>
                        <p className='main-hero-para'>{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className='btn-style btn-style-border'>Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of about us section */}
      <section className='common-section our-services'>
        <div className='container mb-5'>
          <div className='row'>
            {/* first section right side data */}
            <div className='col-12 col-lg-7 our-services-list'>
              <h3 className='mini-title'>
                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className='main-heading'>How to use the App</h1>

              {howToUseApp.map((item) => {
                const { id, title, info } = item;
                return (
                  <>
                    <div className='row our-services-info ' key={id}>
                      <div className='col-1 our-services-number'>{id}</div>
                      <div className='col-10 our-services-data'>
                        <h2>{title}</h2>
                        <p className='main-hero-para'>{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className='btn-style btn-style-border'>Learn more</button>
            </div>
            <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
              <img
                src='https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='about us'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
