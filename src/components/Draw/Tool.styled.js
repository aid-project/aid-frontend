import styled from 'styled-components';

export const Container = styled.div`
  width: 13.125rem;
  margin-right: 0;
  height: 100%;
  background-color: blue;
`;

export const ToolMenuBtn = styled.div`
  width: ${({ btnState }) => (btnState === false ? '3.4375rem' : '3.75rem')};
  height: ${({ btnState }) => (btnState === false ? '3.4375rem' : '3.75rem')};
  border-radius: 100%;

  background-color: ${({ btnState }) => (btnState === false ? '#ffffff' : '#d9d9d9')};
  box-shadow: 0px 0.125rem 0.75rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    /* background-color: #d9d9d9; */
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const ToolMenuBox = styled.div`
  margin-top: 1.625rem;
  margin-left: 1.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
`;

export const ToolMenuImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;
