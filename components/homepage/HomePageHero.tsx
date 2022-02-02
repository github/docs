import { Search } from 'components/Search'
import { OctocatHeader } from 'components/landing/OctocatHeader'
import { useTranslation } from 'components/hooks/useTranslation'

export const HomePageHero = () => {
  const { t } = useTranslation(['search'])

  return (
    <section id="landing" className="color-bg-subtle p-6">
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <Search iconSize={24} variant="expanded">
        {({ SearchInput, SearchResults }) => {
          return (
            <div className="container-xl">
              <div className="gutter gutter-xl-spacious d-lg-flex flex-row-reverse flex-items-center">
                <div className="col-lg-7">
                  <OctocatHeader />
                </div>
                <div className="col-lg-5">
                  <h1 className="text-semibold">{t('search:need_help')}</h1>
                  {SearchInput}
                </div>
              </div>

              <div>{SearchResults}</div>
            </div>
          )
        }}
      </Search>
    </section>
  )
}
