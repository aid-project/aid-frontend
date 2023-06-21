import { styled } from 'styled-components';

export const MenuContainer = styled.div`
  width: 23.75rem;
  height: 90rem;
  background: #f6f6f6;
`;

export const Header = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  padding-top: 2.5625rem;
  padding-bottom: 1.1875rem;
  padding-left: 4.375rem;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 19.1875rem;
  height: 3.625rem;
  background-color: white;
  margin-left: 2.125rem;
  box-shadow: 0.1875rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  cursor: pointer;
  &:hover {
    background: #0d78ff;
    color: white;
  }

  .text {
    padding-left: 1.345rem;
  }
`;

export const MenuImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  padding-left: 2.4375rem;
`;

export const RightImg = styled.img`
  margin-left: auto;
  padding-right: 2.75rem;
`;
