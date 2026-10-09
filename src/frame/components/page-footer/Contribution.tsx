import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'

export const Contribution = () => {
  const { relativePath } = useMainContext()
  const { t } = useTranslation('contribution_cta')

  const contributionHref = relativePath
    ? `https://github.com/github/docs/blob/main/content/${relativePath}`
    : 'https://github.com/github/docs'

  // SupportSection.module.scss restyles this heading and body for the plain Docs 2026 treatment.
  return (
    <div className="f5 contribution">
      <h3>{t`title`}</h3>
      <p>{t`body`}</p>
      <a className="btn" href={contributionHref}>
        {t`button`}
      </a>
    </div>
  )
}
