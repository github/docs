export type CategorizedEvents = Record<string, AuditLogEventT[]>

export type AuditLogEventT = {
  action: string
  description: string
}

export type RawAuditLogEventT = {
  _allowlists: string[]
  action: string
  description: string
  docs_reference_links: string
  ghes: Record<string, { _allowlists: string[] }>
}

export type VersionedAuditLogData = Record<string, Record<string, AuditLogEventT[]>>
