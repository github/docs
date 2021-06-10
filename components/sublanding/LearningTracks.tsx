import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { LearningTrack } from 'components/sublanding/LearningTrack'

export const LearningTracks = () => {
  const { learningTracks } = useProductSubLandingContext()

  return (
    <div>
      <div className="d-flex flex-wrap flex-items-start my-5 gutter">
        {(learningTracks || []).map((track: any) => {
          return <LearningTrack track={track} />
        })}
      </div>
    </div>
  )
}
