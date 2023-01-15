import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

export const Wrapper = styled.div`
  background-color: #fcfcfc;
`

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Logo = styled(Link)`
  text-decoration: none;
  color: #f0531a;
  font-weight: 600;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    &.activated {
      position: absolute;
      z-index: 999;
      top: 20px;
      left: 20px;
    }
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    display: none;
    &.activated {
      display: grid;
      position: absolute;
      width: 100%;
      background-color: white;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: 998;
      place-items: center;
    }
  }
`
export const CloseCross = styled(RxCross1)`
  display: none;

  @media (max-width: 768px) {
    display: none;
    &.activated {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
`
export const HamburgerMenu = styled(RxHamburgerMenu)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
