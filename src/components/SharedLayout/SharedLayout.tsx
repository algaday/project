import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/navbar/components/Navbar/Navbar'
import { LayoutWrapper } from './SharedLayout.styles'

const SharedLayout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  )
}
export default SharedLayout
