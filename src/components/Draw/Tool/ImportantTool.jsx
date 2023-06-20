import React from 'react';
import { Container, ToolAi, ToolBox, VerticalBar } from './ImportantTool.styled';

export default function ImportantTool({ extractImage, clearCanvas, setBackground }) {
  return (
    <Container>
      <ToolBox onClick={extractImage}>
        <img src='./sources/Tool/Ai.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox onClick={clearCanvas}>
        <img src='./sources/Tool/Initialization.png' />
      </ToolBox>
      {/* <VerticalBar /> */}
      {/* <ToolBox>
        <img src='./sources/Tool/reverse.png' />
      </ToolBox> */}
    </Container>
  );
}
