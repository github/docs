import type { UIStrings } from 'src/frame/components/context/MainContext'
import { useMainContext } from 'src/frame/components/context/MainContext'

class TranslationNamespaceError extends Error {}
class UngettableError extends Error {}

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

  const namespacesArray = Array.isArray(namespaces) ? namespaces : [namespaces]

  for (const namespace of namespacesArray) {
    if (!(namespace in loadedData)) {
      console.warn(
        'The following namespaces in data.ui have been loaded: ' +
          JSON.stringify(Object.keys(loadedData).sort()),
      )
      throw new TranslationNamespaceError(
        `Namespace "${namespace}" not found in data. ` +
          'Follow the stack trace to see which useTranslation(...) call is ' +
          'causing this error. If the namespace is present in data/ui.yml ' +
          'but this error is happening, find the related component ' +
          'getServerSideProps() it goes through and make sure it calls ' +
          `addUINamespaces() with "${namespace}".`,
      )
    }
  }

  function carefulGetWrapper(path: string) {
    for (const namespace of namespacesArray) {
      if (!(namespace in loadedData)) {
        throw new TranslationNamespaceError(`Namespace "${namespace}" not found in data. `)
      }
      const deeper = loadedData[namespace]
      if (typeof deeper === 'string') {
        continue
      }
      try {
        return carefulGet(deeper, path)
      } catch (error) {
        if (!(error instanceof UngettableError)) {
          throw error
        }
      }
    }

    return carefulGet(loadedData, path)
  }

  return {
    tObject: (strings: TemplateStringsArray | string) => {
      const key = typeof strings === 'string' ? strings : String.raw(strings)
      return carefulGetWrapper(key) as UIStrings
    },
    t: (strings: TemplateStringsArray | string, ...values: Array<any>) => {
      const key = typeof strings === 'string' ? strings : String.raw(strings, ...values)
      return carefulGetWrapper(key) as string
    },
  }
}

function carefulGet(uiData: UIStrings, dottedPath: string) {
  const splitPath = dottedPath.split('.')
  const start = splitPath[0]
  if (!(start in uiData)) {
    throw new UngettableError(
      `Namespace "${start}" not found in loaded data (not one of: ${Object.keys(uiData).sort()})`,
    )
  }
  if (splitPath.length > 1) {
    const deeper = uiData[start]
    if (typeof deeper === 'string') {
      throw new Error(`Namespace "${start}" is a string, not an object`)
    }
    return carefulGet(deeper, splitPath.slice(1).join('.'))
  } else {
    if (!(start in uiData)) {
      throw new UngettableError(`Key "${start}" not found in loaded data`)
    }
    return uiData[start]
  }
}
