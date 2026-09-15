import { useMainContext } from '@/frame/components/context/MainContext'
import { useTranslation } from '@/languages/components/useTranslation'

export const Contribution = () => {
  const { relativePath } = useMainContext()
  const { t } = useTranslation('contribution_cta')

  const contributionHref = relativePath
    ? `https://github.com/github/docs/blob/main/content/${relativePath}`
    : 'https://github.com/github/docs'

  // Heading and body styling comes from the footer column rules in
  // SupportSection.module.scss — the Docs 2026 design renders these as plain body
  // text rather than a bold heading plus muted copy.
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
