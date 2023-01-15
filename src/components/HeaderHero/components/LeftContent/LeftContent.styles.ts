import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LeftContentWrapper = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`
export const HeroHeading = styled.h1`
  font-size: 4rem;
  color: #3b3737;
  font-weight: bold;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 2rem;
  }
`
export const HeroParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 50px;
  color: #636060;
  @media (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 1rem;
  }
`
export const HeroButton = styled(Link)`
  color: white;
  background-color: #f0531a;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 1.2rem;
`
