import { useState, useEffect } from 'react'

// returns scroll position
export function useWindowScroll(): number {
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== 'undefined' ? window.scrollY : 0
  )

  useEffect(() => {
    const setScollPositionCallback = () => setScrollPosition(window.scrollY)

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', setScollPositionCallback)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', setScollPositionCallback)
      }
    }
  }, [])

  return scrollPosition
}
