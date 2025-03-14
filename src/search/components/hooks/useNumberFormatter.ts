import { useRouter } from 'next/router'

export function useNumberFormatter() {
  const { locale } = useRouter()
  return {
    formatInteger: (num: number) => {
      return new Intl.NumberFormat(locale).format(num)
    },
  }
}
