import { GetServerSideProps } from 'next'
import { Liquid } from 'liquidjs'
import pick from 'lodash/pick'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from 'src/frame/components/context/MainContext'
import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import { GHESReleaseNotes } from 'src/release-notes/components/GHESReleaseNotes'
import { GHESReleaseNotesContextT } from 'src/release-notes/components/types'

const liquid = new Liquid()
type Props = {
  mainContext: MainContextT
  ghesContext: GHESReleaseNotesContextT | null
}
export default function ReleaseNotes({ mainContext, ghesContext }: Props) {
  if (!ghesContext) {
    // (Jan 2024) If we some day have more types of release notes, we'll
    // need to make this more forgiving.
    // This component used to cater for GHAE too when that existed.
    throw new Error('GHES is the only option')
  }
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <GHESReleaseNotes context={ghesContext} />
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

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['release_notes'])

  return {
    props: {
      mainContext,
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
    },
  }
}
