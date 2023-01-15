import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #f0531a;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0 10%;
`
export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: start;
`
export const Copyright = styled.p`
  justify-self: center;
  color: white;
  font-size: 1rem;
`
export const Github = styled.a`
  justify-self: end;
  color: white;
`
