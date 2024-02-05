import { useProductGuidesContext } from 'src/landings/components/ProductGuidesContext'
import { Lead } from 'src/frame/components/ui/Lead'

export function GuidesHero() {
  const { title, intro } = useProductGuidesContext()

  return (
    <div>
      <header className="gutter mb-6 my-4">
        <div className="col-12">
          <h1 id="title-h1">{title}</h1>
          {intro && <Lead data-search="lead">{intro}</Lead>}
        </div>
      </header>
    </div>
  )
}
