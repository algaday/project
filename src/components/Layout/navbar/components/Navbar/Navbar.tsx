import React from 'react'
import Icons from '../Icons/Icons'
import Menu from '../Menu/Menu'
import './Navber.styles'
import { Wrapper, Container, Logo } from './Navber.styles'

function Navbar() {
  return (
    <Wrapper>
      <Container>
        <Logo to='/'>Foodista</Logo>
        <Menu />
        <Icons />
      </Container>
    </Wrapper>
  )
}

export default Navbar
