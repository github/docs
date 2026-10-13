import { useMainContext } from '@/frame/components/context/MainContext'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'

// Components pass one or more namespaces so t and tObject resolve keys without
// repeating the namespace. Missing data falls back in createTranslationFunctions,
// so localized 404 pages keep rendering.
// Example: useTranslation(['football']) lets t('select') resolve football.select.
export const useTranslation = (namespaces: string | Array<string>) => {
  const { data } = useMainContext()
  const loadedData = data.ui

  return createTranslationFunctions(loadedData, namespaces)
}
