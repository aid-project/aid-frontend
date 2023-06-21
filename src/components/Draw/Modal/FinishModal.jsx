import React, { useState } from 'react';
import { BelowArrow, Btn, BtnBox, OriginImg, Pictogram, PictogramList } from './FinishModal.styled';
import { useSetRecoilState } from 'recoil';
import { drawModalState } from '../../../store/store';

export default function FinishModal({ croppedImage, handleClose }) {
  const setModalState = useSetRecoilState(drawModalState);
  const [ImgList, setImgList] = useState([
    'https://post-phinf.pstatic.net/MjAyMjA1MTJfMjYz/MDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG/%ED%94%BC%EC%B9%B4%EC%B8%84.png?type=w1200',
    'https://post-phinf.pstatic.net/MjAyMjA1MTJfMjYz/MDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG/%ED%94%BC%EC%B9%B4%EC%B8%84.png?type=w1200',
    'https://post-phinf.pstatic.net/MjAyMjA1MTJfMjYz/MDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG/%ED%94%BC%EC%B9%B4%EC%B8%84.png?type=w1200',
    'https://post-phinf.pstatic.net/MjAyMjA1MTJfMjYz/MDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG/%ED%94%BC%EC%B9%B4%EC%B8%84.png?type=w1200',
    'https://post-phinf.pstatic.net/MjAyMjA1MTJfMjYz/MDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG/%ED%94%BC%EC%B9%B4%EC%B8%84.png?type=w1200',
  ]);
  const handleBack = () => {
    setModalState({ crop: false, tag: true, finish: false });
  };

  return (
    <>
      <OriginImg src={croppedImage} />
      <BelowArrow src='./sources/아래화살표.png' />
      <PictogramList>
        {ImgList?.map((data, index) => {
          return <Pictogram src={data} />;
        })}
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
