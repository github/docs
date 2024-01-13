import { useProductGuidesContext } from 'src/landings/components/ProductGuidesContext'
import { LearningTrack } from 'src/learning-track/components/guides/LearningTrack'

export const LearningTracks = () => {
  const { learningTracks } = useProductGuidesContext()

  return (
    <div className="d-flex flex-wrap flex-items-start my-5 gutter">
      {(learningTracks || []).map((track) => {
        return <LearningTrack key={track?.title} track={track} />
      })}
    </div>
  )
}
