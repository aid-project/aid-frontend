import React, { useState } from 'react';
import { Container, ToolMenuBtn, ToolMenuImg, ToolMenuBox } from './Tool.styled';
import ToolMenu from './ToolMenu/ToolMenu';

export default function Tool() {
  const [ToolBtnState, setToolBtnState] = useState(false);
  return (
    <Container>
      <ToolMenuBox>
        <ToolMenuBtn
          onClick={() => {
            setToolBtnState(!ToolBtnState);
            console.log(ToolBtnState);
          }}
          btnState={ToolBtnState}
        >
          <ToolMenuImg src='./sources/toolmenu.png' alt='' />
        </ToolMenuBtn>
      </ToolMenuBox>
      {ToolBtnState === true ? <ToolMenu /> : null}
    </Container>
  );
}
