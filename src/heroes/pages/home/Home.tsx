import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CustomJumbotron } from '@/heroes/components/CustomJumbotron/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats/HeroStats'
import { HeroesGrid } from '@/heroes/components/HeroesGrid/HeroesGrid'

import { CustomBreadcrumb } from '@/heroes/components/CustomBreadcrumb/CustomBreadcrumb'
import { CustomPagination } from '@/heroes/components/CustomPagination/CustomPagination'

import { parsePageParam } from '@/lib/parse-page-param'
import { useHeroSummary } from '@/heroes/hooks/useHeroSummary'
import { useHeroesByPage } from '@/heroes/hooks/useHeroesByPage'

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeUrlParam = searchParams.get('tab') ?? 'all'
  const page = parsePageParam(searchParams.get('page') ?? '1')
  const limit = Number(searchParams.get('limit') ?? '6')

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains']
    return validTabs.includes(activeUrlParam) ? activeUrlParam : 'all'
  }, [activeUrlParam])

  const { data: heroResponse } = useHeroesByPage({ page, limit })
  const { data: heroSummary } = useHeroSummary()

  return (
    <div className="min-h-screen from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          subTitle="Descubre, explora y administra super heroes y villanos."
        />

        {/*Breadcrump*/}
        <CustomBreadcrumb />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'all')
                  return prev
                })
              }
            >
              All Characters ({heroSummary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'favorites')
                  return prev
                })
              }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes')
                  return prev
                })
              }
            >
              Heroes ({heroSummary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'villains')
                  return prev
                })
              }
            >
              Villains ({heroSummary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-5">
            {heroResponse && <HeroesGrid heroResponse={heroResponse} />}
          </TabsContent>
          <TabsContent value="favorites">
            Todos los heroes favoritos.
            {/*<HeroesGrid />*/}
          </TabsContent>
          <TabsContent value="heroes">
            Todos los heroes.
            {/*<HeroesGrid />*/}
          </TabsContent>
          <TabsContent value="villains">
            Todos los villanos.
            {/*<HeroesGrid />*/}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPage={heroResponse?.pages ?? Number('1')} />
      </div>
    </div>
  )
}
