import { ReactNode, useState } from 'react'
import { ActionMenu } from '@primer/react'

import { AnchorAlignment } from '@primer/behaviors'

import { Fields } from './Fields'

interface Props {
  items: PickerItem[]
  onSelect?: (item: PickerItem) => void
  buttonBorder?: boolean
  pickerLabel?: string
  dataTestId: string
  defaultText: string
  ariaLabel: string
  alignment: AnchorAlignment
  descriptionFontSize?: number
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
  ariaLabel,
  pickerLabel,
  buttonBorder,
  dataTestId,
  defaultText,
  onSelect,
  alignment,
  descriptionFontSize,
  renderItem,
}: Props) => {
  const [open, setOpen] = useState(false)
  const selectedOption = items.find((item) => item.selected === true)
  return (
    <ActionMenu open={open} onOpenChange={setOpen}>
      <ActionMenu.Button
        aria-label={ariaLabel}
        variant={buttonBorder ? 'default' : 'invisible'}
        className="color-fg-default width-full p-1 pl-2 pr-2"
        sx={{
          height: 'auto',
          textAlign: 'left',
          'span:first-child': { display: 'inline' },
        }}
      >
        {pickerLabel && <span style={{ whiteSpace: 'pre-wrap' }}>{`${pickerLabel}`}</span>}
        <span
          className={`f${descriptionFontSize} color-fg-muted text-normal`}
          data-testid={dataTestId}
        >
          {selectedOption?.text || defaultText}
        </span>
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
