/**
 * Readability Analysis Script
 *
 * This script analyzes the readability of rendered documentation content using standard
 * readability metrics. It has a dual purpose:
 *
 * 1. **GitHub Actions Workflow**: Automatically runs on pull requests to analyze changed
 *    content files and post readability reports as PR comments.
 *
 * 2. **Local Development Tool**: Can be run locally by writers to test readability
 *    of specific files during content creation and editing.
 *
 * WORKFLOW USAGE:
 * - Triggered automatically on PRs with content changes
 * - Uses CHANGED_FILES environment variable from get-changed-files action
 * - Outputs report to console and saves to readability-report.md for PR commenting
 * - Requires local server to be running to analyze rendered content
 *
 * LOCAL USAGE:
 * 1. Start local development server: `npm start`
 * 2. Run analysis on specific files:
 *    - Single file: `npm run readability-report -- --paths content/file.md`
 *    - Multiple files: `npm run readability-report -- --paths content/file1.md content/file2.md`
 *    - Get help: `npm run readability-report -- --help`
 *
 * FEATURES:
 * - Analyzes rendered content (not raw Markdown) to account for Liquid templating
 * - Calculates multiple readability metrics (Flesch Reading Ease, Gunning Fog, FORCAST, etc.)
 * - Provides detailed reports with improvement recommendations
 * - Filters out code blocks and non-prose elements for accurate analysis
 *
 * REQUIREMENTS:
 * - Local server running on localhost:4000
 * - Content files must be in content/ directory
 * - Files must be accessible via rendered site URLs
 */

import fs from 'fs'
import path from 'path'

import cheerio from 'cheerio'
import got from 'got'

interface ReadabilityMetrics {
  fleschReadingEase: number
  fleschKincaidGrade: number
  gunningFog: number
  colemanLiau: number
  automatedReadabilityIndex: number
  smogIndex: number
  forcastGrade: number
}

interface PageReadability {
  path: string
  url: string
  title: string
  metrics: ReadabilityMetrics
  wordCount: number
  sentenceCount: number
  estimatedReadingTime: string
}

async function main() {
  // Check for help flag
  const args = process.argv.slice(2)
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: npm run readability-report [-- --paths <file1> <file2> ...]

Examples:
  # Analyze specific files
  npm run readability-report -- --paths content/copilot/using-github-copilot.md content/get-started/quickstart.md

  # Analyze a single file
  npm run readability-report -- --paths content/copilot/using-github-copilot.md

  # Use environment variable (for CI)
  CHANGED_FILES="content/file1.md content/file2.md" npm run readability-report

Note: Requires a local server running on localhost:4000 (npm start)
`)
    return
  }

  console.log('Starting readability analysis...')

  // Get changed content files from environment variable or command line arguments
  const changedFiles = getChangedContentFiles()

  if (changedFiles.length === 0) {
    console.log('No content files to analyze. Use --help for usage information.')
    return
  }

  console.log(`Analyzing readability for ${changedFiles.length} changed files:`)
  changedFiles.forEach((file) => console.log(`  - ${file}`))

  // Wait for server to be ready
  await waitForServer()

  // Analyze each changed file
  const results: PageReadability[] = []

  for (const filePath of changedFiles) {
    try {
      const result = await analyzeFile(filePath)
      if (result) {
        results.push(result)
        console.log(`✓ Analyzed: ${result.path}`)
      }
    } catch (error) {
      console.error(`✗ Failed to analyze ${filePath}:`, (error as Error).message)
    }
  }

  // Generate and output report
  const report = generateReport(results)

  // Always output to console for local development
  console.log('\n' + report)

  // If running in CI, also save report for commenting on PR
  if (process.env.GITHUB_ACTIONS) {
    fs.writeFileSync('readability-report.md', report)
    console.log('\nReport saved to readability-report.md')
  }
}

function getChangedContentFiles(): string[] {
  // Check for command line arguments first
  const args = process.argv.slice(2)
  const pathsIndex = args.indexOf('--paths')

  if (pathsIndex !== -1 && pathsIndex + 1 < args.length) {
    // Get all arguments after --paths until we hit another flag or end
    const paths: string[] = []
    for (let i = pathsIndex + 1; i < args.length; i++) {
      if (args[i].startsWith('--')) break
      paths.push(args[i])
    }

    return paths.filter((filePath) => {
      // Filter for content files only (not data files, READMEs, etc.)
      return (
        filePath.endsWith('.md') &&
        filePath.split(path.sep)[0] === 'content' &&
        path.basename(filePath) !== 'README.md'
      )
    })
  }

  // Fall back to environment variable (for CI)
  const spaceSeparatedList = process.env.CHANGED_FILES || ''
  return spaceSeparatedList.split(/\s+/g).filter((filePath) => {
    // Filter for content files only (not data files, READMEs, etc.)
    return (
      filePath.endsWith('.md') &&
      filePath.split(path.sep)[0] === 'content' &&
      path.basename(filePath) !== 'README.md'
    )
  })
}

function makeURL(path: string): string {
  return `http://localhost:4000${path}`
}

