import React from 'react';
import HomePageContentContainer from './HomePage.styles';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import ContentSection from './contentSection/ContentSection';
import landingPageContent from './HomePageContent';

const isEven = (number: number) => number % 2 === 0;

function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageContentContainer>
        {landingPageContent.map(({ image, header, text }, currentIndex) => (
          <ContentSection
            image={image}
            header={header}
            text={text}
            reverse={isEven(currentIndex)}
          />
        ))}
      </HomePageContentContainer>
      <Footer />
    </>
  );
}

export default HomePage;
