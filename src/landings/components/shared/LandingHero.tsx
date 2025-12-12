import { LinkExternalIcon } from '@primer/octicons-react'
import styles from './LandingHero.module.scss'
import { useTranslation } from '@/languages/components/useTranslation'

type LandingHeroProps = {
  title: string
  intro?: string
  heroImage?: string
  introLinks?: Record<string, string> | null
}

function heroBackgroundCss(heroImage: string | undefined) {
  if (!heroImage) return {}
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
  const primaryAction = linkEntries[0]
  const secondaryAction = linkEntries[1]

  return (
    <div className={styles.landingHero} style={heroBackgroundCss(heroImage)}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroHeading}>{title}</h1>
          {intro && (
            <div className={styles.heroDescription}>
              <div dangerouslySetInnerHTML={{ __html: intro }} />
            </div>
          )}
          {(primaryAction || secondaryAction) && (
            <div className={styles.heroActions}>
              {primaryAction && (
                <a
                  href={primaryAction[1]}
                  className={`${styles.heroAction} ${styles.heroPrimaryAction}`}
                >
                  {t(primaryAction[0])}{' '}
                  {primaryAction[1].startsWith('https') && (
                    <span className="ml-1">
                      <LinkExternalIcon aria-label="(external site)" size="small" />
                    </span>
                  )}
                </a>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction[1]}
                  className={`${styles.heroAction} ${styles.heroSecondaryAction}`}
                >
                  {t(secondaryAction[0])}{' '}
                  {secondaryAction[1].startsWith('https') && (
                    <span className="ml-1">
                      <LinkExternalIcon aria-label="(external site)" size="small" />
                    </span>
                  )}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
