import { FeaturedTrack, useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { LearningTrack } from 'components/sublanding/LearningTrack'

export const LearningTracks = () => {
  const { learningTracks } = useProductSubLandingContext()

  return (
    <div>
      <div className="d-flex flex-wrap flex-items-start my-5 gutter">
        {(learningTracks || []).map((track: FeaturedTrack, index: number) => {
          return <LearningTrack key={index} track={track} />
        })}
      </div>
    </div>
  )
}
