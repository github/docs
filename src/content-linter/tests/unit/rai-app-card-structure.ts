import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { raiAppCardStructure } from '../../lib/linting-rules/rai-app-card-structure'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** A minimal valid RAI card with all required H2s, H3s, and reusables. */
function validCard(): string {
  return [
    '---',
    'title: Copilot Chat',
    'contentType: rai',
    '---',
    '',
    '{% data reusables.rai.copilot.application-card-intro %}',
    '',
    '## What is an application card?',
    '',
    'Intro.',
    '',
    '## 1. Overview',
    '',
    'Overview text.',
    '',
    '## 2. Key terms',
    '',
    'Terms.',
    '',
    '## 3. Key features or capabilities',
    '',
    'Features.',
    '',
    '## 4. Intended uses',
    '',
    'Uses.',
    '',
    '## 5. Models and training data',
    '',
    'Models.',
    '',
    '## 6. Performance',
    '',
    'Perf.',
    '',
    '## 7. Limitations',
    '',
    'Limits.',
    '',
    '## 8. Evaluations',
    '',
    '{% data reusables.rai.copilot.application-card-evaluations %}',
    '',
    '### Performance and quality evaluations',
    '',
    'Quality evals.',
    '',
    '### Performance and quality evaluation methods',
    '',
    'Methods.',
    '',
    '### Risk and safety evaluations',
    '',
    'Safety evals.',
    '',
    '### Risk and safety evaluation methods',
    '',
    'Methods.',
    '',
    '### Evaluation data for quality and safety',
    '',
    '{% data reusables.rai.copilot.application-card-evaluation-data-for-quality-and-safety %}',
    '',
    '### Custom evaluations',
    '',
    'Custom evals.',
    '',
    '## 9. Safety components and mitigations',
    '',
    'Mitigations.',
    '',
    '## 10. Best practices for deploying and adopting Copilot Chat',
    '',
    '### Deployers and end-users should',
    '',
    '{% data reusables.rai.copilot.application-card-consequential-decisions %}',
    '',
    '{% data reusables.rai.copilot.application-card-evaluate-legal-regulatory %}',
    '',
    '### End-users should',
    '',
    '{% data reusables.rai.copilot.application-card-overreliance %}',
    '',
    '{% data reusables.rai.copilot.application-card-agentic-ai-caution %}',
    '',
    '### Deployers should',
    '',
    'Deployer practices.',
    '',
    '## 11. Learn more about Copilot Chat',
    '',
    'Links.',
    '',
    '### Learn more about responsible AI',
    '',
    'RA links.',
  ].join('\n')
}

describe(raiAppCardStructure.names.join(' - '), () => {
  // -----------------------------------------------------------------------
  // Happy path & filtering
  // -----------------------------------------------------------------------

  test('valid RAI card produces zero errors', async () => {
    const markdown = validCard()
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('non-RAI file is skipped entirely', async () => {
    const markdown = [
      '---',
      'title: Normal article',
      '---',
      '',
      '## Introduction',
      '',
      'Regular content.',
    ].join('\n')
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  // -----------------------------------------------------------------------
  // One negative test per validator — proves each code path fires
  // -----------------------------------------------------------------------

  test('missing a required H2 section reports an error', async () => {
    const markdown = validCard()
      .split('\n')
      .filter((line) => line !== '## 4. Intended uses')
      .join('\n')
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.some((e) => e.errorDetail?.includes('Missing required section'))).toBe(true)
  })

  test('missing required H3 subsection reports an error', async () => {
    const markdown = validCard()
      .split('\n')
      .filter((line) => line !== '### Custom evaluations')
      .join('\n')
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.some((e) => e.errorDetail?.includes('Missing required subsection'))).toBe(true)
  })

  test('missing parent H2 does not duplicate errors for its H3 children', async () => {
    const markdown = validCard()
      .split('\n')
      .filter((line) => line !== '## 8. Evaluations')
      .join('\n')
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    const h3Errors = errors.filter(
      (e) =>
        e.errorDetail?.includes('### Evaluation data for quality and safety') ||
        e.errorDetail?.includes('### Custom evaluations'),
    )
    expect(h3Errors.length).toBe(0)
  })

  test('unrecognized H3 under a structured section is flagged', async () => {
    const markdown = validCard().replace(
      '### Performance and quality evaluations',
      '### 8.1 Performance and quality evaluations',
    )
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.some((e) => e.errorDetail?.includes('Unexpected subsection heading'))).toBe(true)
  })

  test('missing a required reusable reports an error', async () => {
    const markdown = validCard()
      .split('\n')
      .filter((line) => !line.includes('application-card-overreliance'))
      .join('\n')
    const result = await runRule(raiAppCardStructure, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.some((e) => e.errorDetail?.includes('application-card-overreliance'))).toBe(true)
  })
})
