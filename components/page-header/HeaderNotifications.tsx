import { useRouter } from 'next/router'
import cx from 'classnames'

import { useLanguages } from 'components/context/LanguagesContext'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { ExcludesNull } from 'components/lib/ExcludesNull'
import { useVersion } from 'components/hooks/useVersion'
import { useUserLanguage } from 'components/hooks/useUserLanguage'
import styles from './HeaderNotifications.module.scss'

enum NotificationType {
  RELEASE = 'RELEASE',
  TRANSLATION = 'TRANSLATION',
  EARLY_ACCESS = 'EARLY_ACCESS',
}

type Notif = {
  content: string
  type?: NotificationType
}
export const HeaderNotifications = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { relativePath, allVersions, data, currentPathWithoutLanguage, page } = useMainContext()
  const { userLanguage } = useUserLanguage()
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
      })
    }
  } else {
    if (relativePath?.includes('/site-policy')) {
      translationNotices.push({
        type: NotificationType.TRANSLATION,
        content: data.reusables.policies.translation,
      })
    } else if (router.locale) {
      translationNotices.push({
        type: NotificationType.TRANSLATION,
        content: t('notices.localization_complete'),
      })
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
    // ONEOFF DESKTOP NOTICE
    (relativePath || '').match(/(\w{2}\/)?desktop\/.*/i)
      ? {
          // fpt only
          content:
            'Update to the latest version of GitHub Desktop before February 2 to avoid disruptions. For more information, see the <a href="https://github.blog/2023-01-30-action-needed-for-github-desktop-and-atom-users/">GitHub blog post</a>.',
        }
      : null,
  ].filter(ExcludesNull)

  return (
    <div>
      {allNotifications.map(({ type, content }, i) => {
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
              !isLast && 'border-bottom color-border-default'
            )}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )
      })}
    </div>
  )
}
