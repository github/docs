import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// @ts-ignore
import { Callout } from '../ui/Callout.tsx'

export default {
  title: 'UI/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>

const Template: ComponentStory<typeof Callout> = (args) => <Callout {...args} />

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  children: <p>Hello!</p>,
}

export const Info = Template.bind({})
Info.args = {
  variant: 'info',
  children: <p>Hello!</p>,
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning',
  children: <p>Hello!</p>,
}
