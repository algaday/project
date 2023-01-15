import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  background-color: #fcfcfc;
`

export const Container = styled.div`
  background-color: #fcfcfc;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`
export const Logo = styled(Link)`
  text-decoration: none;
  color: #f0531a;
  font-weight: 600;
  font-size: 1.5rem;
  font-weight: bold;
`
