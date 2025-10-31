import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'
import { JourneyLearningTracks } from './JourneyLearningTracks'
import { UtmPreserver } from '@/frame/components/UtmPreserver'

export const JourneyLanding = () => {
  const { title, intro, heroImage, introLinks, journeyTracks } = useLandingContext()

  return (
    <DefaultLayout>
      <UtmPreserver />
      <div>
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />

        <div className="container-xl px-3 px-md-6 mt-6 mb-4">
          <JourneyLearningTracks tracks={journeyTracks ?? []} />
        </div>
      </div>
    </DefaultLayout>
  )
}
