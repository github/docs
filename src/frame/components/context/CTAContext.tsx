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
  dismiss: () => void // Call to "close" the CTA and store the dismissal in local storage. Will be shown again after 24 hours for a max of 3 times
  permanentDismiss: () => void // Call to permanently dismiss the CTA and store the dismissal in local storage
}

type StoredValue = {
  dismissedCount: number
  lastDismissedAt: number | null
  permanentlyDismissed: boolean
}

const CTAPopoverContext = createContext<CTAPopoverState | undefined>(undefined)

const STORAGE_KEY = 'ctaPopoverState'
const MAX_DISMISSES = 3
const HIDE_CTA_FOR_MS = 24 * 60 * 60 * 1000 // Every 24 hours we show the CTA again, unless permanently dismissed

const shouldHide = (): boolean => {
  if (typeof window === 'undefined') return false // SSR guard
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as StoredValue
    if (parsed.permanentlyDismissed) return true
    if (parsed.dismissedCount >= MAX_DISMISSES) return true
    if (parsed.lastDismissedAt && Date.now() - parsed.lastDismissedAt < HIDE_CTA_FOR_MS) return true
    return false
  } catch {
    return false // corruption / quota / disabled storage
  }
}

const readStored = (): StoredValue => {
  const emptyValue = { dismissedCount: 0, lastDismissedAt: null, permanentlyDismissed: false }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return emptyValue
    }
    return JSON.parse(raw) as StoredValue
  } catch {
    return emptyValue // corruption / quota / disabled storage
  }
}

const writeStored = (v: StoredValue) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v))
  } catch {
    /* ignore */
  }
}

export function CTAPopoverProvider({ children }: PropsWithChildren) {
  // We start closed because we might only want to "turn on" the CTA if an experiment is active
  const [isOpen, setIsOpen] = useState(false)

  const dismiss = useCallback(() => {
    const stored = readStored()
    writeStored({
      ...stored,
      dismissedCount: stored.dismissedCount + 1,
      lastDismissedAt: Date.now(),
    })
    setIsOpen(false)
  }, [])

  const permanentDismiss = useCallback(() => {
    const stored = readStored()
    writeStored({ ...stored, permanentlyDismissed: true })
    setIsOpen(false)
  }, [])

  const initializeCTA = useCallback(() => {
    setIsOpen(!shouldHide())
  }, [])

  // Wrap in a useEffect to avoid a hydration mismatch (SSR guard)
  useEffect(() => {
    setIsOpen(!shouldHide())
  }, [])

  return (
    <CTAPopoverContext.Provider value={{ isOpen, initializeCTA, dismiss, permanentDismiss }}>
      {children}
    </CTAPopoverContext.Provider>
  )
}

export const useCTAPopoverContext = () => {
  const ctx = useContext(CTAPopoverContext)
  if (!ctx) throw new Error('useCTAPopoverContext must be used inside <CTAPopoverProvider>')
  return ctx
}
