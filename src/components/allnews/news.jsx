import React from 'react';
import './news.scss';
import admins from '../../database/Administration.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

function AllNews() {
  const shortAmdins = admins.slice(0, 6);
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='admins'>
        <div className='container'>
          <div className='adminsWrapper'>
            {shortAmdins.map(e => {
              return (
                <NavLink
                  className='admin'
                  key={e.id}
                  data-aos='fade-right'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                  to='/news/1'
                >
                  <img src={e.img} className='AdminPhoto' alt='' />
                  <div className='AdminSubs'>
                    <strong className='AdminName'>Title</strong>
                    <p className='AdminPosition'>Yangilik desc </p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNews;
