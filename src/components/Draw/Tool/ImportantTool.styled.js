import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  width: 9.2rem;
  height: 4.5rem;
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.75rem #848484;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
`;

export const ToolBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  cursor: pointer;
  background: white;

  &:hover {
    background: #838383;
    border-radius: 0.5rem;
  }
`;

export const VerticalBar = styled.div`
  height: 2.5rem;
  margin-left: 0.75rem;
  border: 0.0625rem solid #d9d9d9;
`;
