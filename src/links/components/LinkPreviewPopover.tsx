import { useEffect } from 'react'
import { HOVERCARDS_ENABLED } from '@/frame/lib/constants'

// Delay first opens to avoid hovercards flashing while the pointer crosses a link.
const DELAY_SHOW = 300
// Delay closes so the pointer can cross the gap between the link and hovercard.
const DELAY_HIDE = 200

// A single shared popover node makes global timers safe.
let popoverCloseTimer: number | null = null
let popoverStartTimer: number | null = null

// Re-entering the source link for the open hovercard skips the first-open delay.
let currentlyOpen: HTMLLinkElement | null = null

// Links within 300 px of the viewport top render below the link to avoid an after-render flip.
// Hidden hovercards report height 0 until display, so this keeps placement stable.
const BOUNDING_TOP_MARGIN = 300

const FIRST_LINK_ID = '_hc_first_focusable'
const TITLE_ID = '_hc_title'

type PageMetadata = {
  product: string
  title: string
  intro: string
  anchor?: string
  cacheInfo?: string
}

function getOrCreatePopoverGlobal() {
  let popoverGlobal = document.querySelector<HTMLDivElement>('div.Popover')
  if (!popoverGlobal) {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('data-testid', 'popover')
    wrapper.classList.add('Popover', 'position-absolute')
    wrapper.style.display = 'none'
    wrapper.style.outline = 'none'
    wrapper.style.zIndex = `100`

    // aria-modal warns screen readers of the focus trap; the bumpers below enforce it.
    wrapper.setAttribute('role', 'region')
    wrapper.setAttribute('aria-modal', 'true')
    wrapper.setAttribute('aria-label', 'user hovercard')
    wrapper.setAttribute('aria-labelledby', TITLE_ID)

    // The top bumper catches focus entering the hovercard and sends it to a real link.
    const topBumper = document.createElement('span')
    topBumper.setAttribute('tabindex', '0')
    topBumper.setAttribute('aria-hidden', 'true')
    wrapper.appendChild(topBumper)

    const inner = document.createElement('div')
    // Add placement classes later, after measuring where the hovercard fits on screen.
    inner.classList.add(
      ...'Popover-message Popover-message--large p-3 Box color-shadow-large'.split(/\s+/g),
    )
    inner.style.width = `360px`

    const product = document.createElement('h3')
    product.classList.add('product')
    product.classList.add('f6')
    product.classList.add('color-fg-muted')

    const headingLink = document.createElement('a')
    headingLink.style.textDecoration = 'underline'
    headingLink.href = ''
    // The top bumper needs this ID to move focus to the heading link.
    headingLink.id = FIRST_LINK_ID
    product.appendChild(headingLink)

    inner.appendChild(product)

    const title = document.createElement('h4')
    title.classList.add('title')
    title.classList.add('h5')
    title.classList.add('my-1')
    const titleLink = document.createElement('a')
    titleLink.href = ''
    titleLink.id = TITLE_ID

    title.appendChild(titleLink)
    inner.appendChild(title)

    const intro = document.createElement('p')
    intro.classList.add('intro')
    intro.classList.add('f6')
    intro.classList.add('color-fg-muted')
    inner.appendChild(intro)

    const anchor = document.createElement('p')
    anchor.classList.add('anchor')
    anchor.classList.add('hover-card-anchor')
    anchor.classList.add('f6')
    anchor.classList.add('color-fg-muted')
    inner.appendChild(anchor)

    wrapper.appendChild(inner)

    // The bottom bumper catches focus leaving the hovercard and loops it back inside.
    const bottomBumper = document.createElement('span')
    bottomBumper.setAttribute('aria-hidden', 'true')
    bottomBumper.setAttribute('tabindex', '0')
    wrapper.appendChild(bottomBumper)

    document.body.appendChild(wrapper)

    wrapper.addEventListener('mouseover', () => {
      if (popoverCloseTimer) {
        window.clearTimeout(popoverCloseTimer)
      }
    })
    wrapper.addEventListener('mouseout', () => {
      popoverCloseTimer = window.setTimeout(() => {
        wrapper.style.display = 'none'

        // Leaving the hovercard resets the source link so the next hover gets the delay.
        currentlyOpen = null
      }, DELAY_HIDE)
    })

    popoverGlobal = wrapper

    // The top bumper loops focus between the first and last hovercard links.
    topBumper.addEventListener('keyup', (event) => {
      if (event.key === 'Tab' && event.shiftKey) titleLink.focus()
      else if (event.key === 'Tab') headingLink.focus()
    })

    bottomBumper.addEventListener('keyup', (event) => {
      handleBottomBumper(titleLink, headingLink, event)
    })
    bottomBumper.addEventListener('focus', () => {
      handleBottomBumper(headingLink)
    })
  }

  // Focus and keyboard events can both reach the bottom bumper, so this folds them together.
  function handleBottomBumper(
    primaryFocus: HTMLAnchorElement,
    loopAroundFocus?: HTMLAnchorElement,
    event?: KeyboardEvent,
  ) {
    // Shift-Tab moves to the last link; Tab or focus loops to the first link.
    if (event && event.key === 'Tab' && event.shiftKey) {
      primaryFocus.focus()
    } else if (event && event.key === 'Tab' && loopAroundFocus) {
      loopAroundFocus.focus()
    } else if (!event) {
      primaryFocus.focus()
    }
  }

  return popoverGlobal
}

