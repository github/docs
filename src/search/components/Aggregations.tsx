import { CheckboxGroup, Checkbox, FormControl } from '@primer/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import type { SearchResultAggregations } from './types'
import { useTranslation } from 'src/languages/components/useTranslation'

type Props = {
  aggregations: SearchResultAggregations
}

export function SearchResultsAggregations({ aggregations }: Props) {
  const { t } = useTranslation('search_results')
  const { query, locale, asPath, push } = useRouter()
  const selectedQuery = query.toplevel ? query.toplevel : []
  const selected = Array.isArray(selectedQuery) ? selectedQuery : [selectedQuery]

  function makeHref(toplevel: string) {
    const [asPathRoot, asPathQuery = ''] = asPath.split('#')[0].split('?')
    const params = new URLSearchParams(asPathQuery)
    if (selected.includes(toplevel)) {
      const before = params.getAll('toplevel')
      params.delete('toplevel')
      for (const other of before) {
        if (other !== toplevel) {
          params.append('toplevel', other)
        }
      }
    } else {
      params.append('toplevel', toplevel)
    }
    return `/${locale}${asPathRoot}?${params}`
  }

  function makeClearHref() {
    const [asPathRoot, asPathQuery = ''] = asPath.split('#')[0].split('?')
    const params = new URLSearchParams(asPathQuery)
    params.delete('toplevel')
    return `/${locale}${asPathRoot}?${params}`
  }

  if (aggregations.toplevel && aggregations.toplevel.length > 0) {
    return (
      <div>
        <CheckboxGroup>
          <CheckboxGroup.Label>
            {t('filter')}{' '}
            {selected.length > 0 && <Link href={makeClearHref()}>{t('clear_filter')}</Link>}
          </CheckboxGroup.Label>

          {aggregations.toplevel.map((aggregation) => (
            <FormControl key={aggregation.key}>
              <Checkbox
                value={aggregation.key}
                checked={selected.includes(aggregation.key)}
                onChange={() => {
                  push(makeHref(aggregation.key))
                }}
              />
              <FormControl.Label>
                {aggregation.key} ({aggregation.count})
              </FormControl.Label>
            </FormControl>
          ))}
        </CheckboxGroup>
      </div>
    )
  }
  return null
}
