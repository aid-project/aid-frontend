import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';
import Header from '../components/Header';
import Draw from '../pages/Draw';
export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/draw' element={<Draw />} />
      </Routes>
    </>
  );
}
