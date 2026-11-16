// Matches @primer/react's UnderlineNav so tabs overflow at the same widths as before.
export const GAP = 8

export type OverflowSplit = {
  visible: number[]
  overflow: number[]
}

// Counts the leading items that fit in `available` pixels, with a gap after each item.
function countFitting(widths: number[], available: number): number {
  let total = 0
  for (const [index, width] of widths.entries()) {
    total += width + GAP
    if (total > available) return index
  }
  return widths.length
}

// Splits item indexes between the visible list and the More menu. The menu never
// holds exactly one item, and the selected item stays visible by taking the last
// visible slot.
export function splitOverflow(
  widths: number[],
  navWidth: number,
  moreButtonWidth: number,
  selectedIndex: number,
): OverflowSplit {
  const all = widths.map((_, index) => index)
  // Gaps sit between items, so the last item needs no gap after it.
  if (countFitting(widths, navWidth + GAP) >= widths.length) {
    return { visible: all, overflow: [] }
  }

  let visibleCount = countFitting(widths, navWidth - moreButtonWidth)
  if (widths.length - visibleCount === 1) visibleCount -= 1
  visibleCount = Math.max(visibleCount, 0)

  const visible = all.slice(0, visibleCount)
  if (visibleCount > 0 && selectedIndex >= visibleCount) {
    visible[visibleCount - 1] = selectedIndex
    // A wider selected item can push the row past the nav, so drop the items
    // before it until the row fits again.
    const budget = navWidth - moreButtonWidth
    const used = () => visible.reduce((total, index) => total + widths[index] + GAP, 0)
    while (visible.length > 1 && used() > budget) visible.splice(-2, 1)
    if (used() > budget) visible.length = 0
  }
  const overflow = all.filter((index) => !visible.includes(index))
  return { visible, overflow }
}
