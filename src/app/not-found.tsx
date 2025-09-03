import { ClientNotFoundWrapper } from '@/app/components/ClientNotFoundWrapper'
import { createServerAppRouterContext } from '@/app/lib/server-context-utils'
import { headers } from 'next/headers'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '404 - Page not found',
  other: { status: '404' },
}

export default async function NotFoundPage() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'

  // Create server context using utility function
  const appContext = createServerAppRouterContext(pathname)

  return <ClientNotFoundWrapper appContext={appContext} />
}
