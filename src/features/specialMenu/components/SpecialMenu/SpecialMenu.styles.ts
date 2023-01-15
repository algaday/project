import styled from 'styled-components'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

export const SpecialMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: #faf9fc;
  overflow: hidden;
  width: 100%;
  padding-top: 50px;

  @media (max-width: 768px) {
    width: 100vw;
  }
`
export const SpecialMenuTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
`
export const SpecialMenuText = styled.p`
  text-align: center;
  font-size: 1rem;
`
export const SpecialMenuDishes = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 500px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90vw;
    display: grid;
    justify-content: center;
  }
`

export const RightArrow = styled(AiOutlineRight)`
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
`

export const LeftArrow = styled(AiOutlineLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
`
