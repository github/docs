import { GetServerSideProps } from 'next'
import { Liquid } from 'liquidjs'
import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import { GHAEReleaseNotes } from 'components/release-notes/GHAEReleaseNotes'
import { GHESReleaseNotes } from 'components/release-notes/GHESReleaseNotes'
import { GHAEReleaseNotesContextT, GHESReleaseNotesContextT } from 'components/release-notes/types'

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
  const currentVersion = req.context.allVersions[req.context.currentVersion]
  const { latestPatch = '', latestRelease = '' } = req.context
  return {
    props: {
      mainContext: getMainContext(req, res),
      ghesContext:
        currentVersion.plan === 'enterprise-server'
          ? {
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
                  req.context.site.data.ui.header.notices
                    .ghes_release_notes_upgrade_patch_and_release,
                  { latestPatch, latestRelease }
                ),
              },
            }
          : null,
      ghaeContext:
        currentVersion.plan === 'github-ae'
          ? {
              currentVersion,
              releaseNotes: req.context.releaseNotes,
              releases: req.context.releases,
            }
          : null,
    },
  }
}
