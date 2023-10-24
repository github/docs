import { useRouter } from 'next/router'
import cx from 'classnames'
import { XIcon } from '@primer/octicons-react'

import { useLanguages } from 'src/languages/components/LanguagesContext'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'src/languages/components/useTranslation'
import { ExcludesNull } from 'components/lib/ExcludesNull'
import { useVersion } from 'src/versions/components/useVersion'
import { useUserLanguage } from 'src/languages/components/useUserLanguage'
import styles from './HeaderNotifications.module.scss'

enum NotificationType {
  RELEASE = 'RELEASE',
  TRANSLATION = 'TRANSLATION',
  EARLY_ACCESS = 'EARLY_ACCESS',
}

type Notif = {
  content: string
  type?: NotificationType
  onClose?: () => void
}

export const HeaderNotifications = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { relativePath, allVersions, data, currentPathWithoutLanguage, page } = useMainContext()
  const { userLanguage, setUserLanguageCookie } = useUserLanguage()
  const { languages } = useLanguages()

  const { t } = useTranslation('header')

  const translationNotices: Array<Notif> = []
  if (router.locale === 'en') {
    if (userLanguage && userLanguage !== 'en' && languages[userLanguage]) {
      let href = `/${userLanguage}`
      if (currentPathWithoutLanguage !== '/') {
        href += currentPathWithoutLanguage
      }
      translationNotices.push({
        type: NotificationType.TRANSLATION,
        content: `This article is also available in <a href="${href}">${languages[userLanguage]?.name}</a>.`,
        onClose: () => {
          try {
            setUserLanguageCookie('en')
          } catch (err) {
            // You can never be too careful because setting a cookie
            // can fail. For example, some browser
            // extensions disallow all setting of cookies and attempts
            // at the `document.cookie` setter could throw. Just swallow
            // and move on.
            console.warn('Unable to set cookie', err)
          }
        },
      })
    }
  } else {
    if (relativePath?.includes('/site-policy')) {
      const policies = data.reusables.policies
      if (policies) {
        translationNotices.push({
          type: NotificationType.TRANSLATION,
          content: policies.translation,
        })
      }
    }
  }
  const releaseNotices: Array<Notif> = []
  if (currentVersion === 'github-ae@latest') {
    releaseNotices.push({
      type: NotificationType.RELEASE,
      content: t('notices.ghae_silent_launch'),
    })
  } else if (currentVersion === data.variables.release_candidate.version) {
    releaseNotices.push({
      type: NotificationType.RELEASE,
      content: `${allVersions[currentVersion].versionTitle}${t('notices.release_candidate')}`,
    })
  }

  const allNotifications: Array<Notif> = [
    ...translationNotices,
    ...releaseNotices,
    // ONEOFF EARLY ACCESS NOTICE
    (relativePath || '').includes('early-access/') && !page.noEarlyAccessBanner
      ? {
          type: NotificationType.EARLY_ACCESS,
          content: t('notices.early_access'),
        }
      : null,
  ].filter(ExcludesNull)

  return (
    <div>
      {allNotifications.map(({ type, content, onClose }, i) => {
        const isLast = i === allNotifications.length - 1

        return (
          <div
            key={content}
            data-testid="header-notification"
            data-type={type}
            className={cx(
              'flash flash-banner',
              styles.container,
              'text-center f5 color-fg-default py-4 px-6 z-1',
              type === NotificationType.TRANSLATION && 'color-bg-accent',
              type === NotificationType.RELEASE && 'color-bg-accent',
              type === NotificationType.EARLY_ACCESS && 'color-bg-danger',
              !isLast && 'border-bottom color-border-default',
            )}
          >
            {onClose && (
              <button
                className="flash-close js-flash-close"
                type="button"
                aria-label="Close"
                onClick={() => onClose()}
              >
                <XIcon size="small" className="octicon mr-1" />
              </button>
            )}
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )
      })}
    </div>
  )
}
