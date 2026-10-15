import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link, useLocation } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

export const CustomBreadcrumb = () => {
  const location = useLocation()

  const pathSegment = location.pathname.split('/').filter((s) => s !== '')
  console.log(pathSegment)

  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        {/* Enlace estático para el Home / Inicio */}
        <BreadcrumbItem>
          <Link to="/">Inicio</Link>
        </BreadcrumbItem>

        {pathSegment.length > 0 && <BreadcrumbSeparator />}

        {/*Generacion dinamica de segmento*/}
        {pathSegment.map((segment, index) => {
          const url = `/${pathSegment.slice(0, index + 1).join('/')}`
          const isLast = index === pathSegment.length - 1

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbLink className="text-black">
                    {segment}
                  </BreadcrumbLink>
                ) : (
                  <Link to={`/${url}`}>{segment}</Link>
                )}{' '}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
