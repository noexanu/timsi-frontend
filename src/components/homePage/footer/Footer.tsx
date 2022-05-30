import React from 'react';
import {
  HomePageFooterLayout,
  HomePageFooterButton,
} from './Footer.styles';

function Footer() {
  return (
    <HomePageFooterLayout>
      <HomePageFooterButton
        type="button"
        value="Privacy policy"
      />
      <HomePageFooterButton
        type="button"
        value="Terms"
      />
      <p>Copyright © 2022 Timsi</p>
    </HomePageFooterLayout>
  );
}

export default Footer;
