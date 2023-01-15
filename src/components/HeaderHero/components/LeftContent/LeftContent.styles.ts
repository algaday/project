import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LeftContentWrapper = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const HeroHeading = styled.h1`
  font-size: 4rem;
  color: #3b3737;
  font-weight: bold;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
export const HeroParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 50px;
  color: #636060;
`
export const HeroButton = styled(Link)`
  color: white;
  background-color: #f0531a;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 1.2rem;
`
