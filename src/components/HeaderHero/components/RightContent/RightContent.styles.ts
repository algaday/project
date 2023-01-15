import styled from 'styled-components'

export const RightContentWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
  }
`

export const HeroImage = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  max-width: 70%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    position: relative;
    max-width: 100%;
    height: auto;
    object-fit: fill;
  }
`
