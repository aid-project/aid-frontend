import React, { useEffect, useRef, useState } from 'react';
import DrawModal from '../Modal/DrawModal';
import ImportantTool from '../Tool/ImportantTool';
import WidthTool from '../Tool/WidthTool';
import ColorTool from '../Tool/ColorTool';

export default function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [Width, setWidth] = useState(5);
  const [color, setColor] = useState('black');

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
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const extractImage = () => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.src = canvas.toDataURL();
    setImgSrc(image.src);
    console.log('주소1', imgSrc);
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
      <canvas onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef}></canvas>
      {isOpen ? <DrawModal handleClose={handleOpenModal} imgSrc={imgSrc} /> : null}
      <ImportantTool extractImage={extractImage} clearCanvas={clearCanvas} />
      <WidthTool setWidth={setWidth} />
      <ColorTool color={color} setColor={setColor} />
    </>
  );
}
