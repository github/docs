import { allVersions } from '../lib/all-versions.js'
const nonEnterpriseDefaultVersion = Object.values(allVersions).find(
  (version) => version.nonEnterpriseDefault
).version

export default nonEnterpriseDefaultVersion
