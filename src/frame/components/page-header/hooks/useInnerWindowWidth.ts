import { useState, useEffect } from 'react'

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
      const handleResize = function () {
        setWidth(getWidth())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return width
}
