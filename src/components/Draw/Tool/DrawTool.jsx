import React, { useState } from 'react';
import { Container, Pen, ToolBox, VerticalBar } from './DrawTool.styled';

export default function DrawTool({ setPenState, setEraserState, setRectangleState, setCircleState, setLineState }) {
  const [toolState, setToolState] = useState('pen');

  const onChangeState = (tool) => {
    setToolState(tool);
  };

  const isToolActive = (name) => {
    return name === toolState;
  };

  return (
    <Container>
      <ToolBox
        toolState={isToolActive('pen') ? 'pen' : 'none'}
        onClick={() => {
          onChangeState('pen');
          setPenState(true);
          setEraserState(false);
          setRectangleState(false);
          setCircleState(false);
          setLineState(false);
        }}
      >
        <img src='./sources/Tool/pen.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox
        toolState={isToolActive('eraser') ? 'eraser' : 'none'}
        onClick={() => {
          onChangeState('eraser');
          setPenState(false);
          setEraserState(true);
          setRectangleState(false);
          setCircleState(false);
          setLineState(false);
        }}
      >
        <img src='./sources/Tool/eraser.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox
        toolState={isToolActive('rectangle') ? 'rectangle' : 'none'}
        onClick={() => {
          onChangeState('rectangle');
          setPenState(false);
          setEraserState(false);
          setRectangleState(true);
          setCircleState(false);
          setLineState(false);
        }}
      >
        <img src='./sources/Tool/rectangle.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox
        toolState={isToolActive('circle') ? 'circle' : 'none'}
        onClick={() => {
          onChangeState('circle');
          setPenState(true);
          setEraserState(false);
          setRectangleState(false);
          setCircleState(true);
          setLineState(false);
        }}
      >
        <img src='./sources/Tool/circle.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox
        toolState={isToolActive('line') ? 'line' : 'none'}
        onClick={() => {
          onChangeState('line');
          setPenState(true);
          setEraserState(false);
          setRectangleState(false);
          setCircleState(false);
          setLineState(true);
        }}
      >
        <img src='./sources/Tool/line.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox
        toolState={isToolActive('left') ? 'left' : 'none'}
        onClick={() => {
          onChangeState('left');
        }}
      >
        <img src='./sources/Tool/left.png' />
      </ToolBox>
      <VerticalBar />
      <ToolBox
        toolState={isToolActive('right') ? 'right' : 'none'}
        onClick={() => {
          onChangeState('right');
        }}
      >
        <img src='./sources/Tool/right.png' />
      </ToolBox>
    </Container>
  );
}
