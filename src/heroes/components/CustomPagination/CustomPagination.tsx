import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  totalPage: number
  limit?: number
}

export const CustomPagination = ({ totalPage }: Props) => {
  const page: number = 6
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button disabled={page === 1} variant="outline" size="sm">
        <ChevronLeft className="h-4 w-4" />
        Previo
      </Button>

      {Array.from({ length: totalPage }).map((_, index) => {
        return (
          <Button
            key={index}
            variant={page === index + 1 ? 'default' : 'outline'}
            size="sm"
          >
            {index + 1}
          </Button>
        )
      })}

      <Button disabled={page === totalPage} variant="outline" size="sm">
        Proximo
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
