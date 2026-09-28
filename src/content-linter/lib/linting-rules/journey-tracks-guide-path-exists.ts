import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

// Same two-strategy path resolution as isValidArticlePath in
// frontmatter-landing-carousels.ts.
function isValidGuidePath(guidePath: string, currentFilePath: string): boolean {
  const ROOT = process.env.ROOT || '.'

  // Strategy 1: Always try as an absolute path from content root first
  const contentDir = path.join(ROOT, 'content')
  const normalizedPath = guidePath.startsWith('/') ? guidePath.substring(1) : guidePath

  const absolutePath = path.join(contentDir, `${normalizedPath}.md`)
  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    return true
  }

  // A directory with an index.md in it is a landing page.
  const indexPath = path.join(contentDir, normalizedPath, 'index.md')
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return true
  }

  // Strategy 2: Fall back to relative path from current file's directory
  const currentDir = path.dirname(currentFilePath)

  const relativePath = path.join(currentDir, `${normalizedPath}.md`)
  try {
    if (fs.existsSync(relativePath) && fs.statSync(relativePath).isFile()) {
      return true
    }
  } catch {
    // Continue to next strategy
  }

  const relativeIndexPath = path.join(currentDir, normalizedPath, 'index.md')
  try {
    return fs.existsSync(relativeIndexPath) && fs.statSync(relativeIndexPath).isFile()
  } catch {
    return false
  }
}

export const journeyTracksGuidePathExists = {
  names: ['GHD059', 'journey-tracks-guide-path-exists'],
  description: 'Journey track guide paths must reference existing content files',
  tags: ['frontmatter', 'journey-tracks'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Using unknown for frontmatter as it's a dynamic YAML object with varying properties
    const fm: unknown = getFrontmatter(params.lines)
    if (!fm || typeof fm !== 'object' || !('journeyTracks' in fm)) return
    const fmObj = fm as Record<string, unknown>
    if (!Array.isArray(fmObj.journeyTracks)) return
    if (!('layout' in fmObj) || fmObj.layout !== 'journey-landing') return

    const journeyTracksLine = params.lines.find((line: string) => line.startsWith('journeyTracks:'))

    if (!journeyTracksLine) return

    const journeyTracksLineNumber = params.lines.indexOf(journeyTracksLine) + 1

    for (let trackIndex = 0; trackIndex < fmObj.journeyTracks.length; trackIndex++) {
      const track: unknown = fmObj.journeyTracks[trackIndex]
      if (!track || typeof track !== 'object' || !('guides' in track)) continue
      const trackObj = track as Record<string, unknown>
      if (trackObj.guides && Array.isArray(trackObj.guides)) {
        for (let guideIndex = 0; guideIndex < trackObj.guides.length; guideIndex++) {
          const guideObj = trackObj.guides[guideIndex]

          if (!guideObj || typeof guideObj !== 'object') continue

          if ('href' in guideObj && typeof guideObj.href === 'string') {
            if (!isValidGuidePath(guideObj.href, params.name)) {
              addError(
                onError,
                journeyTracksLineNumber,
                `Journey track guide path does not exist: ${guideObj.href} (track ${trackIndex + 1}, guide ${guideIndex + 1})`,
                guideObj.href,
              )
            }
          }
        }
      }
    }
  },
}
