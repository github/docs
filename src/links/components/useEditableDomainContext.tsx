import { useContext, useEffect, createContext, useState } from 'react'
import Cookies from 'js-cookie'

const COOKIE_KEY = 'github_domains'
const DEFAULT = ''

type DomainNameEdit = {
  domainName: string
  setDomainName: (value: string) => void
}
const UseEditableDomainContext = createContext<DomainNameEdit>({
  domainName: '',
  setDomainName: () => {},
})

export function DomainNameEditProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState(DEFAULT)
  useEffect(() => {
    const cookie = Cookies.get(COOKIE_KEY)
    if (cookie) {
      setName(cookie.split(',')[0])
    }
  }, [])

  return (
    <UseEditableDomainContext.Provider value={{ domainName: name, setDomainName: setName }}>
      {children}
    </UseEditableDomainContext.Provider>
  )
}

export const useEditableDomainName = () => {
  const context = useContext(UseEditableDomainContext)
  if (context === undefined) {
    throw new Error('useEditableDomainName must be inside a DomainNameEditProvider')
  }
  return context
}
