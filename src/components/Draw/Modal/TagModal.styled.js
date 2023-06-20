import { styled } from 'styled-components';

export const Preview = styled.img`
  width: 23.75rem;
  height: 23.75rem;
  border: 0.0625rem solid #626262;
  border-radius: 1.25rem;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
`;

export const SearchBar = styled.div`
  width: 48.5rem;
  height: 3.125rem;
  border: 0.0625rem solid #d9d9d9;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const SearchIcon = styled.img`
  width: 1.3125rem;
  height: 1.3125rem;
  padding-left: 1rem;
`;

export const CheckIcon = styled.img`
  width: 1.09375rem;
  height: 1.09375rem;
  padding-left: 1.75rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 40.625rem;
  height: 3.125rem;
  margin-left: 1.25rem;
  background-color: transparent;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;

  &::placeholder {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: #d9d9d9;
  }
`;

export const TagBox = styled.div`
  width: 47.5rem;
  margin-top: 1.4375rem;
  display: flex;
  flex-wrap: wrap;
`;

export const TagItem = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  background: #d9d9d9;
  height: 2.0625rem;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  cursor: default;
  margin-right: 1rem;
  margin-bottom: 0.7rem;
`;

export const TagCancel = styled.img`
  padding-left: 0.75rem;
  padding-right: 0.6875rem;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 54rem;
  border: 0.0625rem solid #d9d9d9;
  margin-top: 1.375rem;
`;

export const BtnBox = styled.div`
  display: flex;
  padding-top: 2rem;
`;

export const Btn = styled.button`
  width: 11.25rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1259b3;
  color: #ffffff;
  cursor: pointer;
  margin-right: 1.5rem;
`;
