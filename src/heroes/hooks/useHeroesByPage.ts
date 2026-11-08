import { queryOptions, useQuery } from '@tanstack/react-query'
import { getHeroesByPage } from '../actions/get-heroes-by-page'

interface Props {
  page: number
  limit: number
}

const groupOptions = ({ page, limit }: Props) =>
  queryOptions({
    queryKey: ['heroes', { page, limit }],
    queryFn: () => getHeroesByPage(page, limit),
    staleTime: 1000 * 60 * 5,
  })

export const useHeroesByPage = ({ page, limit }: Props) => {
  return useQuery(groupOptions({ page, limit }))
}
