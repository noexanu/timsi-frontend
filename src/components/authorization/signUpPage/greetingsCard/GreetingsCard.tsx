import React from 'react';
import logo from 'images/logo.png';
import {
  GreetingsCardLayout,
  GreetingsLogo,
  GreetingsMainSection,
  GreetingsMinorSection,
} from './GreetingsCard.styles';

function GreetingsCard() {
  return (
    <GreetingsCardLayout>
      <GreetingsLogo src={logo} alt="logo" />
      <GreetingsMainSection>Welcome!</GreetingsMainSection>
      <GreetingsMinorSection>
        Sign up to
        <br />
        continue access
      </GreetingsMinorSection>
    </GreetingsCardLayout>
  );
}

export default GreetingsCard;
