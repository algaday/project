import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background-color: #faf9fc;
  width: 100%;
  padding: 80px 0;
`
export const BannerContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    margin: 0;
  }
`
export const BannerImage = styled.img`
  width: 500px;
  object-fit: contain;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const BannerInfo = styled.div``
export const BannerInfoTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
`
export const BannerInfoText = styled.p`
  margin-bottom: 40px;
  font-size: 1.5rem;
`

export const BannerButton = styled(Link)`
  color: white;
  background-color: #f0531a;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 1.2rem;
  border-radius: 30px;
`
