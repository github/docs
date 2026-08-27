import { useLayoutEffect, useState } from 'react'
import { useShouldShowExperiment } from '@/events/components/experiments/useShouldShowExperiment'
import { EXPERIMENTS } from '@/events/components/experiments/experiments'

const EXPERIMENT_KEY = EXPERIMENTS.readability_copilot.key

// Swaps visibility of .exp-control / .exp-treatment divs within the article
// body based on the user's experiment group. Both variants are rendered
// server-side (and cached by Fastly). Treatment divs must have the `hidden`
// and `data-nosnippet` attributes in the authored HTML so control content is
// always the safe fallback and crawlers ignore the treatment variant.
export function ExperimentContentSwap({ containerRef }: { containerRef: string }) {
  const [hasExperimentDivs, setHasExperimentDivs] = useState(false)

  // Check once on mount whether this page has any experiment markup.
  // If not, skip the experiment hook entirely to avoid unnecessary work.
  useLayoutEffect(() => {
    const container = document.querySelector(containerRef)
    if (container?.querySelector(`[data-experiment="${EXPERIMENT_KEY}"]`)) {
      setHasExperimentDivs(true)
    }
  }, [containerRef])

  if (!hasExperimentDivs) return null

  return <ExperimentSwapper containerRef={containerRef} />
}

// Separated so the experiment hook only runs when experiment divs are present.
function ExperimentSwapper({ containerRef }: { containerRef: string }) {
  const { showExperiment, experimentLoading } = useShouldShowExperiment(
    EXPERIMENTS.readability_copilot,
  )

  // useLayoutEffect fires synchronously after DOM mutations but before
  // the browser paints, minimizing the flash of control content for
  // treatment users.
  useLayoutEffect(() => {
    if (experimentLoading) return

    const container = document.querySelector(containerRef)
    if (!container) return

    const selector = `[data-experiment="${EXPERIMENT_KEY}"]`
    const controlDivs = container.querySelectorAll<HTMLElement>(`.exp-control${selector}`)
    const treatmentDivs = container.querySelectorAll<HTMLElement>(`.exp-treatment${selector}`)

    if (showExperiment) {
      for (const div of controlDivs) div.hidden = true
      for (const div of treatmentDivs) div.hidden = false
    } else {
      for (const div of controlDivs) div.hidden = false
      for (const div of treatmentDivs) div.hidden = true
    }
  }, [showExperiment, experimentLoading, containerRef])

  return null
}
