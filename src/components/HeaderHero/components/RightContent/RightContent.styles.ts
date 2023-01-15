import styled from 'styled-components'

export const RightContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const HeroImage = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 70%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    display: block;
    position: initial;
    width: 100%;
    height: 100%;
  }
`
