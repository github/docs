import xAllVersions from '../lib/all-versions.js'
const nonEnterpriseDefaultVersion = Object.values(xAllVersions).find(
  (version) => version.nonEnterpriseDefault
).version

export default nonEnterpriseDefaultVersion
