import React from 'react'
import { useTheme } from '@primer/components'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'

type Props = {
  className?: string
  children: string
}
export const ArticleMarkdown = ({ className, children }: Props) => {
  const theme = useTheme()

  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[gfm as any]}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              style={theme.colorScheme === 'dark' ? vscDarkPlus : vs}
              language={match[1]}
              PreTag="div"
              children={String(children).replace(/\n$/, '')}
              {...(props as any)}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
