import { queryOptions, useQuery } from '@tanstack/react-query'

import { getHeroesSummary } from '../actions/get-heroes-summary'

const groupOptions = queryOptions({
  queryKey: ['heroes-summary'],
  queryFn: getHeroesSummary,
  staleTime: 60_000,
})

export const useHeroSummary = () => {
  return useQuery(groupOptions)
}
