import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'
import cx from 'classnames'
import { useTranslation } from 'src/languages/components/useTranslation'

export const LegalFooter = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')
  return (
    <section className="container-xl px-3 mt-6 pb-8 px-md-6 color-fg-muted">
      <h2 className="f4 mb-2 col-12">{t('legal_heading')}</h2>
      <ul className="d-flex flex-wrap list-style-none">
        <li className="mr-3">&copy; {new Date().getFullYear()} GitHub, Inc.</li>
        {/* In Germany, Austria, and Switzerland, the Impressum link is legally required. */}
        {router.locale === 'de' && (
          <li className="mr-3">
            <a
              className="text-underline"
              href="https://aka.ms/impressum_de"
              target="_blank"
              rel="noopener"
            >
              {t('imprint')}
            </a>
            <LinkExternalIcon aria-label="(external site)" size={12} />
          </li>
        )}
        <li className="mr-3">
          <Link
            className="text-underline"
            legacyBehavior={false}
            href={`/${router.locale}/site-policy/github-terms/github-terms-of-service`}
          >
            {t('terms')}
          </Link>
        </li>
        <li className="mr-3">
          {/* KO law requires link to privacy statement to be conspicuous  */}
          <Link
            href={`/${router.locale}/site-policy/privacy-policies/github-privacy-statement`}
            legacyBehavior={false}
            className={cx(
              'text-underline',
              router.locale === 'ko' && 'color-fg-attention text-bold',
            )}
          >
            {t('privacy')}
          </Link>
        </li>
        <li className="mr-3">
          <a className="text-underline" href="https://www.githubstatus.com/">
            {t('status')}
          </a>
        </li>
        <li className="mr-3">
          <a className="text-underline" href="https://github.com/pricing">
            {t('pricing')}
          </a>
        </li>
        <li className="mr-3">
          <a className="text-underline" href="https://services.github.com">
            {t('expert_services')}
          </a>
        </li>
        <li className="mr-3">
          <a className="text-underline" href="https://github.blog">
            {t('blog')}
          </a>
        </li>
      </ul>
    </section>
  )
}
