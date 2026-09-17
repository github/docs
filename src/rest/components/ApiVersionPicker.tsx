import { useRouter } from 'next/router'
import Cookies from '@/frame/components/lib/cookies'
import { InfoIcon } from '@primer/octicons-react'

import { useMainContext } from '@/frame/components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { Picker } from '@/tools/components/Picker'
import { useTranslation } from '@/languages/components/useTranslation'
import { API_VERSION_COOKIE_NAME } from '@/frame/lib/constants'
import { apiVersionPath } from '@/rest/lib/config'

const API_VERSION_SUFFIX = ' (latest)'

function rememberApiVersion(apiVersion: string) {
  try {
    // We use this cookie to remember which API Version a user chooses
    // when they navigate the REST docs.
    const apiVersionNormalized = apiVersion.replace(API_VERSION_SUFFIX, '')
    Cookies.set(API_VERSION_COOKIE_NAME, apiVersionNormalized)
  } catch (err) {
    // Some browser extensions disallow setting cookies at all, so the
    // `document.cookie` setter can throw. Swallow it and move on.
    console.warn('Unable to set preferred api version cookie', err)
  }
}

export const ApiVersionPicker = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()
  const { t } = useTranslation('rest')
  const basePath = router.asPath.split('#')[0].split('?')[0]
  // Use the version from the URL when it's valid, otherwise the latest date.
  // RestRedirect is what applies the cookie preference to the URL.
  const isValidApiVersion =
    (router.query.apiVersion &&
      typeof router.query.apiVersion === 'string' &&
      allVersions[currentVersion].apiVersions.includes(router.query.apiVersion)) ||
    false

  const currentDate = (
    isValidApiVersion ? router.query.apiVersion : allVersions[currentVersion].latestApiVersion
  ) as string

  const currentDateDisplayText =
    currentDate === allVersions[currentVersion].latestApiVersion
      ? currentDate + API_VERSION_SUFFIX
      : currentDate

  const apiVersionLinks = allVersions[currentVersion].apiVersions.map((date) => {
    const itemLink = `/${router.locale}${basePath}?apiVersion=${date}`
    const dateDisplayText =
      date === allVersions[currentVersion].latestApiVersion ? date + API_VERSION_SUFFIX : date

    return {
      text: dateDisplayText,
      selected: router.query.apiVersion === date,
      href: itemLink,
      extra: {
        info: false,
        currentDate,
      },
    }
  })

  apiVersionLinks.push({
    text: t('rest.versioning.about_versions'),
    selected: false,
    href: `/${router.locale}${
      currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`
    }${apiVersionPath}`,
    extra: {
      info: true,
      currentDate,
    },
  })

  // A non-empty `apiVersions` means the version is calendar-date versioned.
  return allVersions[currentVersion].apiVersions.length > 0 ? (
    <div data-testid="api-version-picker">
      <Picker
        defaultText={currentDateDisplayText}
        items={apiVersionLinks}
        pickerLabel="API Version: "
        alignment="start"
        buttonBorder={true}
        dataTestId="version"
        ariaLabel="Select API Version"
        onSelect={(item) => {
          if (item.extra?.currentDate) rememberApiVersion(item.extra.currentDate)
        }}
        renderItem={(item) => {
          return item.extra?.info ? (
            <div className="f6">
              {item.text}
              <InfoIcon verticalAlign="middle" size={15} className="ml-1" />
            </div>
          ) : (
            item.text
          )
        }}
      />
    </div>
  ) : null
}
