import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import { UnderlineNav } from '@primer/react'

import Cookies from '@/frame/components/lib/cookies'
import { CODE_SAMPLE_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { useTranslation } from '@/languages/components/useTranslation'

// This component shares the code_sample_language_preferred cookie with the
// REST API code sample tabs. The only overlapping language key is 'javascript'.
// If a user selects a REST-only value like 'curl', code tabs gracefully fall
// back to the first available language per group. This is intentional and
// works the same in the other direction (SDK value in a REST context).

type TabData = {
  key: string
  label: string
  panel: HTMLElement
}

type GroupData = {
  mountPoint: HTMLDivElement
  tabs: TabData[]
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

function getPanels(container: HTMLElement): HTMLElement[] {
  return Array.from(container.children).filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && child.classList.contains('ghd-codetab'),
  )
}

function sanitizeForId(value: string): string {
  return value.replace(/[^a-z0-9_-]+/gi, '-').replace(/(^-|-$)/g, '') || 'article'
}

function getActiveKey(tabs: TabData[], selectedLanguage: string): string {
  return tabs.some((tab) => tab.key === selectedLanguage) ? selectedLanguage : (tabs[0]?.key ?? '')
}

function updatePanelVisibility(groups: GroupData[], languageKey: string): void {
  for (const group of groups) {
    const activeKey = getActiveKey(group.tabs, languageKey)
    for (const tab of group.tabs) {
      const isActive = tab.key === activeKey
      tab.panel.hidden = !isActive
      tab.panel.classList.toggle('ghd-codetab-hidden', !isActive)
    }
  }
}

export const CodeTabs = () => {
  const router = useRouter()
  const { t } = useTranslation('code_tabs')
  const [groups, setGroups] = useState<GroupData[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState('')

  useIsomorphicLayoutEffect(() => {
    const articleContents = document.getElementById('article-contents')
    if (!articleContents) {
      setGroups([])
      return
    }

    const containers = Array.from(articleContents.querySelectorAll<HTMLElement>('.ghd-codetabs'))
    if (!containers.length) {
      setGroups([])
      return
    }

    const pageId = sanitizeForId(router.asPath.split(/[?#]/)[0])
    const newGroups: GroupData[] = []

    for (const [groupIndex, container] of containers.entries()) {
      // Reset any previous enhancement before re-enhancing
      container.classList.remove('ghd-codetabs-enhanced')
      for (const el of container.querySelectorAll<HTMLElement>(':scope > .ghd-codetabs-nav')) {
        el.remove()
      }
      for (const panel of getPanels(container)) {
        panel.hidden = false
        panel.classList.remove('ghd-codetab-hidden')
        panel.removeAttribute('role')
        panel.removeAttribute('tabindex')
        panel.removeAttribute('aria-labelledby')
        panel.removeAttribute('id')
      }

      const panels = getPanels(container)
      if (!panels.length) continue

      const mountPoint = document.createElement('div')
      mountPoint.className = 'ghd-codetabs-nav'
      container.insertBefore(mountPoint, container.firstChild)
      container.classList.add('ghd-codetabs-enhanced')

      const tabs: TabData[] = panels
        .map((panel, panelIndex) => {
          const key = panel.dataset.lang
          const label = panel.dataset.label
          if (!key || !label) return null

          const panelId = `ghd-codetabs-${pageId}-${groupIndex}-panel-${panelIndex}`
          panel.id = panelId
          panel.setAttribute('role', 'tabpanel')
          panel.setAttribute('tabindex', '0')

          return { key, label, panel }
        })
        .filter((tab): tab is TabData => tab !== null)

      if (!tabs.length) continue
      newGroups.push({ mountPoint, tabs })
    }

    const cookieValue = Cookies.get(CODE_SAMPLE_LANGUAGE_COOKIE_NAME)
    const initialLang = cookieValue || (newGroups[0]?.tabs[0]?.key ?? '')

    // Apply initial visibility synchronously before browser paint
    updatePanelVisibility(newGroups, initialLang)

    setGroups(newGroups)
    setSelectedLanguage(initialLang)

    return () => {
      for (const group of newGroups) {
        group.mountPoint.remove()
        for (const tab of group.tabs) {
          tab.panel.hidden = false
          tab.panel.classList.remove('ghd-codetab-hidden')
          tab.panel.removeAttribute('role')
          tab.panel.removeAttribute('tabindex')
          tab.panel.removeAttribute('aria-labelledby')
          tab.panel.removeAttribute('id')
        }
      }
    }
  }, [router.asPath])

  const handleSelect = useCallback(
    (key: string) => {
      updatePanelVisibility(groups, key)
      setSelectedLanguage(key)
      Cookies.set(CODE_SAMPLE_LANGUAGE_COOKIE_NAME, key)
      sendEvent({
        type: EventType.preference,
        preference_name: 'code_language',
        preference_value: key,
      })
    },
    [groups],
  )

  if (!groups.length) return null

  return (
    <>
      {groups.map((group, groupIndex) =>
        createPortal(
          <UnderlineNav key={router.asPath} aria-label={t('aria_label')} variant="flush">
            {group.tabs.map((tab) => {
              const activeKey = getActiveKey(group.tabs, selectedLanguage)
              return (
                <UnderlineNav.Item
                  key={tab.key}
                  href={`#${tab.key}`}
                  aria-current={tab.key === activeKey ? 'page' : undefined}
                  onSelect={(event: React.MouseEvent | React.KeyboardEvent) => {
                    event.preventDefault()
                    handleSelect(tab.key)
                  }}
                >
                  {tab.label}
                </UnderlineNav.Item>
              )
            })}
          </UnderlineNav>,
          group.mountPoint,
          `codetabs-${groupIndex}`,
        ),
      )}
    </>
  )
}
