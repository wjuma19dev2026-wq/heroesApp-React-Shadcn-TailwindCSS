import { HeroGridCard } from '../HeroGridCard/HeroGridCard'
import type { HeroesResponse } from '@/heroes/types/get-heroes.response'

interface Props {
  heroResponse: HeroesResponse
}

export const HeroesGrid = ({ heroResponse }: Props) => {
  const { heroes } = heroResponse

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {heroes.map((heroe) => (
        <HeroGridCard key={heroe.id} heroe={heroe} />
      ))}
    </div>
  )
}
