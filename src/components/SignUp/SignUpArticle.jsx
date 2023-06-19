import React, { useState } from 'react';
import { Container, HeaderBar, HeaderText, InputBox, InputTitle } from './SignUpArticle.styled';

export default function SignUpArticle() {
  const [errorMsg, setErrorMsg] = useState({ email: '', password: '', passwordCheck: '' });
  return (
    <Container>
      <HeaderText>이메일로 가입</HeaderText>
      <HeaderBar />
      <div style={{ paddingLeft: '1rem', paddingTop: '3.5rem' }}>
        <InputTitle>이름</InputTitle>
        <InputBox placeholder='이름' />
        <div style={{ paddingBottom: '2.125rem' }} />
        <InputTitle>이메일</InputTitle>
        <InputBox placeholder='aid@email.com' />
      </div>
    </Container>
  );
}
