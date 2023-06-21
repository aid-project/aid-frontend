import React from 'react';
import { Container, Header, ImgBox, ImgBoxArticle, ImgBoxArticle1, ImgBoxArticle2, ImgBoxContainer, ImgBoxHeader, Number, RandingImg1, RandingImg2, RightArrow, Start } from './MainpageBottom.styled';
import { useNavigate } from 'react-router-dom';

export default function MainpageBottom() {
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
      <Header>How To Draw</Header>
      <ImgBoxContainer>
        <ImgBox>
          <Number>1</Number>
          <RandingImg1 src='./sources/랜딩이미지1.png' />
          <ImgBoxHeader>그리기</ImgBoxHeader>
          <ImgBoxArticle>원하는 형태의 그림을 그린다.</ImgBoxArticle>
        </ImgBox>
        <RightArrow src='./sources/랜딩화살표.png' />
        <ImgBox>
          <Number>2</Number>
          <RandingImg1 src='./sources/랜딩이미지2.png' />
          <ImgBoxHeader>부분 선택하기</ImgBoxHeader>

          <ImgBoxArticle>
            인공지능에게 작업을 요청할
            <br />
            영역을 지정한다.
          </ImgBoxArticle>
        </ImgBox>
        <RightArrow src='./sources/랜딩화살표.png' />
        <ImgBox>
          <Number>3</Number>
          <RandingImg1 src='./sources/랜딩이미지3.png' />
          <ImgBoxHeader>추천받기</ImgBoxHeader>

          <ImgBoxArticle>
            내 그림에 키워드를 입력하면
            <br />
            인공지능이 그림을 추천해 준다.
          </ImgBoxArticle>
        </ImgBox>
        <RightArrow src='./sources/랜딩화살표.png' />
        <ImgBox>
          <Number>4</Number>
          <RandingImg2 src='./sources/랜딩이미지4.png' />
          <ImgBoxHeader>추천받기</ImgBoxHeader>

          <ImgBoxArticle>
            내 그림에 키워드를 입력하면
            <br />
            인공지능이 그림을 추천해 준다.
          </ImgBoxArticle>
        </ImgBox>
      </ImgBoxContainer>
      <Start onClick={handleStart}>START {'>'}</Start>
    </Container>
  );
}
