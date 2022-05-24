import styled from 'styled-components';

const DashboardPageLayout = styled.menu`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "menu header"
    "menu content";
  font-family: Arial, Helvetica, sans-serif;
  color: #42526e;
  user-select: none;
`;

export default DashboardPageLayout;
