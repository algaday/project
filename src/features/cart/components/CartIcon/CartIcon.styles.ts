import styled from 'styled-components'
import { CiShoppingCart } from 'react-icons/ci'

export const ShoppingCartWrapper = styled.div`
  display: grid;
  justify-content: end;
  position: relative;
`
export const ItemsAmount = styled.div<{ amount: number }>`
  display: ${(props) => (props.amount > 0 ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: red;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  text-align: center;

  @media (max-width: 768px) {
  }
`
export const ItemsAmountQuantity = styled.p`
  font-size: 0.7rem;
  color: white;
`
export const ShoppingCart = styled(CiShoppingCart)`
  color: black;
  font-size: 2em;
`
