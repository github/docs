import styles from './LandingHero.module.scss'
import { useTranslation } from '@/languages/components/useTranslation'

type LandingHeroProps = {
  title: string
  intro?: string
  heroImage?: string
  introLinks?: Record<string, string> | null
}

export const LandingHero = ({ title, intro, heroImage, introLinks }: LandingHeroProps) => {
  const { t } = useTranslation(['product_landing'])

  const linkEntries = introLinks ? Object.entries(introLinks) : []
  const primaryAction = linkEntries[0]
  const secondaryAction = linkEntries[1]

  return (
    <div
      className={styles.landingHero}
      style={
        heroImage
          ? {
              backgroundImage: `url("${heroImage}")`,
            }
          : undefined
      }
    >
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
                  {t(primaryAction[0])}
                </a>
              )}
              {secondaryAction && (
                <a
                  href={secondaryAction[1]}
                  className={`${styles.heroAction} ${styles.heroSecondaryAction}`}
                >
                  {t(secondaryAction[0])}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
