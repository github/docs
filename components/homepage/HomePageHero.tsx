import { OctocatHeader } from 'components/landing/OctocatHeader'
import { useTranslation } from 'components/hooks/useTranslation'

export const HomePageHero = () => {
  const { t } = useTranslation(['header', 'homepage'])

  return (
    <section id="landing" className="color-bg-subtle p-6">
      <div className="container-xl">
        <div className="gutter gutter-xl-spacious d-lg-flex flex-row-reverse flex-items-center">
          <div className="col-lg-6 col-xl-7 mb-4 mb-lg-0">
            <OctocatHeader />
          </div>
          <div className="col-lg-6 col-xl-5">
            <h1>{t('github_docs')}</h1>
            <p className="color-fg-muted f2 mb-0">{t('description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
