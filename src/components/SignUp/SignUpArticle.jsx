import React, { useEffect, useState } from 'react';
import { Container, ErrorMsg, HeaderBar, HeaderText, InputBox, InputTitle, LoginBtn } from './SignUpArticle.styled';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../api/apiPOST';
import { useNavigate } from 'react-router-dom';

export default function SignUpArticle() {
  const [errorMsg, setErrorMsg] = useState({ nickname: '', email: '', password: '', passwordCheck: '' });
  const [userInfo, setUserInfo] = useState({ nickname: '', email: '', password: '' });
  const [passwordCheck, setPasswordCheck] = useState('');
  const [btnState, setBtnState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let regpw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (userInfo.nickname !== '' && regpw.test(userInfo.password) && userInfo.email.includes('@') && userInfo.password === passwordCheck) {
      setBtnState(true);
      console.log(btnState);
    } else {
      setBtnState(false);
      console.log(btnState);
    }
  }, [userInfo, passwordCheck]);

  const handleOnchange = (e) => {
    if (e.target.type === 'text') {
      const nickname = e.target.value;
      setUserInfo({ ...userInfo, nickname });
    }
    if (e.target.type === 'email') {
      const email = e.target.value;
      setUserInfo({ ...userInfo, email });
    }
    if (e.target.type === 'password') {
      const password = e.target.value;
      setUserInfo({ ...userInfo, password });
    }
  };

  const { mutate: mutateSignup } = useMutation(signUp, {
    onSuccess: (response) => {
      navigate('/login');
      console.log(response);
    },
    onError: (response) => {
      console.log(response.response.data.error);
      if (response.response.data.error === '이미 존재하는 이메일입니다.') {
        setErrorMsg({ ...errorMsg, email: response.response.data.error });
      }
      if (response.response.data.error === '이미 존재하는 닉네임입니다.') {
        setErrorMsg({ ...errorMsg, nickname: response.response.data.error });
      }
    },
  });

  return (
    <Container>
      <HeaderText>이메일로 가입</HeaderText>
      <HeaderBar />
      <div style={{ paddingLeft: '1rem', paddingTop: '3.5rem' }}>
        <InputTitle>닉네임</InputTitle>
        <InputBox
          type='text'
          value={userInfo.nickname}
          onChange={(e) => {
            handleOnchange(e);
          }}
          placeholder='닉네임'
        />
        <ErrorMsg>{errorMsg.nickname}</ErrorMsg>

        <div style={{ paddingBottom: '2.125rem' }} />
        <InputTitle>이메일</InputTitle>
        <InputBox
          type='email'
          value={userInfo.email}
          onChange={(e) => {
            handleOnchange(e);
          }}
          placeholder='aid@email.com'
        />
        <ErrorMsg>{errorMsg.email}</ErrorMsg>
        {/* 이미 존재하는 이메일이거나 양식을 잘못 입력하셨습니다. */}

        <div style={{ paddingBottom: '2.125rem' }} />
        <InputTitle>비밀번호</InputTitle>
        <InputBox
          type='password'
          value={userInfo.password}
          onChange={(e) => {
            handleOnchange(e);
          }}
          placeholder='영문(대,소문자), 특수문자 포함하여 8~16자 이내 입력'
        />
        <ErrorMsg>{errorMsg.password}</ErrorMsg>
        {/* 비밀번호 양식이 올바르지 않습니다. */}

        <div style={{ paddingBottom: '2.125rem' }} />
        <InputTitle>비밀번호 확인</InputTitle>
        <InputBox
          type='password'
          value={passwordCheck}
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
          placeholder='비밀번호 재입력'
        />
        <ErrorMsg>{errorMsg.passwordCheck}</ErrorMsg>
        {/* 비밀번호가 일치하지 않습니다. */}

        <div style={{ paddingBottom: '2.125rem' }} />
        <LoginBtn
          state={btnState}
          onClick={() => {
            mutateSignup(userInfo);
          }}
        >
          가입하기
        </LoginBtn>
      </div>
    </Container>
  );
}
