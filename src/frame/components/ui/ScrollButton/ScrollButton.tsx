import { useState, useEffect, useLayoutEffect } from 'react'
import cx from 'classnames'
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
    // We cannot determine document.documentElement.scrollTop height because we set the height: 100vh and set overflow to auto to keep the header sticky
    // That means window.scrollTop height is always 0
    // Using IntersectionObserver we can determine if the h1 header is in view or not. If not, we show the scroll to top button, if so, we hide it
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
    observer.observe(document.getElementsByTagName('h1')[0])
    return () => {
      observer.disconnect()
    }
  }, [])

  // If the window isn't tall enough, the scroll button will hide some of the content
  // A11y issue 8822
  useLayoutEffect(() => {
    function updateDocumentSize() {
      setIsTallEnough(document.documentElement.clientHeight > 400)
    }
    updateDocumentSize()
    window.addEventListener('resize', updateDocumentSize)
    return () => window.removeEventListener('resize', updateDocumentSize)
  }, [])

  const onClick = () => {
    document?.getElementById('github-logo')?.focus()
    document?.getElementById('main-content')?.scrollIntoView()
  }

  return (
    <div
      role="tooltip"
      className={cx(className, transition200, show && isTallEnough ? opacity100 : opacity0)}
    >
      <button
        onClick={onClick}
        className={cx(
          'ghd-scroll-to-top', // for data tracking, see events.ts
          'tooltipped tooltipped-n tooltipped-no-delay btn circle border-1',
          'd-flex flex-items-center flex-justify-center',
          customFocus,
        )}
        style={{ width: 40, height: 40 }}
        aria-label={ariaLabel}
      >
        <ChevronUpIcon />
      </button>
    </div>
  )
}
