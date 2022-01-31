import { useEffect } from 'react'
import { useRouter } from 'next/router'

import restApiOverrides from '../../lib/redirects/static/client-side-rest-api-redirects.json'
import productOverrides from '../../lib/redirects/static/client-side-product-redirects.json'
const overrideRedirects: Record<string, string> = { ...restApiOverrides, ...productOverrides }

export default function ClientSideRedirectExceptions() {
  const router = useRouter()
  useEffect(() => {
    // We have some one-off redirects for rest api docs
    // currently those are limited to the repos page, but
    // that will grow soon as we restructure the rest api docs.
    // This is a workaround to updating the hardcoded links
    // directly in the REST API code in a separate repo, which
    // requires many file changes and teams to sign off.
    // While the organization is turbulent, we can do this.
    // Once it's more settled, we can refactor the rest api code
    // to leverage the OpenAPI urls rather than hardcoded urls.
    const { hash, pathname } = window.location

    // The `hash` will start with a `#` but all the keys in
    // `overrideRedirects` do not. Hence, this slice.
    const combined = pathname + hash
    const overrideKey = combined
      .replace(`/${router.locale}`, '')
      .replace(`/${router.query.versionId || ''}`, '')
    const redirectToName = overrideRedirects[overrideKey]
    if (redirectToName) {
      const newPathname = combined.replace(overrideKey, redirectToName)
      router.replace(newPathname)
    }
  }, [])

  return null
}
