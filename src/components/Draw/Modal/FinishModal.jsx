import React from 'react';
import { BelowArrow, Btn, BtnBox, OriginImg, Pictogram, PictogramList } from './FinishModal.styled';
import { useSetRecoilState } from 'recoil';
import { drawModalState } from '../../../store/store';

export default function FinishModal({ croppedImage, handleClose }) {
  const setModalState = useSetRecoilState(drawModalState);

  const handleBack = () => {
    setModalState({ crop: false, tag: true, finish: false });
  };

  return (
    <>
      <OriginImg src={croppedImage} />
      <BelowArrow src='./sources/아래화살표.png' />
      <PictogramList>
        <Pictogram />
        <Pictogram />
        <Pictogram />
        <Pictogram />
        <Pictogram style={{ marginRight: '0rem' }} />
      </PictogramList>
      <BtnBox>
        <Btn onClick={handleBack}>이전</Btn>
        <Btn>저장</Btn>
        <Btn style={{ marginRight: '0rem' }} onClick={handleClose}>
          확인
        </Btn>
      </BtnBox>
    </>
  );
}
