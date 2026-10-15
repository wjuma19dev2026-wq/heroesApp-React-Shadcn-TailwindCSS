import { Outlet } from 'react-router-dom'
import { CustomMenu } from '../components/CustomMenu/CustomMenu'

export const HeroesLayout = () => {
  return (
    <>
      <CustomMenu />
      <Outlet />
    </>
  )
}
