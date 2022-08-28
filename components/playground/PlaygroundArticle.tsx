import React from 'react'
import cx from 'classnames'
import { CheckIcon, SearchIcon } from '@primer/octicons-react'

import { PlaygroundContentBlock } from './PlaygroundContentBlock'

import { ArticleMarkdown } from 'components/playground/ArticleMarkdown'
import { getAnchorLink } from 'components/lib/getAnchorLink'
import { usePlaygroundContext } from 'components/context/PlaygroundContext'

export const PlaygroundArticle = () => {
  const { article } = usePlaygroundContext()

  if (!article) {
    return null
  }

  return (
    <div>
      {/* article header */}
      <div className="border-bottom py-5">
        <h1>{article.title}</h1>
        <h2 className="h3 my-3 text-normal text-gray border-bottom-0">
          <ArticleMarkdown className="markdown-body">{article.intro}</ArticleMarkdown>
        </h2>

        {article.prerequisites && (
          <div className="mt-4 d-flex">
            <div className="pr-3 mt-1">
              <Circle className="color-bg-info-inverse">
                <CheckIcon className="color-text-white" size={15} />
              </Circle>
            </div>

            <div className="">
              <h3>Prerequisites</h3>
              <ArticleMarkdown className="markdown-body playground">
                {article.prerequisites}
              </ArticleMarkdown>
            </div>
          </div>
        )}

        {/* toc */}
        <div className="mt-4 d-flex">
          <div className="pr-3 mt-1">
            <Circle className="color-bg-info-inverse">
              <SearchIcon className="color-text-white" size={15} />
            </Circle>
          </div>

          <div>
            <h3>In this Article</h3>
            <ul className="list-style-none ml-3 mt-2">
              {article.contentBlocks.map((block) => {
                if (!block.title || block.type === 'sub-section-2') {
                  return null
                }
                const anchor = getAnchorLink(block.title)

                if (block.type === 'sub-section') {
                  return (
                    <li key={anchor} className="pointer ml-4 my-1">
                      <a href={`#${anchor}`}>{block.title}</a>
                    </li>
                  )
                }

                return (
                  <li key={anchor} className="pointer text-bold text-blue my-2">
                    <a href={`#${anchor}`}>{block.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* body */}
      {article.contentBlocks.map((block, index) => (
        <PlaygroundContentBlock
          key={`section-${index}`}
          contentBlock={block}
          sectionIndex={index}
        />
      ))}

      {/* spacer for end of article */}
      <div style={{ minHeight: '75vh' }} />
    </div>
  )
}

const Circle = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cx('circle d-flex flex-justify-center flex-items-center', className)}
      style={{ width: 24, height: 24 }}
    >
      {children}
    </div>
  )
}
