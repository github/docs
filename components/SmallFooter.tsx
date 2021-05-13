import { MarkGithubIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'

export const SmallFooter = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className="py-6 text-small">
      <div className="container-xl d-flex px-3 px-md-6">
        <ul className="d-flex list-style-none flex-wrap flex-justify-center flex-xl-justify-start">
          <li className="d-flex mr-xl-3 color-text-secondary">
            <MarkGithubIcon className="mr-2 mr-xl-3" size={20} />
            <span>&copy; {new Date().getFullYear()} GitHub, Inc.</span>
          </li>
          <li className="ml-3">
            <a href="/github/site-policy/github-terms-of-service">{t`terms`}</a>
          </li>
          <li className="ml-3">
            <a href="/github/site-policy/github-privacy-statement">{t`privacy`} </a>
          </li>
          <li className="ml-3">
            <a href="https://github.com/security">{t`product.links.security`}</a>
          </li>
          <li className="ml-3">
            <a href="https://www.githubstatus.com/">{t`support.links.status`}</a>
          </li>
          <li className="ml-3">
            <a href="/">{t`support.links.help`}</a>
          </li>
          <li className="ml-3">
            <a href="https://support.github.com">{t`support.links.contact_github`}</a>
          </li>
          <li className="ml-3">
            <a href="https://github.com/pricing">{t`product.links.pricing`}</a>
          </li>
          <li className="ml-3">
            <a href="/developers">{t`platform.links.developer_api`}</a>
          </li>
          <li className="ml-3">
            <a href="https://services.github.com/">{t`support.links.training`}</a>
          </li>
          <li className="ml-3">
            <a href="https://github.com/about">{t`company.links.about`}</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
