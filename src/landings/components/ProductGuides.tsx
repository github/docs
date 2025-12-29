import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useProductGuidesContext } from '@/landings/components/ProductGuidesContext'
import { LandingSection } from '@/landings/components/LandingSection'
import { GuidesHero } from '@/landings/components/GuidesHero'
import { LearningTracks } from '@/learning-track/components/guides/LearningTracks'
import { ArticleCards } from '@/landings/components/ArticleCards'
import { useTranslation } from '@/languages/components/useTranslation'
import { useMainContext } from '@/frame/components/context/MainContext'
import { UtmPreserver } from '@/frame/components/UtmPreserver'

export const ProductGuides = () => {
  const { title, learningTracks, includeGuides } = useProductGuidesContext()
  const { t } = useTranslation('product_guides')

  const { currentProductName } = useMainContext()

  const productName = currentProductName || title
  const nameRegex = /{{\s*name\s*}}/

  return (
    <DefaultLayout>
      <UtmPreserver />
      <LandingSection className="pt-3">
        <GuidesHero />
      </LandingSection>

      <div data-search="article-body">
        {learningTracks && learningTracks.length > 0 && (
          <LandingSection
            title={t('learning_paths_title').replace(nameRegex, productName)}
            className="border-top py-6"
            sectionLink="learning-paths"
            description={t('learning_paths_desc')}
          >
            <LearningTracks />
          </LandingSection>
        )}

        {includeGuides && (
          <LandingSection
            title={t('all_guides_title').replace(nameRegex, productName)}
            className="border-top py-6 color-border-default"
            sectionLink="all-guides"
          >
            <ArticleCards />
          </LandingSection>
        )}
      </div>
    </DefaultLayout>
  )
}
