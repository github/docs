import { useRouter } from 'next/router'

type Info = {
  page: number
}
export const usePage = (): Info => {
  const router = useRouter()
  const page = parseInt(
    router.query.page && Array.isArray(router.query.page)
      ? router.query.page[0]
      : router.query.page || '',
  )
  return {
    page: !isNaN(page) && page >= 1 ? page : 1,
  }
}
