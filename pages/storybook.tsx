import React from 'react'
import { BumpLink, BumpLinkPropsT } from 'components/ui/BumpLink/BumpLink'
import { Callout, CalloutPropsT } from 'components/ui/Callout/Callout'

const stories = [
  {
    name: 'BumpLink',
    component: BumpLink,
    variants: [
      { title: 'Think basic', href: 'http://example.com' } as BumpLinkPropsT,
      {
        title: 'Think different',
        href: 'http://example.com',
        children: 'This is child text',
      } as BumpLinkPropsT,
      {
        as: 'div',
        title: 'Think as div',
        href: 'http://example.com',
        className: 'color-bg-warning',
      } as BumpLinkPropsT,
    ],
  },
  {
    name: 'Callout', // {component.name} gets optimized away
    component: Callout,
    variants: [
      { variant: 'success', children: 'Yay you did it!', className: '' } as CalloutPropsT,
      { variant: 'info', children: 'Captain I have information.', className: '' } as CalloutPropsT,
      { variant: 'warning', children: 'Warning... warning...', className: '' } as CalloutPropsT,
      { variant: 'success', children: 'I am a little font', className: 'f6' } as CalloutPropsT,
    ],
  },
]

export default function Storybook() {
  return (
    <div className="p-4 mx-auto" style={{ maxWidth: 1200 }}>
      <h1>GitHub Docs Storybook</h1>
      <p className="f3">This page lists React components unique to the GitHub docs.</p>
      <div className="my-4 d-lg-flex flex-items-start">
        <nav className="menu col-12 col-lg-3 mr-4 color-bg-secondary position-lg-sticky top-0">
          {stories.map(({ name }) => (
            <a className="menu-item" href={`#${name}`}>
              {name}
            </a>
          ))}
        </nav>
        <div className="col-12 col-lg-9">
          {stories.map(({ name, component, variants }) => (
            <div id={name} key={name} className="mb-4">
              <h2 className="position-sticky top-0 color-bg-primary border-bottom">{name}</h2>
              {variants.map((props) => (
                <div className="my-4" key={JSON.stringify(props)}>
                  {/* @ts-ignore */}
                  {React.createElement(component, props)}
                  <pre className="mt-2 p-2 color-bg-tertiary border rounded-2">
                    {JSON.stringify(props, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
