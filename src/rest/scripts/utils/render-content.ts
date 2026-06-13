import { renderContent as _renderContent } from '@/content-render/index'
import { getAlertTitles } from '@/languages/lib/get-alert-titles'
import { normalizeDocsUrls } from './normalize-docs-urls'

// Wrap the renderContent function and provide the alertTitles
// so they aren't blank
export async function renderContent(template: string) {
  const context = {
    alertTitles: await getAlertTitles({ languageCode: 'en' }),
  }
  const rendered = await _renderContent(template, context)
  return normalizeDocsUrls(rendered)
}
