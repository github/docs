import { useRouter } from 'next/router'
import cx from 'clsx'
import { LinkExternalIcon } from '@primer/octicons-react'
import { Button, ButtonGroup, Heading, Text } from '@primer/react-brand'
import styles from './LandingHero.module.scss'
import { LandingSection } from './LandingSection'
import { useTranslation } from '@/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'
import type { HeroTheme } from '@/landings/context/LandingContext'

type LandingHeroProps = {
  title: string
  intro?: string
  heroImage?: string
  heroTheme?: HeroTheme
  introLinks?: Record<string, string> | null
}

const heroThemes: Record<HeroTheme, { className: string; wordmark?: string }> = {
  'mos-diner': {
    className: styles.mosDiner,
    wordmark: '/assets/images/banner-images/mos-diner-logo.svg',
  },
}

function heroBackgroundCss(heroImage: string | undefined) {
  if (!heroImage) return undefined
  return {
    backgroundImage: `image-set(
      url("${heroImage}.webp") type('image/webp'),
      url("${heroImage}.png") type('image/png')
    )`,
  }
}

export const LandingHero = ({
  title,
  intro,
  heroImage,
  heroTheme,
  introLinks,
}: LandingHeroProps) => {
  const { t } = useTranslation(['product_landing'])
  const router = useRouter()
  const { currentVersion } = useVersion()

  // Frontmatter paths lack locale and version, and redirects for bare paths take both from cookies or headers, not this page.
  const localizeHref = (href: string) => {
    if (!href.startsWith('/') || href.startsWith('//')) return href
    const versionPrefix = currentVersion !== DEFAULT_VERSION ? `/${currentVersion}` : ''
    return `/${router.locale}${versionPrefix}${href}`
  }

  const theme = heroTheme ? heroThemes[heroTheme] : undefined
  const linkEntries = introLinks ? Object.entries(introLinks) : []

  return (
    <LandingSection>
      <div
        className={cx(styles.landingHero, theme?.className)}
        style={heroTheme ? undefined : heroBackgroundCss(heroImage)}
        data-hero-theme={heroTheme}
      >
        <div className={styles.heroContent}>
          <Heading as="h1" size="2" className={styles.heroHeading}>
            {theme?.wordmark ? (
              <>
                <span className="visually-hidden">{title}</span>
                {/* The mask paints the artwork in the current text color, so it follows color mode. */}
                <span
                  className={styles.heroWordmark}
                  style={{ maskImage: `url("${theme.wordmark}")` }}
                  aria-hidden="true"
                />
              </>
            ) : (
              title
            )}
          </Heading>
          {intro && (
            <Text
              as="div"
              size={theme ? '300' : '200'}
              variant={theme ? 'default' : 'muted'}
              className={cx(styles.heroDescription, !heroTheme && styles.heroIntroScrim)}
            >
              <RenderedHTML as="div" html={intro} />
            </Text>
          )}
          {linkEntries.length > 0 && (
            <div className={styles.heroButtons}>
              <ButtonGroup>
                {linkEntries.map(([label, href], i) => (
                  <Button
                    key={label}
                    as="a"
                    href={localizeHref(href)}
                    variant={i === 0 ? 'primary' : 'secondary'}
                    trailingVisual={
                      href.startsWith('https') ? (
                        <LinkExternalIcon aria-label="(external site)" size="small" />
                      ) : undefined
                    }
                  >
                    {t(label)}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          )}
        </div>
        {heroTheme && <div className={styles.themeAccent} aria-hidden="true" />}
      </div>
    </LandingSection>
  )
}
