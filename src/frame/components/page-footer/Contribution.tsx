import { GitPullRequestIcon } from '@primer/octicons-react'

import { useMainContext } from 'src/frame/components/context/MainContext'
import { useTranslation } from 'src/languages/components/useTranslation'

export const Contribution = () => {
  const { relativePath } = useMainContext()
  const { t } = useTranslation('contribution_cta')

  const contributionHref = relativePath
    ? `https://github.com/github/docs/blob/main/content/${relativePath}`
    : 'https://github.com/github/docs'

  return (
    <div className="f5 contribution">
      <h3 className="f4 mb-3">{t`title`}</h3>
      <p className="max-w-xs color-fg-muted mb-3">{t`body`}</p>
      <a className="btn" href={contributionHref}>
        <GitPullRequestIcon size="small" className="octicon mr-1" />
        {t`button`}
      </a>
      <p className="color-fg-muted f6 mt-2">
        <a className="text-underline" href="/contributing" target="_blank" rel="noopener">
          {t`to_guidelines`}
        </a>
      </p>
    </div>
  )
}
