import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@primer/octicons-react'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { Link } from 'components/Link'

export const AllProductsLink = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const currentVersionPathSegment = currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`

  return (
    <div className="mt-3">
      <Link
        href={`/${router.locale}${currentVersionPathSegment}`}
        className="f6 pl-2 pr-5 ml-n1 pb-1 Link--primary color-fg-default"
      >
        <ArrowLeftIcon size="small" className="mr-1" />
        All products
      </Link>
    </div>
  )
}
