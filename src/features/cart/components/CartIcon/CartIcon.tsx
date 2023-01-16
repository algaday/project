import React, { useState } from 'react'
import CartInfo from '../CartInfo/CartInfo'
import { useAppSelector } from '../../../../store/hooks'
import {
  ItemsAmount,
  ItemsAmountQuantity,
  ShoppingCart,
  ShoppingCartWrapper,
} from './CartIcon.styles'

function CartIcon() {
  const [show, setShow] = useState(false)
  const cart = useAppSelector((stete) => stete.cart.cart)

  let amount = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  )

  const closeFunc = () => {
    setShow(false)
  }

  return (
    <ShoppingCartWrapper>
      <ShoppingCart
        onClick={() => {
          setShow(!show)
        }}
      />
      <ItemsAmount amount={amount}>
        <ItemsAmountQuantity>{amount}</ItemsAmountQuantity>
      </ItemsAmount>
      {show ? (
        <CartInfo
          closeFunc={() => {
            closeFunc()
          }}
        />
      ) : null}
    </ShoppingCartWrapper>
  )
}

export default CartIcon
