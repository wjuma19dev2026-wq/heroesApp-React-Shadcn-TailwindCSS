import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import type { Hero } from '@/heroes/types/hero.interface'
import { Brain, Eye, Gauge, Heart, Shield, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  heroe: Hero
}

export const HeroGridCard = ({ heroe }: Props) => {
  const navigate = useNavigate()

  const handleHeroDetails = (heroSlug: string) => {
    navigate(`/heroe/${heroSlug}`)
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64">
        <img
          src={heroe.image}
          alt="Superman"
          className="object-cover transition-all duration-500 group-hover:scale-110 w-full h-full"
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${heroe.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} `}
          />
          <div className="text-xs px-2 py-1 rounded-2xl bg-white/90 text-gray-700">
            {heroe.status}
          </div>
        </div>

        {/* Universe badge */}
        <div
          className={`absolute px-2 py-1 rounded-2xl top-3 right-3 text-xs ${heroe.universe === 'DC' ? 'bg-blue-600' : 'bg-red-600'} text-white`}
        >
          {heroe.universe}
        </div>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4 -red-500 text-red-500" />
        </Button>

        {/* View details button */}
        <Button
          onClick={() => handleHeroDetails(heroe.slug)}
          size="sm"
          variant="ghost"
          className="absolute bottom-3 hover:cursor-pointer left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight">{heroe.alias}</h3>
            <p className="text-sm text-gray-600">{heroe.name}</p>
          </div>
          <div className="text-xs px-2 py-1 rounded-2xl bg-green-100 text-green-800 border-green-200">
            {heroe.category}
          </div>
        </div>
        <div className="w-fit px-2 py-1 rounded-2xl bg-black text-white text-xs">
          {heroe.team}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">
          {heroe.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Strength</span>
            </div>
            <Progress
              value={heroe.strength * 10}
              className="h-2"
              activeColor="bg-orange-500"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Intelligence</span>
            </div>
            <Progress
              value={heroe.intelligence * 10}
              className="h-2"
              activeColor="bg-blue-500"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Speed</span>
            </div>
            <Progress
              value={heroe.speed * 10}
              className="h-2"
              activeColor="bg-green-500"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-purple-500" />
              <span className="text-xs font-medium">Durability</span>
            </div>
            <Progress
              value={heroe.durability * 10}
              className="h-2"
              activeColor="bg-purple-500"
            />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Powers:</h4>
          <div className="flex flex-wrap gap-1">
            {heroe.powers.slice(0, 3).map((power) => (
              <div
                key={power}
                className="text-xs px-2 py-1 rounded-2xl bg-gray-200/90 text-gray-900"
              >
                {power}
              </div>
            ))}

            {heroe.powers.length > 3 && (
              <div className="text-xs px-2 py-1 rounded-2xl bg-gray-200/90 text-gray-900">
                +{heroe.powers.length - 3} more
              </div>
            )}
            {/*            <Badge variant="outline" className="text-xs">
              Flight
            </Badge>
           */}
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t">
          First appeared: {heroe.firstAppearance}
        </div>
      </CardContent>
    </Card>
  )
}
