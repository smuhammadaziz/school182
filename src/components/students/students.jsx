import React from 'react';
import './style.scss';
import data from '../../database/data_students.json';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavLink } from 'react-router-dom';

const Students = () => {
  const datas = data.slice(0, 6);
  useEffect(() => {
    AOS.init();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='activepupils'>
      <div className='container'>
        <h1 className='sarlavha'>Лучшие ученики школы</h1>
        <div className='cards'>
          {datas.map(e => {
            return (
              <div className='card' key={e.id} data-aos='fade-right'>
                <img src={e.img} alt='' />
                <div className='texts'>
                  <h4 className='blue' style={{ fontWeight: 700 }}>
                    {e.name} {e.surname} <br /> {e.fathername}
                  </h4>
                  <br />
                  <p>Ученик {e.class} класса</p>
                  <br />
                  <p className='blue' style={{ fontWeight: 700 }}>
                    классний руководител
                  </p>
                  <br />
                  <p>
                    {e.teachener_name} {e.teachener_surname} классного руководителя
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <NavLink className='more students__morebtn' to='/news' onClick={goToTop}>
          More
        </NavLink>
      </div>
    </div>
  );
};

export default Students;
