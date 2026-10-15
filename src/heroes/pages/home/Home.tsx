import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CustomJumbotron } from '@/heroes/components/CustomJumbotron/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats/HeroStats'
import { HeroesGrid } from '@/heroes/components/HeroesGrid/HeroesGrid'
import { useState } from 'react'
import { CustomPagination } from '@/heroes/components/CustomPagination/CustomPagination'

export const HomePage = () => {
  const [tabValue, setTabValue] = useState('all')

  return (
    <div className="min-h-screen from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          subTitle="Descubre, explora y administra super heroes y villanos."
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs
          onValueChange={setTabValue}
          value={tabValue}
          defaultValue={tabValue}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            Todos los personajes de los heroes.
            <HeroesGrid />
          </TabsContent>
          <TabsContent value="favorites">
            Todos los heroes favoritos.
            <HeroesGrid />
          </TabsContent>
          <TabsContent value="heroes">
            Todos los heroes.
            <HeroesGrid />
          </TabsContent>
          <TabsContent value="villains">
            Todos los villanos.
            <HeroesGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPage={8} />
      </div>
    </div>
  )
}
