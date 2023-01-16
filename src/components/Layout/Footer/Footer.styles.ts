import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #f0531a;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0 10%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
    row-gap: 10px;
  }
`
export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: start;
  @media (max-width: 768px) {
    order: 1;
    justify-self: center;
  }
`
export const Copyright = styled.p`
  justify-self: center;
  color: white;
  font-size: 1rem;
  @media (max-width: 768px) {
    order: 3;
  }
`
export const Github = styled.a`
  justify-self: end;
  color: white;
  @media (max-width: 768px) {
    order: 2;
    justify-self: center;
  }
`
