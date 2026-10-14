import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CustomJumbotron } from '@/heroes/components/CustomJumbotron/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats/HeroStats'
import { HeroesGrid } from '@/heroes/components/HeroesGrid/HeroesGrid'
import { useState } from 'react'

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
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
