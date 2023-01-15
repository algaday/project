import React from 'react'
import {
  HomeButton,
  SuccessImg,
  SuccessTitle,
  SuccessWrapper,
} from './SuccessPage.styles'

function SuccesPage() {
  return (
    <SuccessWrapper>
      <SuccessImg src={require('../../../../assets/ThankYou/thanks.jpg')} />
      <SuccessTitle>
        Your order has been placed, please wait our manager will contact you
        soon
      </SuccessTitle>
      <HomeButton to='/'>BACK HOME</HomeButton>
    </SuccessWrapper>
  )
}

export default SuccesPage
