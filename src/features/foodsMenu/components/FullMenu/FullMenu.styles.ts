import styled from 'styled-components'

export const FullMenuWrapper = styled.div``
export const FullMenuContainer = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
  }
`
export const FullMenuInfo = styled.div``
export const FullMenuTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const FullMenuText = styled.p`
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
