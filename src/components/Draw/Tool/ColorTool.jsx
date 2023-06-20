import React, { useCallback, useEffect } from 'react';
import { Color, Container, StyledColorPicker } from './ColorTool.styled';
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
    </Container>
  );
}
