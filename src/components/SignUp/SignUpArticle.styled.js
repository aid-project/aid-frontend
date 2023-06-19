import styled from 'styled-components';

export const Container = styled.div`
  width: 33.5625rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 6.25rem;
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
