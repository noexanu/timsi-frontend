import styled from 'styled-components';

export const HomePageNavbarLayout = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  flex-direction: row;
  padding: 0 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  background-color: #fff;
`;

export const HomePageNavbarLogo = styled.img`
  filter: invert(1);
  opacity: 0.25;
  height: 100%;
`;

export const HomePageNavbarNavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HomePageNavbarButton = styled.input`
  padding-right: 20px;
  border: none;
  background: transparent;
  font-size: 15px;
  color: #666;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const HomePageNavbarNavigationButton = styled(HomePageNavbarButton)`
  height: fit-content;
`;

export const HomePageNavbarUserIconContainer = styled.div`
  height: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  background-color: #829ec2;
  & svg {
   width: 100%;
   height: 100%;
  }
  &:hover { cursor: pointer; }
`;

export const HomePageNavbarDropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: min-content;
  height: min-content;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  background-color: #fff;
`;

export const HomePageNavbarDropdownMenuButton = styled(HomePageNavbarButton)`
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 0 60px 0 20px;
`;

export const HomePageNavbarDropdownMenuContainer = styled.div`
  position: relative;
  &:hover ${HomePageNavbarDropdownMenu} { display: block; }
`;
