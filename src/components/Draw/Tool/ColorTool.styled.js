import { styled } from 'styled-components';
import { ChromePicker } from 'react-color';

export const Container = styled.div`
  position: absolute;
  margin-left: 1.5rem;
  margin-top: 29.4375rem;
  margin-bottom: 1.875rem;
  width: 4.5rem;
  height: 30.6875rem;
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.75rem #848484;
  border-radius: 1.25rem;
`;

export const Color = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 1.125rem;
  margin-top: 1.125rem;
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;
  border: 0.1875rem solid #848484;
  cursor: pointer;
`;

export const StyledColorPicker = styled(ChromePicker)`
  position: absolute;
  margin-top: 1.125rem;
  margin-left: 5.625rem;
`;

export const HorizonBar = styled.div`
  display: flex;
  width: 1.25rem;
  border: 0.0625rem solid #d9d9d9;
  margin-top: 0.75rem;

  margin-left: 1.625rem;
`;

export const ToolBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  cursor: pointer;

  border-radius: 0.5rem;
  &:hover {
    background: #838383;
  }
`;

export const ColorItem = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: white;
  background-color: ${({ color }) => color};
  border-radius: 6.25rem;
  border: 0.1875rem solid #848484;
  cursor: pointer;
`;

export const ToolBox2 = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background: #838383;
  }
`;
