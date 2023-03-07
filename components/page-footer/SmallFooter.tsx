import Link from 'next/link'
import { useRouter } from 'next/router'
import { MarkGithubIcon, LinkExternalIcon } from '@primer/octicons-react'
import { useTranslation } from '../hooks/useTranslation'

export const SmallFooter = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')
  return (
    <div className="container-xl px-3 mt-6 pb-8 px-md-6 position-relative d-flex flex-row-reverse flex-xl-row flex-wrap flex-xl-nowrap flex-justify-center flex-xl-justify-between f6 color-fg-muted">
      <ul className="list-style-none d-flex flex-wrap col-12 flex-justify-center flex-xl-justify-between mb-2 mb-xl-0">
        <li className="mr-3 mr-xl-0">&copy; {new Date().getFullYear()} GitHub, Inc.</li>
        {/* In Germany, Austria, and Switzerland, the Impressum link is legally required. */}
        {router.locale === 'de' && (
          <li className="mr-3 mr-xl-0">
            <a href="https://aka.ms/impressum_de" target="_blank" rel="noopener">
              Impressum
            </a>
            <LinkExternalIcon size={12} />
          </li>
        )}
        <li className="mr-3 mr-xl-0">
          <Link href={`/${router.locale}/site-policy/github-terms/github-terms-of-service`}>
            {t('terms')}
          </Link>
        </li>
        <li className="mr-3 mr-xl-0">
          {/* KO law requires link to privacy statement to be conspicuous  */}
          <Link
            href={`/${router.locale}/site-policy/privacy-policies/github-privacy-statement`}
            legacyBehavior={false}
            className={router.locale === 'ko' ? 'color-fg-attention text-bold' : undefined}
          >
            {t('privacy')}
          </Link>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://github.com/security">{t('product.links.security')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://www.githubstatus.com/">{t('support.links.status')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <Link href={`/${router.locale}`}>{t('support.links.help')}</Link>
        </li>
        <li>
          <a
            aria-label="Homepage"
            title="GitHub"
            className="d-none d-xl-block color-fg-muted"
            href="https://github.com"
          >
            <MarkGithubIcon size={24} />
          </a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://support.github.com">{t('support.links.contact_github')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://github.com/pricing">{t('product.links.pricing')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <Link href={`/${router.locale}/developers`}>{t('platform.links.developer_api')}</Link>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://services.github.com">{t('support.links.training')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://github.blog">{t('company.links.blog')}</a>
        </li>
        <li>
          <a href="https://github.com/about">{t('company.links.about')}</a>
        </li>
      </ul>
    </div>
  )
}
