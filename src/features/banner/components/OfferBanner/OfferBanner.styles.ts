import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OfferWrapper = styled.div`
  background-color: #faf9fc;
`
export const OfferImageWrapper = styled.div`
  flex: 0.8;
  position: relative;
  @media (max-width: 768px) {
    order: 1;
    flex: 1;
  }
`
export const OfferContainer = styled.div<{ src: string }>`
  width: 85%;
  margin: auto;
  height: 600px;
  margin-bottom: 100px;
  background: url(${(props) => props.src}) no-repeat bottom;
  background-size: cover;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    margin: 0;
  }
`
export const OfferOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(168, 0, 0, 0.8);
  mix-blend-mode: multiply;
  z-index: -9;
`
export const OfferInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Caramel&family=Qwigley&family=Teko:wght@500&display=swap');
  flex: 0.5;
  margin-left: 100px;
  transform: rotate(-10deg);

  @media (max-width: 768px) {
    margin: 0;
    transform: rotate(0deg);
    order: 2;
    padding-bottom: 30px;
    flex: 1;
    padding: 0;
  }
`
export const OfferImg = styled.img`
  width: 90%;
  height: 25rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
`
export const SauceImg = styled.img`
  width: 30%;
  position: absolute;
  top: 40%;
  right: 10%;
`

export const OfferInfoTopTitle = styled.h2`
  font-family: 'Caramel', cursive;
  font-size: 6rem;
  line-height: 90px;
  position: relative;
  z-index: 999;
  color: rgba(252, 152, 3, 1);

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: normal;
  }
`
export const OfferInfoTitle = styled.h2`
  font-family: 'Teko', sans-serif;
  line-height: 90px;
  text-transform: uppercase;
  font-size: 8rem;
  color: rgba(252, 152, 3, 1);

  &.special {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 50px;
  }
`
export const OfferInfoText = styled.p`
  font-family: 'Caramel', cursive;
  color: white;
  font-size: 5rem;
  line-height: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
export const OfferInfoButton = styled(Link)`
  transform: rotate(10deg);
  display: block;
  width: fit-content;
  background-color: rgba(252, 152, 3, 1);
  font-size: 1rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border: none;
  margin-top: 50px;
  border-radius: 40px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    transform: rotate(0deg);
  }
`
