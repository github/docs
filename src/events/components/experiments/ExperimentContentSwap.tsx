import { useLayoutEffect, useState } from 'react'
import { useShouldShowExperiment } from '@/events/components/experiments/useShouldShowExperiment'
import { EXPERIMENTS } from '@/events/components/experiments/experiments'

const EXPERIMENT_KEY = EXPERIMENTS.readability_copilot.key

// Both .exp-control and .exp-treatment divs render server-side and Fastly caches them.
// The experiment group swaps visibility after load, so authored .exp-treatment divs need
// hidden for the control fallback and data-nosnippet so crawlers ignore treatment text.
export function ExperimentContentSwap({ containerRef }: { containerRef: string }) {
  const [hasExperimentDivs, setHasExperimentDivs] = useState(false)

  useLayoutEffect(() => {
    // Skip the experiment hook on pages without experiment markup to avoid unnecessary work.
    const container = document.querySelector(containerRef)
    if (container?.querySelector(`[data-experiment="${EXPERIMENT_KEY}"]`)) {
      setHasExperimentDivs(true)
    }
  }, [containerRef])

  if (!hasExperimentDivs) return null

  return <ExperimentSwapper containerRef={containerRef} />
}

// ExperimentSwapper isolates the experiment hook from pages without experiment divs.
function ExperimentSwapper({ containerRef }: { containerRef: string }) {
  const { showExperiment, experimentLoading } = useShouldShowExperiment(
    EXPERIMENTS.readability_copilot,
  )

  useLayoutEffect(() => {
    // Visibility updates before paint reduce flashes of control content for treatment users.
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
