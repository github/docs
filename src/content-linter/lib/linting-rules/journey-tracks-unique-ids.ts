// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

// GHD060
export const journeyTracksUniqueIds = {
  names: ['GHD060', 'journey-tracks-unique-ids'],
  description: 'Journey track IDs must be unique within a page',
  tags: ['frontmatter', 'journey-tracks', 'unique-ids'],
  function: function GHD060(params: RuleParams, onError: RuleErrorCallback) {
    // Using any for frontmatter as it's a dynamic YAML object with varying properties
    const fm: any = getFrontmatter(params.lines)
    if (!fm || !fm.journeyTracks || !Array.isArray(fm.journeyTracks)) return
    if (!fm.layout || fm.layout !== 'journey-landing') return

    // Find the base journeyTracks line
    const journeyTracksLine: string | undefined = params.lines.find((line: string) =>
      line.trim().startsWith('journeyTracks:'),
    )
    const baseLineNumber: number = journeyTracksLine
      ? params.lines.indexOf(journeyTracksLine) + 1
      : 1

    // Helper function to find line number for a specific track by index
    function getTrackLineNumber(trackIndex: number): number {
      if (!journeyTracksLine) return baseLineNumber

      let trackCount = 0
      for (let i = params.lines.indexOf(journeyTracksLine) + 1; i < params.lines.length; i++) {
        const line = params.lines[i].trim()
        // Look for any "- id:" line (journey track indicator)
        if (line.startsWith('- id:')) {
          if (trackCount === trackIndex) {
            return i + 1
          }
          trackCount++

          // Stop once we've found all the tracks we know exist
          if (fm && fm.journeyTracks && trackCount >= fm.journeyTracks.length) {
            break
          }
        }
      }
      return baseLineNumber
    }

    // Track seen journey track IDs and line number for error reporting
    const seenIds = new Map<string, number>()

    fm.journeyTracks.forEach((track: any, index: number) => {
      if (!track || typeof track !== 'object') return

      const trackId = track.id
      if (!trackId || typeof trackId !== 'string') return

      const currentLineNumber = getTrackLineNumber(index)

      if (seenIds.has(trackId)) {
        const firstLineNumber = seenIds.get(trackId)
        addError(
          onError,
          currentLineNumber,
          `Journey track ID "${trackId}" is duplicated (first seen at line ${firstLineNumber}, duplicate at line ${currentLineNumber})`,
        )
      } else {
        seenIds.set(trackId, currentLineNumber)
      }
    })
  },
}
