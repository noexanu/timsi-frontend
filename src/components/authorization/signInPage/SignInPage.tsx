import React from 'react';
import SignInPageLayout from './SignInPage.styles';
import GreetingsCard from './greetingsCard/GreetingsCard';
import SignInCard from './signInCard/SignInCard';

function SignInPage() {
  return (
    <SignInPageLayout>
      <GreetingsCard />
      <SignInCard />
    </SignInPageLayout>
  );
}

export default SignInPage;
