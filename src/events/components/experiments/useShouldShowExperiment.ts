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

  useEffect(() => {
    // Staff status refreshes experiment targeting after the cookie request resolves.
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
    // Stop loading after 1.5 seconds so a stalled cookie request does not hide the page variant.
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
