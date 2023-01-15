import styled from 'styled-components'

export const AdvantagesWrapper = styled.div`
  background-color: #faf9fc;
`

export const AdvantagesContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  height: 600px;
  flex-direction: column;
  background-color: #faf9fc;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    height: auto;
    padding: 30px 0;
    overflow: hidden;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: grid;
  }
`
export const AdvantagesHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`

export const AdvantagesParapgraph = styled.p`
  margin-bottom: 40px;
  font-size: 1.5rem;
  text-align: center;
`
