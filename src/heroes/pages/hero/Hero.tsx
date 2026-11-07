import { CustomBreadcrumb } from '@/heroes/components/CustomBreadcrumb/CustomBreadcrumb'
import { useParams } from 'react-router-dom'

export const HeroPage = () => {
  const { heroSlug } = useParams()

  console.log(heroSlug)

  return (
    <>
      <CustomBreadcrumb />
      <p>Hero works!</p>
    </>
  )
}
