import React, { useEffect, useState } from 'react';
import { Container, ErrorMsg, FindPassword, HeaderBar, HeaderText, InputBox, InputTitle, KakaoSignUpBtn, SignUp, SignUpBtn } from './LoginArticle.styled';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../../api/apiPOST';
// 이메일 양식을 잘못 입력하셨습니다.
// 비밀번호가 일치하지 않습니다.
export default function Login() {
  const [errorMsg, setErrorMsg] = useState({ email: '', password: '' });
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [btnState, setBtnState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let regpw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (regpw.test(userInfo.password) && userInfo.email.includes('@')) {
      setBtnState(true);
      console.log(btnState);
    } else {
      setBtnState(false);
      console.log(btnState);
    }
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const onChangeInfo = (e) => {
    if (e.target.type === 'email') setUserInfo({ ...userInfo, email: e.target.value });
    if (e.target.type === 'password') setUserInfo({ ...userInfo, password: e.target.value });
    console.log(userInfo);
  };

  const { mutate: mutateLogin } = useMutation(signIn, {
    onSuccess: (response) => {
      localStorage.setItem('AccessToken', response.data.token);
      console.log(response);
      navigate('/');
    },
    onError: (response) => {
      console.log(response);
    },
  });
  return (
    <>
      <Container>
        <HeaderText>로그인</HeaderText>
        <HeaderBar />
        <form onSubmit={handleSubmit} style={{ paddingLeft: '1rem', paddingTop: '3.0625rem' }}>
          <InputTitle>이메일</InputTitle>
          <InputBox
            value={userInfo.email}
            onChange={(event) => {
              onChangeInfo(event);
            }}
            type='email'
            placeholder='aid@email.com'
          />
          <ErrorMsg>{errorMsg.email}</ErrorMsg>
          <InputTitle>비밀번호</InputTitle>
          <InputBox
            value={userInfo.password}
            onChange={(event) => {
              onChangeInfo(event);
            }}
            type='password'
            placeholder='비밀번호 입력'
          />
          <ErrorMsg>{errorMsg.password}</ErrorMsg>
          <SignUpBtn
            state={btnState}
            onClick={() => {
              navigate('/');
            }}
          >
            로그인
          </SignUpBtn>
          <SignUp>
            <p>아직 회원이 아니신가요?</p>
            <p
              className='signUpBtn'
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </p>
          </SignUp>
          <FindPassword
            onClick={() => {
              alert('준비중');
            }}
          >
            비밀번호를 잊어버렸어요
          </FindPassword>
        </form>
        <HeaderBar />
        <KakaoSignUpBtn
          onClick={() => {
            alert('준비중');
          }}
        >
          카카오로 로그인
        </KakaoSignUpBtn>
      </Container>
    </>
  );
}
