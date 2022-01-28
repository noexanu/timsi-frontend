import React from 'react';
import SignUpPageLayout from './SignUpPage.styles';
import GreetingsCard from './greetingsCard/GreetingsCard';
import SignUpCard from './signUpCard/SignUpCard';

function SignUpPage() {
  return (
    <SignUpPageLayout>
      <GreetingsCard />
      <SignUpCard />
    </SignUpPageLayout>
  );
}

export default SignUpPage;
