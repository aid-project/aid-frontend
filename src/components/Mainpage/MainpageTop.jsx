import React from 'react';
import { Article, Container, ContentBox, Header, RandingImg, Start } from './MainpageTop.styled';
import { useNavigate } from 'react-router-dom';

export default function MainpageTop() {
  const userToken = localStorage.getItem('AccessToken');
  const navigate = useNavigate();

  const handleStart = () => {
    if (userToken === null) {
      navigate('/login');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (userToken !== null) {
      navigate('/draw');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Container>
      <RandingImg src='./sources/메인페이지상단랜딩이미지.png' />
      <ContentBox>
        <Header>나만의 픽토그램</Header>
        <Article>발표 자료에 넣을 나만의 그림이 필요한가요?</Article>
        <Article>그렇다면 에이드에게 맡겨보세요!</Article>
        <Article>간단하면 그림을 그린 후 키워드를 입력해주면 원하는 디테일까지 살려서</Article>
        <Article>당신만의 픽토그램을 완성시켜 줍니다!</Article>
        <Start onClick={handleStart}>START {'>'}</Start>
      </ContentBox>
    </Container>
  );
}
