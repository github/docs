import { ReactNode } from 'react'
import cx from 'classnames'

import { Details, useDetails, Text, Dropdown, Box } from '@primer/react'
import { ChevronDownIcon } from '@primer/octicons-react'

export type PickerOptionsTypeT = {
  text: string
  item: ReactNode
  selected?: boolean
}

export type PickerPropsT = {
  variant?: 'inline'
  defaultText: string
  options: Array<PickerOptionsTypeT>
}

type PickerWrapperPropsT = {
  variant?: 'inline'
  children: ReactNode
}

function PickerSummaryWrapper({ variant, children }: PickerWrapperPropsT) {
  if (variant === 'inline') {
    return (
      <div className="d-flex flex-items-center flex-justify-between">
        {children}
        <ChevronDownIcon size={24} className="arrow ml-md-1" />
      </div>
    )
  }
  return (
    <>
      {children}
      <ChevronDownIcon size={16} className="arrow ml-md-1" />
    </>
  )
}

function PickerOptionsWrapper({ variant, children }: PickerWrapperPropsT) {
  if (variant === 'inline') {
    return (
      <Box py="2">
        <ul>{children}</ul>
      </Box>
    )
  }
  return (
    <Dropdown.Menu direction="sw" style={{ width: 'unset' }}>
      {children}
    </Dropdown.Menu>
  )
}

export function Picker({ variant, defaultText, options, ...restProps }: PickerPropsT) {
  const { getDetailsProps, setOpen } = useDetails({ closeOnOutsideClick: true })
  const selectedOption = options.find((option) => option.selected)

  return (
    <Details
      {...getDetailsProps()}
      className={cx(
        'position-relative details-reset',
        variant === 'inline' ? 'd-block' : 'd-inline-block'
      )}
      {...restProps}
    >
      <summary
        className="d-block btn btn-invisible color-fg-default"
        aria-haspopup="true"
        aria-label={selectedOption?.text || defaultText}
      >
        <PickerSummaryWrapper variant={variant}>
          <Text>{selectedOption?.text || defaultText}</Text>
        </PickerSummaryWrapper>
      </summary>
      <PickerOptionsWrapper variant={variant}>
        {options.map((option) => (
          <Dropdown.Item onClick={() => setOpen(false)} key={option.text}>
            {option.item}
          </Dropdown.Item>
        ))}
      </PickerOptionsWrapper>
    </Details>
  )
}
