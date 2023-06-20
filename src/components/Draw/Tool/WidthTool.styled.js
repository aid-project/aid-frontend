import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-top: 12.625rem;
  margin-left: 1.5rem;
  width: 4.5rem;
  height: 15.625rem;
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.75rem #848484;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const ToolWidthMin = styled.img`
  padding-top: 1.375rem;
  padding-left: 2.125rem;
  width: 0.25rem;
  height: 0.25rem;
`;

export const ToolRowBox = styled.div`
  display: flex;
`;

export const ToolWidthList = styled.img`
  width: 0.625rem;
  padding-left: 0.5rem;
  padding-top: 0.9375rem;
`;

export const VerticalBar = styled.div`
  width: 0.25rem;
  height: 10.125rem;
  background: #000000;
  border-radius: 6.25rem;
  margin-left: 0.5rem;
`;

export const ToolWidthMax = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
`;

export const ListColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-top: 1.125rem;
`;

export const WidthBarBox1 = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 1.4rem;
  cursor: pointer;
`;

export const WidthBarBox2 = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 2.5rem;
  margin-top: 1.4rem;
  cursor: pointer;
`;

export const WidthBarBox3 = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 2.5rem;
  margin-top: 3.9rem;
  cursor: pointer;
`;

export const WidthBarBox4 = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 2.5rem;
  margin-top: 6.4rem;
  cursor: pointer;
`;

export const WidthBarBox5 = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 1.7rem;
  margin-top: 8.9rem;
  cursor: pointer;
`;

export const WidthBar1 = styled.div`
  position: absolute;
  width: 1rem;
  height: 0.375rem;
  background: ${({ widthState }) => (widthState === true ? '#000000' : null)};
  border-radius: 6.25rem;
  margin-left: 0.15rem;
  cursor: pointer;
`;

export const WidthBar2 = styled.div`
  position: absolute;
  width: 1rem;
  height: 0.375rem;
  background: ${({ widthState }) => (widthState === true ? '#000000' : null)};
  border-radius: 6.25rem;
  margin-left: 0.15rem;
  margin-top: 2.4rem;
  cursor: pointer;
`;

export const WidthBar3 = styled.div`
  position: absolute;
  width: 1rem;
  height: 0.375rem;
  background: ${({ widthState }) => (widthState === true ? '#000000' : null)};
  border-radius: 6.25rem;
  margin-left: 0.15rem;
  margin-top: 4.9rem;
  cursor: pointer;
`;

export const WidthBar4 = styled.div`
  position: absolute;
  width: 1rem;
  height: 0.375rem;
  background: ${({ widthState }) => (widthState === true ? '#000000' : null)};
  border-radius: 6.25rem;
  margin-left: 0.15rem;
  margin-top: 7.36rem;
  cursor: pointer;
`;

export const WidthBar5 = styled.div`
  position: absolute;
  width: 1rem;
  height: 0.375rem;
  background: ${({ widthState }) => (widthState === true ? '#000000' : null)};
  border-radius: 6.25rem;
  margin-left: 0.15rem;
  margin-top: 9.8rem;
  cursor: pointer;
`;
