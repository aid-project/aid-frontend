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
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
