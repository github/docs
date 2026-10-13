import { useEffect } from 'react'

import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { MarkdownContent } from '@/frame/components/ui/MarkdownContent'
import { Lead } from '@/frame/components/ui/Lead'
import { PermissionsStatement } from '@/frame/components/ui/PermissionsStatement'
import { RestOperation } from './RestOperation'
import { useAutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import { Operation } from './types'
import { ClientSideRedirects } from '@/rest/components/ClientSideRedirects'
import { RestRedirect } from '@/rest/components/RestRedirect'

export type StructuredContentT = {
  restOperations: Operation[]
}

export const RestReferencePage = ({ restOperations }: StructuredContentT) => {
  const { title, intro, renderedPage, renderedPageHast, permissions, product } =
    useAutomatedPageContext()

  // Add tabindex=0 only when pre content overflows, because scrollable code needs keyboard access.
  useEffect(() => {
    const codeBlocks = document.querySelectorAll<HTMLPreElement>('pre')

    for (const codeBlock of codeBlocks) {
      if (
        codeBlock.scrollWidth > codeBlock.clientWidth ||
        codeBlock.scrollHeight > codeBlock.clientHeight
      ) {
        codeBlock.setAttribute('tabindex', '0')
      }
    }
  }, [])

  return (
    <DefaultLayout>
      <ClientSideRedirects />
      <RestRedirect />
      <div className="px-3 px-md-6 my-4 container-xl" data-search="article-body">
        <h1 id="title-h1" className="mb-3">
          {title}
        </h1>
        {intro && (
          <Lead data-testid="lead" data-search="lead">
            {intro}
          </Lead>
        )}

        <PermissionsStatement permissions={permissions} product={product} />

        {(renderedPage || renderedPageHast) && (
          <MarkdownContent className="pt-3 pb-4" hast={renderedPageHast ?? undefined}>
            {renderedPage}
          </MarkdownContent>
        )}
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
