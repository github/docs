import { MarkGithubIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'

export const SmallFooter = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className="container-xl px-3 mt-6 mb-8 px-md-6 position-relative d-flex flex-row-reverse flex-xl-row flex-wrap flex-xl-nowrap flex-justify-center flex-xl-justify-between f6 color-text-secondary">
      <ul className="list-style-none d-flex flex-wrap col-12 col-xl-5 flex-justify-center flex-xl-justify-between mb-2 mb-xl-0">
        <li className="mr-3 mr-xl-0">&copy; {new Date().getFullYear()} GitHub, Inc.</li>
        <li className="mr-3 mr-xl-0">
          <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">
            {t('terms')}
          </a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
            {t('privacy')}
          </a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://github.com/security">{t('product.links.security')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://www.githubstatus.com/">{t('support.links.status')}</a>
        </li>
        <li>
          <a href="/">{t('support.links.help')}</a>
        </li>
      </ul>

      <a
        aria-label="Homepage"
        title="GitHub"
        className="d-none d-xl-block color-text-secondary"
        href="https://github.com"
      >
        <MarkGithubIcon size={24} />
      </a>

      <ul className="list-style-none d-flex flex-wrap col-12 col-xl-5 flex-justify-center flex-xl-justify-between mb-2 mb-xl-0">
        <li className="mr-3 mr-xl-0">
          <a href="https://support.github.com">{t('support.links.contact_github')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://github.com/pricing">{t('product.links.pricing')}</a>
        </li>
        <li className="mr-3 mr-xl-0">
          <a href="https://docs.github.com">{t('platform.links.developer_api')}</a>
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
    </footer>
  )
}
