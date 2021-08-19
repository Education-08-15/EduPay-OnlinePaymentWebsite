import React from 'react';
import '../index.css';
function Header() {
  return (
    <div className='header'>
      <section className='container main-hero-container'>
        <div className='row'>
          <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
            <h1 className='display-2'>
              Online Payment Made <br />
              Easy For You
            </h1>
            <p className='main-hero-para'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              iste esse omnis modi sapiente quaerat? Natus doloremque dicta
              quas, optio illo tempore placeat adipisci perspiciatis corporis
              beatae eveniet eos Lorem ipsum dolor
            </p>
            <h3>Get early access for you </h3>
            <div className='input-group mt-3'>
              <input
                type='text'
                className='rounded-pill  w-50   w-lg-75 me-3  p-2 form-control-text
                 '
                placeholder='Enter Your Email '
              />
              <div className='input-group-button'>Get it now</div>
            </div>
          </div>

          {/* main header  right side*/}

          <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center images'>
            <img
              src='https://images.unsplash.com/photo-1476365518243-f738bf58443d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHZlcnRpY2FsJTIwY29tcHV0ZXIlMjB1c2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='hero'
              className='img-fluid'
            />

            <img
              className='img2'
              src='https://images.unsplash.com/photo-1499914567823-c240485cb7d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHZlcnRpY2FsJTIwY29tcHV0ZXIlMjB1c2luZyUyMG9ubGluZSUyMHBheW1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
