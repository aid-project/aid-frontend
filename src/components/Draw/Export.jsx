import React, { useState } from 'react';
import { AiBox, AiResultBox, CancleTag, Container, GlassIcon, InputTag, InputTagBox, Pictogram, PlusBtn, Tag, TagListBox, Wrap1 } from './Export.styled';

export default function Export() {
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);

  const onAddTag = () => {
    setTagList([...tagList, tag]);
    console.log(tagList);
  };

  const onChangeTag = (event) => {
    console.log(event.target.value);
    setTag(event.target.value);
  };

  const deleteTag = (index) => {
    const newList = [...tagList];
    newList.splice(index, 1);
    setTagList(newList);
  };

  return (
    <Container>
      <InputTagBox>
        <Wrap1>
          <GlassIcon src='./sources/돋보기.png' />
          <InputTag
            placeholder='태그 입력'
            onChange={(event) => {
              onChangeTag(event);
            }}
          />
        </Wrap1>
        <PlusBtn
          src='./sources/plus.png'
          onClick={() => {
            onAddTag();
          }}
        />
      </InputTagBox>
      <TagListBox>
        {tagList.map((tag, index) => {
          return (
            <Tag>
              {tag}{' '}
              <CancleTag
                src='./sources/태그취소.png'
                onClick={() => {
                  deleteTag(index);
                }}
              />
            </Tag>
          );
        })}
      </TagListBox>
      <AiResultBox>
        <AiBox>
          <Pictogram src='./sources/pictogram.png' />
        </AiBox>
        <AiBox>
          <Pictogram src='./sources/pictogram.png' />
        </AiBox>
        <AiBox>
          <Pictogram src='./sources/pictogram.png' />
        </AiBox>
        <AiBox>
          <Pictogram src='./sources/pictogram.png' />
        </AiBox>
        <AiBox>
          <Pictogram src='./sources/pictogram.png' />
        </AiBox>
        <AiBox>
          <Pictogram src='./sources/pictogram.png' />
        </AiBox>
      </AiResultBox>
    </Container>
  );
}
