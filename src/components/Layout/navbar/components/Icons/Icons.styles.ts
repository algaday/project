import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const IconsWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  justify-self: end;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

export const SignInLink = styled(Link)`
  font-size: 2rem;
  color: black;
`
export const UserDisplayname = styled.p`
  font-size: 1rem;
  cursor: pointer;
`
