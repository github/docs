import { useRouter } from 'next/router'
import { LinkExternalIcon, MarkGithubIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useTranslation } from './hooks/useTranslation'
import { useMainContext } from './context/MainContext'
import { SidebarProduct } from './product/SidebarProduct'
import { AllProductsLink } from './product/AllProductsLink'
import { useVersion } from './hooks/useVersion'

export const SidebarNav = () => {
  const router = useRouter()
  const { error, relativePath, isFPT } = useMainContext()
  const { t } = useTranslation('header')

  return (
    <div className="d-none d-lg-block color-bg-tertiary position-sticky top-0 overflow-y-auto root">
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
          className="h4-mktg color-text-primary no-underline no-wrap pl-2 flex-auto"
        >
          {t('github_docs')}
        </Link>
      </div>
      <nav>
        {error === '404' || relativePath === 'index.md' ? (
          <ul className="sidebar-products mt-4">
            {!isFPT && <AllProductsLink />}
            <SidebarHomepage />
          </ul>
        ) : (
          <ul className="sidebar-products">
            <SidebarProduct />
          </ul>
        )}
      </nav>

      <style jsx>
        {`
          .root {
            width: 286px;
            height: 100vh;
            flex-shrink: 0;
            padding-bottom: 32px;
          }
        `}
      </style>
    </div>
  )
}

const SidebarHomepage = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { activeProducts, isFPT } = useMainContext()

  return (
    <>
      {activeProducts.map((product) => {
        if (!isFPT && !product.versions?.includes(currentVersion) && !product.external) {
          return null
        }

        const href = `${!product.external ? `/${router.locale}` : ''}${
          product.versions?.includes(currentVersion) && !isFPT
            ? `/${currentVersion}/${product.id}`
            : product.href
        }`

        return (
          <li
            key={product.id}
            title={`${product.name}${product.external ? '(External Site)' : ''}`}
            className="sidebar-product"
          >
            <a
              href={href}
              target={product.external ? '_blank' : undefined}
              className="f4 pl-4 pr-5 py-2 color-text-primary"
            >
              {product.name}
              {product.external && (
                <span className="ml-1">
                  <LinkExternalIcon size="small" />
                </span>
              )}
            </a>
          </li>
        )
      })}
    </>
  )
}
