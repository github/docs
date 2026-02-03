// For places where we might need to know the "state" of one component from another component
// Useful for when the inheritance between the two components is too complicated for passing down props, or they aren't in the same tree

import React, { createContext, useContext, useState } from 'react'

type SharedUIContextType = {
  hasOpenHeaderNotifications: boolean
  setHasOpenHeaderNotifications: (value: boolean) => void
}

const SharedUIContext = createContext<SharedUIContextType | undefined>(undefined)

export const useSharedUIContext = (): SharedUIContextType => {
  const context = useContext(SharedUIContext)
  if (!context) {
    throw new Error('useSharedUIContext must be used within a SharedUIContextProvider')
  }
  return context
}

export const SharedUIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasOpenHeaderNotifications, setHasOpenHeaderNotifications] = useState(false)

  return (
    <SharedUIContext.Provider
      value={{
        hasOpenHeaderNotifications,
        setHasOpenHeaderNotifications,
      }}
    >
      {children}
    </SharedUIContext.Provider>
  )
}
