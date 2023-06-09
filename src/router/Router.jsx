import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';
import Header from '../components/Header/Header';
import Draw from '../pages/Draw';
import Community from '../pages/Community';
import Mypage from '../pages/Mypage';
import Login from '../pages/Login';
export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/draw' element={<Draw />} />
        <Route path='/community' element={<Community />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}
