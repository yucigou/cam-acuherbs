import React from 'react';
import styled from 'styled-components';
import MainSection from '../ui/atom/main-section';

const TextWrapImg = styled.img`
  float: left;
  margin-right: 30px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  width: 150px;
`;

const AboutDocter = () => {
  return (
    <MainSection>
      <h1>About Our Doctor</h1>
      <p>
        <strong>Dr Li ZHANG</strong>
      </p>
      <TextWrapImg src="/images/Li-Zhang.png" alt="Li Zhang"></TextWrapImg>
      <p>
        Dr Li ZHANG has 38 years of clinical experiences including 12 years here
        in Cambridge, and 4 years at Leicester Chinese Acupuncture & Herbal
        Clinic (81 Granby Street).
      </p>
      <p>
        She graduated from the Changchun University of Traditional Chinese
        Medicine, and was clinically trained at No. 1 hospital of the Tianjin
        University of Traditional Chinese Medicine for one year.
      </p>
      <p>
        Dr Li Zhang used to lead a research project at Toho University in Japan,
        on the anti-bacterial ability of common herbs.
      </p>

      <div className="embed-container">
        <iframe
          src="https://www.youtube.com/embed/4NuojGmHqaE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </MainSection>
  );
};

export default AboutDocter;
