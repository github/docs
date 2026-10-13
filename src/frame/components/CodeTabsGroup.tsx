import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  isValidElement,
  Children,
  cloneElement,
  type ReactElement,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { useRouter } from 'next/router'
import { UnderlineNav } from '@primer/react'
import cx from 'clsx'

import Cookies from '@/frame/components/lib/cookies'
import { CODE_SAMPLE_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { useTranslation } from '@/languages/components/useTranslation'

// CodeTabsGroup avoids DOM scanning, portals, and panel-attribute mutations so
// React owns the code-tab nodes through client-side navigation.
// The article body hast maps each .ghd-codetabs container to CodeTabsGroup, which
// reads .ghd-codetab panel children from props and renders the nav and panels.
// CodeLanguageContext keeps code-tab groups on a page in sync and shares the
// language cookie.

type CodeLanguageContextT = {
  language: string
  setLanguage: (value: string) => void
}

const CodeLanguageContext = createContext<CodeLanguageContextT>({
  language: '',
  setLanguage: () => {},
})

// CodeTabsProvider starts empty so SSR and first hydration select each group's first tab.
// It applies the cookie preference after hydration, avoiding an SSR/client mismatch.
export function CodeTabsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState('')

  useEffect(() => {
    const cookieValue = Cookies.get(CODE_SAMPLE_LANGUAGE_COOKIE_NAME)
    if (cookieValue) setLanguageState(cookieValue)
  }, [])

  const setLanguage = useCallback((value: string) => {
    setLanguageState(value)
    Cookies.set(CODE_SAMPLE_LANGUAGE_COOKIE_NAME, value)
    sendEvent({
      type: EventType.preference,
      preference_name: 'code_language',
      preference_value: value,
    })
  }, [])

  const value = useMemo<CodeLanguageContextT>(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  )

  return <CodeLanguageContext.Provider value={value}>{children}</CodeLanguageContext.Provider>
}

type PanelTab = {
  key: string
  label: string
  panel: ReactElement<{ className?: string }>
}

function hasClass(className: unknown, target: string): boolean {
  return String(className || '')
    .split(/\s+/)
    .includes(target)
}

function getActiveKey(tabs: PanelTab[], selectedLanguage: string): string {
  return tabs.some((tab) => tab.key === selectedLanguage) ? selectedLanguage : (tabs[0]?.key ?? '')
}

type CodeTabsGroupProps = {
  className?: string
  children?: ReactNode
  [key: string]: unknown
}

export function CodeTabsGroup({ className, children, ...rest }: CodeTabsGroupProps) {
  const router = useRouter()
  const { t } = useTranslation('code_tabs')
  const { language, setLanguage } = useContext(CodeLanguageContext)
  const baseId = useId()

  // Fail open to original markup if converted hast lacks code-tab metadata.
  const tabs: PanelTab[] = Children.toArray(children)
    .filter((child): child is ReactElement<{ className?: string }> => isValidElement(child))
    .filter((child) => hasClass(child.props.className, 'ghd-codetab'))
    .map((panel) => {
      const props = panel.props as { 'data-lang'?: string; 'data-label'?: string }
      const key = props['data-lang']
      const label = props['data-label']
      if (!key || !label) return null
      return { key, label, panel }
    })
    .filter((tab): tab is PanelTab => tab !== null)

  if (!tabs.length) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    )
  }

  const activeKey = getActiveKey(tabs, language)

  return (
    <div className={cx(className, 'ghd-codetabs-enhanced')} {...rest}>
      <div className="ghd-codetabs-nav">
        {/* key on asPath works around a Primer UnderlineNav re-render bug. */}
        <UnderlineNav key={router.asPath} aria-label={t('aria_label')} variant="flush">
          {tabs.map((tab) => (
            <UnderlineNav.Item
              key={tab.key}
              href={`#${tab.key}`}
              aria-current={tab.key === activeKey ? 'page' : undefined}
              onSelect={(event: ReactMouseEvent | ReactKeyboardEvent) => {
                event.preventDefault()
                setLanguage(tab.key)
              }}
            >
              {tab.label}
            </UnderlineNav.Item>
          ))}
        </UnderlineNav>
      </div>
      {tabs.map((tab, index) => {
        const isActive = tab.key === activeKey
        return cloneElement(tab.panel, {
          key: tab.key,
          id: `${baseId}-panel-${index}`,
          role: 'tabpanel',
          tabIndex: 0,
          hidden: !isActive,
          className: cx(tab.panel.props.className, { 'ghd-codetab-hidden': !isActive }),
        } as Record<string, unknown>)
      })}
    </div>
  )
}
