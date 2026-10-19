// SharedUIContext carries UI state where passing it through the component tree is impractical.

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
