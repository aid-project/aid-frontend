import React, { useEffect, useRef, useState } from 'react';
import 'cropperjs/dist/cropper.css';
import { Bar, Btn, BtnBox, Guide, Header, ModalBackdrop, ModalView, StyledCropper } from './DrawModal.styled';
import TagModal from './TagModal';
import { useRecoilState } from 'recoil';
import { drawModalState } from '../../../store/store';
import FinishModal from './FinishModal';

export default function DrawModal({ handleClose, imgSrc }) {
  const cropperRef = useRef(null);
  const [originImg, setOriginImg] = useState(null);
  const [modalState, setModalState] = useRecoilState(drawModalState);

  const { crop, tag, finish } = modalState;

  useEffect(() => {
    setOriginImg(imgSrc);
  }, []);

  const [croppedImage, setCroppedImage] = useState(null);

  function resizeImage(image, width, height) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0, width, height);
    return canvas;
  }

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;

    const resizeWidth = 224;
    const resizeHeight = 224;

    const resizedImage = resizeImage(cropper.getCroppedCanvas(), resizeWidth, resizeHeight);

    setCroppedImage(resizedImage.toDataURL());

    setModalState({ crop: false, tag: true, finish: false });
  };

  const onCropMove = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement?.cropper;
    const cropBoxData = cropper.getCropBoxData();
    const width = cropBoxData.width;
    const height = cropBoxData.height;
    const aspectRatio = 1; // 정사각형

    if (width !== height) {
      if (width > height) {
        const newWidth = height * aspectRatio;
        const newX = cropBoxData.left + (width - newWidth) / 2;
        cropper.setCropBoxData({ ...cropBoxData, width: newWidth, left: newX });
      } else {
        const newHeight = width / aspectRatio;
        const newY = cropBoxData.top + (height - newHeight) / 2;
        cropper.setCropBoxData({ ...cropBoxData, height: newHeight, top: newY });
      }
    }
  };

  return (
    <ModalBackdrop>
      <ModalView crop={crop} tag={tag} finish={finish} onClick={(e) => e.stopPropagation()}>
        <Header>{finish === false ? 'AI 드로잉' : '저장할 픽토그램 선택'}</Header>
        <Bar />
        {crop === true && tag === false && finish === false ? (
          <>
            <Guide>
              인공지능에게 작업을 요청할 영역을 <span style={{ color: '#1259B3', fontWeight: '700' }}>드래그</span> 해주세요
            </Guide>
            <StyledCropper src={originImg} ref={cropperRef} cropmove={onCropMove} guides={false} initialAspectRatio={1} />
            <BtnBox>
              <Btn style={{ marginRight: '1.5rem' }} onClick={onCrop}>
                다음
              </Btn>
              <Btn style={{ background: '#AAAAAA' }} onClick={handleClose}>
                취소
              </Btn>
            </BtnBox>
          </>
        ) : crop === false && tag === true && finish === false ? (
          <TagModal croppedImage={croppedImage} handleClose={handleClose} />
        ) : crop === false && tag === false && finish === true ? (
          <FinishModal croppedImage={croppedImage} handleClose={handleClose} />
        ) : null}
      </ModalView>
    </ModalBackdrop>
  );
}
