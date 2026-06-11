import { TextInput, ActionMenu, ActionList, Button } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import { useRef, useEffect, useState, type ChangeEvent } from 'react'
import { ArticleCardItems } from '@/landings/types'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './CookBookFilter.module.scss'

type Props = {
  tokens: ArticleCardItems
  onSearch: (query: string) => void
  isSearchOpen?: boolean
  handleFilter: (option: string, type: 'category' | 'surface' | 'complexity') => void
  handleResetFilter: () => void
  showSurface?: boolean
  showComplexity?: boolean
}

export const CookBookFilter = ({
  onSearch,
  isSearchOpen,
  tokens,
  handleFilter,
  handleResetFilter,
  showSurface = true,
  showComplexity = false,
}: Props) => {
  const categories: string[] = ['All', ...new Set(tokens.flatMap((item) => item.category || []))]
  const surfaces: string[] = ['All', ...new Set(tokens.flatMap((item) => item.surface || []))]
  const complexities: string[] = [
    'All',
    ...new Set(tokens.flatMap((item) => item.complexity || [])),
  ]
  const { t } = useTranslation('cookbook_landing')

  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSurface, setSelectedSurface] = useState(0)
  const [selectedComplexity, setSelectedComplexity] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const onFilter = (option: string, type: 'category' | 'surface' | 'complexity', index: number) => {
    if (type === 'category') {
      setSelectedCategory(index)
    } else if (type === 'surface') {
      setSelectedSurface(index)
    } else if (type === 'complexity') {
      setSelectedComplexity(index)
    }
    handleFilter(option, type)
  }

  const onResetFilter = () => {
    setSelectedCategory(0)
    setSelectedSurface(0)
    setSelectedComplexity(0)
    handleResetFilter()
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus()
    }
  }, [isSearchOpen])

  return (
    <div className="d-lg-flex d-sm-block">
      <div className="col-12 mr-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <TextInput
            leadingVisual={SearchIcon}
            className={`m-1 ${styles.textInput}`}
            placeholder={t('search_articles')}
            ref={inputRef}
            autoComplete="false"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const query = e.target.value || ''
              onSearch(query)
            }}
          />
        </form>
      </div>
      <div className="d-flex flex-wrap flex-md-nowrap ">
        <ActionMenu>
          <ActionMenu.Button className="col-md-1 col-sm-2 m-1">
            <span className={styles.categoryLabel}>{t('category')}:</span>{' '}
            {categories[selectedCategory]}
          </ActionMenu.Button>
          <ActionMenu.Overlay width="auto">
            <ActionList selectionVariant="single">
              {categories.map((category, index) => (
                <ActionList.Item
                  key={index}
                  selected={index === selectedCategory}
                  onSelect={() => onFilter(category, 'category', index)}
                >
                  {category}
                </ActionList.Item>
              ))}
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>

        {showSurface && (
          <ActionMenu>
            <ActionMenu.Button className="col-md-1 col-sm-2 m-1">
              <span className={styles.surfaceLabel}>{t('surface')}:</span>{' '}
              {surfaces[selectedSurface]}
            </ActionMenu.Button>
            <ActionMenu.Overlay width="auto">
              <ActionList selectionVariant="single">
                {surfaces.map((surface, index) => (
                  <ActionList.Item
                    key={index}
                    selected={index === selectedSurface}
                    onSelect={() => onFilter(surface, 'surface', index)}
                  >
                    {surface}
                  </ActionList.Item>
                ))}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        )}

        {showComplexity && (
          <ActionMenu>
            <ActionMenu.Button className="col-md-1 col-sm-2 m-1">
              <span className={styles.surfaceLabel}>{t('complexity')}:</span>{' '}
              {complexities[selectedComplexity]}
            </ActionMenu.Button>
            <ActionMenu.Overlay width="auto">
              <ActionList selectionVariant="single">
                {complexities.map((complexity, index) => (
                  <ActionList.Item
                    key={index}
                    selected={index === selectedComplexity}
                    onSelect={() => onFilter(complexity, 'complexity', index)}
                  >
                    {complexity}
                  </ActionList.Item>
                ))}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        )}

        <Button variant="invisible" className="col-md-1 col-sm-2 mt-1" onClick={onResetFilter}>
          {t('reset_filters')}
        </Button>
      </div>
    </div>
  )
}
