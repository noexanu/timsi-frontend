import styled from 'styled-components';

export const GreetingsCardLayout = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-gap: 100px;
  align-items: center;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(30deg, #4c3d92 0%, #829ec2 50%, #7ec5ac 100%);
`;

export const GreetingsLogo = styled.img`
  height: 100%;
`;

export const GreetingsMainSection = styled.h1`
  font-size: 35px;
`;

export const GreetingsMinorSection = styled.h2`
  font-size: 17.5px;
`;
