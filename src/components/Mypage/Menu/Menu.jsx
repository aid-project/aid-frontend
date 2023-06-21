import React from 'react';
import { Header, MenuBox, MenuContainer, MenuImg, RightImg } from './Menu.styled';
import { useSetRecoilState } from 'recoil';
import { menuState } from '../../../store/store';

export default function Menu() {
  const setMenuState = useSetRecoilState(menuState);
  return (
    <MenuContainer>
      <Header>나의 작업</Header>
      <MenuBox
        onClick={() => {
          setMenuState('pictogram');
        }}
      >
        <MenuImg src='./sources/mypictogram.png' />

        <span className='text'>내 그림</span>
        <RightImg src='./sources/menuright.png' />
      </MenuBox>
      <MenuBox
        onClick={() => {
          setMenuState('bookmark');
        }}
      >
        <MenuImg src='./sources/mybookmark.png' />
        <span className='text'>즐겨찾기</span>
        <RightImg src='./sources/menuright.png' />
      </MenuBox>
      <Header style={{ paddingTop: '4.5625rem' }}>프로필 관리</Header>
      <MenuBox
        onClick={() => {
          setMenuState('changeprofile');
        }}
      >
        <MenuImg src='./sources/changeprofile.png' />

        <span className='text'>정보수정</span>
        <RightImg src='./sources/menuright.png' />
      </MenuBox>
      <MenuBox
        onClick={() => {
          setMenuState('changepassword');
        }}
      >
        <MenuImg src='./sources/changepassword.png' />

        <span className='text'>비밀번호 변경</span>
        <RightImg src='./sources/menuright.png' />
      </MenuBox>
      <MenuBox
        onClick={() => {
          setMenuState('withdraw');
        }}
      >
        <MenuImg src='./sources/mybookmark.png' />

        <span className='text'>회원 탈퇴</span>
        <RightImg src='./sources/menuright.png' />
      </MenuBox>
    </MenuContainer>
  );
}
