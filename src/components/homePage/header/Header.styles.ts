import styled from 'styled-components';

interface HeaderProps {
}

const HeaderLoyout = styled.div<HeaderProps>`
  /* <row-start> / <column-start> / <row-end> / <column-end> */
  grid-area: 1 / 1 / 2 / 4;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0,0,0,.25);

  .content {
    grid-area: header;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

HeaderLoyout.defaultProps = {
};

export default HeaderLoyout;
