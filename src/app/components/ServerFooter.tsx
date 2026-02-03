import { getUIDataMerged } from '@/data-directory/lib/get-data'
import { createTranslationFunctions } from '@/languages/lib/translation-utils'
import { LinkExternalIcon } from '@primer/octicons-react'
import type { LanguageCode } from '@/languages/lib/languages'

interface ServerFooterProps {
  currentLanguage: LanguageCode
}

export function ServerFooter({ currentLanguage }: ServerFooterProps) {
  // Load translations on server-side - this ensures all footer translations work
  const uiData = getUIDataMerged(currentLanguage)
  const { t } = createTranslationFunctions(uiData, 'footer')

  return (
    <section className="container-xl px-3 mt-6 pb-8 px-md-6 color-fg-muted">
      <h2 className="f4 mb-2 col-12">{t('legal_heading')}</h2>

      {/* Machine translation notice for non-English languages */}
      {currentLanguage !== 'en' && <p>{t('machine')}</p>}

      <ul className="d-flex flex-wrap list-style-none">
        <li className="mr-3">&copy; {new Date().getFullYear()} GitHub, Inc.</li>

        {/* German-specific Impressum link (legally required) */}
        {currentLanguage === 'de' && (
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
          <a
            className="text-underline"
            href={`/${currentLanguage}/site-policy/github-terms/github-terms-of-service`}
          >
            {t('terms')}
          </a>
        </li>

        <li className="mr-3">
          <a
            className={`text-underline ${
              currentLanguage === 'ko' ? 'color-fg-attention text-bold' : ''
            }`}
            href={`/${currentLanguage}/site-policy/privacy-policies/github-privacy-statement`}
          >
            {t('privacy')}
          </a>
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
