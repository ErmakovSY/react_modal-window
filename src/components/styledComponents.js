import styled from 'styled-components';

const HEADER__BACKGROUND_COLOR = '#5DD0C0';
const HEADER__TITLE_COLOR = '#00685A';
const CONTENT__BACKGROUND_COLOR = '#FFAD73';
const CONTENT__TEXT_COLOR = '#00A08A';
const CONTENT__ICON_COLOR = (props) => props.iconColor;
const FOOTER__BACKGROUND_COLOR = '#5DD0C0';
const CLOSE_BUTTON__BACKGROUND_COLOR = '#FFAD73';
const CLOSE_BUTTON__BORDER_COLOR = '#00A08A';
const CLOSE_BUTTON__TEXT_COLOR = '#00A08A';
const CLOSE_BUTTON__BACKGROUND_COLOR__HOVERED = '#BF6B30';
const SUBMIT_BUTTON__BACKGROUND_COLOR = '#FFAD73';
const SUBMIT_BUTTON__BORDER_COLOR = '#00685A';
const SUBMIT_BUTTON__TEXT_COLOR = '#00685A';
const SUBMIT_BUTTON__BACKGROUND_COLOR__HOVERED = '#BF6B30';

export const Wrapper = styled.div`
  min-width: 300px;
  max-width: 400px;
  min-height: 100px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10001;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: ${HEADER__BACKGROUND_COLOR};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  padding: 10px;
  background-color: ${CONTENT__BACKGROUND_COLOR};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: ${FOOTER__BACKGROUND_COLOR};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.hidden ? 'none' : 'block' };
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0,0,0,.7);
`;

export const Icon = styled.p`
  width: 20%;
  line-height: 32px;
  font-size: 32px;
  color: ${CONTENT__ICON_COLOR};
  text-align: center;
  cursor: default;
`;

export const Title = styled.p`
  width: 100%;
  line-height: 24px;
  font-size: 24px;
  font-family: "Roboto";
  color: ${HEADER__TITLE_COLOR};
  text-transform: uppercase;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: auto;
  pointer-events: none;
`;

export const Text = styled.p`
  width: 80%;
  line-height: 14px;
  font-size: 14px;
  font-family: "Roboto";
  color: ${CONTENT__TEXT_COLOR};
  text-align: left;
  cursor: default;
`;

export const Close = styled.button`
  display: block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 1px solid ${CLOSE_BUTTON__BORDER_COLOR};
  border-radius: 50%;
  background-color: ${CLOSE_BUTTON__BACKGROUND_COLOR};
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  &>span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
    color: ${CLOSE_BUTTON__TEXT_COLOR};
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background-color: ${CLOSE_BUTTON__BACKGROUND_COLOR__HOVERED};
  }
`;

export const Button = styled.button`
  display: block;
  width: 60px;
  height: 20px;
  flex-shrink: 0;
  border: 1px solid ${SUBMIT_BUTTON__BORDER_COLOR};
  border-radius: 6px;
  background-color: ${SUBMIT_BUTTON__BACKGROUND_COLOR};
  padding: 0;
  margin-right: 3px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  &>span {
    line-height: 14px;
    font-size: 14px;
    text-align: center;
    color: ${SUBMIT_BUTTON__TEXT_COLOR};
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background-color: ${SUBMIT_BUTTON__BACKGROUND_COLOR__HOVERED};
  }
`;