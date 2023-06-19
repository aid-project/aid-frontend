import React from 'react';
import styled from 'styled-components';
import MainpageTop from '../components/Mainpage/MainpageTop';
import MainpageBottom from '../components/Mainpage/MainpageBottom';

export default function Mainpage() {
  return (
    <>
      <MainpageTop />
      <MainpageBottom />
    </>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
