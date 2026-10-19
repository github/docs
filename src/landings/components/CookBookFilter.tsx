import { ActionMenu, Button, TextInput } from '@primer/react-brand'
import { SearchIcon } from '@primer/octicons-react'
import { useRef, useEffect, useState, type ChangeEvent } from 'react'
import { ArticleCardItems } from '@/landings/types'
import { onActionMenuItemKeyDownCapture } from '@/frame/components/lib/action-menu'
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
    <div className={styles.controls}>
      <div className={styles.search}>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextInput
            fullWidth
            leadingVisual={<SearchIcon />}
            placeholder={t('search_articles')}
            aria-label={t('search_articles')}
            ref={inputRef}
            autoComplete="off"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const query = e.target.value || ''
              onSearch(query)
            }}
          />
        </form>
      </div>
      <div className={styles.filters}>
        <ActionMenu
          selectionVariant="single"
          size="small"
          menuAlignment="start"
          onSelect={(value) => onFilter(categories[Number(value)], 'category', Number(value))}
        >
          <ActionMenu.Button>
            <span className={styles.categoryLabel}>{t('category')}:</span>{' '}
            {categories[selectedCategory]}
          </ActionMenu.Button>
          <ActionMenu.Overlay aria-label={t('category')}>
            {categories.map((category, index) => (
              <ActionMenu.Item
                key={index}
                value={String(index)}
                selected={index === selectedCategory}
                onKeyDownCapture={onActionMenuItemKeyDownCapture}
              >
                {category}
              </ActionMenu.Item>
            ))}
          </ActionMenu.Overlay>
        </ActionMenu>

        {showSurface && (
          <ActionMenu
            selectionVariant="single"
            size="small"
            menuAlignment="start"
            onSelect={(value) => onFilter(surfaces[Number(value)], 'surface', Number(value))}
          >
            <ActionMenu.Button>
              <span className={styles.surfaceLabel}>{t('surface')}:</span>{' '}
              {surfaces[selectedSurface]}
            </ActionMenu.Button>
            <ActionMenu.Overlay aria-label={t('surface')}>
              {surfaces.map((surface, index) => (
                <ActionMenu.Item
                  key={index}
                  value={String(index)}
                  selected={index === selectedSurface}
                  onKeyDownCapture={onActionMenuItemKeyDownCapture}
                >
                  {surface}
                </ActionMenu.Item>
              ))}
            </ActionMenu.Overlay>
          </ActionMenu>
        )}

        {showComplexity && (
          <ActionMenu
            selectionVariant="single"
            size="small"
            menuAlignment="start"
            onSelect={(value) => onFilter(complexities[Number(value)], 'complexity', Number(value))}
          >
            <ActionMenu.Button>
              <span className={styles.complexityLabel}>{t('complexity')}:</span>{' '}
              {complexities[selectedComplexity]}
            </ActionMenu.Button>
            <ActionMenu.Overlay aria-label={t('complexity')}>
              {complexities.map((complexity, index) => (
                <ActionMenu.Item
                  key={index}
                  value={String(index)}
                  selected={index === selectedComplexity}
                  onKeyDownCapture={onActionMenuItemKeyDownCapture}
                >
                  {complexity}
                </ActionMenu.Item>
              ))}
            </ActionMenu.Overlay>
          </ActionMenu>
        )}

        <Button
          variant="subtle"
          size="small"
          style={{ whiteSpace: 'nowrap' }}
          onClick={onResetFilter}
        >
          {t('reset_filters')}
        </Button>
      </div>
    </div>
  )
}
