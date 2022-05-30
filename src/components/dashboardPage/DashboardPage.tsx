import React, { useState } from 'react';
import AuthService from 'src/services/authService';

function DashboardPage() {
  const [data, setData] = useState({});

  const getData = async () => {
    const responce = await fetch('http://localhost:3000/api/data', {
      credentials: 'include',
    });
    const json = await responce.json();
    setData(json);
  };

  return (
    <>
      {JSON.stringify(data)}
      <input
        type="button"
        value="get data"
        onClick={() => getData()}
      />
      <input
        type="button"
        value="delete cookies"
        onClick={() => AuthService.logout()}
      />
      Dashboard
    </>
  );
}

export default DashboardPage;
