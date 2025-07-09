import { allVersions } from '#src/versions/lib/all-versions.ts'
const nonEnterpriseDefaultVersion = Object.values(allVersions).find(
  (version) => version.nonEnterpriseDefault,
).version

export default nonEnterpriseDefaultVersion
