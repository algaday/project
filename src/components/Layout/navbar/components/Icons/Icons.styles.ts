import styled from 'styled-components'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export const IconsWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

export const ShoppingCartWrapper = styled.div`
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
`
export const ItemsAmountQuantity = styled.p`
  font-size: 0.7rem;
  color: white;
  position: absolute;
  top: -70%;
  left: 25%;
`
export const ShoppingCart = styled(CiShoppingCart)`
  color: black;
  font-size: 40px;
`

export const SignInLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  background-color: orangered;
  padding: 10px 15px;
  border-radius: 5px;
`
export const UserDisplayname = styled.p`
  font-size: 1rem;
  cursor: pointer;
`
