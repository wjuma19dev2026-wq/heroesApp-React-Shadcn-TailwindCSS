import { heroesApi } from '../api/heroes.api'
import type { HeroesResponse } from '../types/get-heroes.response'

export const getHeroesByPage = async (): Promise<HeroesResponse> => {
  const { data } = await heroesApi.get<HeroesResponse>('/api/heroes')

  // crear la imagen del heroe
  const heroes = data.heroes.map((heroe) => ({
    ...heroe,
    image: import.meta.env.VITE_API_URL + '/images/' + heroe.image, // http://localhost:3000/images/1.jpeg
  }))

  return {
    ...data,
    heroes,
  }
}
