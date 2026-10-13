import { renderContent as _renderContent } from '@/content-render/index'
import { getAlertTitles } from '@/languages/lib/get-alert-titles'
import { normalizeDocsUrls } from './normalize-docs-urls'

// Provide English alert titles because renderContent leaves alert boxes blank without them.
export async function renderContent(template: string) {
  const context = {
    alertTitles: await getAlertTitles({ languageCode: 'en' }),
  }
  const rendered = await _renderContent(template, context)
  return normalizeDocsUrls(rendered)
}
