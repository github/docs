import { useRouter } from 'next/router'

type VersionInfo = {
  currentVersion: string
  isEnterprise: boolean
  isEnterpriseServer: boolean
}
export const DEFAULT_VERSION = 'free-pro-team@latest'
export const useVersion = (): VersionInfo => {
  const router = useRouter()
  const currentVersion = (router.query.versionId as string) || DEFAULT_VERSION
  return {
    currentVersion,
    isEnterprise: currentVersion.includes('enterprise'),
    isEnterpriseServer: currentVersion.includes('enterprise-server'),
  }
}
