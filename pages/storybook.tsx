import React from 'react'
import ReactDomServer from 'react-dom/server'
import { BumpLink, BumpLinkPropsT } from 'components/ui/BumpLink/BumpLink'
import { Callout, CalloutPropsT } from 'components/ui/Callout/Callout'
import {
  MarkdownContent,
  MarkdownContentPropsT,
} from 'components/ui/MarkdownContent/MarkdownContent'

const markdownExample = (
  <>
    <h1>Header Level 1: Steps example</h1>
    <ol>
      <li>Start with step 1</li>
      <li>Continue with step 2</li>
      <li>Finish with step 3</li>
    </ol>
    <h2>Header Level 2: Highlighted code example</h2>
    <pre>
      <code className="hljs language-yaml">
        <span className="hljs-attr">steps:</span>
        {'\n'}
        <span className="hljs-bullet">-</span> <span className="hljs-attr">uses:</span>{' '}
        <span className="hljs-string">actions/checkout@v2</span>
        {'\n'}
        <span className="hljs-bullet">-</span> <span className="hljs-attr">uses:</span>{' '}
        <span className="hljs-string">actions/setup-java@v2</span>
        {'\n  '}
        <span className="hljs-attr">with:</span>
        {'\n    '}
        <span className="hljs-attr">java-version:</span> <span className="hljs-string">'11'</span>
        {'\n    '}
        <span className="hljs-attr">distribution:</span>{' '}
        <span className="hljs-string">'adopt'</span>
      </code>
    </pre>
    <h3>Header Level 3: Table example</h3>
    <table>
      <thead>
        <tr>
          <th>Qualifier</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>sort:interactions</code> or <code>sort:interactions-desc</code>
          </td>
          <td>
            <a href="https://github.com/search?q=org%3Agithub+sort%3Ainteractions&amp;type=Issues">
              <strong>org:github sort:interactions</strong>
            </a>{' '}
            matches issues in repositories owned by GitHub, sorted by the highest combined number of
            reactions and comments.
          </td>
        </tr>
        <tr>
          <td>
            <code>sort:interactions-asc</code>
          </td>
          <td>
            <a href="https://github.com/search?utf8=%E2%9C%93&amp;q=org%3Agithub+sort%3Ainteractions-asc&amp;type=Issues">
              <strong>org:github sort:interactions-asc</strong>
            </a>{' '}
            matches issues in repositories owned by GitHub, sorted by the lowest combined number of
            reactions and comments.
          </td>
        </tr>
      </tbody>
    </table>
    <h4>Header Level 4: Procedural image example</h4>
    <img
      alt="Group assignment"
      className="procedural-image-wrapper"
      src="/assets/images/help/classroom/assignment-group-hero.png"
    />
  </>
)

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
  {
    name: 'MarkdownContent',
    component: MarkdownContent,
    variants: [{ children: markdownExample } as MarkdownContentPropsT],
  },
]

function displayProps(props: Object) {
  const xprops = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [
      key,
      key === 'children' ? ReactDomServer.renderToString(value) : value,
    ])
  )
  return JSON.stringify(xprops, null, 2)
}

export default function Storybook() {
  return (
    <div className="p-4 mx-auto" style={{ maxWidth: 1200 }}>
      <h1>GitHub Docs Storybook</h1>
      <p className="f2 color-text-secondary">
        This page lists React components unique to the GitHub docs.
      </p>
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
              <h2 className="position-sticky top-0 color-bg-primary border-bottom z-2">{name}</h2>
              {variants.map((props) => (
                <div className="my-4" key={JSON.stringify(props)}>
                  {/* @ts-ignore */}
                  {React.createElement(component, props)}
                  <pre
                    className="mt-2 p-2 color-bg-tertiary border rounded-2"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {displayProps(props)}
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
