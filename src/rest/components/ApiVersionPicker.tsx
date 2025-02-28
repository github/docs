import { useRouter } from 'next/router'
import Cookies from 'src/frame/components/lib/cookies'
import { InfoIcon } from '@primer/octicons-react'

import { useMainContext } from 'src/frame/components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { Picker } from 'src/tools/components/Picker'
import { useTranslation } from 'src/languages/components/useTranslation'
import { API_VERSION_COOKIE_NAME } from 'src/rest/components/RestRedirect'
import { apiVersionPath } from 'src/rest/lib/config.js'

const API_VERSION_SUFFIX = ' (latest)'

function rememberApiVersion(apiVersion: string) {
  try {
    // We use this cookie to remember which API Version a user chooses
    // when they navigate the REST docs.
    const apiVersionNormalized = apiVersion.replace(API_VERSION_SUFFIX, '')
    Cookies.set(API_VERSION_COOKIE_NAME, apiVersionNormalized)
  } catch (err) {
    // You can never be too careful because setting a cookie
    // can fail. For example, some browser
    // extensions disallow all setting of cookies and attempts
    // at the `document.cookie` setter could throw. Just swallow
    // and move on.
    console.warn('Unable to set preferred api version cookie', err)
  }
}

export const ApiVersionPicker = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()
  const { t } = useTranslation('rest')
  const basePath = router.asPath.split('#')[0].split('?')[0]
  // Get current date from cookie, query path, or lastly set it to latest rest version date
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

  // This only shows the REST Version picker if it's calendar date versioned
  return allVersions[currentVersion].apiVersions.length > 0 ? (
    <div className="mb-3">
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
    </div>
  ) : null
}
