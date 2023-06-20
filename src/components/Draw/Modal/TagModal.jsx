import React, { useState } from 'react';
import { Bar, Btn, BtnBox, CheckIcon, Preview, SearchBar, SearchIcon, SearchInput, TagBox, TagCancel, TagItem } from './TagModal.styled';
import { useSetRecoilState } from 'recoil';
import { drawModalState } from '../../../store/store';
import { useMutation } from '@tanstack/react-query';
import { createPictogram } from '../../../api/apiPOST';

export default function TagModal({ croppedImage, handleClose }) {
  const [tagList, setTagList] = useState([]);
  const [inputTag, setInputTag] = useState('');
  const setModalState = useSetRecoilState(drawModalState);

  const handleBack = () => {
    setModalState({ crop: true, tag: false, finish: false });
  };

  const handleRemoveTag = (index) => {
    console.log('삭제인덱스', index);
    let changeList = [];
    changeList = tagList.filter((item, itemIndex) => itemIndex !== index);
    setTagList(changeList);
  };

  const { mutate: mutatePictogram } = useMutation(createPictogram, {
    onSuccess: (response) => {
      alert('요청 성공');
      console.log(response);
      setModalState({ crop: false, tag: false, finish: true });
    },
    onError: (response) => {
      alert('요청 실패');
      console.log(response);
      setModalState({ crop: false, tag: false, finish: true });
    },
  });

  const handleSendData = () => {
    const byteString = atob(croppedImage.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: 'image/png',
    });

    const file = new File([blob], 'image.jpg');

    const formData = new FormData();
    const blobTagList = new Blob([JSON.stringify(tagList)], { type: 'application/json' });
    formData.append('drawing_img', file);
    formData.append('tag', blobTagList);

    mutatePictogram(formData);
  };

  return (
    <>
      <Preview src={croppedImage} />
      <SearchBar>
        <SearchIcon src='./sources/검색아이콘.png' />
        <SearchInput
          placeholder='키워드 검색'
          value={inputTag}
          onChange={(e) => {
            setInputTag(e.target.value);
            console.log(inputTag);
          }}
        />
        <CheckIcon
          src='./sources/확인아이콘.png'
          onClick={() => {
            setTagList([...tagList, inputTag]);
            console.log(tagList);
          }}
        />
      </SearchBar>
      {tagList.length !== 0 ? (
        <TagBox>
          {tagList.map((item, index) => (
            <TagItem>
              {item}
              <TagCancel
                src='./sources/태그취소.png'
                onClick={() => {
                  handleRemoveTag(index);
                }}
              />
            </TagItem>
          ))}
        </TagBox>
      ) : null}
      <Bar />
      <BtnBox>
        <Btn onClick={handleBack}>이전</Btn>
        <Btn
          onClick={() => {
            handleSendData();
          }}
        >
          다음
        </Btn>
        <Btn
          style={{ background: '#AAAAAA', marginRight: '0rem' }}
          onClick={() => {
            handleBack();
            handleClose();
          }}
        >
          취소
        </Btn>
      </BtnBox>
    </>
  );
}
