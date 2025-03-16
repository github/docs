import type { ExtendedRequest, Page } from '@/types'

export type ArchivedVersion = {
  isArchived?: boolean
  requestedVersion?: string
}

export type ExtendedRequestWithPageInfo = ExtendedRequest & {
  pageinfo: {
    pathname: string
    page: Page
    archived?: ArchivedVersion
  }
}
