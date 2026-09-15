import { useContext } from 'react'
import { NavList } from '@primer/react-brand'
import cx from 'classnames'

import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import { ArticleContext } from '@/frame/components/context/ArticleContext'
import { AutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import {
  classifyToggleClass,
  isContentVisible,
  useSelection,
} from '@/tools/components/SelectionContext'

// Reads the mini-TOC items from whichever page context is present. Article pages
// provide `ArticleContext`; REST/GraphQL/webhooks/audit-log pages provide
// `AutomatedPageContext`. Both expose `miniTocItems`. Uses raw `useContext`
// (null-safe) rather than the throwing `useArticleContext`/`useAutomatedPageContext`
// hooks, so this is safe to call from the shared secondary bar, which also renders
// on pages with neither provider (landings) — returns [] there.
// Stable identity for the no-provider case. A fresh `[]` literal would be a new
// reference on every render, so an effect depending on the result (see
// ActiveSectionProvider) would tear down and re-run continuously — on every
// landing page, since DefaultLayout mounts that provider everywhere but the
// homepage.
const NO_ITEMS: MiniTocItem[] = []

export function useMiniTocItems(): MiniTocItem[] {
  const article = useContext(ArticleContext)
  const automated = useContext(AutomatedPageContext)
  return article?.miniTocItems ?? automated?.miniTocItems ?? NO_ITEMS
}

export function flatten(items: MiniTocItem[], acc: MiniTocItem[] = []): MiniTocItem[] {
  for (const item of items) {
    acc.push(item)
    if (item.items) flatten(item.items, acc)
  }
  return acc
}

type RenderTocItemProps = {
  item: MiniTocItem
  activeHref: string
  depth: number
}

// Renders a mini-TOC entry (and any nested children) as flat sibling
// `NavList.Item` links with a visual indent per depth. We deliberately avoid
// `NavList.SubNav` because brand turns a parent-with-subnav into a toggle
// *button*, which would drop the parent heading's own anchor link (a regression
// for the GraphQL reference pages that nest h3s under a linkable h2).
export function RenderTocItem({ item, activeHref, depth }: RenderTocItemProps) {
  const { platform: selectedPlatform, tool } = useSelection()

  // `item.platform` holds the class string of the heading's `.ghd-tool` ancestor
  // (platform OR tool value). Hide the TOC entry when its platform/tool isn't the
  // selected one.
  const classification = classifyToggleClass(item.platform)
  if (classification && !isContentVisible(classification, { platform: selectedPlatform, tool })) {
    return null
  }

  return (
    <>
      <NavList.Item
        as="a"
        href={item.contents.href}
        aria-current={item.contents.href === activeHref ? 'location' : undefined}
        className={cx(item.platform)}
        style={depth > 0 ? { paddingInlineStart: `${depth}rem` } : undefined}
      >
        {item.contents.title}
      </NavList.Item>
      {item.items?.map((child) => (
        <RenderTocItem
          key={child.contents.href}
          item={child}
          activeHref={activeHref}
          depth={depth + 1}
        />
      ))}
    </>
  )
}

// The active section's title (for a collapsed control's label). Before the reader
// has scrolled past the first heading (`activeHref` ''), falls back to the first
// TOC entry's title.
export function getActiveTitle(miniTocItems: MiniTocItem[], activeHref: string): string {
  const flat = flatten(miniTocItems)
  if (activeHref === '') return flat[0]?.contents.title ?? ''
  return (
    flat.find((item) => item.contents.href === activeHref)?.contents.title ??
    flat[0]?.contents.title ??
    ''
  )
}
