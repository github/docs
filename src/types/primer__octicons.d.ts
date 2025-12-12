declare module '@primer/octicons' {
  interface OcticonOptions {
    width?: number | string
    height?: number | string
    'aria-label'?: string
    'aria-hidden'?: string | boolean
    class?: string
    fill?: string
    [key: string]: any
  }

  interface Octicon {
    /**
     * The SVG path data for the icon
     */
    path: string

    /**
     * The default width of the icon
     */
    width: number

    /**
     * The default height of the icon
     */
    height: number

    /**
     * Heights-based icon data
     */
    heights: {
      [size: number]: {
        path: string
        width: number
        height: number
      }
    }

    /**
     * Convert the octicon to an SVG string
     */
    toSVG(options?: OcticonOptions): string
  }

  const octicons: {
    [iconName: string]: Octicon

    // Common icons (non-exhaustive list for better autocomplete)
    alert: Octicon
    check: Octicon
    'check-circle': Octicon
    chevron: Octicon
    'chevron-down': Octicon
    'chevron-left': Octicon
    'chevron-right': Octicon
    'chevron-up': Octicon
    code: Octicon
    copy: Octicon
    copilot: Octicon
    download: Octicon
    gear: Octicon
    info: Octicon
    link: Octicon
    'link-external': Octicon
    'mark-github': Octicon
    search: Octicon
    'triangle-down': Octicon
    x: Octicon
  }

  export default octicons
}