async function waitForServer(): Promise<void> {
  console.log('Waiting for server to be ready...')

  const maxAttempts = 30
  const delayMs = 2000

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await got(makeURL('/'), { timeout: { request: 5000 } })
      console.log('Server is ready!')
      return
    } catch (error) {
      if (attempt === maxAttempts) {
        console.error('Server failed to start. Last error:', (error as Error).message)
        throw new Error(`Server failed to start after ${maxAttempts} attempts`)
      }
      console.log(
        `Attempt ${attempt}/${maxAttempts} failed (${(error as Error).message}), retrying in ${delayMs}ms...`,
      )
      await new Promise((resolve) => setTimeout(resolve, delayMs))
    }
  }
}

async function analyzeFile(filePath: string): Promise<PageReadability | null> {
  // Convert file path to URL path
  // content/get-started/foo.md -> /get-started/foo
  const urlPath =
    '/' +
    filePath
      .replace(/^content\//, '')
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')

  try {
    // Fetch the rendered page
    const response = await got(makeURL(urlPath), {
      timeout: { request: 30000 },
      throwHttpErrors: false,
    })

    if (response.statusCode !== 200) {
      console.warn(`Skipping ${urlPath}: HTTP ${response.statusCode}`)
      return null
    }

    // Parse HTML and extract content
    const $ = cheerio.load(response.body)

    // Get page title
    const title = $('h1').first().text().trim() || $('title').text().trim() || 'Untitled'

    // Extract main content text (excluding navigation, sidebars, etc.)
    // Focus on the main article content with more specific selectors
    const contentSelectors = [
      'article .markdown-body', // Most specific - article content in docs
      '.markdown-body', // GitHub markdown content
      'article', // Generic article
      'main', // Main content area
      '[data-testid="lead"]', // Lead content
      '#article-contents', // Fallback
    ]

    let contentText = ''
    for (const selector of contentSelectors) {
      const element = $(selector)
      if (element.length > 0) {
        // Remove code blocks and other non-prose elements
        element.find('pre, code, .highlight').remove()
        element.find('nav, .breadcrumb, .pagination').remove()
        element.find('[data-testid="breadcrumbs"]').remove()
        element.find('.js-search-results').remove()
        element.find('aside, .sidebar').remove()
        element.find('.edit-this-page').remove()

        // Get the text content directly, which preserves natural spacing
        contentText = element.text()

        // Clean up the text to remove excessive whitespace
        contentText = contentText
          .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
          .trim()

        break
      }
    }

    if (!contentText.trim()) {
      console.warn(`No content found for ${urlPath}`)
      return null
    }

    // Calculate readability metrics
    const metrics = await calculateReadability(contentText)

    // Calculate estimated reading time based on word count and complexity
    const estimatedReadingTime = estimateReadingTime(
      countWords(contentText),
      metrics.fleschReadingEase,
    )

    return {
      path: filePath,
      url: urlPath,
      title,
      metrics,
      wordCount: countWords(contentText),
      sentenceCount: countSentences(contentText),
      estimatedReadingTime,
    }
  } catch (error) {
    throw new Error(`Failed to analyze ${urlPath}: ${(error as Error).message}`)
  }
}

async function calculateReadability(text: string): Promise<ReadabilityMetrics> {
  // Direct implementation of readability formulas
  const words = countWords(text)
  const sentences = countSentences(text)
  const syllables = countSyllables(text)
  const complexWords = countComplexWords(text)
  const singleSyllableWords = countSingleSyllableWords(text)

  if (sentences === 0 || words === 0) {
    return {
      fleschReadingEase: 0,
      fleschKincaidGrade: 0,
      gunningFog: 0,
      colemanLiau: 0,
      automatedReadabilityIndex: 0,
      smogIndex: 0,
      forcastGrade: 0,
    }
  }

  // Flesch Reading Ease: 206.835 - (1.015 × ASL) - (84.6 × ASW)
  const avgSentenceLength = words / sentences
  const avgSyllablesPerWord = syllables / words
  const fleschReadingEase = Math.max(
    0,
    206.835 - 1.015 * avgSentenceLength - 84.6 * avgSyllablesPerWord,
  )

  // Flesch-Kincaid Grade Level: (0.39 × ASL) + (11.8 × ASW) - 15.59
  const fleschKincaidGrade = 0.39 * avgSentenceLength + 11.8 * avgSyllablesPerWord - 15.59

  // Gunning Fog Index: 0.4 × (ASL + percentage of complex words)
  const complexWordPercentage = (complexWords / words) * 100
  const gunningFog = 0.4 * (avgSentenceLength + complexWordPercentage)

  // Coleman-Liau Index: 0.0588 × L - 0.296 × S - 15.8
  const avgCharsPer100Words = (text.replace(/\s/g, '').length / words) * 100
  const avgSentencesPer100Words = (sentences / words) * 100
  const colemanLiau = 0.0588 * avgCharsPer100Words - 0.296 * avgSentencesPer100Words - 15.8

  // Automated Readability Index: 4.71 × (characters/words) + 0.5 × (words/sentences) - 21.43
  const avgCharsPerWord = text.replace(/\s/g, '').length / words
  const automatedReadabilityIndex = 4.71 * avgCharsPerWord + 0.5 * avgSentenceLength - 21.43

  // SMOG Index: approximately 1.0430 × sqrt(complex words × 30/sentences) + 3.1291
  const smogIndex = 1.043 * Math.sqrt((complexWords * 30) / sentences) + 3.1291

  // FORCAST Grade Level: 20 - (N / 10), where N = single-syllable words per 150 words
  // Scale to 150-word sample proportion
  const singleSyllablePer150Words = (singleSyllableWords / words) * 150
  const forcastGrade = Math.max(5, 20 - singleSyllablePer150Words / 10) // Can't go below 5th grade

  return {
    fleschReadingEase: Math.round(fleschReadingEase * 100) / 100,
    fleschKincaidGrade: Math.max(0, Math.round(fleschKincaidGrade * 100) / 100),
    gunningFog: Math.max(0, Math.round(gunningFog * 100) / 100),
    colemanLiau: Math.max(0, Math.round(colemanLiau * 100) / 100),
    automatedReadabilityIndex: Math.max(0, Math.round(automatedReadabilityIndex * 100) / 100),
    smogIndex: Math.max(0, Math.round(smogIndex * 100) / 100),
    forcastGrade: Math.max(5, Math.round(forcastGrade * 100) / 100),
  }
}

function countSyllablesInWord(word: string): number {
  // Remove non-alphabetic characters
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '')
  if (cleanWord.length === 0) return 0

  // Count vowel groups
  const vowelGroups = cleanWord.match(/[aeiouy]+/g) || []
  let syllables = vowelGroups.length

  // Subtract silent 'e' at end
  if (cleanWord.endsWith('e') && syllables > 1) {
    syllables -= 1
  }

  // Ensure at least 1 syllable per word
  return Math.max(1, syllables)
}

