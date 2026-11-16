import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}
const getClientSnapshot = () => false
const getServerSnapshot = () => true

// True on the server and while React hydrates server HTML, false for client renders after
// that. Hydrated components flip to false together in one re-render right after hydration
// commits, so components mounted by client-side navigation start at false.
export function useIsHydrating(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
}
