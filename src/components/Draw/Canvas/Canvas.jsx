import React, { useEffect, useRef, useState } from 'react';
import DrawModal from '../Modal/DrawModal';

export default function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    // canvas.style.width = window.innerWidth * 2;
    // canvas.style.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

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

  return (
    <>
      <canvas onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef}></canvas>
      <button onClick={extractImage}>추출</button>
      {/* <button onClick={handleOpenModal}>모달</button> */}
      {isOpen ? <DrawModal handleClose={handleOpenModal} imgSrc={imgSrc} /> : null}
    </>
  );
}
