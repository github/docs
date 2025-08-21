import { AppRouterMainContextProvider } from '@/app/components/AppRouterMainContext'
import { NotFoundContent } from '@/app/components/NotFoundContent'
import { getAppRouterContext } from '@/app/lib/app-router-context'
import type { Metadata } from 'next'

// Force this page to be dynamic so it can access headers()
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '404 - Page not found',
  other: {
    status: '404',
  },
}

async function NotFoundPage() {
  // Get context from headers set by gateway middleware
  const appContext = await getAppRouterContext()

  return (
    <AppRouterMainContextProvider context={appContext}>
      <NotFoundContent />
    </AppRouterMainContextProvider>
  )
}

export default NotFoundPage
