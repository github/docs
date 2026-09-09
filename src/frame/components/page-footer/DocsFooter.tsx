import { type MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { MinimalFooter, Text } from '@primer/react-brand'
import cx from 'classnames'

import { FooterDivider } from '@/frame/components/page-footer/FooterDivider'
import { SupportSection } from '@/frame/components/page-footer/SupportSection'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './DocsFooter.module.scss'

// The Docs 2026 site footer (Figma node 123-6013): decorative band, then brand
// MinimalFooter supplying the logomark + back-to-top row, the help region, and the
// legal/copyright strip.
//
// The design puts the legal links in the *bottom* row beside the copyright.
// MinimalFooter.Link children render in the top row instead, and the two rows live
// in separate DOM subtrees so no amount of CSS moves one into the other. Passing the
// links through `copyrightStatement` — which accepts a ReactElement and renders in
// the bottom row — gets the designed layout without overriding brand internals.
// It also sidesteps the component's hard cap of five links.
//
// Note `copyrightStatement` is rendered inside a <Text as="p">, so everything here
// must be phrasing content: spans and anchors only, no lists or <nav>.
export const DocsFooter = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')

  const termsHref = `/${router.locale}/site-policy/github-terms/github-terms-of-service`
  const privacyHref = `/${router.locale}/site-policy/privacy-policies/github-privacy-statement`

  // These render as plain <a>, so intercept clicks to restore next/link-style
  // client-side navigation for the two in-site policy links. Mirrors the Breadcrumbs
  // migration: modifier and middle clicks fall through so open-in-new-tab still
  // works, and the href keeps the links crawlable for SSR.
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
    // hrefs already carry the locale prefix, so disable Next.js locale handling to
    // avoid double-prefixing.
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
    // KO law requires the link to the privacy statement to be conspicuous.
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
        {/* Footnotes drops any child that isn't a brand <Text>, so the machine
            translation notice has to be wrapped rather than passed as a bare <p>. */}
        {router.locale !== 'en' && (
          <MinimalFooter.Footnotes>
            <Text>{t('machine')}</Text>
          </MinimalFooter.Footnotes>
        )}

        {/* `ghd-scroll-to-top` is the global analytics hook that
            src/events/components/events.ts listens for; it used to live on the
            ScrollButton this control replaces, and without it activations go
            untracked. BackToTop merges className, so both survive. */}
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