function countWords(text: string): number {
  // Clean the text and split into words
  const cleanText = text
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .trim()

  if (!cleanText) return 0

  // Split on whitespace and filter out empty strings
  const words = cleanText.split(/\s+/).filter((word) => {
    // Remove punctuation and check if there are actual letters/numbers
    const cleanWord = word.replace(/[^\w]/g, '')
    return cleanWord.length > 0
  })

  return words.length
}

function countSentences(text: string): number {
  // Clean and normalize the text first
  const cleanText = text
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .trim()

  // Split on sentence-ending punctuation, being more conservative
  // Only count actual sentence-ending punctuation, not structural breaks
  const sentences = cleanText
    .split(/[.!?]+(?=\s|$)/) // Only split on punctuation followed by space or end
    .map((s) => s.trim())
    .filter((s) => s.length > 0)

  return Math.max(1, sentences.length)
}

function countSyllables(text: string): number {
  // Simple syllable counting approximation
  const words = text.toLowerCase().split(/\s+/)
  let syllableCount = 0

  for (const word of words) {
    if (word.length === 0) continue
    syllableCount += countSyllablesInWord(word)
  }

  return syllableCount
}

function countSingleSyllableWords(text: string): number {
  // Count words with exactly 1 syllable
  const words = text.toLowerCase().split(/\s+/)
  let singleSyllableCount = 0

  for (const word of words) {
    if (word.length === 0) continue

    const syllables = countSyllablesInWord(word)
    if (syllables === 1) {
      singleSyllableCount += 1
    }
  }

  return singleSyllableCount
}