function popoverWrap(element: HTMLLinkElement, filledCallback?: (popover: HTMLDivElement) => void) {
  if (element.parentElement && element.parentElement.classList.contains('Popover')) {
    return
  }
  let title = ''
  let product = ''
  let intro = ''
  let anchor = ''

  // Same-page anchor previews reuse title, intro, and product text already in the DOM.
  if (
    element.href.includes('#') &&
    element.href.split('#')[1] &&
    element.href.startsWith(`${window.location.href.split('#')[0]}#`)
  ) {
    const domID = element.href.split('#')[1]
    // getElementById accepts IDs such as 123-thing that make querySelector throw.
    const domElement = document.getElementById(domID)
    if (domElement && domElement.textContent) {
      anchor = domElement.textContent
      // Heading permalink text adds a trailing " #"; strip it from the hovercard label.
      if (anchor.endsWith(' #')) {
        anchor = anchor.slice(0, -2)
      }

      const domTitle = document.querySelector('h1')
      if (domTitle && domTitle.textContent) {
        title = domTitle.textContent
        intro = ''
        product = ''
        const domProduct = document.querySelector('._product-title')
        if (domProduct && domProduct.textContent) {
          product = domProduct.textContent
        }
        const domIntro = document.querySelector('._page-intro')
        if (domIntro && domIntro.textContent) {
          intro = domIntro.textContent
        }
      }
    }

    if (title) {
      fillPopover(element, { product, title, intro, anchor }, filledCallback)
    }
    return
  }

  const { pathname } = new URL(element.href)

  async function fetchAndFillPopover() {
    const response = await fetch(`/api/article/meta?${new URLSearchParams({ pathname })}`, {
      headers: {
        'X-Request-Source': 'hovercards',
      },
    })
    if (response.ok) {
      const meta = (await response.json()) as PageMetadata
      fillPopover(element, meta, filledCallback)
    }
  }

  fetchAndFillPopover()
}

