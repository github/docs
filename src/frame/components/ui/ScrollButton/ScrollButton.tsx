import { useState, useEffect } from 'react'
import cx from 'clsx'
import { ChevronUpIcon } from '@primer/octicons-react'

import styles from './ScrollButton.module.scss'

const { transition200, opacity0, opacity100, customFocus } = styles

export type ScrollButtonPropsT = {
  className?: string
  ariaLabel?: string
}

export const ScrollButton = ({ className, ariaLabel }: ScrollButtonPropsT) => {
  const [show, setShow] = useState(false)
  const [isTallEnough, setIsTallEnough] = useState(false)

  useEffect(() => {
    // The h1 boundary keeps the button hidden until readers leave the article title.
    const h1Element = document.getElementsByTagName('h1')[0]
    if (!h1Element) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error('No h1 element found in the document.')
      }
      return
    }

    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === false) {
          setShow(true)
        } else {
          setShow(false)
        }
      },
      { threshold: [0] },
    )
    observer.observe(h1Element)
    return () => {
      observer.disconnect()
    }
  }, [])

  // Short windows hide the button so it does not cover article content.
  useEffect(() => {
    function updateDocumentSize() {
      setIsTallEnough(document.documentElement.clientHeight > 400)
    }
    updateDocumentSize()
    window.addEventListener('resize', updateDocumentSize)
    return () => window.removeEventListener('resize', updateDocumentSize)
  }, [])

  const isVisible = show && isTallEnough

  const onClick = () => {
    document?.getElementById('github-logo')?.focus()
    document?.getElementById('main-content')?.scrollIntoView()
  }

  return (
    <div
      role="tooltip"
      className={cx(
        className,
        transition200,
        isVisible ? opacity100 : opacity0,
        styles.scrollWrapper,
      )}
      aria-hidden={!show}
    >
      <button
        onClick={onClick}
        tabIndex={show ? 0 : -1}
        className={cx(
          'ghd-scroll-to-top', // events.ts tracks this class.
          'tooltipped tooltipped-n tooltipped-no-delay btn circle border-1',
          'd-flex flex-items-center flex-justify-center',
          customFocus,
          styles.scrollButton,
        )}
        aria-label={ariaLabel}
      >
        <ChevronUpIcon />
      </button>
    </div>
  )
}
