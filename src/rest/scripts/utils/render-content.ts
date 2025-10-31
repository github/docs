import { renderContent as _renderContent } from '@/content-render/index'
import { getAlertTitles } from '@/languages/lib/get-alert-titles'

// Wrap the renderContent function and provide the alertTitles
// so they aren't blank
export async function renderContent(template: string) {
  const context = {
    alertTitles: await getAlertTitles({ languageCode: 'en' }),
  }
  return await _renderContent(template, context)
}
