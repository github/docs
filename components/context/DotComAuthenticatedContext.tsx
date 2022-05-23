import { createContext, useContext } from 'react'

export type DotComAuthenticatedContextT = {
  isDotComAuthenticated: boolean
}

export const DotComAuthenticatedContext = createContext<DotComAuthenticatedContextT | null>(null)

export const useAuth = (): DotComAuthenticatedContextT => {
  const context = useContext(DotComAuthenticatedContext)

  if (!context) {
    throw new Error(
      '"useAuthContext" may only be used inside "DotComAuthenticatedContext.Provider"'
    )
  }

  return context
}
