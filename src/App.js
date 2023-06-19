import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SignIn, SignUp } from './api/apiPOST';
import { useState } from 'react';
import { Info, Test } from './api/apiGET';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  // const [userInfo, setUserInfo] = useState({ nickname: '병민2', email: 'chobm1030@naver.com', password: '123456Aa!' });
  // const [userLogin, setUserLogin] = useState({ email: 'chobm1030@naver.com', password: '123456Aa!' });
  // const { mutate: mutateLogin } = useMutation(SignUp, {
  //   onSuccess: (response) => {
  //     console.log(response);
  //   },
  //   onError: (response) => {
  //     console.log(response);
  //   },
  // });

  // const { mutate: mutateLogin2 } = useMutation(SignIn, {
  //   onSuccess: (response) => {
  //     localStorage.setItem('AccessToken', response.data.token);
  //     console.log(response);
  //   },
  //   onError: (response) => {
  //     console.log(response);
  //   },
  // });

  // const { data } = useQuery(['test'], Info, {
  //   onSuccess: (response) => {
  //     console.log(response);
  //   },
  //   onError: (response) => {
  //     console.log('회원정보 조회', response);
  //   },
  // });

  return (
    <>
      {/* <button
        onClick={() => {
          mutateLogin(userInfo);
        }}
      >
        회원가입
      </button>
      <button
        onClick={() => {
          mutateLogin2(userLogin);
        }}
      >
        로그인
      </button> */}
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
