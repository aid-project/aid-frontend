import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useMutation } from '@tanstack/react-query';
import { SignUp } from './api/apiPOST';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [userInfo, setUserInfo] = useState({ nickname: '병민', email: 'chobm1027@naver.com', password: '123456Aa!' });
  const { mutate: mutateLogin } = useMutation(SignUp, {
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (response) => {
      console.log(response);
    },
  });

  return (
    <>
      {/* <button
        onClick={() => {
          mutateLogin(userInfo);
        }}
      >
        회원가입
      </button> */}
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
