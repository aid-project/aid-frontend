import styled from 'styled-components';

export const Container = styled.div`
  width: 8.4rem;
  height: 21.5rem;
  box-shadow: 0rem 0.0625rem 0.75rem #848484;
  background-color: white;
  border-radius: 12px;
  margin-left: 1.375rem;
  margin-top: 1.625rem;
  display: flex;
`;

export const MenuBox = styled.div`
  margin-top: ${({ position }) => (position === false ? '0.5rem' : '0rem')};
  width: 2.8125rem;
  height: 2.8125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuCircle = styled.div`
  width: ${({ toolState }) => (['pen', 'rectangle', 'line', 'text', 'left', 'right', 'eraser', 'circle', 'paint', 'trashbox', 'spoid', 'color'].includes(toolState) ? '2.8125rem' : '2.5rem')};

  height: ${({ toolState }) => (['pen', 'rectangle', 'line', 'text', 'left', 'right', 'eraser', 'circle', 'paint', 'trashbox', 'spoid', 'color'].includes(toolState) ? '2.8125rem' : '2.5rem')};
  /* box-shadow: 0rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.25); */
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  background-color: ${({ toolState }) => (['pen', 'rectangle', 'line', 'text', 'left', 'right', 'eraser', 'circle', 'paint', 'trashbox', 'spoid', 'color'].includes(toolState) ? '#d9d9d9' : 'white')};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    width: 2.8125rem;
    height: 2.8125rem;
  }
`;

export const Column1 = styled.div`
  padding-left: 1.125rem;
  padding-top: 1.1875rem;
`;

export const Column2 = styled.div`
  padding-left: 0.625rem;
  padding-top: 1.1875rem;
`;

export const ToolImg = styled.img`
  &.pen {
    width: 1.6875rem; // 27px
    height: 1.625rem; // 26px
  }

  &.rectangle {
    width: 1.5rem; // 24px
    height: 1.5rem;
  }

  &.line {
    width: 1.875rem; // 30px
    height: 1.0625rem; // 17px
  }

  &.text {
    width: 1.25rem; // 20px
    height: 1.25rem;
  }

  &.left {
    width: 1.5rem;
    height: 1.625rem;
  }

  &.right {
    width: 1.5rem;
    height: 1.6875rem; // 27px
  }

  &.eraser {
    width: 1.75rem; // 28px
    height: 1.625rem;
  }

  &.circle {
    width: 1.625rem;
    height: 1.625rem;
  }

  &.paint {
    width: 1.625rem;
    height: 1.5rem;
  }

  &.trashbox {
    width: 1.125rem;
    height: 1.4375rem;
  }

  &.spoid {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
