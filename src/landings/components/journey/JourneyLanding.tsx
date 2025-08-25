import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useJourneyContext } from '@/landings/context/JourneyContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'

export const JourneyLanding = () => {
  const { title, intro } = useJourneyContext()

  return (
    <DefaultLayout>
      <div>
        <LandingHero title={title} intro={intro} />

        <div>TODO</div>
      </div>
    </DefaultLayout>
  )
}
