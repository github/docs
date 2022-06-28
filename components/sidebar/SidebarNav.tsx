import { useRouter } from 'next/router'
import { MarkGithubIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'
import { useMainContext } from 'components/context/MainContext'
import { SidebarProduct } from './SidebarProduct'
import { SidebarHomepage } from './SidebarHomepage'

export const SidebarNav = () => {
  const router = useRouter()
  const { error, currentProduct } = useMainContext()
  const { t } = useTranslation('header')

  return (
    <div
      className="d-none d-lg-block bg-primary position-sticky top-0 overflow-y-auto flex-shrink-0 pb-5 border-right"
      style={{ width: 326, height: '100vh' }}
      role="banner"
    >
      <div
        tabIndex={-1}
        className="d-flex flex-items-center p-4 position-sticky top-0 color-bg-default"
        style={{ zIndex: 3 }}
        id="github-logo"
      >
        <Link
          href={`/${router.locale}`}
          className="color-fg-default"
          aria-hidden="true"
          tabIndex={-1}
        >
          <MarkGithubIcon size={32} />
        </Link>
        <Link
          href={`/${router.locale}`}
          className="f4 text-semibold color-fg-default no-underline no-wrap pl-2 flex-auto"
        >
          {t('github_docs')}
        </Link>
      </div>
      <nav>
        {error === '404' || currentProduct === null ? <SidebarHomepage /> : <SidebarProduct />}
      </nav>
    </div>
  )
}
