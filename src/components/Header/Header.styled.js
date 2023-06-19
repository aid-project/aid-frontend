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
  margin-right: 1.125rem;
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
