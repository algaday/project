import React from 'react'
import { ShopPageWrapper } from './ShopPage.styles'
import ShopMenu from '../../features/shoppingMenu/components/ShopMenu/ShopMenu'

function ShopPage() {
  return (
    <ShopPageWrapper>
      <ShopMenu />
    </ShopPageWrapper>
  )
}

export default ShopPage
