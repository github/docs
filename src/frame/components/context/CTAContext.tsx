// Context to keep track of a call to action (e.g. popover introducing a new feature)
// The state of the CTA will be stored in local storage, so it will persist across page reloads
// If `dismiss` is called, the CTA will not be shown again
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from 'react'

type CTAPopoverState = {
  isOpen: boolean
  initializeCTA: () => void // Call to "open" the CTA if it's not already been dismissed by the user
  dismiss: () => void // Call to "close" the CTA and store the dismissal in local storage
}

type StoredValue = { dismissed: true }

const CTAPopoverContext = createContext<CTAPopoverState | undefined>(undefined)

const STORAGE_KEY = 'ctaPopoverDismissed'

const isDismissed = (): boolean => {
  if (typeof window === 'undefined') return false // SSR guard
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as StoredValue
    return parsed?.dismissed
  } catch {
    return false // corruption / quota / disabled storage
  }
}

export function CTAPopoverProvider({ children }: PropsWithChildren) {
  // We start closed because we might only want to "turn on" the CTA if an experiment is active
  const [isOpen, setIsOpen] = useState(false)

  const persistDismissal = useCallback(() => {
    setIsOpen(false)
    try {
      const obj: StoredValue = { dismissed: true }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
    } catch {
      /* ignore */
    }
  }, [])

  const dismiss = useCallback(() => persistDismissal(), [persistDismissal])
  const initializeCTA = useCallback(() => {
    const dismissed = isDismissed()
    if (dismissed) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [isDismissed])

  // Wrap in a useEffect to avoid a hydration mismatch (SSR guard)
  useEffect(() => {
    const stored = isDismissed()
    setIsOpen(!stored)
  }, [])

  return (
    <CTAPopoverContext.Provider value={{ isOpen, initializeCTA, dismiss }}>
      {children}
    </CTAPopoverContext.Provider>
  )
}

export const useCTAPopoverContext = () => {
  const ctx = useContext(CTAPopoverContext)
  if (!ctx) throw new Error('useCTAPopoverContext must be used inside <CTAPopoverProvider>')
  return ctx
}
