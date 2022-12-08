import { ReactNode } from 'react'
import { ActionList } from '@primer/react'

import { PickerItem } from './Picker'
import { Link } from 'components/Link'

export const Fields = (fieldProps: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: PickerItem[]
  onSelect?: (item: PickerItem) => void
  renderItem?: (item: PickerItem) => ReactNode | string
}) => {
  const { open, setOpen, items, onSelect, renderItem } = fieldProps

  return (
    <ActionList selectionVariant="single">
      {items.map((item) => (
        <ActionList.LinkItem
          as={Link}
          key={item.text}
          href={item.href}
          onClick={() => {
            if (onSelect) onSelect(item)
            setOpen(!open)
          }}
        >
          {renderItem ? renderItem(item) : item.text}
        </ActionList.LinkItem>
      ))}
    </ActionList>
  )
}
