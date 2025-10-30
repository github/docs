import type { ProductGroupT } from '@/landings/components/ProductSelections'

import React from 'react'
import { Link } from '@/frame/components/Link'
import {
  LinkExternalIcon,
  RocketIcon,
  CommentDiscussionIcon,
  CopilotIcon,
  GearIcon,
  ShieldLockIcon,
  DeviceMobileIcon,
  ProjectIcon,
  OrganizationIcon,
  CodeSquareIcon,
  GlobeIcon,
  PencilIcon,
} from '@primer/octicons-react'

type ProductSelectionCardProps = {
  group: ProductGroupT
}
const octiconMap: { [name: string]: React.FunctionComponent } = {
  LinkExternalIcon,
  RocketIcon,
  CommentDiscussionIcon,
  CopilotIcon,
  GearIcon,
  ShieldLockIcon,
  DeviceMobileIcon,
  ProjectIcon,
  OrganizationIcon,
  CodeSquareIcon,
  GlobeIcon,
  PencilIcon,
}

export const ProductSelectionCard = ({ group }: ProductSelectionCardProps) => {
  // Don't display the group if it has no children due to versioning
  if (!group.children || group.children.length === 0) {
    return null
  }

  const groupIcon = {
    height: '22px',
  }

  function icon(group: ProductGroupT) {
    if (group.icon) {
      return (
        <div className="pr-3">
          <img src={group.icon} alt={group.name} style={groupIcon}></img>
        </div>
      )
    } else if (group.octicon) {
      const octicon: React.FunctionComponent = octiconMap[group.octicon]

      if (!octicon) {
        throw new Error(`Octicon ${group.octicon} not found`)
      }

      return (
        <div className="mr-2">
          {React.createElement(octicon, groupIcon as React.Attributes, null)}
        </div>
      )
    }
  }

  return (
    <div className="d-flex flex-column col-12 col-sm-6 col-lg-4 col-xl-3 pb-4">
      <div className="flex-auto ws-normal">
        <div className="d-flex flex-items-center">
          {icon(group)}

          <div>
            <h2 className="h3">{group.name}</h2>
          </div>
        </div>

        <div className="pt-2 mb-4 text-normal">
          <ul className="list-style-none">
            {group.children.map((product) => {
              return (
                <li key={product.name} className="pt-2">
                  <Link href={product.href} target={product.external ? '_blank' : undefined}>
                    {product.name}
                    {product.external && (
                      <span className="ml-1">
                        <LinkExternalIcon aria-label="(external site)" size="small" />
                      </span>
                    )}
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
