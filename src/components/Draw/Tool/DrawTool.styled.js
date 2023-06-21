import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  right: 0;
  width: 33.6875rem;
  height: 4.5rem;
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.75rem #848484;
  border-radius: 1.25rem;
`;

export const ToolBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  cursor: pointer;
  background: ${({ toolState }) => (['pen', 'eraser', 'rectangle', 'circle', 'line', 'left', 'right'].includes(toolState) ? '#838383' : 'white')};
  border-radius: 0.5rem;
  &:hover {
    background: #838383;
  }
`;

export const VerticalBar = styled.div`
  height: 2.5rem;
  margin-left: 0.75rem;
  border: 0.0625rem solid #d9d9d9;
`;
