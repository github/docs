import type { DateRange } from '@/metrics/lib/dates'

// SHARED QUERY CONSTANTS
export const SHARED_DECLARATIONS = (
  path: string | string[],
  dates: DateRange,
  version: string | null,
): string =>
  `
    let _article = dynamic(['${Array.isArray(path) ? path.join("', '") : path}']);
    let _articleType = dynamic(null);
    let _endTime = datetime(${dates.endDate || null});
    let _language = dynamic(null);
    let _pageType = dynamic(null);
    let _product = dynamic(null);
    let _startTime = datetime(${dates.startDate || null});
    let _version = dynamic(${version ? `['${version}']` : null});
`.trim()

export const SHARED_FILTERS = `
        | where timestamp between (_startTime .. _endTime)
        | where context.hostname == 'docs.github.com'
        | where abs(totimespan(context.created - timestamp)) < 1h
        | where isempty(_language) or tostring(context.path_language) in (_language)
        | where isempty(_version) or tostring(context.path_version) in (_version)
        | where isempty(_article) or context.path_article has_any (_article)
        | where isempty(_product) or tostring(context.path_product) in (_product)
        | where isempty(_pageType) or tostring(context.page_document_type) in (_pageType)
        | where isempty(_articleType) or tostring(context.page_type) in (_articleType)
`.trim()
