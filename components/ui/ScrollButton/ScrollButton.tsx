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
    // We cannot determine document.documentElement.scrollTop height because we set the height: 100vh and set overflow to auto to keep the header sticky
    // That means window.scrollTop height is always 0
    // Using IntersectionObserver we can detemine if the h1 header is in view or not. If not, we show the scroll to top button, if so, we hide it
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

  const onClick = () => {
    document?.getElementById('github-logo')?.focus()
    document?.getElementById('main-content')?.scrollIntoView()
  }

  return (
    <div
      role="tooltip"
      className={cx(className, 'transition-200', show ? 'opacity-100' : 'opacity-0')}
    >
      <button
        onClick={onClick}
        className={cx(
          'tooltipped tooltipped-n tooltipped-no-delay color-bg-accent-emphasis color-fg-on-emphasis circle border-0',
          'd-flex flex-items-center flex-justify-center',
        )}
        style={{ width: 40, height: 40 }}
        aria-label={ariaLabel}
      >
        <ChevronUpIcon />
      </button>
    </div>
  )
}
