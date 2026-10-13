import { type MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { MinimalFooter, Text } from '@primer/react-brand'
import cx from 'clsx'

import { FooterDivider } from '@/frame/components/page-footer/FooterDivider'
import { SupportSection } from '@/frame/components/page-footer/SupportSection'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './DocsFooter.module.scss'

// Figma Docs 2026 node 123-6013 places legal links beside the copyright in the
// bottom row. Passing them through copyrightStatement reaches that row without
// overriding Brand internals and avoids the five-link cap. Since copyrightStatement
// renders inside Text as p, children must stay phrasing content: spans and anchors only.
// BackToTop must keep ghd-scroll-to-top because src/events/components/events.ts
// listens for it, and activations go untracked without it. BackToTop preserves className.
export const DocsFooter = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')

  const termsHref = `/${router.locale}/site-policy/github-terms/github-terms-of-service`
  const privacyHref = `/${router.locale}/site-policy/privacy-policies/github-privacy-statement`

  // Match Breadcrumbs: plain clicks navigate client-side, while modified clicks and href stay native.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    // Disable Next.js locale handling because these hrefs already carry the locale prefix.
    router.push(href, undefined, { locale: false })
  }

  const legalLinks = [
    // In Germany, Austria, and Switzerland, the Impressum link is legally required.
    ...(router.locale === 'de'
      ? [
          {
            href: 'https://aka.ms/impressum_de',
            label: t('imprint'),
            external: true,
          },
        ]
      : []),
    { href: termsHref, label: t('terms'), internal: true },
    // Korean law requires the link to the privacy statement to be conspicuous.
    {
      href: privacyHref,
      label: t('privacy'),
      internal: true,
      conspicuous: router.locale === 'ko',
    },
    { href: 'https://www.githubstatus.com/', label: t('status') },
    { href: 'https://github.com/pricing', label: t('pricing') },
  ]

  return (
    <>
      <FooterDivider />
      <MinimalFooter
        data-container="footer"
        className={styles.docsFooter}
        socialLinks={false}
        copyrightStatement={
          <span className={styles.bottomRow}>
            <span
              className={styles.copyrightText}
            >{`GitHub Inc. © ${new Date().getFullYear()}`}</span>
            <span className={styles.legalLinks}>
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.legalLink}
                  data-conspicuous={link.conspicuous ? 'true' : undefined}
                  {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                  {...(link.external ? { 'aria-label': `${link.label} (external site)` } : {})}
                  {...(link.internal
                    ? {
                        onClick: (event: MouseEvent<HTMLAnchorElement>) =>
                          handleClick(event, link.href),
                      }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </span>
          </span>
        }
        centerComponent={
          <div className={styles.centerSlot}>
            <SupportSection />
          </div>
        }
      >
        {/* Footnotes keeps only Brand Text children, so wrap the machine translation notice. */}
        {router.locale !== 'en' && (
          <MinimalFooter.Footnotes>
            <Text>{t('machine')}</Text>
          </MinimalFooter.Footnotes>
        )}

        <MinimalFooter.BackToTop
          className={cx(styles.backToTop, 'ghd-scroll-to-top')}
          focusTargetId="main-content"
        >
          {t('back_to_top')}
        </MinimalFooter.BackToTop>
      </MinimalFooter>
    </>
  )
}
