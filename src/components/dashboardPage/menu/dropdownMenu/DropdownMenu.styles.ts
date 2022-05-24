import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const DropdownMenuHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex; 
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const DropdownMenuToggleIcon = styled(MdKeyboardArrowRight)`
  min-width: 18px;
  min-height: 18px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    opacity: 0;
    transform: rotate(90deg);
  }
`;

export const DropdownMenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(.active) {
    display: none;
  }
`;

export const DropdownMenuContainer = styled.div`
  margin-bottom: 5px;
  
  &:hover ${DropdownMenuToggleIcon} {
    opacity: 1;
  }
`;
