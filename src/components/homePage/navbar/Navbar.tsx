import React from 'react';
import logo from 'images/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  HomePageNavbarLayout,
  HomePageNavbarLogo,
  HomePageNavbarNavigationContainer,
  HomePageNavbarNavigationButton,
  HomePageNavbarDropdownMenuContainer,
  HomePageNavbarUserIconContainer,
  HomePageNavbarDropdownMenu,
  HomePageNavbarDropdownMenuButton,
} from './Navbar.styles';

function Navbar() {
  const navigate = useNavigate();
  return (
    <HomePageNavbarLayout>
      <HomePageNavbarLogo src={logo} />
      <HomePageNavbarNavigationContainer>
        <div>
          <HomePageNavbarNavigationButton
            type="button"
            value="Features"
          />
          <HomePageNavbarNavigationButton
            type="button"
            value="Product guide"
          />
          <HomePageNavbarNavigationButton
            type="button"
            value="Pricing"
          />
          <HomePageNavbarNavigationButton
            type="button"
            value="Enterprise"
          />
        </div>
        <HomePageNavbarDropdownMenuContainer>
          <HomePageNavbarUserIconContainer>
            <AiOutlineUser className="userIcon" />
          </HomePageNavbarUserIconContainer>
          <HomePageNavbarDropdownMenu>
            <HomePageNavbarDropdownMenuButton
              type="button"
              value="Sign In"
              onClick={() => navigate('/signin')}
            />
            <HomePageNavbarDropdownMenuButton
              type="button"
              value="Sign Up"
              onClick={() => navigate('/signup')}
            />
          </HomePageNavbarDropdownMenu>
        </HomePageNavbarDropdownMenuContainer>
      </HomePageNavbarNavigationContainer>
    </HomePageNavbarLayout>
  );
}

export default Navbar;
