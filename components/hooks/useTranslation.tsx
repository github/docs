import { useMainContext } from 'components/context/MainContext'
import get from 'lodash/get'

// The idea of this component is to mimic a popular i18n library (i18next)
// so that we can set ourselves up to transition to it (or a similar library) in the future
export const useTranslation = (translationGroup: string) => {
  const { data } = useMainContext()

  return {
    t: (strings: TemplateStringsArray | string, ...values: Array<any>) => {
      const key = typeof strings === 'string' ? strings : String.raw(strings, ...values)
      return get((data.ui as any)[translationGroup], key)
    },
  }
}