function fillPopover(
  element: HTMLLinkElement,
  info: PageMetadata,
  callback?: (popover: HTMLDivElement) => void,
) {
  const { product, title, intro, anchor } = info
  const popover = getOrCreatePopoverGlobal()

  const productHead = popover.querySelector('.product') as HTMLHeadingElement | null
  if (productHead) {
    const productHeadLink = productHead.querySelector('.product a') as HTMLLinkElement | null
    if (product) {
      if (productHeadLink) {
        productHeadLink.textContent = product
        const linkURL = new URL(element.href)
        // DOM href values are absolute, and the first path segments point at the product page.
        const regex = /^\/(?<lang>\w{2}\/)?(?<version>[\w-]+@[\w-.]+\/)?(?<product>[\w-]+\/)?/
        const match = regex.exec(linkURL.pathname)
        if (match?.groups) {
          const { lang, version, product: productPath } = match.groups
          const productURL = [lang, version, productPath].map((n) => n || '').join('')
          productHeadLink.href = `${linkURL.origin}/${productURL}`
        }
        productHead.style.display = 'block'
      }
    } else {
      productHead.style.display = 'none'
    }
  }

  const anchorElement = popover.querySelector('.anchor') as HTMLParagraphElement | null
  if (anchorElement) {
    if (anchor) {
      anchorElement.textContent = anchor
      anchorElement.style.display = 'block'
    } else {
      anchorElement.style.display = 'none'
    }
  }

  if (popoverCloseTimer) {
    window.clearTimeout(popoverCloseTimer)
  }

  const titleHead = popover.querySelector('.title')
  if (titleHead) {
    const titleHeadLink = titleHead.querySelector('a') as HTMLLinkElement | null
    if (titleHeadLink) {
      titleHeadLink.href = element.href
      titleHeadLink.textContent = title
    }
  }

  const paragraph: HTMLParagraphElement | null = popover.querySelector('p.intro')
  if (paragraph) {
    if (intro) {
      paragraph.textContent = intro
      paragraph.style.display = 'block'
    } else {
      paragraph.style.display = 'none'
    }
  }

  const [top, left] = getOffset(element)
  const [boundingTop] = getBoundingOffset(element)

  const popoverMessageElement = popover.querySelector('.Popover-message') as HTMLDivElement

  const below = boundingTop < BOUNDING_TOP_MARGIN
  if (below) {
    popoverMessageElement.classList.remove('Popover-message--bottom-left')
    popoverMessageElement.classList.add('Popover-message--top-left')
  } else {
    popoverMessageElement.classList.remove('Popover-message--top-left')
    popoverMessageElement.classList.add('Popover-message--bottom-left')
  }

  // Hidden hovercards report height 0, so place it at the link and adjust after display.
  popover.style.top = `${top}px`
  popover.style.left = `${left}px`
  popover.style.display = 'block'

  if (below) {
    // Use a fixed single-line height because getBoundingClientRect can double for wrapped links.
    const approximateElementHeight = 33
    popover.style.top = `${top + approximateElementHeight}px`
  } else {
    popover.style.top = `${top - popover.offsetHeight - 10}px`
  }

  popover.style.setProperty('top', popover.style.top, 'important')

  if (callback) {
    callback(popover)
  }
}

// HTMLElement offsets are parent-relative, so add every offsetParent to get the page position.
function getOffset(element: HTMLElement) {
  let top = element.offsetTop
  let left = element.offsetLeft
  let offsetParent = element.offsetParent as HTMLElement | null
  while (offsetParent) {
    left += offsetParent.offsetLeft
    top += offsetParent.offsetTop
    offsetParent = offsetParent.offsetParent as HTMLElement | null
  }
  return [top, left]
}

function getBoundingOffset(element: HTMLElement) {
  const { top, left } = element.getBoundingClientRect()
  return [top, left]
}

// Hovering the source link for an open hovercard skips the delay while crossing the gap.
function popoverShow(target: HTMLLinkElement, callback?: (popover: HTMLDivElement) => void) {
  if (popoverStartTimer) {
    window.clearTimeout(popoverStartTimer)
  }

  if (target === currentlyOpen) {
    popoverWrap(target, callback)
  } else {
    popoverStartTimer = window.setTimeout(() => {
      popoverWrap(target, callback)
      currentlyOpen = target
    }, DELAY_SHOW)
  }
}

