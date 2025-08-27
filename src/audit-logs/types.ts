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
