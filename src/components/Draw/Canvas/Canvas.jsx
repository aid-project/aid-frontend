import React, { useEffect, useRef, useState } from 'react';
import DrawModal from '../Modal/DrawModal';
import ImportantTool from '../Tool/ImportantTool';
import WidthTool from '../Tool/WidthTool';
import ColorTool from '../Tool/ColorTool';
import DrawTool from '../Tool/DrawTool';
import styled from 'styled-components';
import penCursor from '../../../cursorImg/pencursor.png';
import eraserCursor from '../../../cursorImg/erasercursor.png';

export default function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [Width, setWidth] = useState(5);
  const [color, setColor] = useState('black');
  const [penState, setPenState] = useState(true);
  const [eraserState, setEraserState] = useState(false);
  const [rectangleState, setRectangleState] = useState(false);
  const [circleState, setCircleState] = useState(false);
  const [lineState, setLineState] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = Width;
    contextRef.current = context;
    context.fillStyle = 'transparent';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const context = contextRef.current;
    context.lineWidth = Width;
  }, [Width]);

  useEffect(() => {
    const context = contextRef.current;
    context.strokeStyle = color;
  }, [color]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (penState) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    } else if (eraserState) {
      contextRef.current.globalCompositeOperation = 'destination-out';
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    } else if (rectangleState) {
      setStartX(offsetX);
      setStartY(offsetY);
      setIsDrawing(true);
    }
  };

  const finishDrawing = ({ nativeEvent }) => {
    contextRef.current.closePath();
    setIsDrawing(false);
    contextRef.current.globalCompositeOperation = 'source-over';
    if (rectangleState && startX !== null && startY !== null) {
      const canvas = canvasRef.current;
      const context = contextRef.current;
      const { offsetX, offsetY } = nativeEvent;
      const width = offsetX - startX;
      const height = offsetY - startY;
      context.fillRect(startX, startY, width, height);
      context.strokeRect(startX, startY, width, height);
      setStartX(null);
      setStartY(null);
    }
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    if (penState) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (eraserState) {
      context.globalCompositeOperation = 'destination-out';
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (rectangleState) {
      const canvas = canvasRef.current;
      const startX = canvas.offsetLeft;
      const startY = canvas.offsetTop;
      const width = offsetX - startX;
      const height = offsetY - startY;

      context.fillRect(startX, startY, width, height);
    }
  };

  const extractImage = () => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.src = canvas.toDataURL();
    setImgSrc(image.src);
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <StyledCanvas
        penState={penState}
        eraserState={eraserState}
        rectangleState={rectangleState}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></StyledCanvas>
      {isOpen ? <DrawModal handleClose={handleOpenModal} imgSrc={imgSrc} /> : null}
      <DrawTool
        penState={penState}
        setPenState={setPenState}
        eraserState={eraserState}
        setEraserState={setEraserState}
        rectangleState={rectangleState}
        setRectangleState={setRectangleState}
        setCircleState={setCircleState}
        setLineState={setLineState}
      />
      <ImportantTool extractImage={extractImage} clearCanvas={clearCanvas} />
      <WidthTool setWidth={setWidth} />
      <ColorTool color={color} setColor={setColor} />
    </>
  );
}

export const StyledCanvas = styled.canvas`
  cursor: ${({ penState, eraserState }) => {
    if (penState) return `url(${penCursor}), auto`;
    if (eraserState) return `url(${eraserCursor}), auto`;
  }};
`;
