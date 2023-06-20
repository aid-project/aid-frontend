import React from 'react';
import styled from 'styled-components';
import Canvas from '../components/Draw/Canvas/Canvas';

export default function Draw() {
  return (
    <Container>
      <Canvas />
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  flex-grow: 1;
  background-color: #fff;
`;
