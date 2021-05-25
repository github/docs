import { GitPullRequestIcon } from '@primer/octicons-react'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'

export const Contribution = () => {
  const { relativePath } = useMainContext()
  const { t } = useTranslation('contribution_cta')

  const contribution_href = relativePath
    ? `https://github.com/github/docs/edit/main/content/${relativePath}`
    : 'https://github.com/github/docs'

  return (
    <div className="f5 contribution">
      <h2 className="f4">{t`title`}</h2>
      <p className="color-text-secondary f6">{t`body`}</p>
      <a className="btn btn-outline" href={contribution_href}>
        <GitPullRequestIcon size="small" className="octicon mr-1" />
        {t`button`}
      </a>
      <p className="color-text-secondary f6 mt-2">
        {t`or`}{' '}
        <a
          href="https://github.com/github/docs/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener"
        >
          {t`to_guidelines`}
        </a>
      </p>
    </div>
  )
}
