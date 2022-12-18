import React from 'react'
import { Flash } from '@primer/react'
import { useRouter } from 'next/router'

import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'

const restRepoDisplayPages = [
  'branches',
  'collaborators',
  'commits',
  'deploy_keys',
  'deployments',
  'pages',
  'releases',
  'repos',
  'metrics',
  'webhooks',
]
const restEnterpriseDisplayPages = ['enterprise-admin']
const restRepoCategoryExceptionsTitles = {
  branches: 'Branches',
  collaborators: 'Collaborators',
  commits: 'Commits',
  'deploy-keys': 'Deploy Keys',
  deployments: 'Deployments',
  pages: 'GitHub Pages',
  releases: 'Releases',
  metrics: 'Metrics',
  webhooks: 'Webhooks',
}

export const RestBanner = () => {
  const router = useRouter()
  const { t } = useTranslation('products')
  // Having a productId === 'rest' and no router.query.category would mean a product landing page like http://docs.github.com/en/rest?apiVersion=2022-08-09
  const isRestPage = router.query.productId === 'rest' || router.query.category
  const restPage = router.query.category as string
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()
  const currentVersionObj = allVersions[currentVersion]
  const apiVersions = currentVersionObj.apiVersions

  let bannerText = ''
  let versionWithApiVersion = ''

  if (isRestPage && apiVersions.length) {
    bannerText = t('rest.banner.api_versioned')
    versionWithApiVersion = currentVersion
  } else {
    if (currentVersionObj.shortName === 'ghes') {
      // If this is a GHES release with no REST versions,
      // find out if any GHES releases contain REST versioning yet.
      const firstGhesReleaseWithApiVersions = Object.values(allVersions)
        .reverse()
        .find((v) => {
          return v.shortName === 'ghes' && v.apiVersions.length
        })

      if (firstGhesReleaseWithApiVersions) {
        versionWithApiVersion = firstGhesReleaseWithApiVersions.version
        bannerText = t('rest.banner.ghes_api_versioned')
          .replace(
            '{{ firstGhesReleaseWithApiVersions.versionTitle }}',
            firstGhesReleaseWithApiVersions.versionTitle
          )
          .replace(/{{\s*currentVersion\s*}}/, currentVersion)
      }
    }
  }
  // Temporary banner for REST API Versioning
  if (isRestPage && bannerText !== '') {
    return (
      <div
        data-testid="rest-api-versioning-temporary-banner"
        className="container-xl mt-3 mx-auto p-responsive"
      >
        <Flash>
          <span dangerouslySetInnerHTML={{ __html: bannerText }} />{' '}
          <span
            dangerouslySetInnerHTML={{
              __html: t('rest.banner.api_version_info').replace(
                /{{\s*versionWithApiVersion\s*}}/,
                versionWithApiVersion === DEFAULT_VERSION ? '' : `/${versionWithApiVersion}`
              ),
            }}
          />
        </Flash>
      </div>
    )
  }

  if (!restRepoDisplayPages.includes(restPage) && !restEnterpriseDisplayPages.includes(restPage)) {
    return null
  }

  let noticeString

  if (restRepoDisplayPages.includes(restPage)) {
    const pages = Object.keys(restRepoCategoryExceptionsTitles) as Array<
      keyof typeof restRepoCategoryExceptionsTitles
    >
    const newRestPagesText = pages.map((page, i) => [
      <React.Fragment key={page}>
        <Link href={`/${router.locale}/rest/${page}`}>
          {restRepoCategoryExceptionsTitles[page]}
        </Link>
        {i < pages.length - 1 && ', '}
      </React.Fragment>,
    ])

    noticeString = (
      <React.Fragment>
        If you can't find what you're looking for, you might try the new {newRestPagesText} REST API
        pages.
      </React.Fragment>
    )
  } else if (restEnterpriseDisplayPages.includes(restPage)) {
    noticeString = (
      <React.Fragment>
        If you can't find what you're looking for, you might try the{' '}
        <Link href={`/${router.locale}/rest/actions`}>Actions</Link> REST API page.
      </React.Fragment>
    )
  }

  return (
    <div data-testid="rest-api-repos-banner" className="container-xl mt-3 mx-auto p-responsive">
      <Flash variant="warning">
        <p>
          <b className="text-bold">
            <span>We've recently moved some of the REST API documentation. {noticeString}</span>
          </b>{' '}
        </p>
      </Flash>
    </div>
  )
}
