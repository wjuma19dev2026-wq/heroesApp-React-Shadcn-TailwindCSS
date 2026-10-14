import { CustomJumbotron } from '@/heroes/components/CustomJumbotron/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats/HeroStats'
import { SearchControls } from './ui/SearchControls'

export const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        <CustomJumbotron
          title="Busqueda de SuperHeroes"
          subTitle="Descubre, Explora y Administra Heroes y Villanos."
        />
        <HeroStats />

        <SearchControls />
      </div>
    </div>
  )
}
