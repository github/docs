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
  const [experimentLoading, setExperimentLoading] = useState(true)
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
    // After 1.5 seconds, if the experiment logic hasn't resolved, force it to stop loading
    const timer = setTimeout(() => {
      if (experimentLoading) {
        setExperimentLoading(false)
      }
    }, 1500)
    return () => {
      clearTimeout(timer)
      if (experimentLoading) {
        setExperimentLoading(false)
      }
    }
  }, [experimentLoading])

  useEffect(() => {
    const updateShouldShow = async () => {
      const staffStatus = await getIsStaff()
      setShowExperiment(
        shouldShowExperiment(
          experimentKey,
          router.locale || '',
          mainContext.currentVersion || '',
          staffStatus,
          router.query,
        ),
      )
      setExperimentLoading(false)
    }

    updateShouldShow()

    // Event listener to update when controlGroupOverride is called
    window.addEventListener('controlGroupOverrideChanged', updateShouldShow)

    return () => {
      window.removeEventListener('controlGroupOverrideChanged', updateShouldShow)
    }
  }, [experimentKey, router.locale, mainContext.currentVersion, router.query, isStaff])

  return {
    showExperiment,
    experimentLoading,
  }
}
