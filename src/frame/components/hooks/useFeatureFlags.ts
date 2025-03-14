import { useMainContext } from 'src/frame/components/context/MainContext'

export type FeatureFlags = {}

export const useFeatureFlags = (): FeatureFlags => {
  const { featureFlags } = useMainContext()
  return featureFlags
}
