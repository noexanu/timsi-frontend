import React from 'react';
import {
  HomePageContentSectionLayout,
  HomePageContentSectionImage,
  HomePageContentSectionTextContainer,
  HomePageContentSectionHeader,
  HomePageContentSectionText,
} from './ContentSection.styles';
import { ContentSectionProps } from './ContentSection.types';

function ContentSection({
  image, header, text, reverse = false,
}: ContentSectionProps) {
  return (
    <HomePageContentSectionLayout reverse={reverse}>
      <HomePageContentSectionImage src={image} alt="" />
      <HomePageContentSectionTextContainer>
        <HomePageContentSectionHeader>
          {header}
        </HomePageContentSectionHeader>
        <HomePageContentSectionText>{text}</HomePageContentSectionText>
      </HomePageContentSectionTextContainer>
    </HomePageContentSectionLayout>
  );
}

export default ContentSection;
