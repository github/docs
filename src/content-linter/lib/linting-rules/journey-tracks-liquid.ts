import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import { liquid } from '@/content-render/index'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

export const journeyTracksLiquid = {
  names: ['GHD058', 'journey-tracks-liquid'],
  description: 'Journey track properties must use valid Liquid syntax',
  tags: ['frontmatter', 'journey-tracks', 'liquid'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
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

    for (let trackIndex = 0; trackIndex < fm.journeyTracks.length; trackIndex++) {
      const track: any = fm.journeyTracks[trackIndex]
      // Try to find the line number for this specific journey track so we can use that for the error
      // line number.  Getting the exact line number is probably more work than it's worth for this
      // particular rule.

      // Look for the track by finding the nth occurrence of track-like patterns after journeyTracks
      let trackLineNumber: number = baseLineNumber
      if (journeyTracksLine) {
        let trackCount: number = 0
        for (let i = params.lines.indexOf(journeyTracksLine) + 1; i < params.lines.length; i++) {
          const line: string = params.lines[i].trim()
          // Look for track indicators (array item with id, title, or description)
          if (
            line.startsWith('- id:') ||
            line.startsWith('- title:') ||
            (line === '-' &&
              i + 1 < params.lines.length &&
              (params.lines[i + 1].trim().startsWith('id:') ||
                params.lines[i + 1].trim().startsWith('title:')))
          ) {
            if (trackCount === trackIndex) {
              trackLineNumber = i + 1
              break
            }
            trackCount++
          }
        }
      }

      // Simple validation - just check if liquid can parse each string property
      const properties = [
        { name: 'title', value: track.title },
        { name: 'description', value: track.description },
      ]

      for (const prop of properties) {
        if (prop.value && typeof prop.value === 'string') {
          try {
            liquid.parse(prop.value)
          } catch (error: any) {
            addError(
              onError,
              trackLineNumber,
              `Invalid Liquid syntax in journey track ${prop.name} (track ${trackIndex + 1}): ${error.message}`,
              prop.value,
            )
          }
        }
      }

      if (track.guides && Array.isArray(track.guides)) {
        for (let guideIndex = 0; guideIndex < track.guides.length; guideIndex++) {
          const guideObj = track.guides[guideIndex]

          // Validate guide is an object with expected properties
          if (!guideObj || typeof guideObj !== 'object') continue

          // Validate href property
          if ('href' in guideObj && typeof guideObj.href === 'string') {
            try {
              liquid.parse(guideObj.href)
            } catch (error: any) {
              addError(
                onError,
                trackLineNumber,
                `Invalid Liquid syntax in journey track guide href (track ${trackIndex + 1}, guide ${guideIndex + 1}): ${error.message}`,
                guideObj.href,
              )
            }
          }

          // Validate alternativeNextStep property if present
          if (
            'alternativeNextStep' in guideObj &&
            typeof guideObj.alternativeNextStep === 'string'
          ) {
            try {
              liquid.parse(guideObj.alternativeNextStep)
            } catch (error: any) {
              addError(
                onError,
                trackLineNumber,
                `Invalid Liquid syntax in journey track guide alternativeNextStep (track ${trackIndex + 1}, guide ${guideIndex + 1}): ${error.message}`,
                guideObj.alternativeNextStep,
              )
            }
          }
        }
      }
    }
  },
}
