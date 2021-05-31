import { useRouter } from 'next/router'
import Link from 'next/link'
import { LinkExternalIcon, MarkGithubIcon } from '@primer/octicons-react'
import { useTranslation } from './hooks/useTranslation'
import { useMainContext } from './context/MainContext'
import { SidebarProduct } from './product/SidebarProduct'
import { AllProductsLink } from './product/AllProductsLink'
import { useVersion } from './hooks/useVersion'

type Props = {}
export const SidebarNav = (props: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { error, relativePath } = useMainContext()
  const { t } = useTranslation('header')

  return (
    <div className="d-none d-lg-block color-bg-tertiary position-sticky top-0 overflow-y-auto root">
      <div
        className="d-flex flex-items-center p-4 position-sticky top-0 color-bg-tertiary"
        style={{ zIndex: 3 }}
        id="github-logo"
        role="banner"
      >
        <Link href={`/${router.locale}`}>
          <a className="color-text-primary" aria-hidden="true" tabIndex={-1}>
            <MarkGithubIcon size={32} />
          </a>
        </Link>
        <Link href={`/${router.locale}`}>
          <a className="h4-mktg color-text-primary no-underline no-wrap pl-2 flex-auto">
            {t('github_docs')}
          </a>
        </Link>
      </div>
      <nav>
        {error === '404' || relativePath === 'index.md' ? (
          <ul className="sidebar-products mt-4">
            {currentVersion !== 'homepage' && <AllProductsLink />}
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
            width: 280px;
            height: 100vh;
            flex-shrink: 0;
          }
        `}
      </style>
    </div>
  )
}

const SidebarHomepage = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { activeProducts } = useMainContext()

  return (
    <>
      {activeProducts.map((product) => {
        if (!product.versions?.includes(currentVersion) && currentVersion !== 'homepage') {
          return null
        }

        const href = `${!product.external ? `/${router.locale}` : ''}${
          product.versions?.includes(currentVersion)
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