function countComplexWords(text: string): number {
  // Count words with 3+ syllables (approximation)
  const words = text.toLowerCase().split(/\s+/)
  let complexCount = 0

  for (const word of words) {
    if (word.length === 0) continue

    const syllables = countSyllablesInWord(word)
    if (syllables >= 3) {
      complexCount += 1
    }
  }

  return complexCount
}

function estimateReadingTime(wordCount: number, fleschReadingEase: number): string {
  // Base reading speed in words per minute (WPM)
  // Average adult reading speed is around 200-250 WPM for normal text
  let baseWPM = 200

  // Adjust reading speed based on text complexity (Flesch Reading Ease score)
  // Higher scores = easier text = faster reading
  // Lower scores = harder text = slower reading
  if (fleschReadingEase >= 90) {
    baseWPM = 250 // Very easy - fast reading
  } else if (fleschReadingEase >= 80) {
    baseWPM = 230 // Easy - slightly faster
  } else if (fleschReadingEase >= 70) {
    baseWPM = 210 // Fairly easy - normal speed
  } else if (fleschReadingEase >= 60) {
    baseWPM = 200 // Standard - average speed
  } else if (fleschReadingEase >= 50) {
    baseWPM = 180 // Fairly difficult - slower
  } else if (fleschReadingEase >= 30) {
    baseWPM = 160 // Difficult - much slower
  } else {
    baseWPM = 140 // Very difficult - very slow
  }

  // Calculate reading time in minutes
  const readingTimeMinutes = wordCount / baseWPM

  // Format the output
  if (readingTimeMinutes < 1) {
    return '< 1 min'
  } else if (readingTimeMinutes < 60) {
    return `${Math.round(readingTimeMinutes)} min`
  } else {
    const hours = Math.floor(readingTimeMinutes / 60)
    const minutes = Math.round(readingTimeMinutes % 60)
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
  }
}

