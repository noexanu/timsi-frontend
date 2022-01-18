import styled from 'styled-components';

interface PageProps {
}

const PageLayout = styled.div<PageProps>`
  width: 100vw;
  min-height: 300vh;
  display: grid;
  grid-template-columns: auto 1500px auto;
  grid-template-rows: 50px auto auto;
  grid-template-areas: 
  'left header right'
  'left main   right'
  'left footer right';
`;

PageLayout.defaultProps = {
};

export default PageLayout;
