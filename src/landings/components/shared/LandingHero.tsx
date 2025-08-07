import { Lead } from '@/frame/components/ui/Lead/Lead'

type LandingHeroProps = {
  title: string
  intro?: string
}

export const LandingHero = ({ title, intro }: LandingHeroProps) => {
  return (
    <header>
      <div>
        <h1>TODO: Landing hero placeholder</h1>
        <h2>{title}</h2>
        {intro && <Lead>{intro}</Lead>}
      </div>
    </header>
  )
}
