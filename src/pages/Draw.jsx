import React from 'react';
import styled from 'styled-components';
import Canvas from '../components/Draw/Canvas';
import Export from '../components/Draw/Export';
import Tool from '../components/Draw/Tool';
export default function Draw() {
  return (
    <Container>
      <Tool />
      <Canvas />
      <Export />
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
