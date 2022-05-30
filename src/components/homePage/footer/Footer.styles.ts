import styled from 'styled-components';

export const HomePageFooterLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  background-color: #eee;
`;

export const HomePageFooterButton = styled.input`
  width: min-content;
  padding-right: 20px;
  color: #666;
  border: none;
  font-size: 15px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
