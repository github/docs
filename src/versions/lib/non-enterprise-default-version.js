import { allVersions } from '@/versions/lib/all-versions'
const nonEnterpriseDefaultVersion = Object.values(allVersions).find(
  (version) => version.nonEnterpriseDefault,
).version

export default nonEnterpriseDefaultVersion
