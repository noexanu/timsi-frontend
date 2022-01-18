import React from 'react';
import LoginFormLayout from './LoginForm.styles';

function LoginForm() {
  return (
    <LoginFormLayout>
      <div className="greetings">
        <img src="https://timsi.app/img/placeholderlogo.png" alt="logo" />
        <h1>Welcome!</h1>
        <h2>
          Sign in to
          <br />
          continue access
        </h2>
      </div>
      <div className="form">
        <h1>Sign In</h1>
        <div className="container">
          <div className="border">
            <input
              type="text"
              placeholder="Email Adress"
            />
          </div>
          <div className="border">
            <input
              type="text"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="continue"
          >
            CONTINUE
          </button>
          <h3>or Connect with</h3>
          <button
            type="button"
            className="github"
          >
            Sign In With GitHub
          </button>
        </div>
      </div>
    </LoginFormLayout>
  );
}

export default LoginForm;
