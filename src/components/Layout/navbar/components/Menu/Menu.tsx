import React from 'react'
import { Props } from '../types'
import { MenuBar, Links } from './Menu.styles'

function Menu({ changeMenu }: Props) {
  return (
    <MenuBar>
      <Links to='/' onClick={changeMenu}>
        Home
      </Links>
      <Links to='/shop' onClick={changeMenu}>
        Shop
      </Links>
      <Links to='/contact' onClick={changeMenu}>
        Contact
      </Links>
    </MenuBar>
  )
}

export default Menu
