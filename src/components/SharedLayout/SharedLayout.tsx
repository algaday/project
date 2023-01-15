import { Outlet } from 'react-router-dom'
import Navbar from '../../features/navbar/components/Navbar/Navbar'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default SharedLayout
