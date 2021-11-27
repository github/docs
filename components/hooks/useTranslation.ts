import { useMainContext } from 'components/context/MainContext'
import get from 'lodash/get'

// The idea of this component is to mimic a popular i18n library (i18next)
// so that we can set ourselves up to transition to it (or a similar library) in the future
export const useTranslation = (namespaces: string | Array<string>) => {
  const { data } = useMainContext()

  // this can eventually be an object constructed from the input namespaces param above, but for now everything is already loaded
  const loadedData: any = data.ui

  return {
    // The compiled string supports prefixing with a namespace such as `my-namespace:path.to.value`
    t: (strings: TemplateStringsArray | string, ...values: Array<any>) => {
      const key = typeof strings === 'string' ? strings : String.raw(strings, ...values)

      const splitKey = key.split(':')
      if (splitKey.length > 2) {
        throw new Error('Multiple ":" not allowed in translation lookup path')
      }

      if (splitKey.length === 2) {
        const [namespace, path] = splitKey
        return get(loadedData[namespace], path)
      }

      const [path] = splitKey
      if (Array.isArray(namespaces)) {
        for (const namespace of namespaces) {
          const val = get(loadedData[namespace], path)
          if (val !== undefined) {
            return val
          }
        }
        return undefined
      } else {
        return get(loadedData[namespaces], path)
      }
    },
  }
}
