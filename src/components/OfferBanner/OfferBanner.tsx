import React from 'react'
import {
  OfferContainer,
  OfferImageWrapper,
  OfferImg,
  OfferInfo,
  OfferInfoButton,
  OfferInfoText,
  OfferInfoTitle,
  OfferInfoTopTitle,
  OfferOverlay,
  OfferWrapper,
  SauceImg,
} from './OfferBanner.styles'

function OfferBanner() {
  return (
    <OfferWrapper>
      <OfferContainer src={require('../../assets/OfferBanner/woodenback.jpg')}>
        <OfferOverlay />
        <OfferInfo>
          <OfferInfoTopTitle>Today's</OfferInfoTopTitle>
          <OfferInfoTitle>
            <OfferInfoTitle className='special'>Special</OfferInfoTitle> Food
            Menu
          </OfferInfoTitle>
          <OfferInfoText>This weekend only</OfferInfoText>
          <OfferInfoButton to='shop'>Order Now</OfferInfoButton>
        </OfferInfo>

        <OfferImageWrapper>
          <OfferImg src={require('../../assets/OfferBanner/dishPotato.png')} />
          <SauceImg src={require('../../assets/OfferBanner/sauce.png')} />
        </OfferImageWrapper>
      </OfferContainer>
    </OfferWrapper>
  )
}

export default OfferBanner
