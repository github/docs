import React, { useState } from 'react'
import { ActionList, ActionMenu, Box, Details, Text, useDetails } from '@primer/react'
import { ArrowRightIcon, ChevronDownIcon, InfoIcon, LinkExternalIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from 'components/Link'

export type PickerOptionsTypeT = {
  text: string
  href: string
  locale?: string
  external?: boolean
  arrow?: boolean
  info?: boolean
  selected?: boolean
  onselect?: Function | void
}

export type PickerPropsT = {
  variant?: 'inline'
  defaultText: string
  options: Array<PickerOptionsTypeT>
}

export function Picker({ variant, defaultText, options }: PickerPropsT) {
  const [open, setOpen] = useState(false)
  const { getDetailsProps } = useDetails({ closeOnOutsideClick: true })
  const selectedOption = options.find((opt) => opt.selected === true)

  function getFields() {
    return (
      <ActionList selectionVariant="single">
        {options.map((option) => (
          <ActionList.LinkItem
            as={Link}
            className={option.arrow || option.info ? 'f6' : ''}
            locale={option.locale}
            key={option.text}
            href={option.href}
            onClick={() => {
              if (option.onselect) option.onselect(option.locale)
              setOpen(!open)
            }}
          >
            {option.text}
            {option.external && <LinkExternalIcon size="small" className="ml-1" />}
            {option.info && <InfoIcon verticalAlign="middle" size={15} className="ml-1" />}
            {option.arrow && <ArrowRightIcon verticalAlign="middle" size={15} className="ml-1" />}
          </ActionList.LinkItem>
        ))}
      </ActionList>
    )
  }

  function getInlinePicker() {
    return (
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
          <ul>{getFields()}</ul>
        </Box>
      </Details>
    )
  }

  return (
    <React.Fragment>
      {variant === 'inline' ? (
        getInlinePicker()
      ) : (
        <ActionMenu open={open} onOpenChange={setOpen}>
          <ActionMenu.Button
            aria-label="Select field type"
            variant="invisible"
            sx={{ color: `var(--color-fg-default)` }}
          >
            {selectedOption?.text || defaultText}
          </ActionMenu.Button>
          <ActionMenu.Overlay width="auto" align="end">
            {getFields()}
          </ActionMenu.Overlay>
        </ActionMenu>
      )}
    </React.Fragment>
  )
}
