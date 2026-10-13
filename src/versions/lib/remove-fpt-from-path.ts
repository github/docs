import slash from 'slash'
import nonEnterpriseDefaultVersion from './non-enterprise-default-version'

// Strip free-pro-team@latest from user-facing paths while retaining it as a code and
// content version.
export default function removeFPTFromPath(path: string): string {
  return slash(path.replace(`/${nonEnterpriseDefaultVersion}`, ''))
}
