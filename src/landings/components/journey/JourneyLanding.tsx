import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'

export const JourneyLanding = () => {
  const { title, intro, heroImage, introLinks } = useLandingContext()

  return (
    <DefaultLayout>
      <div>
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />

        <div>TODO</div>
      </div>
    </DefaultLayout>
  )
}
