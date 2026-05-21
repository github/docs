import React, { useState, useMemo } from 'react'
import { DataTable, Table } from '@primer/react/experimental'
import { TextInput, ActionMenu, ActionList, Pagination } from '@primer/react'
import { useTranslation } from '@/languages/components/useTranslation'
import type { SecretScanningData } from '@/types'

const PAGE_SIZE = 25

type SecretScanningRow = SecretScanningData & { id: string }

type FilterState = {
  search: string
  pushProtection: 'all' | 'yes' | 'no'
  validityCheck: 'all' | 'yes' | 'no'
  partnerAlert: 'all' | 'yes' | 'no'
  metadata: 'all' | 'yes' | 'no'
  base64: 'all' | 'yes' | 'no'
}

export function SecretScanningTable({ data }: { data: SecretScanningData[] }) {
  const { t } = useTranslation('secret_scanning')
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    pushProtection: 'all',
    validityCheck: 'all',
    partnerAlert: 'all',
    metadata: 'all',
    base64: 'all',
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<string | undefined>(undefined)
  const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('ASC')

  // Add stable IDs once based on original data order
  const dataWithIds: SecretScanningRow[] = useMemo(() => {
    return data.map((entry, i) => ({ ...entry, id: `${entry.secretType}-${i}` }))
  }, [data])

  // Client-side filtering — fast because data is ~200-400 entries
  const filtered: SecretScanningRow[] = useMemo(() => {
    return dataWithIds.filter((entry) => {
      // Text search across provider + secret type
      if (filters.search) {
        const q = filters.search.toLowerCase()
        const match =
          entry.provider.toLowerCase().includes(q) ||
          entry.supportedSecret.toLowerCase().includes(q) ||
          entry.secretType.toLowerCase().includes(q)
        if (!match) return false
      }

      // Boolean filters
      if (filters.pushProtection === 'yes' && !entry.hasPushProtection) return false
      if (filters.pushProtection === 'no' && entry.hasPushProtection) return false
      if (filters.validityCheck === 'yes' && !entry.hasValidityCheck) return false
      if (filters.validityCheck === 'no' && entry.hasValidityCheck) return false
      if (filters.partnerAlert === 'yes' && !entry.isPublic) return false
      if (filters.partnerAlert === 'no' && entry.isPublic) return false
      if (filters.metadata === 'yes' && !entry.hasExtendedMetadata) return false
      if (filters.metadata === 'no' && entry.hasExtendedMetadata) return false
      if (filters.base64 === 'yes' && !entry.base64Supported) return false
      if (filters.base64 === 'no' && entry.base64Supported) return false

      return true
    })
  }, [dataWithIds, filters])

  // Sort the full filtered dataset
  const sorted: SecretScanningRow[] = useMemo(() => {
    if (!sortColumn) return filtered
    return [...filtered].sort((a, b) => {
      const aVal = String((a as Record<string, unknown>)[sortColumn] ?? '')
      const bVal = String((b as Record<string, unknown>)[sortColumn] ?? '')
      const cmp = aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: 'base' })
      return sortDirection === 'ASC' ? cmp : -cmp
    })
  }, [filtered, sortColumn, sortDirection])

  // Paginate (Pagination component uses 1-indexed pages)
  const pageCount = Math.ceil(sorted.length / PAGE_SIZE)
  const pageData = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <div>
      {/* Filter bar */}
      <div
        role="search"
        aria-label={t('filter_aria_label')}
        style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <FilterDropdown
            label={t('filter_push_protection')}
            value={filters.pushProtection}
            onChange={(v) => {
              setFilters((f) => ({ ...f, pushProtection: v }))
              setCurrentPage(1)
            }}
          />
          <FilterDropdown
            label={t('filter_validity_check')}
            value={filters.validityCheck}
            onChange={(v) => {
              setFilters((f) => ({ ...f, validityCheck: v }))
              setCurrentPage(1)
            }}
          />
          <FilterDropdown
            label={t('filter_partner_alert')}
            value={filters.partnerAlert}
            onChange={(v) => {
              setFilters((f) => ({ ...f, partnerAlert: v }))
              setCurrentPage(1)
            }}
          />
          <FilterDropdown
            label={t('filter_metadata')}
            value={filters.metadata}
            onChange={(v) => {
              setFilters((f) => ({ ...f, metadata: v }))
              setCurrentPage(1)
            }}
          />
          <FilterDropdown
            label={t('filter_base64')}
            value={filters.base64}
            onChange={(v) => {
              setFilters((f) => ({ ...f, base64: v }))
              setCurrentPage(1)
            }}
          />
        </div>
        <TextInput
          aria-label={t('search_aria_label')}
          placeholder={t('search_placeholder')}
          value={filters.search}
          onChange={(e) => {
            setFilters((f) => ({ ...f, search: e.target.value }))
            setCurrentPage(1)
          }}
        />
      </div>

      {/* Results count */}
      <p
        aria-live="polite"
        aria-atomic="true"
        style={{ marginBottom: '8px', color: 'var(--fgColor-muted, #656d76)' }}
      >
        {t('showing_patterns')
          .replace('{filtered}', String(filtered.length))
          .replace('{total}', String(data.length))}
      </p>

      {/* Data table */}
      <div style={{ overflowX: 'auto' }}>
        <Table.Container>
          <Table.Title as="h2" id="secret-scanning-table-title">
            {t('table_title')}
          </Table.Title>
          <DataTable
            aria-labelledby="secret-scanning-table-title"
            data={pageData}
            externalSorting
            initialSortColumn={sortColumn}
            initialSortDirection={sortDirection}
            onToggleSort={(columnId, direction) => {
              setSortColumn(String(columnId))
              setSortDirection(direction)
              setCurrentPage(1)
            }}
            columns={[
              {
                header: t('column_provider'),
                field: 'provider',
                width: '140px',
                rowHeader: true,
                sortBy: 'alphanumeric',
                renderCell: (row) => <strong>{row.provider}</strong>,
              },
              {
                header: t('column_secret'),
                field: 'supportedSecret',
                width: '280px',
                renderCell: (row) => {
                  // The middleware appends HTML for duplicates; strip it.
                  // Also handle </br> and <br/> separators in the raw secretType.
                  const cleanSecretType = row.secretType
                    .replace(/ <br\/><a href="#token-versions">Token versions<\/a>/, '')
                    .replace(/<\/?br\s*\/?>/gi, ', ')
                    .replace(/,\s*,/g, ',')
                  return (
                    <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                      <span>{row.supportedSecret}</span>
                      <p
                        style={{
                          color: 'var(--fgColor-muted, #656d76)',
                          fontSize: '12px',
                          margin: 0,
                        }}
                      >
                        <code>{cleanSecretType}</code>
                        {row.isduplicate && (
                          <>
                            {', '}
                            <a href="#token-versions">{t('token_versions')}</a>
                          </>
                        )}
                      </p>
                    </div>
                  )
                },
              },
              {
                header: t('column_partner'),
                field: 'isPublic',
                renderCell: (row) => (
                  <BoolIcon value={Boolean(row.isPublic)} label={t('column_partner')} t={t} />
                ),
              },
              {
                header: t('column_user_alert'),
                field: 'isPrivateWithGhas',
                renderCell: (row) => (
                  <BoolIcon
                    value={Boolean(row.isPrivateWithGhas)}
                    label={t('column_user_alert')}
                    t={t}
                  />
                ),
              },
              {
                header: t('column_push_protection'),
                field: 'hasPushProtection',
                renderCell: (row) => (
                  <BoolIcon
                    value={Boolean(row.hasPushProtection)}
                    label={t('column_push_protection')}
                    t={t}
                  />
                ),
              },
              {
                header: t('column_validity_check'),
                field: 'hasValidityCheck',
                renderCell: (row) => (
                  <BoolIcon
                    value={Boolean(row.hasValidityCheck)}
                    label={t('column_validity_check')}
                    t={t}
                  />
                ),
              },
              {
                header: t('column_metadata'),
                field: 'hasExtendedMetadata',
                renderCell: (row) => (
                  <BoolIcon
                    value={Boolean(row.hasExtendedMetadata)}
                    label={t('column_metadata')}
                    t={t}
                  />
                ),
              },
              {
                header: t('column_base64'),
                field: 'base64Supported',
                renderCell: (row) => (
                  <BoolIcon value={Boolean(row.base64Supported)} label={t('column_base64')} t={t} />
                ),
              },
            ]}
          />
        </Table.Container>
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <Pagination
          aria-label={t('pagination_label')}
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={(_e: React.MouseEvent, page: number) => setCurrentPage(page)}
        />
      )}
    </div>
  )
}

