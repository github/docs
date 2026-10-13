import { useRouter } from 'next/router'
import useSWR from 'swr'

// NODE_ENV === 'development' mounts this to reload the page when the tab regains focus.
// SWR focus revalidation follows the Page Visibility API:
// https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
export default function ClientSideRefresh() {
  const router = useRouter()

  useSWR(
    router.asPath,
    () => {
      // Prefix router.asPath with router.locale so refreshes keep the localized URL.
      router.replace(`/${router.locale}${router.asPath}`, undefined, { scroll: false })
    },
    {
      // Skip mount revalidation because initial content is current.
      revalidateOnMount: false,
    },
  )

  return null
}
