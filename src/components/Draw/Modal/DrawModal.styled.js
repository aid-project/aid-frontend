import { styled } from 'styled-components';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.875rem;
  width: 58.5rem;
  height: ${({ crop, tag, finish }) => {
    if (crop) return '49rem';
    if (tag) return '51.6876rem';
    if (finish) return '43.6875rem';
    return 'auto'; // Default height if none of the flags are true
  }};
  background-color: #ffffff;
`;

// 43.6875

export const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #000000;
  padding-left: 2.625rem;
  padding-top: 2.625rem;
  align-self: flex-start;
  cursor: default;
`;

export const Bar = styled.div`
  width: 54rem;
  border: 0.0625rem solid #d9d9d9;
  margin-top: 1.5rem;
`;

export const Guide = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4375rem;
  text-align: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #000000;
  cursor: default;
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
`;

export const StyledCropper = styled(Cropper)`
  .cropper-view-box {
    outline-color: black;
  }
`;
