import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'components/homePage/HomePage';
import SignInPage from 'components/authorization/signInPage/SignInPage';
import SignUpPage from 'components/authorization/signUpPage/SignUpPage';
import DashboardPage from 'components/dashboardPage/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
