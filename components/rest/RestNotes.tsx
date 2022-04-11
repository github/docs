import { useRouter } from 'next/router'

import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'

export function RestNotes() {
  const { t } = useTranslation('products')
  const router = useRouter()

  return (
    <>
      <h4 className="pt-4">{t('rest.reference.notes')}</h4>
      <ul className="mt-2 pl-3 pb-2">
        <li>
          <Link href={`/${router.locale}/developers/apps`}>
            {t('rest.reference.works_with_github_apps')}
          </Link>
        </li>
      </ul>
    </>
  )
}
