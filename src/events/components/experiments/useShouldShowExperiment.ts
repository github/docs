import { useEffect, useState } from 'react'
import { shouldShowExperiment } from './experiment'
import { ExperimentNames } from './experiments'

export function useShouldShowExperiment(
  experimentKey: ExperimentNames | { key: ExperimentNames },
  locale: string,
) {
  if (typeof experimentKey === 'object') {
    experimentKey = experimentKey.key
  }

  const [showExperiment, setShowExperiment] = useState(false)

  useEffect(() => {
    const updateShouldShow = () => {
      setShowExperiment(shouldShowExperiment(experimentKey, locale))
    }

    updateShouldShow()

    // Event listener to update when controlGroupOverride is called
    window.addEventListener('controlGroupOverrideChanged', updateShouldShow)

    return () => {
      window.removeEventListener('controlGroupOverrideChanged', updateShouldShow)
    }
  }, [experimentKey])

  return showExperiment
}
