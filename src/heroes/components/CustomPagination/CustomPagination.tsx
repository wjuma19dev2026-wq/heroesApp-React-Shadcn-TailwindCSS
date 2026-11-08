import { Button } from '@/components/ui/button'
import { parsePageParam } from '@/lib/parse-page-param'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

interface Props {
  totalPage: number
  limit?: number
}

export const CustomPagination = ({ totalPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page: number = parsePageParam(searchParams.get('page'))

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage || newPage === page) return

    setSearchParams((params) => {
      params.set('page', String(newPage))
      return params
    })
  }

  const pages: (number | 'ellipsis')[] = []

  if (totalPage <= 7) {
    pages.push(...Array.from({ length: totalPage }, (_, index) => index + 1))
  } else if (page <= 4) {
    pages.push(1, 2, 3, 4, 5, 'ellipsis', totalPage)
  } else if (page >= totalPage - 3) {
    pages.push(
      1,
      'ellipsis',
      totalPage - 4,
      totalPage - 3,
      totalPage - 2,
      totalPage - 1,
      totalPage
    )
  } else {
    pages.push(1, 'ellipsis', page - 1, page, page + 1, 'ellipsis', totalPage)
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
        variant="outline"
        size="sm"
      >
        <ChevronLeft className="h-4 w-4" />
        Previo
      </Button>

      {pages.map((item, index) => {
        if (item === 'ellipsis') {
          return <span key={`ellipsis-${index}`}>…</span>
        }

        return (
          <Button
            key={item}
            onClick={() => handlePageChange(item)}
            variant={page === item ? 'default' : 'outline'}
            size="sm"
          >
            {item}
          </Button>
        )
      })}

      <Button
        disabled={page === totalPage}
        onClick={() => handlePageChange(page + 1)}
        variant="outline"
        size="sm"
      >
        Proximo
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
