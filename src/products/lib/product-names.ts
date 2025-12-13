import type { ProductNames } from '@/types'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'

const productNames: ProductNames = {
  dotcom: 'GitHub.com',
}

for (const version of enterpriseServerReleases.all) {
  productNames[version] = `Enterprise Server ${version}`
}

export default productNames
