import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dropdown } from '@primer/components'
import { useMainContext } from './context/MainContext'
import { useVersion } from './hooks/useVersion'

export const VersionPicker = () => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()

  const versions = Object.values(allVersions)
  const activeVersion = allVersions[currentVersion]

  return (
    <div className="ml-4 d-flex flex-justify-center flex-items-center">
      <Dropdown css>
        <summary>
          {activeVersion.versionTitle}
          <Dropdown.Caret />
        </summary>
        <Dropdown.Menu direction="sw">
          {versions.map((version) => {
            return (
              <Dropdown.Item key={version.version}>
                <Link
                  href={{
                    pathname: router.pathname,
                    query: {
                      ...router.query,
                      versionId: version.version,
                    },
                  }}
                >
                  <a>{version.versionTitle}</a>
                </Link>
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
