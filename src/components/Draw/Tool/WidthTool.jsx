import React, { useState } from 'react';
import {
  Container,
  ListColumnBox,
  ToolRowBox,
  ToolWidthList,
  ToolWidthMax,
  ToolWidthMin,
  VerticalBar,
  WidthBar1,
  WidthBar2,
  WidthBar3,
  WidthBar4,
  WidthBar5,
  WidthBarBox1,
  WidthBarBox2,
  WidthBarBox3,
  WidthBarBox4,
  WidthBarBox5,
} from './WidthTool.styled';

export default function WidthTool({ setWidth }) {
  const [widthState, setWidthState] = useState(1);

  const handleClick = (num) => {
    setWidthState(num);
    if (num === 1) {
      setWidth(5);
    } else if (num === 2) {
      setWidth(10);
    } else if (num === 3) {
      setWidth(20);
    } else if (num === 4) {
      setWidth(30);
    } else if (num === 5) {
      setWidth(50);
    }
  };

  return (
    <Container>
      <ToolWidthMin src='./sources/Tool/widthmin.png' />
      <ToolRowBox>
        <ToolWidthList src='./sources/Tool/widthlist.png' />
        <ListColumnBox>
          <WidthBarBox1 onClick={() => handleClick(1)}></WidthBarBox1>
          <WidthBarBox2 onClick={() => handleClick(2)}></WidthBarBox2>
          <WidthBarBox3 onClick={() => handleClick(3)}></WidthBarBox3>
          <WidthBarBox4 onClick={() => handleClick(4)}></WidthBarBox4>
          <WidthBarBox5 onClick={() => handleClick(5)}></WidthBarBox5>
          <WidthBar1 widthState={widthState === 1} />
          <WidthBar2 widthState={widthState === 2} />
          <WidthBar3 widthState={widthState === 3} />
          <WidthBar4 widthState={widthState === 4} />
          <WidthBar5 widthState={widthState === 5} />
          <VerticalBar />
        </ListColumnBox>
      </ToolRowBox>
      <ToolWidthMax src='./sources/Tool/widthmax.png' />
    </Container>
  );
}
