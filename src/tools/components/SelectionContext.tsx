import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { allPlatforms } from '@/tools/lib/all-platforms'
import { allTools } from '@/tools/lib/all-tools'

// PlatformPicker and ToolPicker store selection here so ToggleableContent can
// hide React-owned article elements without imperative style.display mutations.
// Empty initial selections keep server and first client renders showing all variants,
// which matches pre-JS markup and keeps hydration stable.

export type SelectionContextT = {
  platform: string
  tool: string
  setPlatform: (value: string) => void
  setTool: (value: string) => void
}

const noop = () => {}

export const SelectionContext = createContext<SelectionContextT>({
  platform: '',
  tool: '',
  setPlatform: noop,
  setTool: noop,
})

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatform] = useState('')
  const [tool, setTool] = useState('')

  const value = useMemo<SelectionContextT>(
    () => ({ platform, tool, setPlatform, setTool }),
    [platform, tool],
  )

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
}

export function useSelection(): SelectionContextT {
  return useContext(SelectionContext)
}

const platformSet = new Set<string>(allPlatforms)
const toolSet = new Set<string>(Object.keys(allTools))

export type ToggleClassification = {
  scope: 'platform' | 'tool'
  value: string
}

function toClassList(className: unknown): string[] {
  if (Array.isArray(className)) return className.map(String)
  if (typeof className === 'string') return className.split(/\s+/).filter(Boolean)
  return []
}

// .ghd-tool uses a separate class for the platform or tool value.
// platform-<value> and tool-<value> are author-written inline spans.
// Strict vocabulary checks prevent unknown classes from hiding content.
// .ghd-tool prefers a recognized platform; inline spans use the first recognized marker.
export function classifyToggleClass(className: unknown): ToggleClassification | null {
  const classes = toClassList(className)
  if (!classes.length) return null

  if (classes.includes('ghd-tool')) {
    const platform = classes.find((c) => platformSet.has(c))
    if (platform) return { scope: 'platform', value: platform }
    const tool = classes.find((c) => toolSet.has(c))
    if (tool) return { scope: 'tool', value: tool }
    return null
  }

  for (const c of classes) {
    if (c.startsWith('platform-')) {
      const value = c.slice('platform-'.length)
      if (platformSet.has(value)) return { scope: 'platform', value }
    }
    if (c.startsWith('tool-')) {
      const value = c.slice('tool-'.length)
      if (toolSet.has(value)) return { scope: 'tool', value }
    }
  }

  return null
}

export function isToggleClass(className: unknown): boolean {
  return classifyToggleClass(className) !== null
}

// Empty initial selections show everything, matching the pre-JS markup.
export function isContentVisible(
  classification: ToggleClassification,
  selection: { platform: string; tool: string },
): boolean {
  const selected = classification.scope === 'platform' ? selection.platform : selection.tool
  if (!selected) return true
  return classification.value === selected
}
