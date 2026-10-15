import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from 'cn'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const CustomMenu = () => {
  const { pathname } = useLocation()

  return (
    <div className="p-3 max-w-full row-span-full">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <NavLink
              className={cn(
                pathname === '/'
                  ? 'bg-purple-600 text-white hover:bg-purple-600 hover:text-white'
                  : 'hover:bg-purple-600/60 hover:text-white',
                'p-2 rounded-sm'
              )}
              to="/"
            >
              Inicio
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              className={cn(
                pathname === '/search'
                  ? 'bg-purple-600 text-white hover:bg-purple-600 hover:text-white'
                  : 'hover:bg-purple-600/60 hover:text-white',
                'p-2 rounded-sm'
              )}
              to="/search"
            >
              Buscar superheroe
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
