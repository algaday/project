import styled from 'styled-components'

export const HeroWrapper = styled.div<{ src: string }>`
  width: 100%;
  background-image: url(${(props) => props.src});
  @media (max-width: 768px) {
    background-image: none;
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
    grid-template-rows: 1fr 1fr;
    height: 100vh;
    width: 100%;
  }
`
