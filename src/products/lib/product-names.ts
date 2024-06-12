import type { ProductNames } from '@/types'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases.js'

const productNames: ProductNames = {
  dotcom: 'GitHub.com',
}

enterpriseServerReleases.all.forEach((version) => {
  productNames[version] = `Enterprise Server ${version}`
})

export default productNames
