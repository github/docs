import { useProductLandingContext } from 'src/landings/components/ProductLandingContext'
import { UserCard } from 'src/landings/components/UserCard'

export const SponsorsExamples = () => {
  const { productUserExamples } = useProductLandingContext()

  if (!productUserExamples) {
    return null
  }

  return (
    <div>
      <div className="d-flex flex-wrap gutter">
        {productUserExamples.map((user) => {
          return (
            <div key={user.username} className="col-12 col-xl-4 col-lg-6 mb-4">
              <UserCard href={`https://github.com/sponsors/${user.username}`} user={user} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
