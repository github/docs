import { useProductLandingContext } from 'src/landings/components/ProductLandingContext'
import { RepoCard } from 'src/landings/components/RepoCard'

export const CommunityExamples = () => {
  const { productCommunityExamples } = useProductLandingContext()

  if (!productCommunityExamples) {
    return null
  }

  return (
    <div>
      <div className="d-flex flex-wrap gutter">
        {productCommunityExamples.map((repo) => {
          return (
            <div key={repo.repo} className="col-12 col-xl-4 col-lg-6 mb-4">
              <RepoCard repo={repo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
