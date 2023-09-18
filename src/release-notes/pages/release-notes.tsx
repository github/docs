import { GetServerSideProps } from 'next'
import { Liquid } from 'liquidjs'
import pick from 'lodash/pick'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import { GHAEReleaseNotes } from 'src/release-notes/components/GHAEReleaseNotes'
import { GHESReleaseNotes } from 'src/release-notes/components/GHESReleaseNotes'
import {
  GHAEReleaseNotesContextT,
  GHESReleaseNotesContextT,
} from 'src/release-notes/components/types'

const liquid = new Liquid()
type Props = {
  mainContext: MainContextT
  ghaeContext: GHAEReleaseNotesContextT | null
  ghesContext: GHESReleaseNotesContextT | null
}
export default function ReleaseNotes({ mainContext, ghesContext, ghaeContext }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        {ghesContext && <GHESReleaseNotes context={ghesContext} />}

        {ghaeContext && <GHAEReleaseNotes context={ghaeContext} />}
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any

  // The `req.context.allVersion[X]` entries contains more keys (and values)
  // than we need so only pick out the keys that are actually needed
  // explicitly in the components served from these props.
  const currentVersion = pick(req.context.allVersions[req.context.currentVersion], [
    'plan',
    'planTitle',
    'versionTitle',
    'currentRelease',
    'releases',
  ])

  const { latestPatch = '', latestRelease = '' } = req.context
  return {
    props: {
      mainContext: await getMainContext(req, res),
      ghesContext:
        currentVersion.plan === 'enterprise-server'
          ? {
              currentVersion,
              latestPatch,
              latestRelease,
              releaseNotes: req.context.ghesReleaseNotes,
              releases: req.context.ghesReleases,
              message: {
                ghes_release_notes_upgrade_patch_only: liquid.parseAndRenderSync(
                  req.context.site.data.ui.header.notices.ghes_release_notes_upgrade_patch_only,
                  { latestPatch, latestRelease },
                ),
                ghes_release_notes_upgrade_release_only: liquid.parseAndRenderSync(
                  req.context.site.data.ui.header.notices.ghes_release_notes_upgrade_release_only,
                  { latestPatch, latestRelease },
                ),
                ghes_release_notes_upgrade_patch_and_release: liquid.parseAndRenderSync(
                  req.context.site.data.ui.header.notices
                    .ghes_release_notes_upgrade_patch_and_release,
                  { latestPatch, latestRelease },
                ),
              },
            }
          : null,
      ghaeContext:
        currentVersion.plan === 'github-ae'
          ? {
              currentVersion,
              releaseNotes: req.context.ghaeReleaseNotes,
              releases: req.context.ghaeReleases,
            }
          : null,
    },
  }
}
