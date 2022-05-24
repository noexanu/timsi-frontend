import styled from 'styled-components';
import { HomePageContentSectionLayoutProps } from './ContentSection.types';

export const HomePageContentSectionLayout = styled.section<HomePageContentSectionLayoutProps>`
  height: 350px;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: center;
  overflow: hidden;
`;

export const HomePageContentSectionImage = styled.img`
  height: 100%;
`;

export const HomePageContentSectionTextContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 100px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const HomePageContentSectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const HomePageContentSectionText = styled.p`
  font-size: 20px;
`;
