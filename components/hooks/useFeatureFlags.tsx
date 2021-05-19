import { useMainContext } from 'components/context/MainContext'

export type FeatureFlags = {
  FEATURE_NEW_SITETREE: boolean
}

export const useFeatureFlags = (): FeatureFlags => {
  const { featureFlags } = useMainContext()
  return featureFlags
}
