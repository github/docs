import fs from 'fs'
import path from 'path'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

interface Frontmatter {
  heroImage?: string
  [key: string]: unknown
}

// Get the list of valid hero images (without extensions)
function getValidHeroImages(): string[] {
  const ROOT = process.env.ROOT || '.'
  const heroImageDir = path.join(ROOT, 'assets/images/banner-images')

  try {
    if (!fs.existsSync(heroImageDir)) {
      return []
    }

    const files = fs.readdirSync(heroImageDir)
    // Return absolute paths without extensions as they should appear in frontmatter
    return files.map((file) => {
      const baseName = path.basename(file, path.extname(file))
      return `/assets/images/banner-images/${baseName}`
    })
  } catch {
    return []
  }
}

export const frontmatterHeroImage: Rule = {
  names: ['GHD061', 'frontmatter-hero-image'],
  description:
    'Hero image paths must be absolute, extensionless, and point to valid images in /assets/images/banner-images/',
  tags: ['frontmatter', 'images'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Only check index.md files
    if (!params.name.endsWith('index.md')) return

    const fm = getFrontmatter(params.lines) as Frontmatter | null
    if (!fm || !fm.heroImage) return

    const heroImage = fm.heroImage

    // Check if heroImage is an absolute path
    if (!heroImage.startsWith('/')) {
      const line = params.lines.find((ln: string) => ln.trim().startsWith('heroImage:'))
      const lineNumber = line ? params.lines.indexOf(line) + 1 : 1
      addError(
        onError,
        lineNumber,
        `Hero image path must be absolute (start with /). Found: ${heroImage}`,
        line || '',
        null, // No fix possible
      )
      return
    }

    // Check if heroImage points to banner-images directory
    if (!heroImage.startsWith('/assets/images/banner-images/')) {
      const line = params.lines.find((ln: string) => ln.trim().startsWith('heroImage:'))
      const lineNumber = line ? params.lines.indexOf(line) + 1 : 1
      addError(
        onError,
        lineNumber,
        `Hero image must point to /assets/images/banner-images/. Found: ${heroImage}`,
        line || '',
        null, // No fix possible
      )
      return
    }

    // Check if the path includes a file extension (which is not allowed)
    if (path.extname(heroImage)) {
      const line = params.lines.find((ln: string) => ln.trim().startsWith('heroImage:'))
      const lineNumber = line ? params.lines.indexOf(line) + 1 : 1
      const withoutExtension = heroImage.substring(0, heroImage.lastIndexOf('.'))
      addError(
        onError,
        lineNumber,
        `Hero image path must not include file extension. Use: ${withoutExtension}`,
        line || '',
        null, // No fix possible
      )
      return
    }

    // Check if a file with this base name actually exists
    const validHeroImages = getValidHeroImages()
    if (validHeroImages.length > 0 && !validHeroImages.includes(heroImage)) {
      const line = params.lines.find((ln: string) => ln.trim().startsWith('heroImage:'))
      const lineNumber = line ? params.lines.indexOf(line) + 1 : 1
      const availableImages = validHeroImages.join(', ')
      addError(
        onError,
        lineNumber,
        `Hero image file does not exist: ${heroImage}. Available images: ${availableImages}`,
        line || '',
        null, // No fix possible
      )
    }
  },
}
