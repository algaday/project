import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SuccessWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`
export const SuccessImg = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: contain;
`
export const SuccessTitle = styled.h2`
  font-size: 1.5rem;
`
export const HomeButton = styled(Link)`
  margin-top: 50px;
  text-decoration: none;
  font-size: 1.5rem;
  border: none;
  background-color: orangered;
  color: white;
  padding: 15px 25px;
`
