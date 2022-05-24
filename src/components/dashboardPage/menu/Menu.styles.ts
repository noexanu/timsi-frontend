import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TRANSITION_TIME = '.2s';

export const MenuResize = styled.div`
  position: absolute;
  top: 0;
  right: calc(-25px + 3px);
  width: 25px;
  height: 100%;
  box-sizing: border-box;
  border-left: 3px solid #4c9aff;
  opacity: 0;
  transition: opacity ${TRANSITION_TIME};

  &.active {
    cursor: ew-resize;
  }

  &.active:hover {
    opacity: 1;
  }
`;

export const MenuToggleIcon = styled(MdKeyboardArrowRight)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  color: #42526e;
  transform: translate(-50%, -50%);
  transition: ${TRANSITION_TIME};
`;

export const MenuToggle = styled.div`
  position: absolute;
  top: 25px;
  right: calc(-45px / 2);
  width: 45px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  transition: opacity ${TRANSITION_TIME};

  &:hover {
    opacity: 1;
  }

  &:hover ${MenuToggleIcon} {
    background-color: #4c9aff;
    color: #fff;
  }

  &.active {
    opacity: 0;
    transform: rotate(180deg);
  }
`;

interface MenuLayoutProps {
  width: number;
}

export const MenuLayout = styled.menu<MenuLayoutProps>`
  grid-area: menu;
  position: relative;
  max-width: 50vw;
  width: ${({ width }) => `${width}px`};
  padding: 15px;
  box-sizing: border-box;
  background-color: #fafbfc;
  box-shadow: inset -5px 0 5px -5px rgba(0, 0, 0, 0.25);

  &:not(.resizing) {
    transition: width ${TRANSITION_TIME};
  }

  &:hover ${MenuToggle} {
    opacity: 1;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const MenuSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e7e9ed;
  margin: 10px 0;
`;