// Simple ✓/✗ icon with a11y labels
function BoolIcon({
  value,
  label,
  t,
}: {
  value: boolean
  label?: string
  t: (key: string) => string
}) {
  const text = value ? t('bool_yes') : t('bool_no')
  const fullLabel = label ? `${label}: ${text}` : text
  return (
    <span aria-label={fullLabel} title={fullLabel}>
      {value ? '✓' : '✗'}
    </span>
  )
}

// Reusable filter dropdown (all / yes / no)
function FilterDropdown({
  label,
  value,
  onChange,
}: {
  label: string
  value: 'all' | 'yes' | 'no'
  onChange: (v: 'all' | 'yes' | 'no') => void
}) {
  const { t } = useTranslation('secret_scanning')
  return (
    <ActionMenu>
      <ActionMenu.Button size="small">
        {label}:{' '}
        {value === 'all' ? t('filter_all') : value === 'yes' ? t('filter_yes') : t('filter_no')}
      </ActionMenu.Button>
      <ActionMenu.Overlay>
        <ActionList selectionVariant="single">
          {(['all', 'yes', 'no'] as const).map((opt) => (
            <ActionList.Item key={opt} selected={value === opt} onSelect={() => onChange(opt)}>
              {opt === 'all' ? t('filter_all') : opt === 'yes' ? t('filter_yes') : t('filter_no')}
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}
