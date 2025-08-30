import type { UIStrings } from '@/frame/components/context/MainContext'
import { useMainContext } from '@/frame/components/context/MainContext'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'

// Used to pull translation UI strings from the page props into
// React components. When you instantiate the hook you can pass
// the name or names of the namespaces you want to use. Then, when
// referring to specific keys you don't have to say the namespace
// (or which of the namespaces) you refer to.
// Example use:
//
//    const { t, tObject } = useTranslation(['football', 'quiz'])
//
//    return <div>
//         <b>{t('select')}</b> {/* shorthand now for 'football.select' */}
//         <select>
//           {['yes', 'no', 'maybe'].map((answer) => (
//              <option key={answer} value={answer}>{tObject('choices')[answer]}</option>
//            )}
//         </select>
//       </div>
//
// You can also use the TemplateStringArray version like:
//
//    <b>{t`select`)}</b>
//
// Any namespace used when you initialize `useTranslation` that isn't
// recognized (prepared in the page props) will throw an error.
// And any key not recognized will also throw an error. For example:
//
//    <button>{t('sav_changes')}</button>
//
// ...will throw because of the typo 'sav_changes' instead of 'save_changes'.
export const useTranslation = (namespaces: string | Array<string>) => {
  const { data } = useMainContext()
  const loadedData = data.ui

  return createTranslationFunctions(loadedData, namespaces)
}

/**
 * Hook for App Router contexts that don't use MainContext
 */
export const useAppTranslation = (uiData: UIStrings, namespaces: string | Array<string>) => {
  return createTranslationFunctions(uiData, namespaces)
}
