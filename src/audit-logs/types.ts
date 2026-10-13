export type CategorizedEvents = Record<string, AuditLogEventT[]>

export type CategoryNotes = Record<string, string>

export type AuditLogEventT = {
  action: string
  description: string
  fields?: string[]
  docs_reference_links?: string
  docs_reference_titles?: string
}

export type RawAuditLogEventT = {
  _allowlists: string[]
  action: string
  description: string
  docs_reference_links: string
  docs_reference_titles?: string
  fields?: string[]
  ghes: Record<string, { _allowlists: string[]; fields?: string[] }>
}

export type VersionedAuditLogData = Record<string, Record<string, AuditLogEventT[]>>

export type AuditLogConfig = {
  sha: string
  appendedDescriptions: Record<string, string>
  categoryNotes?: CategoryNotes
}

// Shared entries store fields as indexes into fields-pool.json.
export type DeduplicatedAuditLogEntry = {
  action: string
  description: string
  docs_reference_links?: string
  docs_reference_titles?: string
  fieldsIndex?: number
}

// version-index.json maps version and page names to entries.json indexes.
export type AuditLogVersionIndex = Record<string, Record<string, number[]>>
