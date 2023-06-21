import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1259b3;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &.main {
    width: 7.5rem;
    margin-left: 6.1875rem;
  }

  &.community {
    margin-left: 3rem;
  }

  &.draw {
    width: 7.5rem;
  }
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 0.3125rem;
  background-color: ${({ menuState }) => (['main', 'community', 'draw'].includes(menuState) ? '#FFD700' : '#1259B3')};
`;

export const Logo = styled.img`
  font-family: 'Inter';
  margin-left: 7.8125rem;
  width: 5.2675rem;
  height: 2.375rem;
  cursor: pointer;
`;

export const MenuContent = styled.div`
  font-family: 'Inter';
  font-weight: ${({ menuState }) => (['main', 'community', 'draw'].includes(menuState) ? '700' : '600')};
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffd700;
  display: flex;
  height: 4.6875rem;
  justify-content: center;
  align-items: center;
`;

export const Mypage = styled.img`
  width: 2.875rem;
  height: 2.875rem;
  margin-right: 7.125rem;
  cursor: pointer;
  color: white;
`;

export const NonLoginState = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;

  .login {
    cursor: pointer;
    margin-right: 4.5rem;
  }
  .signUp {
    cursor: pointer;
    margin-right: 6.625rem;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  top: 0;
  right: 0;
  margin-top: 6.25rem;
  margin-right: 6.25rem;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.375rem;
  height: 20.25rem;
  background-color: white;
  box-shadow: 0rem 0rem 0.75rem 0.25rem rgba(0, 0, 0, 0.07);
  border-radius: 0.75rem;
`;

export const UserInfoBox = styled.div`
  display: flex;
  padding-top: 1.1875rem;
  width: 22.375rem;
  height: 5.9375rem;
`;

export const ProfileImg = styled.img`
  padding-left: 2.3125rem;
  padding-top: 1.64875rem;
  width: 3.25rem;
  height: 3.25rem;
`;

export const InfoColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-left: 0.9375rem;
`;

export const NickName = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  cursor: default;
`;

export const Email = styled.p`
  padding-top: 0.375rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #d9d9d9;
  cursor: default;
`;

export const MenuItem = styled.p`
  font-family: 'Inter';
  font-style: normal;
  padding-left: 5.5rem;
  padding-top: 1.875rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

export const InfoBar = styled.div`
  width: 22.375rem;
  border: 0.0625rem solid #d9d9d9;
  margin-top: 2rem;
`;
