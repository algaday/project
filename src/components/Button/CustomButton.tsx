import React from 'react'
import { CustomButtonStyle } from './CustomButton.styles'

type TButtonProps = {
  text: string
  addCart: () => void
}

function CustomButton(props: TButtonProps) {
  const { text, addCart } = props

  return <CustomButtonStyle onClick={() => addCart()}>{text}</CustomButtonStyle>
}

export default CustomButton
