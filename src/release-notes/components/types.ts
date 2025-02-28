export type CurrentVersion = {
  plan: string
  planTitle: string
  versionTitle: string
  currentRelease: string
  releases: string[]
}

export type GHESMessage = {
  ghes_release_notes_upgrade_patch_only: string
  ghes_release_notes_upgrade_release_only: string
  ghes_release_notes_upgrade_patch_and_release: string
}

type ReleaseNoteSection =
  | {
      heading?: string
      notes: Array<string>
    }
  | string

export type ReleaseNotePatch = {
  patchVersion: string
  version: string
  downloadVersion: string
  release: string
  intro: string
  date: string
  friendlyDate: string
  title: string
  release_candidate?: boolean
  currentWeek: boolean
  sections: Record<string, Array<ReleaseNoteSection>>
}

export type GHESReleaseNotesContextT = {
  latestPatch: string
  latestRelease: string
  currentVersion: CurrentVersion
  releaseNotes: Array<ReleaseNotePatch>
  releases: Array<{ version: string; patches: Array<ReleaseNotePatch> }>
  message: GHESMessage
}
