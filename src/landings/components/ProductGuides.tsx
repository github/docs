import { DefaultLayout } from 'components/DefaultLayout'
import { useProductGuidesContext } from 'src/landings/components/ProductGuidesContext'
import { LandingSection } from 'src/landings/components/LandingSection'
import { GuidesHero } from 'src/landings/components/GuidesHero'
import { LearningTracks } from 'src/learning-track/components/guides/LearningTracks'
import { ArticleCards } from 'src/landings/components/ArticleCards'
import { useTranslation } from 'src/languages/components/useTranslation'
import { useMainContext } from 'components/context/MainContext'

export const ProductGuides = () => {
  const { title, learningTracks, includeGuides } = useProductGuidesContext()
  const { t } = useTranslation('product_guides')

  const { currentProduct } = useMainContext()
  const productName = currentProduct?.name || title
  const nameRegex = /{{\s*name\s*}}/

  return (
    <DefaultLayout>
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
