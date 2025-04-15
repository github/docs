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
  const [isStaff, setIsStaff] = useState<boolean>(false)

  // Fetch `isStaff` one time on mount so we can know if the other useEffect needs to be re-run
  useEffect(() => {
    let cancelled = false
    async function checkStaff() {
      const staffValue = await getIsStaff()
      if (!cancelled) setIsStaff(staffValue)
    }
    checkStaff()
    return () => {
      cancelled = true
    }
  }, [])

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
  }, [experimentKey, router.locale, mainContext.currentVersion, router.query, isStaff])

  return showExperiment
}
