// WCAG contrast for computed `rgb()`/`rgba()` colours. Keywords, hex and
// translucent values throw rather than being coerced — `rgba(0, 0, 0, 0)` would
// otherwise read as opaque black and yield a confident, wrong ratio.

function parseComputedColor(color: string) {
  const parts = color.match(/\d+(?:\.\d+)?/g)?.map(Number)
  if (!parts || parts.length < 3) {
    throw new Error(
      `Expected a computed rgb()/rgba() colour, got ${JSON.stringify(color)}. ` +
        'Pass getComputedStyle(...).color or .backgroundColor, not a keyword or hex string.',
    )
  }
  const [r, g, b, alpha = 1] = parts
  if (alpha !== 1) {
    throw new Error(
      `Cannot measure contrast against the translucent colour ${JSON.stringify(color)}: ` +
        'the result depends on what is painted behind it. Measure an opaque pairing instead.',
    )
  }
  return [r, g, b]
}

export function relativeLuminance(color: string) {
  const [r, g, b] = parseComputedColor(color)
  const channel = (value: number) => {
    const ratio = value / 255
    return ratio <= 0.03928 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

export function contrastRatio(foreground: string, background: string) {
  const [lighter, darker] = [relativeLuminance(foreground), relativeLuminance(background)].sort(
    (a, b) => b - a,
  )
  return (lighter + 0.05) / (darker + 0.05)
}
