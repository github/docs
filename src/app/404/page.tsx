import { Client404Wrapper } from '@/app/components/Client404Wrapper'
import { createServerAppRouterContext } from '@/app/lib/server-context-utils'
import { headers } from 'next/headers'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '404 - Page not found',
  other: { status: '404' },
}

export default async function Page404() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/404'

  const appContext = createServerAppRouterContext(pathname)

  return <Client404Wrapper appContext={appContext} />
}
