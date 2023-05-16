import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  margin-left: 0;
  height: 100%;
  background-color: #c9d0d0;
`;

export const InputTagBox = styled.div`
  width: 21.875rem;
  height: 3.125rem;
  background-color: #848484;
  margin-left: 1.5625rem;
  margin-top: 1.4375rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GlassIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding-left: 1rem;
`;

export const InputTag = styled.input`
  background: none;
  border: none;
  outline: none;
  padding-left: 1rem;
  width: 12.5rem;
  height: 1.875rem;
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;

  &::placeholder {
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8125rem;
  }
`;

export const Wrap1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusBtn = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  cursor: pointer;
  padding-right: 0.6875rem;
`;

export const TagListBox = styled.div`
  width: 21.875rem;
  height: auto;
  padding-top: 1.1875rem;
  padding-left: 1.75rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: 6.25rem;
  height: 1.625rem;
  border-radius: 100px;
  background-color: #848484;
  display: flex;
  align-items: center;
  padding-left: 0.5625rem;
  margin-bottom: 0.2rem;
  color: white;
  justify-content: space-between;
`;

export const CancleTag = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
  padding-right: 0.28125rem;
  cursor: pointer;
`;

export const AiResultBox = styled.div`
  width: 23.875rem;
  /* height: 46.875rem; */
  padding-left: 1.8125rem;
  padding-top: 0.9375rem;
  display: flex;
  flex-wrap: wrap;
`;

export const AiBox = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #848484;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pictogram = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`;
