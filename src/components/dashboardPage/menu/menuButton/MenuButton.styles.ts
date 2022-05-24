import styled from 'styled-components';

export const MenuButtonLayout = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;
  font-size: 15px;
  
  &:hover {
    background-color: #e6effc;
    color: #0052cc;
  }

  &.active {
    background-color: #e6effc;
    color: #0052cc;
  }

  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    width: 4px;
    height: 20px;
    background-color: #0052cc;
    border-radius: 0 2px 2px 0;
  }
`;

export const MenuButtonIconContainer = styled.div`
  padding: 0 20px;
  height: 20px;
  width: 20px;
  min-height: 20px;
  min-width: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
