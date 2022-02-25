import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from 'components/authorization/signInPage/SignInPage';
import SignUpPage from 'components/authorization/signUpPage/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
