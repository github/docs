import { useRouter } from 'next/router'
import { MarkGithubIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'
import { useMainContext } from 'components/context/MainContext'
import { SidebarProduct } from './SidebarProduct'
import { SidebarHomepage } from './SidebarHomepage'

export const SidebarNav = () => {
  const router = useRouter()
  const { error, relativePath } = useMainContext()
  const { t } = useTranslation('header')

  return (
    <div
      className="d-none d-lg-block color-bg-tertiary position-sticky top-0 overflow-y-auto flex-shrink-0 pb-5"
      style={{ width: 286, height: '100vh' }}
    >
      <div
        className="d-flex flex-items-center p-4 position-sticky top-0 color-bg-tertiary"
        style={{ zIndex: 3 }}
        id="github-logo"
        role="banner"
      >
        <Link
          href={`/${router.locale}`}
          className="color-text-primary"
          aria-hidden="true"
          tabIndex={-1}
        >
          <MarkGithubIcon size={32} />
        </Link>
        <Link
          href={`/${router.locale}`}
          className="f4 font-weight-semibold color-text-primary no-underline no-wrap pl-2 flex-auto"
        >
          {t('github_docs')}
        </Link>
      </div>
      <nav>
        {error === '404' || relativePath === 'index.md' ? <SidebarHomepage /> : <SidebarProduct />}
      </nav>
    </div>
  )
}
