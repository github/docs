import { LinkExternalIcon } from '@primer/octicons-react'
import { Button, ButtonGroup, Heading, Text } from '@primer/react-brand'
import styles from './LandingHero.module.scss'
import { LandingSection } from './LandingSection'
import { useTranslation } from '@/languages/components/useTranslation'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type LandingHeroProps = {
  title: string
  intro?: string
  heroImage?: string
  introLinks?: Record<string, string> | null
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

export const LandingHero = ({ title, intro, heroImage, introLinks }: LandingHeroProps) => {
  const { t } = useTranslation(['product_landing'])

  const linkEntries = introLinks ? Object.entries(introLinks) : []

  return (
    <LandingSection>
      <div className={styles.landingHero} style={heroBackgroundCss(heroImage)}>
        <div className={styles.heroContent}>
          <Heading as="h1" size="2" className={styles.heroHeading}>
            {title}
          </Heading>
          {intro && (
            <Text
              as="div"
              size="200"
              variant="muted"
              className={`${styles.heroDescription} ${styles.heroIntroScrim}`}
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
                    href={href}
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
      </div>
    </LandingSection>
  )
}
