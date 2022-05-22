import { useState } from 'react'
import { ArrowRightIcon, SearchIcon } from '@primer/octicons-react'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { CodeExampleCard } from 'components/landing/CodeExampleCard'

const PAGE_SIZE = 6
export const CodeExamples = () => {
  const { productCodeExamples } = useProductLandingContext()
  const { t } = useTranslation('product_landing')
  const [numVisible, setNumVisible] = useState(PAGE_SIZE)
  const [search, setSearch] = useState('')

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
    setNumVisible(PAGE_SIZE) // reset the visible count (only matters after searching)
  }

  const isSearching = !!search
  let searchResults: typeof productCodeExamples = []
  if (isSearching) {
    const matchReg = new RegExp(search, 'i')
    searchResults = productCodeExamples.filter((example) => {
      const searchableStr = `${example.tags.join(' ')} ${example.title} ${example.description}`
      return matchReg.test(searchableStr)
    })
  }

  return (
    <div>
      <div className="pr-lg-3 mb-5 mt-3">
        <input
          className="input-lg py-2 px-3 col-12 col-lg-8 form-control"
          placeholder={t('search_code_examples')}
          type="search"
          autoComplete="off"
          aria-label={t('search_code_examples')}
          onChange={onSearchChange}
        />
      </div>

      <div className="d-flex flex-wrap gutter">
        {(isSearching ? searchResults : productCodeExamples.slice(0, numVisible)).map((example) => {
          return (
            <div key={example.href} className="col-12 col-xl-4 col-lg-6 mb-4">
              <CodeExampleCard example={example} />
            </div>
          )
        })}
      </div>

      {numVisible < productCodeExamples.length && !isSearching && (
        <button
          className="btn btn-outline float-right"
          onClick={() => setNumVisible(numVisible + PAGE_SIZE)}
        >
          {t('show_more')} <ArrowRightIcon />
        </button>
      )}

      {isSearching && searchResults.length === 0 && (
        <div className="d-none py-4 text-center color-text-secondary font-mktg">
          <div className="mb-3">
            <SearchIcon size={24} />{' '}
          </div>
          <h3 className="text-normal">
            {t('sorry')} <strong className="js-filter-card-value"></strong>
          </h3>
          <p className="my-3 f4">
            {t('no_example')} <br /> {t('try_another')}
          </p>
          <a href="https://github.com/github/docs/blob/main/data/variables/discussions_community_examples.yml">
            {t('add_your_community')} <ArrowRightIcon />
          </a>
        </div>
      )}
    </div>
  )
}
