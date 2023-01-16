import styled from 'styled-components'

export const HeroWrapper = styled.div<{ src: string }>`
  width: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background-image: none;
    width: 100vw;
    padding-top: 25px;
    height: 100%;
    overflow: hidden;
  }
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-columns: 1fr;
  }
`
