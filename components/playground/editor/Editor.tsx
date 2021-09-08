import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { usePlaygroundContext } from 'components/context/PlaygroundContext'
import { LoadingIndicator } from './LoadingIndicator'
import { ActionBar } from './ActionBar'

import { CodeBlockRef, PlaygroundArticleT } from '../types'
import { useTheme } from '@primer/components'

const getNormalizedHighlight = (
  highlight: Exclude<CodeBlockRef['highlight'], undefined>
): Array<[number, number]> => {
  if (typeof highlight === 'number') {
    return [[highlight, highlight]]
  } else if (typeof highlight[0] === 'number') {
    return [highlight as [number, number]]
  } else {
    return highlight as Array<[number, number]>
  }
}
interface Props {
  article: PlaygroundArticleT
}

export const Editor: React.FC<Props> = ({ article }) => {
  const theme = useTheme()

  const [isEditorReady, setIsEditorReady] = useState(false)
  const [selectedFileIndex, setSelectedFileIndex] = useState(0)

  const { activeSectionIndex } = usePlaygroundContext()
  const normalizedHighlight = getNormalizedHighlight(
    article.contentBlocks[activeSectionIndex]?.codeBlock.highlight || []
  )

  useEffect(() => {
    // Some buffer to load the theme, otherwise it flashes the light theme momentarily
    const timeout = setTimeout(() => {
      setIsEditorReady(true)
    }, 250)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (selectedFileIndex !== 0) {
      setSelectedFileIndex(0)
    }
  }, [activeSectionIndex])

  // find the set of files we want displayed in the editor
  const codeBlockId = article.contentBlocks[activeSectionIndex].codeBlock.id

  let editorFiles = article.codeBlocks[codeBlockId]
  if (!Array.isArray(editorFiles)) {
    editorFiles = [editorFiles]
  }
  let activeFile = editorFiles[selectedFileIndex]
  if (!activeFile) {
    activeFile = editorFiles[0]
  }

  return (
    <div className="mx-auto">
      <div className="text-mono">
        <ActionBar code={activeFile.code} />

        <div className="d-flex flex-items-center px-3 border-left border-right">
          {editorFiles.map((file, i) => {
            return (
              <button
                className={cx('btn-link Link--secondary no-underline mr-2 f6 py-2 px-3', {
                  'color-bg-tertiary': i === selectedFileIndex,
                })}
                onClick={() => setSelectedFileIndex(i)}
              >
                {file.fileName}
              </button>
            )
          })}
        </div>

        <div className="border">
          {isEditorReady ? (
            <SyntaxHighlighter
              style={theme.colorMode === 'night' ? vscDarkPlus : vs}
              language={activeFile.language}
              PreTag="div"
              customStyle={{ margin: '0', padding: '1rem 0', border: 0 }}
              showLineNumbers={true}
              wrapLines={true}
              lineProps={(lineNumber) => {
                let className = ''
                for (const highlight of normalizedHighlight) {
                  if (lineNumber >= highlight[0] && lineNumber <= highlight[1]) {
                    className = 'color-bg-info'
                  }
                }
                return { style: { display: 'block' }, class: className }
              }}
              lineNumberStyle={{ minWidth: '3.25em' }}
            >
              {activeFile.code}
            </SyntaxHighlighter>
          ) : (
            <LoadingIndicator />
          )}
        </div>
      </div>
    </div>
  )
}
