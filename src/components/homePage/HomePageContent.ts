import stock1 from 'images/stock1.jpg';
import stock2 from 'images/stock2.jpg';
import stock3 from 'images/stock3.jpg';
import { ContentSectionProps } from './contentSection/ContentSection.types';

const landingPageContent: ContentSectionProps[] = [
  {
    image: `${stock1}`,
    header: 'What is Lorem Ipsum?',
    text: `
      Lorem Ipsum is simply dummy text of
      the printing and typesetting industry.
      Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s,
      when an unknown printer took a galley of
      type and scrambled it to make a type
      specimen book. It has survived not only
      five centuries, but also the leap into
      electronic typesetting, remaining
      essentially unchanged. It was popularised
      in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing
      software like Aldus PageMaker including
      versions of Lorem Ipsum.`,
  },
  {
    image: `${stock2}`,
    header: 'Why do we use it?',
    text: `
      It is a long established fact that a
      reader will be distracted by the
      readable content of a page when looking
      at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less
      normal distribution of letters, as
      opposed to using 'Content here, content
      here', making it look like readable
      English. Many desktop publishing
      packages and web page editors now use
      Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will
      uncover many web sites still in their
      infancy. Various versions have evolved
      over the years, sometimes by accident,
      sometimes on purpose (injected humour
      and the like).`,
  },
  {
    image: `${stock3}`,
    header: 'Where does it come from?',
    text: `
      Lorem Ipsum comes from sections 1.10.32
      and 1.10.33 of 'de Finibus Bonorum et
      Malorum' (The Extremes of Good and Evil)
      by Cicero, written in 45 BC. This book
      is a treatise on the theory of ethics,
      very popular during the Renaissance. The
      first line of Lorem Ipsum, 'Lorem ipsum
      dolor sit amet..', comes from a line in
      section 1.10.32.`,
  },
];

export default landingPageContent;
