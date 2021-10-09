import { useState, useEffect, MutableRefObject, RefObject } from 'react'

export function useOnScreen<T extends Element>(
  ref: MutableRefObject<T | undefined> | RefObject<T>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    let isMounted = true
    const observer = new IntersectionObserver(([entry]) => {
      isMounted && setIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      isMounted = false
      ref.current && observer.unobserve(ref.current)
    }
  }, [Object.values(options || {}).join(',')])
  return isIntersecting
}
