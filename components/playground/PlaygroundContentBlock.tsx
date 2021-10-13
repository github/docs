import React, { useEffect, useRef } from 'react'
import cx from 'classnames'

import { usePlaygroundContext } from 'components/context/PlaygroundContext'
import { useOnScreen } from 'components/hooks/useOnScreen'
import { getAnchorLink } from 'components/lib/getAnchorLink'
import { ContentBlock } from './types'
import { ArticleMarkdown } from 'components/playground/ArticleMarkdown'

interface Props {
  contentBlock: ContentBlock
  sectionIndex: number
}

export const PlaygroundContentBlock = ({ sectionIndex, contentBlock }: Props) => {
  const { activeSectionIndex, setActiveSectionIndex, scrollToSection, setScrollToSection } =
    usePlaygroundContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(containerRef, {
    threshold: 0,
    rootMargin: '-25% 0px -75% 0px',
  })

  useEffect(() => {
    if (isOnScreen) {
      setActiveSectionIndex(sectionIndex)
    }
  }, [isOnScreen])

  useEffect(() => {
    if (scrollToSection === sectionIndex) {
      containerRef.current?.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      })
      setScrollToSection()
    }
  }, [scrollToSection])

  const isActive = sectionIndex === activeSectionIndex
  const anchorLink = getAnchorLink(contentBlock.title || '')
  const showDivider = !isActive && activeSectionIndex - 1 !== sectionIndex
  return (
    <div
      className={cx(
        'root p-4',
        isActive ? 'color-bg-canvas color-shadow-medium rounded-2 color-border-info' : '',
        showDivider && 'border-bottom'
      )}
      style={{
        minHeight: contentBlock.title ? '25.1vh' : 'unset',
        border: '1px solid transparent',
      }}
      ref={containerRef}
      id={anchorLink}
    >
      {contentBlock.title && (
        <h3
          className={cx(
            'anchor mb-4',
            contentBlock.type === 'default' && 'h3',
            contentBlock.type === 'sub-section' && 'h4'
          )}
        >
          <a className="d-flex color-text-primary" href={`#${anchorLink}`}>
            {contentBlock.title}
          </a>
        </h3>
      )}
      <ArticleMarkdown className="markdown-body playground">{contentBlock.content}</ArticleMarkdown>
    </div>
  )
}
