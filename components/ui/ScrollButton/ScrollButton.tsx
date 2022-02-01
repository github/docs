import { useState, useEffect } from 'react'
import cx from 'classnames'
import { ChevronUpIcon } from '@primer/octicons-react'

export type ScrollButtonPropsT = {
  className?: string
  ariaLabel?: string
}

export const ScrollButton = ({ className, ariaLabel }: ScrollButtonPropsT) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // show scroll button only when view is scrolled down
    const onScroll = function () {
      const y = document.documentElement.scrollTop // get the height from page top
      if (y < 100) {
        setShow(false)
      } else if (y >= 100) {
        setShow(true)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onClick = () => {
    window.scrollTo(0, 0)
    const topOfPage = document.getElementById('github-logo')
    if (topOfPage) topOfPage.focus()
  }

  return (
    <div
      role="tooltip"
      className={cx(className, 'transition-200', show ? 'opacity-100' : 'opacity-0')}
    >
      <button
        onClick={onClick}
        className={cx(
          'tooltipped tooltipped-n tooltipped-no-delay color-bg-accent-emphasis color-fg-on-emphasis circle border-0'
        )}
        style={{ width: 40, height: 40 }}
        aria-label={ariaLabel}
      >
        <ChevronUpIcon />
      </button>
    </div>
  )
}