function generateReport(results: PageReadability[]): string {
  if (results.length === 0) {
    return '## 📊 Readability Report\n\nNo content changes found to analyze.'
  }

  let report = '## 📊 Readability Report\n\n'
  report += `Analyzed ${results.length} changed documentation page${results.length === 1 ? '' : 's'}.\n\n`

  // Summary table
  report += '### Summary\n\n'
  report += '| Page | Flesch Reading Ease | Grade Level | Reading Time | Words |\n'
  report += '|------|:-------------------:|:-----------:|:------------:|:-----:|\n'

  for (const result of results) {
    const grade = result.metrics.fleschKincaidGrade
    const ease = result.metrics.fleschReadingEase
    const readingTime = result.estimatedReadingTime

    // Determine readability assessment
    let easeAssessment = '❓'
    if (ease >= 60) easeAssessment = '🟢'
    else if (ease >= 30) easeAssessment = '🟡'
    else easeAssessment = '🔴'

    report += `| [${result.title}](${result.url}) | ${ease} ${easeAssessment} | ${grade} | ${readingTime} | ${result.wordCount} |\n`
  }

  // Detailed metrics
  report += '\n### Detailed Metrics\n\n'

  for (const result of results) {
    report += `#### ${result.title}\n\n`
    report += `**File:** \`${result.path}\`  \n`
    report += `**URL:** ${result.url}  \n`
    report += `**Words:** ${result.wordCount} | **Sentences:** ${result.sentenceCount} | **Est. Reading Time:** ${result.estimatedReadingTime}\n\n`

    report += '| Metric | Score | Target | Assessment |\n'
    report += '|--------|:-----:|:------:|:----------:|\n'

    const metrics = [
      {
        name: 'Flesch Reading Ease',
        score: result.metrics.fleschReadingEase,
        target: '60+',
        assessment:
          result.metrics.fleschReadingEase >= 60
            ? '🟢 Good'
            : result.metrics.fleschReadingEase >= 30
              ? '🟡 Fair'
              : '🔴 Difficult',
      },
      {
        name: 'Flesch-Kincaid Grade',
        score: result.metrics.fleschKincaidGrade,
        target: '8 or less',
        assessment:
          result.metrics.fleschKincaidGrade <= 8
            ? '🟢 Good'
            : result.metrics.fleschKincaidGrade <= 12
              ? '🟡 Fair'
              : '🔴 High',
      },
      {
        name: 'Gunning Fog Index',
        score: result.metrics.gunningFog,
        target: '8 or less',
        assessment:
          result.metrics.gunningFog <= 8
            ? '🟢 Good'
            : result.metrics.gunningFog <= 12
              ? '🟡 Fair'
              : '🔴 High',
      },
      {
        name: 'Coleman-Liau Index',
        score: result.metrics.colemanLiau,
        target: '8 or less',
        assessment:
          result.metrics.colemanLiau <= 8
            ? '🟢 Good'
            : result.metrics.colemanLiau <= 12
              ? '🟡 Fair'
              : '🔴 High',
      },
      {
        name: 'Automated Readability Index',
        score: result.metrics.automatedReadabilityIndex,
        target: '8 or less',
        assessment:
          result.metrics.automatedReadabilityIndex <= 8
            ? '🟢 Good'
            : result.metrics.automatedReadabilityIndex <= 12
              ? '🟡 Fair'
              : '🔴 High',
      },
      {
        name: 'FORCAST Grade Level',
        score: result.metrics.forcastGrade,
        target: '9-10',
        assessment:
          result.metrics.forcastGrade <= 10
            ? '🟢 Good'
            : result.metrics.forcastGrade <= 12
              ? '🟡 Fair'
              : '🔴 High',
      },
    ]

    for (const metric of metrics) {
      report += `| ${metric.name} | ${metric.score} | ${metric.target} | ${metric.assessment} |\n`
    }

    report += '\n'
  }

  // Guidelines
  report += '### 📖 Readability Guidelines\n\n'
  report += '**Target Audience:** Technical users (developers, administrators)\n\n'
  report += '**Reading Time Estimation:**\n'
  report += '- Based on complexity-adjusted reading speed (140-250 WPM)\n'
  report += '- Easier content (higher Flesch scores) = faster reading\n'
  report += '- More complex content = slower reading pace\n\n'
  report += '**General Tips for Improvement:**\n'
  report += '- **Sentences:** Aim for 15-20 words per sentence on average\n'
  report += '- **Word choice:** Choose simpler alternatives when possible\n'
  report += '- **Paragraphs:** Keep paragraphs under 75-100 words\n'
  report +=
    '- **Voice:** Use active voice (e.g., "Click the button" vs "The button should be clicked")\n'
  report += '- **Technical terms:** Define acronyms and jargon on first use\n'
  report +=
    '- **FORCAST improvement:** Use more single-syllable words (aim for 110+ per 150 words)\n\n'

  // Add overall recommendations based on results
  const avgFleschEase =
    results.reduce((sum, r) => sum + r.metrics.fleschReadingEase, 0) / results.length

  if (avgFleschEase < 60) {
    if (results.length === 1) {
      report +=
        '**Priority Focus:** This page scored below 60 for Flesch Reading Ease. Consider breaking up complex sentences and using simpler vocabulary.\n\n'
    } else {
      report +=
        '**Priority Focus:** Several pages scored below 60 for Flesch Reading Ease. Consider breaking up complex sentences and using simpler vocabulary.\n\n'
    }
  }

  return report
}

main().catch((error) => {
  console.error('Readability analysis failed:', error)
  process.exit(1)
})
