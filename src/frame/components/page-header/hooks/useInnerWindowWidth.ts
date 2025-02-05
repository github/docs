import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

export function useInnerWindowWidth() {
  const hasWindow = typeof window !== 'undefined'

  function getWidth() {
    const width = hasWindow ? window.innerWidth : null
    return {
      width,
    }
  }

  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    if (hasWindow) {
      const handleResize = throttle(function () {
        setWidth(getWidth())
      }, 100)

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return width
}
