import React from 'react';
import './index.css';

import { Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Admins from './pages/admins/admins';
import News from './pages/news/news';
import Teachers from './pages/teachers/teachers';
import SingleNewsPage from './pages/singlenews/news';
import Students from './pages/students/students';
import SingleTeacher from './pages/singleteacher/teachers';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/students' element={<Students />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/administration' element={<Admins />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/1' element={<SingleNewsPage />} />
        <Route path='/teachers/1' element={<SingleTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
