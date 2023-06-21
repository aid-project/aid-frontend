import React, { useCallback, useEffect } from 'react';
import { Color, ColorItem, Container, HorizonBar, StyledColorPicker, ToolBox, ToolBox2 } from './ColorTool.styled';
import { useState } from 'react';

export default function ColorTool({ color, setColor }) {
  const [pickerState, setPickerState] = useState(false);

  const handleColorChange = useCallback((newColor) => {
    setColor(newColor.hex);
  }, []);

  return (
    <Container>
      {pickerState === true ? <StyledColorPicker color={color} onChange={handleColorChange} /> : null}

      <Color
        color={color}
        onClick={() => {
          setPickerState(!pickerState);
        }}
      />
      <HorizonBar />
      <ToolBox>
        <img src='./sources/Tool/spoid.png' />
      </ToolBox>
      <HorizonBar />
      <ToolBox>
        <img src='./sources/Tool/top.png' />
      </ToolBox>
      <ToolBox2>
        <ColorItem />
      </ToolBox2>
      <ToolBox2>
        <ColorItem />
      </ToolBox2>
      <ToolBox2>
        <ColorItem />
      </ToolBox2>
      <ToolBox2>
        <ColorItem />
      </ToolBox2>
      <ToolBox2>
        <ColorItem />
      </ToolBox2>

      <HorizonBar />
      <ToolBox>
        <img src='./sources/Tool/bottom.png' />
      </ToolBox>
    </Container>
  );
}
