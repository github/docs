import { useState, useEffect } from 'react'
import cx from 'classnames'
import { ChevronUpIcon } from '@primer/octicons-react'
import { useTranslation } from './hooks/useTranslation'

export const ScrollButton = () => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation('scroll_button')

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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={cx(
        'position-fixed bottom-3 right-3 transition-200',
        show ? 'opacity-100' : 'opacity-0'
      )}
    >
      <button
        onClick={onClick}
        className={cx(
          'tooltipped tooltipped-n tooltipped-no-delay color-bg-info-inverse color-text-inverse circle border-0'
        )}
        style={{ width: 40, height: 40 }}
        aria-label={t('scroll_to_top')}
      >
        <ChevronUpIcon />
      </button>
    </div>
  )
}
