import styled from 'styled-components';

interface PageProps {
}

const PageLayout = styled.div<PageProps>`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 750px auto;
  grid-template-rows: auto 500px auto;
`;

PageLayout.defaultProps = {
};

export default PageLayout;
