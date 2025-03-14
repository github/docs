import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@primer/octicons-react'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { Link } from 'src/frame/components/Link'
import { useTranslation } from 'src/languages/components/useTranslation'

export const AllProductsLink = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { t } = useTranslation('header')
  const currentVersionPathSegment = currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`

  return (
    <div className="mt-3">
      <Link
        href={`/${router.locale}${currentVersionPathSegment}`}
        className="f6 pl-2 pr-5 ml-n1 pb-1 Link--primary color-fg-default"
      >
        <ArrowLeftIcon size="small" className="mr-1" />
        {t('go_home')}
      </Link>
    </div>
  )
}
