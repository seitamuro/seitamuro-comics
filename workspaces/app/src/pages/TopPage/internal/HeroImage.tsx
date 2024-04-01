import React from 'react';
import styled from 'styled-components';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  display: inline-block;
  width: 100%;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image
        src="https://source.unsplash.com/random/800x450"
        alt="seitamuro TOON"
      />
    </_Wrapper>
  );
};
