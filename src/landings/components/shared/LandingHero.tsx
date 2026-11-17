import type { CSSProperties } from 'react'
import { useRouter } from 'next/router'
import cx from 'clsx'
import { CheckIcon, LinkExternalIcon, ShareIcon } from '@primer/octicons-react'
import { Button, ButtonGroup, Heading, Text } from '@primer/react-brand'
import styles from './LandingHero.module.scss'
import { LandingSection } from './LandingSection'
import { useTranslation } from '@/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useShareLink } from '@/landings/components/shared/useShareLink'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'
import type { HeroTheme } from '@/landings/context/LandingContext'

type LandingHeroProps = {
  title: string
  intro?: string
  heroImage?: string
  heroImageDark?: string
  heroTheme?: HeroTheme
  introLinks?: Record<string, string> | null
  showShareButton?: boolean
}

const heroThemes: Record<HeroTheme, { className: string; wordmark?: string }> = {
  'mos-diner': {
    className: styles.mosDiner,
    wordmark: '/assets/images/banner-images/mos-diner-logo.svg',
  },
}

function heroImageSet(image: string) {
  return `image-set(
      url("${image}.webp") type('image/webp'),
      url("${image}.png") type('image/png')
    )`
}

// The dark image rides in a custom property so the stylesheet can swap it in
// for dark mode; an inline background-image alone can't react to color mode.
function heroBackgroundCss(heroImage: string | undefined, heroImageDark: string | undefined) {
  if (!heroImage) return undefined
  return {
    backgroundImage: heroImageSet(heroImage),
    ...(heroImageDark && { '--hero-image-dark': heroImageSet(heroImageDark) }),
  } as CSSProperties
}

export const LandingHero = ({
  title,
  intro,
  heroImage,
  heroImageDark,
  heroTheme,
  introLinks,
  showShareButton = false,
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
  const share = useShareLink(title)
  // ButtonGroup drops anything past two buttons, so Share only joins the group
  // when there's room; otherwise it goes on its own row below the links.
  const shareInGroup = showShareButton && linkEntries.length < 2
  const shareBelow = showShareButton && !shareInGroup
  const shareButton = (
    <Button
      key="share"
      variant={shareInGroup && linkEntries.length > 0 ? 'secondary' : 'subtle'}
      leadingVisual={share.copied ? <CheckIcon /> : <ShareIcon />}
      onClick={share.onClick}
    >
      {share.label}
    </Button>
  )

  return (
    <LandingSection>
      <div
        className={cx(
          styles.landingHero,
          theme?.className,
          !heroTheme && heroImageDark && styles.hasDarkHeroImage,
        )}
        style={heroTheme ? undefined : heroBackgroundCss(heroImage, heroImageDark)}
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
          {(linkEntries.length > 0 || shareInGroup) && (
            <div className={styles.heroButtons}>
              <ButtonGroup>
                {[
                  ...linkEntries.map(([label, href], i) => (
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
                  )),
                  shareInGroup && shareButton,
                ]}
              </ButtonGroup>
            </div>
          )}
          {shareBelow && <div className={styles.heroShare}>{shareButton}</div>}
        </div>
        {heroTheme && <div className={styles.themeAccent} aria-hidden="true" />}
      </div>
    </LandingSection>
  )
}
