import { useState, useEffect, MutableRefObject, RefObject } from 'react'

export function useOnScreen<T extends Element>(
  ref: MutableRefObject<T | undefined> | RefObject<T>,
  rootMargin: string = '0px'
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      ref.current && observer.unobserve(ref.current)
    }
  }, [])
  return isIntersecting
}
