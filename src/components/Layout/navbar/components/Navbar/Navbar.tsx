import React, { useState } from 'react'
import Icons from '../Icons/Icons'
import Menu from '../Menu/Menu'
import './Navber.styles'
import {
  Wrapper,
  Container,
  Logo,
  MenuWrapper,
  CloseCross,
  HamburgerMenu,
} from './Navber.styles'
import CartIcon from '../../../../../features/cart/components/CartIcon/CartIcon'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const changeMenu = () => {
    setToggle(!toggle)
  }

  return (
    <Wrapper>
      <Container>
        <Logo to='/' className={toggle ? 'activated' : ''}>
          Foodista
        </Logo>
        <MenuWrapper className={toggle ? 'activated' : ''}>
          <CloseCross
            onClick={changeMenu}
            className={toggle ? 'activated' : ''}
          />
          <Menu changeMenu={changeMenu} />
        </MenuWrapper>
        <CartIcon />
        <Icons changeMenu={changeMenu} />
        <HamburgerMenu onClick={changeMenu} />
      </Container>
    </Wrapper>
  )
}

export default Navbar
