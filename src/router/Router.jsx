import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';
import Header from '../components/Header/Header';
import Draw from '../pages/Draw';
import Community from '../pages/Community';
import Mypage from '../pages/Mypage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Footer from '../components/Footer/Footer';
export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/draw' element={<Draw />} />
        <Route path='/community' element={<Community />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
}
