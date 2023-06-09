import React, { useState } from 'react';
import { BottomBar, Container, ContentBox, ContentWrap, Login, Logo, MenuContent, Mypage, MypageBox, NonLoginState, SignUp } from './Header.styled';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const checkToken = localStorage.getItem('accesstoken');
  const [menuState, setMenuState] = useState('main');
  const onClickMenu = (menu) => {
    setMenuState(menu);
    if (menu === 'main') {
      navigate('/');
    } else {
      navigate(`/${menu}`);
    }
  };

  const isMenuActive = (name) => {
    return name === menuState;
  };
  return (
    <Container>
      <ContentWrap>
        <Logo
          onClick={() => {
            onClickMenu('main');
          }}
        >
          (BRAND)
        </Logo>
        <ContentBox
          className='main'
          onClick={() => {
            onClickMenu('main');
          }}
        >
          <MenuContent menuState={isMenuActive('main') ? 'main' : 'none'}>MAIN</MenuContent>
          <BottomBar menuState={isMenuActive('main') ? 'main' : 'none'} />
        </ContentBox>
        <ContentBox
          className='how'
          onClick={() => {
            onClickMenu('how');
          }}
        >
          <MenuContent menuState={isMenuActive('how') ? 'main' : 'none'}>HOW</MenuContent>
          <BottomBar menuState={isMenuActive('how') ? 'how' : 'none'} />
        </ContentBox>
        <ContentBox
          className='community'
          onClick={() => {
            onClickMenu('community');
          }}
        >
          <MenuContent menuState={isMenuActive('community') ? 'main' : 'none'}>COMMUNITY</MenuContent>
          <BottomBar menuState={isMenuActive('community') ? 'community' : 'none'} />
        </ContentBox>
        <ContentBox
          className='draw'
          onClick={() => {
            onClickMenu('draw');
          }}
        >
          <MenuContent menuState={isMenuActive('draw') ? 'main' : 'none'}>DRAW</MenuContent>
          <BottomBar menuState={isMenuActive('draw') ? 'draw' : 'none'} />
        </ContentBox>
      </ContentWrap>

      {checkToken !== null ? (
        <Mypage
          src='./sources/mypage.png'
          alt='mypage'
          onClick={() => {
            onClickMenu('mypage');
          }}
        />
      ) : (
        <div style={{ display: 'flex' }}>
          <NonLoginState>
            <p
              className='login'
              onClick={() => {
                navigate('/login');
              }}
            >
              LOGIN
            </p>
            <p className='signUp'>SIGN UP</p>
          </NonLoginState>
        </div>
      )}
    </Container>
  );
}
