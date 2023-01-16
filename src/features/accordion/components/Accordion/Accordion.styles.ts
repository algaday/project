import styled from 'styled-components'

export const AccordionWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`
export const AccordionContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  display: grid;
  align-content: end;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: end;
    order: 2;
  }
`
export const AccordionImg = styled.img`
  max-width: 500px;

  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const AccordionContentWrapper = styled.div`
  margin: 40px 0;
  @media (max-width: 768px) {
    order: 1;
    margin: 0;
  }
`
export const AccordionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`
export const AccordionText = styled.p`
  font-size: 1.5rem;
  margin: 30px 0;
`
export const AccordionContent = styled.div``
