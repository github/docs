import React, { ReactNode, useState } from 'react'
import cx from 'classnames'
import { ActionMenu, Box, Details, Text, useDetails } from '@primer/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import { AnchorAlignment } from '@primer/behaviors'

import { Fields } from './Fields'

interface Props {
  variant: 'inline' | 'header'
  items: PickerItem[]
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
}

export const Picker = ({
  variant,
  items,
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
  const { getDetailsProps } = useDetails({ closeOnOutsideClick: true })
  const selectedOption = items.find((item) => item.selected === true)

  return variant === 'inline' ? (
    <Details {...getDetailsProps()} className={cx('position-relative details-reset', 'd-block')}>
      <summary
        className="d-block btn btn-invisible color-fg-default"
        aria-haspopup="true"
        aria-label={selectedOption?.text || defaultText}
      >
        <div className="d-flex flex-items-center flex-justify-between">
          <Text>{selectedOption?.text || defaultText}</Text>
          <ChevronDownIcon size={24} className="arrow ml-md-1" />
        </div>
      </summary>
      <Box>
        <Fields
          open={open}
          setOpen={setOpen}
          items={items}
          onSelect={onSelect}
          renderItem={renderItem}
        />
      </Box>
    </Details>
  ) : (
    <ActionMenu open={open} onOpenChange={setOpen}>
      <ActionMenu.Button
        aria-label={ariaLabel}
        variant={buttonBorder ? 'default' : 'invisible'}
        sx={{ color: `var(--color-fg-default)`, width: '100%' }}
      >
        {pickerLabel && <span style={{ fontWeight: 'normal' }}>{`${pickerLabel}: `}</span>}
        <span data-testid={dataTestId}>{selectedOption?.text || defaultText}</span>
      </ActionMenu.Button>
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
