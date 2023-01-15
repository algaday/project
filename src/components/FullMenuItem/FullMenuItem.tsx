import React from 'react'
import {
  MenuCardWrapper,
  MenuCardImg,
  MenuCardInfo,
  MenuCardTitle,
  MenuCardText,
  MenuCardButtonContainer,
  MenuCardPrice,
} from './FullMenuItem.styles'
import CustomButton from '../Button/CustomButton'
import { addToCart, Meal } from '../../features/cart/cartSlice/cartSlice'
import { useAppDispatch } from '../../store/hooks'

function FullMenuItem(prop: Meal) {
  const { image, title, id, pricePerServing } = prop
  const dispatch = useAppDispatch()

  const roundPrice = Math.ceil(pricePerServing)
  const addToCartFunction = () => {
    dispatch(
      addToCart({
        id,
        image,
        title,
        pricePerServing: roundPrice,
      })
    )
  }

  return (
    <MenuCardWrapper>
      <MenuCardImg
        src={
          image ||
          'https://mobimg.b-cdn.net/v3/fetch/c1/c1404eb9718db00abeed018e2076a171.jpeg'
        }
      />
      <MenuCardInfo>
        <MenuCardTitle>{title}</MenuCardTitle>
        <MenuCardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          atque! Porro, rem!
        </MenuCardText>
        <MenuCardButtonContainer>
          <MenuCardPrice>${roundPrice}</MenuCardPrice>
          <CustomButton text={'Add to Cart'} addCart={addToCartFunction} />
        </MenuCardButtonContainer>
      </MenuCardInfo>
    </MenuCardWrapper>
  )
}

export default FullMenuItem
