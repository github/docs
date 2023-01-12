import { useEffect } from 'react'
import cx from 'classnames'

import { DefaultLayout } from 'components/DefaultLayout'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { PermissionsStatement } from 'components/ui/PermissionsStatement'
import { RestOperation } from './RestOperation'
import { useAutomatedPageContext } from 'components/context/AutomatedPageContext'
import { Operation } from './types'
import { ClientSideHighlight } from 'components/ClientSideHighlight'
import { ClientSideRedirects } from 'components/ClientSideRedirects'
import { RestRedirect } from 'components/RestRedirect'

import styles from './RestOperation.module.scss'

export type StructuredContentT = {
  restOperations: Operation[]
}

export const RestReferencePage = ({ restOperations }: StructuredContentT) => {
  const { title, intro, renderedPage, permissions } = useAutomatedPageContext()

  // Scrollable code blocks in our REST API docs and elsewhere aren't accessible
  // via keyboard navigation without setting tabindex="0".  But we don't want to set
  // this attribute on every `<pre>` code block, only the ones where there are scroll
  // bars because the content isn't all visible.
  useEffect(() => {
    const codeBlocks = document.querySelectorAll<HTMLPreElement>('pre')

    codeBlocks.forEach((codeBlock) => {
      if (
        codeBlock.scrollWidth > codeBlock.clientWidth ||
        codeBlock.scrollHeight > codeBlock.clientHeight
      ) {
        codeBlock.setAttribute('tabindex', '0')
      }
    })
  }, [])

  return (
    <DefaultLayout>
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      <ClientSideRedirects />
      <ClientSideHighlight />
      <RestRedirect />
      <div
        className={cx(styles.restOperation, 'px-3 px-md-6 my-4 container-xl')}
        data-search="article-body"
      >
        <h1 className="mb-3">{title}</h1>
        {intro && (
          <Lead data-testid="lead" data-search="lead" className="markdown-body">
            {intro}
          </Lead>
        )}

        {permissions && <PermissionsStatement permissions={permissions} />}

        {renderedPage && <MarkdownContent className="pt-3 pb-4">{renderedPage}</MarkdownContent>}
        {restOperations.length > 0 && (
          <MarkdownContent className="pt-3 pb-4">
            {restOperations.map((operation) => (
              <RestOperation
                key={`${operation.title}-${operation.category}-${operation.subcategory}`}
                operation={operation}
              />
            ))}
          </MarkdownContent>
        )}
      </div>
    </DefaultLayout>
  )
}
