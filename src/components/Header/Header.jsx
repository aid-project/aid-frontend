import React, { useEffect, useState } from 'react';
import {
  BottomBar,
  Container,
  ContentBox,
  ContentWrap,
  Email,
  InfoBar,
  InfoColumnBox,
  Logo,
  MenuContent,
  MenuItem,
  ModalContainer,
  Mypage,
  NickName,
  NonLoginState,
  ProfileImg,
  UserBox,
  UserInfoBox,
} from './Header.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { userInfo } from '../../api/apiGET';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const checkToken = localStorage.getItem('AccessToken');
  const [menuState, setMenuState] = useState('main');
  const [profileState, setProfileState] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/') {
      setMenuState('main');
      isMenuActive('main');
    }
    if (location.pathname === '/draw') {
      setMenuState('draw');
      isMenuActive('draw');
    }
  }, [location]);

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

  const { data } = useQuery(['userInfo'], userInfo, {
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return (
    <Container>
      <ContentWrap>
        <Logo
          src='./sources/logo.png'
          alt='mypage'
          onClick={() => {
            onClickMenu('main');
          }}
        ></Logo>
        <ContentBox
          className='main'
          onClick={() => {
            onClickMenu('main');
          }}
        >
          <MenuContent menuState={isMenuActive('main') ? 'main' : 'none'}>MAIN</MenuContent>
          <BottomBar menuState={isMenuActive('main') ? 'main' : 'none'} />
        </ContentBox>

        {/* <ContentBox
          className='community'
          onClick={() => {
            onClickMenu('community');
          }}
        >
          <MenuContent menuState={isMenuActive('community') ? 'main' : 'none'}>COMMUNITY</MenuContent>
          <BottomBar menuState={isMenuActive('community') ? 'community' : 'none'} />
        </ContentBox> */}
        <ContentBox
          className='draw'
          onClick={() => {
            onClickMenu('draw');
          }}
        >
          <MenuContent menuState={isMenuActive('draw') ? 'draw' : 'none'}>DRAW</MenuContent>
          <BottomBar menuState={isMenuActive('draw') ? 'draw' : 'none'} />
        </ContentBox>
      </ContentWrap>

      {checkToken !== null ? (
        <>
          <Mypage
            src='./sources/mypage.png'
            alt='mypage'
            onClick={() => {
              setProfileState(!profileState);
            }}
          />
          {profileState === true ? (
            <ModalContainer>
              <UserBox>
                <UserInfoBox>
                  <ProfileImg src='./sources/defaultprofile.png' />
                  <InfoColumnBox>
                    <NickName>조병민님</NickName>
                    <Email>chobm1027@naver.com</Email>
                  </InfoColumnBox>
                </UserInfoBox>
                <MenuItem style={{ paddingTop: '1.125rem' }}>나의 작업</MenuItem>
                <MenuItem>프로필 관리</MenuItem>
                <InfoBar />
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem('AccessToken');
                    navigate('/');
                  }}
                >
                  로그아웃
                </MenuItem>
              </UserBox>
            </ModalContainer>
          ) : null}
        </>
      ) : (
        <div style={{ display: 'flex' }}>
          <NonLoginState>
            <p
              className='login'
              onClick={() => {
                onClickMenu('login');
              }}
            >
              LOGIN
            </p>
            <p
              className='signUp'
              onClick={() => {
                onClickMenu('signup');
              }}
            >
              SIGN UP
            </p>
          </NonLoginState>
        </div>
      )}
    </Container>
  );
}
