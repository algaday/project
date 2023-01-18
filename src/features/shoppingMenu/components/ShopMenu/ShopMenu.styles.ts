import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
export const TotalMenuWrapper = styled.div``
