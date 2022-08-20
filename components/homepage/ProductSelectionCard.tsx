import { ProductT, ProductGroupT, useMainContext } from 'components/context/MainContext'

import React from 'react'
import { useRouter } from 'next/router'
import { useVersion } from 'components/hooks/useVersion'
import { Link } from 'components/Link'
import * as Octicons from '@primer/octicons-react'

type ProductSelectionCardProps = {
  name: string
  group: ProductGroupT
}

export const ProductSelectionCard = ({ name, group }: ProductSelectionCardProps) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { isFPT } = useMainContext()

  function href(product: ProductT) {
    return `${!product.external ? `/${router.locale}` : ''}${
      product.versions?.includes(currentVersion) && !isFPT
        ? `/${currentVersion}/${product.id}`
        : product.href
    }`
  }

  const groupIcon = {
    height: '22px',
  }

  function showProduct(product: ProductT) {
    return isFPT || product.versions?.includes(currentVersion) || product.external
  }

  function icon(group: ProductGroupT) {
    if (group.icon) {
      return (
        <div className="pr-3">
          <img src={group.icon} alt={group.name} style={groupIcon}></img>
        </div>
      )
    } else if (group.octicon) {
      const octicon: React.FunctionComponent = (
        Octicons as { [name: string]: React.FunctionComponent }
      )[group.octicon] as React.FunctionComponent

      return (
        <div className="mr-2">
          {React.createElement(octicon, groupIcon as React.Attributes, null)}
        </div>
      )
    }
  }

  return (
    <div className="d-flex flex-column col-12 col-sm-6 col-lg-4 pb-4">
      <div className="flex-auto ws-normal">
        <div className="d-flex flex-items-center">
          {icon(group)}

          <div>
            <h2 className="h3">{name}</h2>
          </div>
        </div>

        <div className="pt-2 mb-4 text-normal">
          <ul className="list-style-none">
            {group.children.map((product) => {
              if (!showProduct(product)) {
                return null
              }

              return (
                <li key={product.name} className="pt-2">
                  <Link href={href(product)} target={product.external ? '_blank' : undefined}>
                    {product.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
