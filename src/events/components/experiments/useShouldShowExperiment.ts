import { useEffect, useState } from 'react'
import { shouldShowExperiment } from './experiment'
import { ExperimentNames } from './experiments'
import { getIsStaff } from '../dotcom-cookies'

export function useShouldShowExperiment(
  experimentKey: ExperimentNames | { key: ExperimentNames },
  locale: string,
) {
  if (typeof experimentKey === 'object') {
    experimentKey = experimentKey.key
  }

  const [showExperiment, setShowExperiment] = useState(false)

  useEffect(() => {
    const updateShouldShow = async () => {
      const isStaff = await getIsStaff()
      setShowExperiment(shouldShowExperiment(experimentKey, locale, isStaff))
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
