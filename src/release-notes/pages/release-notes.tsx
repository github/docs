import { GetServerSideProps } from 'next'
import { Liquid } from 'liquidjs'
import { pick, get } from 'lodash-es'
import type { Response } from 'express'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { GHESReleaseNotes } from '@/release-notes/components/GHESReleaseNotes'
import { GHESReleaseNotesContextT } from '@/release-notes/components/types'
import type { ExtendedRequest } from '@/types'

const liquid = new Liquid()
type Props = {
  mainContext: MainContextT
  ghesContext: GHESReleaseNotesContextT | null
}
export default function ReleaseNotes({ mainContext, ghesContext }: Props) {
  if (!ghesContext) {
    // GHES is the only supported release-notes product.
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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
): Promise<{ props: Props }> => {
  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as Response

  // allVersions entries carry more than these components need, so pick only the keys they use.
  const currentVersion = pick(req.context!.allVersions?.[req.context!.currentVersion!] || {}, [
    'plan',
    'planTitle',
    'versionTitle',
    'currentRelease',
    'releases',
  ]) as {
    plan?: string
    planTitle?: string
    versionTitle?: string
    currentRelease?: string
    releases?: string[]
  }

  const { latestPatch = '', latestRelease = '' } = req.context!

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['release_notes'])

  return {
    props: {
      mainContext,
      ghesContext:
        currentVersion.plan === 'enterprise-server'
          ? ({
              currentVersion,
              latestPatch,
              latestRelease,
              releaseNotes: req.context!.ghesReleaseNotes || [],
              releases: req.context!.ghesReleases || [],
              message: {
                ghes_release_notes_upgrade_patch_only: liquid.parseAndRenderSync(
                  get(
                    req.context,
                    'site.data.ui.header.notices.ghes_release_notes_upgrade_patch_only',
                    '',
                  ) as string,
                  { latestPatch, latestRelease },
                ),
                ghes_release_notes_upgrade_release_only: liquid.parseAndRenderSync(
                  get(
                    req.context,
                    'site.data.ui.header.notices.ghes_release_notes_upgrade_release_only',
                    '',
                  ) as string,
                  { latestPatch, latestRelease },
                ),
                ghes_release_notes_upgrade_patch_and_release: liquid.parseAndRenderSync(
                  get(
                    req.context,
                    'site.data.ui.header.notices.ghes_release_notes_upgrade_patch_and_release',
                    '',
                  ) as string,
                  { latestPatch, latestRelease },
                ),
              },
            } as unknown as GHESReleaseNotesContextT)
          : null,
    },
  }
}
