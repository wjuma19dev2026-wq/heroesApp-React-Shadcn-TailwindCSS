import { Badge } from '@/components/ui/badge'
import { Heart, Trophy, Users, Zap } from 'lucide-react'
import { HeroStatsCard } from '../HeroStatsCard/HeroStatsCard'

export const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatsCard
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">16</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            12 Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            2 Villains
          </Badge>
        </div>
      </HeroStatsCard>

      <HeroStatsCard
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        title="Favorites"
      >
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </HeroStatsCard>

      <HeroStatsCard
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        title="Smartest"
      >
        <div className="text-lg font-bold">Batman</div>
        <p className="text-xs text-muted-foreground">Intelligence: 10/10</p>
      </HeroStatsCard>

      <HeroStatsCard
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        title="Strongest"
      >
        <div className="text-lg font-bold">Superman</div>
        <p className="text-xs text-muted-foreground">Strength: 10/10</p>
      </HeroStatsCard>
    </div>
  )
}
