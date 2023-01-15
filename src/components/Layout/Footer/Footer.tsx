import React from 'react'
import { Copyright, FooterContainer, Github, Logo } from './Footer.styles'

function Footer() {
  return (
    <FooterContainer>
      <Logo to='/'>Foodista</Logo>
      <Copyright>&copy; Copyright 2023</Copyright>
      <Github href='https://github.com/algaday/project'>
        Github Repository
      </Github>
    </FooterContainer>
  )
}

export default Footer
