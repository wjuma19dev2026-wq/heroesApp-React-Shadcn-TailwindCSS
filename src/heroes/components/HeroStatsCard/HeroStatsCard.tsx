import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { FC, ReactNode } from 'react'
import type { JSX } from 'react/jsx-runtime'

interface Props {
  title: string
  icon: JSX.Element
  children: ReactNode
}

export const HeroStatsCard: FC<Props> = ({ title, icon, children }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
