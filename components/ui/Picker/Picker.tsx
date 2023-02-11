import React, { ReactNode, useState } from 'react'
import { ActionMenu, IconButton } from '@primer/react'
import { Icon } from '@primer/octicons-react'

import { AnchorAlignment } from '@primer/behaviors'

import { Fields } from './Fields'

interface Props {
  items: PickerItem[]
  iconButton?: Icon
  onSelect?: (item: PickerItem) => void
  buttonBorder?: boolean
  pickerLabel?: string
  dataTestId: string
  defaultText: string
  ariaLabel: string
  alignment: AnchorAlignment
  renderItem?: (item: PickerItem) => ReactNode | string
}

export interface PickerItem {
  href: string
  text: string
  selected: boolean
  extra?: {
    [key: string]: any
  }
  divider?: boolean
}

export const Picker = ({
  items,
  iconButton,
  ariaLabel,
  pickerLabel,
  dataTestId,
  defaultText,
  onSelect,
  buttonBorder,
  alignment,
  renderItem,
}: Props) => {
  const [open, setOpen] = useState(false)
  const selectedOption = items.find((item) => item.selected === true)
  return (
    <ActionMenu open={open} onOpenChange={setOpen}>
      {iconButton ? (
        <ActionMenu.Anchor>
          <IconButton icon={iconButton} aria-label={ariaLabel} />
        </ActionMenu.Anchor>
      ) : (
        <ActionMenu.Button
          aria-label={ariaLabel}
          variant={buttonBorder ? 'default' : 'invisible'}
          sx={{
            color: `var(--color-fg-default)`,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {pickerLabel && <span className="color-fg-muted text-normal">{`${pickerLabel}: `}</span>}
          <span data-testid={dataTestId}>{selectedOption?.text || defaultText}</span>
        </ActionMenu.Button>
      )}
      <ActionMenu.Overlay width="auto" align={alignment}>
        <Fields
          open={open}
          setOpen={setOpen}
          items={items}
          onSelect={onSelect}
          renderItem={renderItem}
        />
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}
