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

      {Array.from({ length: totalPage }).map((_, index) => {
        return (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            variant={page === index + 1 ? 'default' : 'outline'}
            size="sm"
          >
            {index + 1}
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
