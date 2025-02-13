import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { shouldShowExperiment } from './experiment'
import { ExperimentNames } from './experiments'
import { getIsStaff } from '../dotcom-cookies'
import { useMainContext } from '@/frame/components/context/MainContext'

export function useShouldShowExperiment(experimentKey: ExperimentNames | { key: ExperimentNames }) {
  if (typeof experimentKey === 'object') {
    experimentKey = experimentKey.key
  }

  const [showExperiment, setShowExperiment] = useState(false)
  const router = useRouter()
  const mainContext = useMainContext()

  useEffect(() => {
    const updateShouldShow = async () => {
      const isStaff = await getIsStaff()
      setShowExperiment(
        shouldShowExperiment(
          experimentKey,
          router.locale || '',
          mainContext.currentVersion || '',
          isStaff,
          router.query,
        ),
      )
    }

    updateShouldShow()

    // Event listener to update when controlGroupOverride is called
    window.addEventListener('controlGroupOverrideChanged', updateShouldShow)

    return () => {
      window.removeEventListener('controlGroupOverrideChanged', updateShouldShow)
    }
  }, [experimentKey, router.locale, mainContext.currentVersion, router.query])

  return showExperiment
}
