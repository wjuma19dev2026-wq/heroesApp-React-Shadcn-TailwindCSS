import { heroesApi } from '../api/heroes.api'
import type { HeroesResponse } from '../types/get-heroes.response'

export const getHeroesByPage = async (
  page: number,
  limit: number
): Promise<HeroesResponse> => {
  // Esta forma tiene deficiencia, numeros negativos y 0 rompen el codigo
  // if (Number.isNaN(page)) page = 1 // Validar si la pagina no es NaN, setear a 1
  if (Number.isNaN(limit)) limit = 6 // Validar si la pagina no es NaN, setear a 1

  const offset = (page - 1) * limit

  console.log({ page, offset, limit })
  const { data } = await heroesApi.get<HeroesResponse>('/api/heroes', {
    params: {
      limit,
      offset,
    },
  })

  // crear la imagen del heroe
  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: import.meta.env.VITE_API_URL + '/images/' + hero.image, // http://localhost:3000/images/1.jpeg
  }))

  return {
    ...data,
    heroes,
  }
}
