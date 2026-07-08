import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { allPlatforms } from '@/tools/lib/all-platforms'
import { allTools } from '@/tools/lib/all-tools'

// React-native replacement for the imperative platform/tool visibility toggling
// that PlatformPicker/ToolPicker used to do by walking the DOM and setting
// `style.display` on `.ghd-tool`/`.platform-*`/`.tool-*` elements (#6619). The
// selected platform + tool live in this context; the article body (rendered from
// hast) maps the relevant elements to <ToggleableContent>, which reads the
// selection and hides non-matching content instead of mutating React-owned nodes.
//
// Selections start empty so that the server render and the first client render
// both show ALL variants (matching the pre-JS markup), which keeps hydration
// stable. The pickers set the real selection in an effect after hydration, the
// same moment the old imperative code used to run.

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

// Determine whether an element is platform/tool-scoped and which value gates it.
// `.ghd-tool <value>` is a block (the {% mac %}/{% webui %} liquid tags); the
// extra class is the platform or tool value. `platform-<value>`/`tool-<value>`
// are author-written inline spans. We classify strictly against the canonical
// platform/tool vocabularies and return null on anything outside them, so an
// unrecognized class never makes content disappear. When several recognized
// markers are present the first match wins; in practice an element carries
// exactly one platform/tool marker.
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

// Visible when no selection has been made yet (initial render shows everything,
// matching the pre-JS markup) or when the element's value is the selected one.
export function isContentVisible(
  classification: ToggleClassification,
  selection: { platform: string; tool: string },
): boolean {
  const selected = classification.scope === 'platform' ? selection.platform : selection.tool
  if (!selected) return true
  return classification.value === selected
}