function popoverHide() {
  // window.setTimeout keeps the timer type in the browser API, not Node's timer type.

  if (popoverStartTimer) {
    window.clearTimeout(popoverStartTimer)
  }

  popoverCloseTimer = window.setTimeout(() => {
    const popover = getOrCreatePopoverGlobal()
    popover.style.display = 'none'

    // Closing resets the source link so the next hover gets the first-open delay.
    currentlyOpen = null
  }, DELAY_HIDE)
}

let lastFocussedLink: HTMLLinkElement | null = null

export function LinkPreviewPopover() {
  // Window blur hides the hovercard when focus moves to browser chrome.
  useEffect(() => {
    if (!HOVERCARDS_ENABLED) return

    function windowBlur() {
      popoverHide()
    }
    window.addEventListener('blur', windowBlur)
    return () => {
      window.removeEventListener('blur', windowBlur)
    }
  }, [])

  useEffect(() => {
    if (!HOVERCARDS_ENABLED) return

    function showPopover(event: MouseEvent) {
      const target = event.currentTarget as HTMLLinkElement
      popoverShow(target)

      // Pointer hover clears keyboard-return focus from the previous shortcut-opened link.
      lastFocussedLink = null
    }

    function hidePopover() {
      popoverHide()
    }

    function keyboardHandler(event: KeyboardEvent) {
      if (event.key === 'ArrowUp' && event.altKey) {
        event.preventDefault()
        const target = event.currentTarget as HTMLLinkElement
        popoverShow(target, (popover) => {
          const productHeadingLink = popover.querySelector<HTMLParagraphElement>('.product a')
          const first = document.getElementById(FIRST_LINK_ID)

          if (productHeadingLink && first) {
            first.focus()
            lastFocussedLink = target
          }
        })
      } else if (event.key === 'ArrowDown' && event.altKey) {
        event.preventDefault()
        popoverHide()
      }
    }

    // Escape can belong to other features; only open hovercards handle it.
    function escapeHandler(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        const popover = getOrCreatePopoverGlobal()
        if (popover.style.display !== 'none') {
          popoverHide()

          // Shortcut-opened hovercards return focus to their source link on Escape.
          if (lastFocussedLink) {
            lastFocussedLink.focus()
          }
        }
      }
    }

    const links = Array.from(
      document.querySelectorAll<HTMLLinkElement>(
        '#article-contents a[href], #article-intro a[href]',
      ),
    ).filter((link) => {
      // DOM href values are absolute, so URL parsing filters internal and in-page links.
      const { pathname } = new URL(link.href)
      return (
        link.href.startsWith(window.location.origin) &&
        !link.classList.contains('heading-link') &&
        !pathname.startsWith('/public/') &&
        !pathname.startsWith('/assets/') &&
        // Skip ToolPicker links such as data-tool="vscode".
        !link.dataset.tool &&
        !link.dataset.platform
      )
    })

    // Individual listeners avoid delegated mouseover targets such as strong inside a link.
    for (const link of links) {
      link.addEventListener('mouseover', showPopover)
      link.addEventListener('mouseout', hidePopover)
      link.addEventListener('keydown', keyboardHandler)
      // aria-keyshortcuts exposes Alt+ArrowUp to screen readers.
      link.setAttribute('aria-keyshortcuts', 'Alt+ArrowUp')
    }

    document.addEventListener('keydown', escapeHandler)

    return () => {
      for (const link of links) {
        link.removeEventListener('mouseover', showPopover)
        link.removeEventListener('mouseout', hidePopover)
        link.removeEventListener('keydown', keyboardHandler)
        link.removeAttribute('aria-keyshortcuts')
      }
      document.removeEventListener('keydown', escapeHandler)
    }
  }) // Re-scan links after client-side page changes.

  return null
}
