import React, { useState } from 'react';
import { Column1, Column2, Container, MenuBox, MenuCircle, ToolImg } from './ToolMenu.styled';

export default function ToolMenu() {
  const [toolState, setToolState] = useState('pen');

  const isToolActive = (name) => {
    return name === toolState;
  };

  return (
    <Container>
      <Column1>
        <MenuBox position={true}>
          <MenuCircle
            onClick={() => {
              setToolState('pen');
            }}
            toolState={isToolActive('pen') ? 'pen' : 'none'}
          >
            <ToolImg className='pen' src='./sources/pen.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('rectangle');
            }}
            toolState={isToolActive('rectangle') ? 'rectangle' : 'none'}
          >
            <ToolImg className='rectangle' src='./sources/rectangle.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('line');
            }}
            toolState={isToolActive('line') ? 'line' : 'none'}
          >
            <ToolImg className='line' src='./sources/line.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('text');
            }}
            toolState={isToolActive('text') ? 'text' : 'none'}
          >
            <ToolImg className='text' src='./sources/text.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('left');
            }}
            toolState={isToolActive('left') ? 'left' : 'none'}
          >
            <ToolImg className='left' src='./sources/left.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('right');
            }}
            toolState={isToolActive('right') ? 'right' : 'none'}
          >
            <ToolImg className='right' src='./sources/right.png' />
          </MenuCircle>
        </MenuBox>
      </Column1>
      <Column2>
        <MenuBox position={true}>
          <MenuCircle
            onClick={() => {
              setToolState('eraser');
            }}
            toolState={isToolActive('eraser') ? 'eraser' : 'none'}
          >
            <ToolImg className='eraser' src='./sources/eraser.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('circle');
            }}
            toolState={isToolActive('circle') ? 'circle' : 'none'}
          >
            <ToolImg className='circle' src='./sources/circle.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('paint');
            }}
            toolState={isToolActive('paint') ? 'paint' : 'none'}
          >
            <ToolImg className='paint' src='./sources/paint.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('trashbox');
            }}
            toolState={isToolActive('trashbox') ? 'trashbox' : 'none'}
          >
            <ToolImg className='trashbox' src='./sources/trashbox.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('spoid');
            }}
            toolState={isToolActive('spoid') ? 'spoid' : 'none'}
          >
            <ToolImg className='spoid' src='./sources/spoid.png' />
          </MenuCircle>
        </MenuBox>
        <MenuBox position={false}>
          <MenuCircle
            onClick={() => {
              setToolState('color');
            }}
            toolState={isToolActive('color') ? 'color' : 'none'}
          >
            <ToolImg className='color' src='./sources/color.png' />
          </MenuCircle>
        </MenuBox>
      </Column2>
    </Container>
  );
}
