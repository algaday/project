import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MenuBar = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    display: grid;
    gap: 20px;
  }
`

export const Links = styled(NavLink)`
  margin-left: 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  &.active {
    color: #f0531a;
  }
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`
