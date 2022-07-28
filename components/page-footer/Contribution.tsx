import { GitPullRequestIcon } from '@primer/octicons-react'

import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'

export const Contribution = () => {
  const { relativePath } = useMainContext()
  const { t } = useTranslation('contribution_cta')

  const contributionHref = relativePath
    ? `https://github.com/github/docs/edit/main/content/${relativePath}`
    : 'https://github.com/github/docs'

  return (
    <div className="hide-sm hide-md f5 contribution">
      <h2 className="f4 mb-3">{t`title`}</h2>
      <p className="max-w-xs color-fg-muted mb-3">{t`body`}</p>
      <a className="btn color-border-accent-emphasis" href={contributionHref}>
        <GitPullRequestIcon size="small" className="octicon mr-1" />
        {t`button`}
      </a>
      <p className="color-fg-muted f6 mt-2">
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
