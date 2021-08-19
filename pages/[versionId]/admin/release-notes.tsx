import { GetServerSideProps } from 'next'
import { Liquid } from 'liquidjs'
import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
} from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import { GHAEReleaseNotes } from 'components/release-notes/GHAEReleaseNotes'
import { GHESReleaseNotes } from 'components/release-notes/GHESReleaseNotes'
import {
  CurrentVersion,
  GHAEReleaseNotesContextT,
  GHESReleaseNotesContextT,
} from 'components/release-notes/types'

const liquid = new Liquid()
type Props = {
  mainContext: MainContextT
  ghaeContext: GHAEReleaseNotesContextT
  ghesContext: GHESReleaseNotesContextT
  currentVersion: CurrentVersion
}
export default function ReleaseNotes({
  mainContext,
  ghesContext,
  ghaeContext,
  currentVersion,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        {currentVersion.plan === 'enterprise-server' && <GHESReleaseNotes context={ghesContext} />}

        {currentVersion.plan === 'github-ae' && <GHAEReleaseNotes context={ghaeContext} />}
      </DefaultLayout>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const currentVersion = req.context.allVersions[req.context.currentVersion]
  const { latestPatch = '', latestRelease = '' } = req.context
  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      currentVersion,
      ghesContext: {
        currentVersion,
        latestPatch,
        latestRelease,
        prevRelease: req.context.prevRelease || '',
        nextRelease: req.context.nextRelease || '',
        releaseNotes: req.context.releaseNotes,
        releases: req.context.releases,
        message: {
          ghes_release_notes_upgrade_patch_only: liquid.parseAndRenderSync(
            req.context.site.data.ui.header.notices.ghes_release_notes_upgrade_patch_only,
            { latestPatch, latestRelease }
          ),
          ghes_release_notes_upgrade_release_only: liquid.parseAndRenderSync(
            req.context.site.data.ui.header.notices.ghes_release_notes_upgrade_release_only,
            { latestPatch, latestRelease }
          ),
          ghes_release_notes_upgrade_patch_and_release: liquid.parseAndRenderSync(
            req.context.site.data.ui.header.notices.ghes_release_notes_upgrade_patch_and_release,
            { latestPatch, latestRelease }
          ),
        },
      },
      ghaeContext: {
        currentVersion,
        releaseNotes: req.context.releaseNotes,
        releases: req.context.releases,
      },
    },
  }
}
