import React from 'react'
import { HeroImage, RightContentWrapper } from './RightContent.styles'

function RightContent() {
  return (
    <RightContentWrapper>
      <HeroImage src={require('../../assets/Hero/cook.png')} />
    </RightContentWrapper>
  )
}

export default RightContent
