import { Breadcrumbs } from 'components/Breadcrumbs'
import { ArticleVersionPicker } from 'components/article/ArticleVersionPicker'

export const ArticleTopper = () => {
  return (
    <div className="d-lg-flex flex-justify-between">
      <div className="d-block d-lg-none mb-2">
        <ArticleVersionPicker />
      </div>
      <div className="d-flex flex-items-center">
        <Breadcrumbs />
      </div>
      <div className="d-none d-lg-block">
        <ArticleVersionPicker />
      </div>
    </div>
  )
}
