import React from 'react';
import Menu from '../components/Mypage/Menu/Menu';
import Pictogram from '../components/Mypage/Article/Pictogram';
import Bookmark from '../components/Mypage/Article/Bookmark';
import ChangeProfile from '../components/Mypage/Article/ChangeProfile';
import ChangePassword from '../components/Mypage/Article/ChangePassword';
import Withdraw from '../components/Mypage/Article/Withdraw';
import { useRecoilValue } from 'recoil';
import { menuState } from '../store/store';

export default function Mypage() {
  const state = useRecoilValue(menuState);
  return (
    <div style={{ display: 'flex' }}>
      <Menu />
      {state === 'pictogram' ? (
        <Pictogram />
      ) : state === 'bookmark' ? (
        <Bookmark />
      ) : state === 'changeprofile' ? (
        <ChangeProfile />
      ) : state === 'changepassword' ? (
        <ChangePassword />
      ) : state === 'withdraw' ? (
        <Withdraw />
      ) : null}
    </div>
  );
}
