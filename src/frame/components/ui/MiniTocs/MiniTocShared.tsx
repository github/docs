import { useContext } from 'react'
import { NavList } from '@primer/react-brand'
import cx from 'clsx'

import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import { ArticleContext } from '@/frame/components/context/ArticleContext'
import { AutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import {
  classifyToggleClass,
  isContentVisible,
  useSelection,
} from '@/tools/components/SelectionContext'

// Article pages provide ArticleContext; REST, GraphQL, webhooks, and audit-log
// pages provide AutomatedPageContext. Raw useContext avoids throwing hooks because
// the secondary bar also renders on pages with neither provider.
// Keep one empty array for the no-provider case. A fresh array would make
// ActiveSectionProvider recreate its effect on every landing page render because
// DefaultLayout mounts that provider everywhere except the homepage.
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

// Render nested mini-TOC entries as flat NavList.Item links with a visual indent.
// Avoid NavList.SubNav because Brand turns parents into toggle buttons and drops
// the parent heading's anchor on GraphQL pages with h3s under h2s. item.platform
// confusingly stores the .ghd-tool ancestor's platform or tool class. Matching
// ToggleableContent visibility keeps hidden headings out of the TOC.
export function RenderTocItem({ item, activeHref, depth }: RenderTocItemProps) {
  const { platform: selectedPlatform, tool } = useSelection()

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

// Returns the first TOC title when activeHref is empty or no matching href exists.
// OverviewMenu handles the empty top-of-article label before calling this helper.
export function getActiveTitle(miniTocItems: MiniTocItem[], activeHref: string): string {
  const flat = flatten(miniTocItems)
  if (activeHref === '') return flat[0]?.contents.title ?? ''
  return (
    flat.find((item) => item.contents.href === activeHref)?.contents.title ??
    flat[0]?.contents.title ??
    ''
  )
}
