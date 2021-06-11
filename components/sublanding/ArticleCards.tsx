import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleCard } from './ArticleCard'

const MAX_ARTICLES = 9
export const ArticleCards = () => {
  const { t } = useTranslation('product_sublanding')
  const guideTypes: Record<string, string> = t('guide_types')
  const { allTopics, includeGuides } = useProductSubLandingContext()

  return (
    <div>
      <form className="mt-2 mb-5 d-flex d-flex">
        <div>
          <label htmlFor="type" className="text-uppercase f6 color-text-secondary d-block">
            {t('filters.type')}
          </label>
          <select
            className="form-select js-filter-card-filter-dropdown f4 text-bold border-0 rounded-0 border-top box-shadow-none pl-0 js-filter-card-filter-dropdown"
            name="type"
            aria-label="guide types"
          >
            <option value="">{t('filters.all')}</option>
            {Object.entries(guideTypes).map(([key, val]) => {
              return <option key={key} value={key}>{val}</option>
            })}
          </select>
        </div>
        <div className="mx-4">
          <label htmlFor="topic" className="text-uppercase f6 color-text-secondary d-block">
            {t('filters.topic')}
          </label>
          <select
            className="form-select js-filter-card-filter-dropdown f4 text-bold border-0 rounded-0 border-top box-shadow-none pl-0 js-filter-card-filter-dropdown"
            name="topics"
            aria-label="guide topics"
          >
            <option value="">{t('filters.all')}</option>
            {allTopics?.map((topic) => {
              return <option key={topic} value={topic}>{topic}</option>
            })}
          </select>
        </div>
      </form>
      <div className="d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8">
        {(includeGuides || []).map((card, index) => {
          return index + 1 > MAX_ARTICLES ? (
            <ArticleCard key={card.title} card={card} type={guideTypes[card.type]} display={'d-none'} />
          ) : (
            <ArticleCard key={card.title} card={card} type={guideTypes[card.type]} />
          )
        })}
      </div>
      {includeGuides && includeGuides.length > MAX_ARTICLES && (
        <button
          className="col-12 mt-5 text-center text-bold color-text-link btn-link js-filter-card-show-more"
          data-js-filter-card-max={MAX_ARTICLES}
        >
          {t('load_more')}
        </button>
      )}
      <div className="js-filter-card-no-results d-none py-4 text-center color-text-secondary">
        <h4 className="text-normal">{t('no_result')}</h4>
      </div>
    </div>
  )
}
