import { heroesApi } from '../api/heroes.api'
import type { HeroSummaryResponse } from '../types/get-heroes-summary.response'

export const getHeroesSummary = async (): Promise<HeroSummaryResponse> => {
  const { data } = await heroesApi.get<HeroSummaryResponse>('/heroes/summary')

  return data
}
