import styled from 'styled-components';

export const Container = styled.div`
  width: 32.9375rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 10.1875rem;
`;

export const HeaderText = styled.div`
  align-items: left;
  padding-bottom: 1.3125rem;
  font-weight: 600;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  cursor: default;
`;

export const HeaderBar = styled.div`
  width: 32.9375rem;
  border: 0.0625rem solid #d9d9d9;
`;

export const InputTitle = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-bottom: 0.75rem;
  cursor: default;
`;

export const InputBox = styled.input`
  width: 30rem;
  height: 3.125rem;
  padding-left: 1.8125rem;
  box-sizing: border-box;
  border: 0.0625rem solid #d9d9d9;
  border-radius: 0.3125rem;
  outline: none;

  &::placeholder {
    color: #d9d9d9;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
  }
`;

export const ErrorMsg = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.6875rem;
  color: #ff0000;
  cursor: default;
`;

export const SignUpBtn = styled.button`
  margin-top: 1.4375rem;
  background: ${({ state }) => (state === true ? '#0d78ff' : 'gray')};
  width: 30rem;
  height: 4.0625rem;
  border: none;
  border-radius: 0.3125rem;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
  cursor: pointer;
`;

export const SignUp = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.125rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: #848484;
  cursor: default;

  .signUpBtn {
    cursor: pointer;
    margin-left: 0.75rem;
    color: #0d78ff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FindPassword = styled.p`
  width: 11.4375rem;
  height: 1.1875rem;
  margin: 0 auto;
  margin-top: 0.8125rem;
  margin-bottom: 1.75rem;
  color: #848484;
  font-size: 1rem;
  line-height: 1.1875rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const KakaoSignUpBtn = styled.button`
  margin-top: 1.75rem;
  background: #ffcd00;
  width: 30rem;
  height: 4.0625rem;
  border: none;
  border-radius: 0.3125rem;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #000000;
  cursor: pointer;
  margin-left: 1rem;
`;
