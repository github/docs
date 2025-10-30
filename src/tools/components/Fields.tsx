import { ActionList } from '@primer/react'
import React, { ReactNode } from 'react'
import cx from 'classnames'

import { PickerItem } from './Picker'

import styles from './Fields.module.scss'

export const Fields = (fieldProps: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: PickerItem[]
  onSelect?: (item: PickerItem) => void
  renderItem?: (item: PickerItem) => ReactNode | string
}) => {
  const { open, setOpen, items, onSelect, renderItem } = fieldProps

  return (
    <ActionList selectionVariant="single" role="menu">
      {items.map((item, i) =>
        item.divider ? (
          <ActionList.Divider key={`divider${i}`} />
        ) : (
          <ActionList.LinkItem
            as="a"
            key={item.text}
            href={item.href}
            active={item.selected === true}
            onSelect={() => {
              if (onSelect) onSelect(item)
              setOpen(!open)
            }}
            // These extra links in the pickers are not a part of the selection variant
            // in that they are generally external links, so we want to remove the selection
            // variant span box in front of it. To date there isn't a possibility to have
            // an ActionMenu in Primer that allow non-selection variant items with selection
            // variant items
            className={cx(
              (item.extra?.arrow || item.extra?.info) && styles.extrasDisplay,
              styles.linkItem,
            )}
            role={item.extra?.arrow || item.extra?.info ? 'menuitem' : 'menuitemradio'}
          >
            {renderItem ? renderItem(item) : item.text}
          </ActionList.LinkItem>
        ),
      )}
    </ActionList>
  )
}
