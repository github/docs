import { useEffect } from 'react'
import { useTranslation } from 'src/languages/components/useTranslation'
import { useRouter } from 'next/router'

// We postpone the initial delay a bit in case the user didn't mean to
// hover over the link. Perhaps they just dragged the mouse over on their
// way to something else.
const DELAY_SHOW = 300
// The reason the hiding doesn't happens instantly is when the mouse is
// first hovering over the link, then over the popover itself and then
// back to the link. Because there's a slight cap between the popover
// and the link we want to introduce a slight delay so it doesn't flicker.
const DELAY_HIDE = 200

// A global that is used for a slow/delayed closing of the popovers.
// It can be global because there's only 1 popover DOM node that gets
// created the first time it's needed.
let popoverCloseTimer: number | null = null
let popoverStartTimer: number | null = null

// A global for remembering which target was originated the initial opening
// of the popover. It's important to know this when the onmouseover
// of the link is triggered again. If you hover over the popover and back
// to its link, we don't want to immediately open the popover.
// If it's the first time, i.e. a different link, then we want to add a
// slight initial delay.
let currentlyOpen: HTMLLinkElement | null = null

// Number of pixels from the top of the page that implies that we should
// display the popover *underneath* the link.
// The number is based on the height of popovers when they are quite high.
// We can't know the size of the popover on screen until after it's been
// inserted into the visible DOM. So before that, as a `div` element,
// its `offsetHeight` and `.getBoundingClientRect().height` are always 0.
// We *could* "change our mind" and wait till it's been inserted and then
// change accoding to the popover's true height. But this can cause a flicker.
const BOUNDING_TOP_MARGIN = 300

// All links that should have a hover card also get a
// `aria-describedby="..."`. That ID is used to look up another DOM
// element, that has a `visually-hidden` class. The value if the ID
// isn't very important as long as it connects.
// Note; at the moment this value is duplicated in the Playwright
// tests because of trying to extract the value of `aria-describedby`.
const DESCRIBEDBY_ELEMENT_ID = 'popover-describedby'

// used to identify the first focusable element in the hover card
const FIRST_LINK_ID = '_hc_first_focusable'
const TITLE_ID = '_hc_title'

type Info = {
  product: string
  title: string
  intro: string
  anchor?: string
}
type APIInfo = {
  info: Info
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

    // Semantics for the hovercard so SR users are aware they're about to be
    // focus trapped
    wrapper.setAttribute('role', 'dialog')
    wrapper.setAttribute('aria-modal', 'true')
    wrapper.setAttribute('aria-labelledby', TITLE_ID)

    // this extra element and its event listener are used to help us direct
    // where focus should go when entering a hover card; see `bottomBumper` for
    // its counterpart
    const topBumper = document.createElement('span')
    topBumper.setAttribute('tabindex', '0')
    topBumper.setAttribute('aria-hidden', 'true')
    wrapper.appendChild(topBumper)

    const inner = document.createElement('div')
    // Note that this is lacking the 'Popover-message--bottom-left'
    // or 'Popover-message--top-right`. These get set later when we
    // know where the popover message should appear on the screen.
    inner.classList.add(
      ...'Popover-message Popover-message--large p-3 Box color-shadow-large'.split(/\s+/g),
    )
    inner.style.width = `360px`

    const product = document.createElement('h3')
    product.classList.add('product')
    product.classList.add('f6')
    product.classList.add('color-fg-muted')

    const headingLink = document.createElement('a')
    headingLink.href = ''
    // the id is necessary since we're intercepting natural focus order,
    // so when focus enters the topBumper, we'll manually move it to the link
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

    // this extra element and its event listener are used to help us direct
    // where focus should go when reachign the end of a hover card;
    // see `topBumper` for its counterpart
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

        // If you started the popover by moving over the link, then
        // moved the mouse out of the link and into the popover, then
        // eventually you move out of the popover. Then, we want to
        // reset.
        currentlyOpen = null
      }, DELAY_HIDE)
    })

    popoverGlobal = wrapper

    // The top bumper simply moves focus into either:
    // (a) the first focusable element in the hover card, or
    // (b) if traversing in reverse, the last focusable element
    topBumper.addEventListener('keyup', (event) => {
      if (event.key === 'Tab' && event.shiftKey) titleLink.focus()
      else if (event.key === 'Tab') headingLink.focus()
    })

    // The bottom bumper is more complex and handled via handleBottomBumer()
    bottomBumper.addEventListener('keyup', (event) => {
      handleBottomBumper(titleLink, headingLink, event)
    })
    bottomBumper.addEventListener('focus', () => {
      handleBottomBumper(headingLink)
    })
  }

  // When the bottom bumper receives focus, it could be via one of two events:
  // (a) a keyboard event, or (b) a focus event. This function essentially
  // "de-bounces" the resulting behavior.
  function handleBottomBumper(
    primaryFocus: HTMLAnchorElement,
    loopAroundFocus?: HTMLAnchorElement,
    event?: KeyboardEvent,
  ) {
    // If we got here via keyboard events, we just need to determine if we
    // should loops around to the top of the hover card or traverse in reverse
    // the final part of the conditional essentially defaults the focus
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

function getOrCreateDescribeByElement() {
  let element = document.querySelector<HTMLParagraphElement>(`#${DESCRIBEDBY_ELEMENT_ID}`)
  if (!element) {
    element = document.createElement('p')
    element.id = DESCRIBEDBY_ELEMENT_ID
    element.classList.add('visually-hidden')
    // "All page content should be contained by landmarks"
    // https://dequeuniversity.com/rules/axe/4.7/region
    // The element that we use for the `aria-describedby` attribute
    // needs to exist in the DOM inside a landmark. For example
    // `<div role="footer">`. In our case we use our
    // `<main id="main-content">` element.
    // We "know" that this querySelector() query will always find a
    // valid element, but it's theoretically not perfectly true, so we have to
    // use a fallback.
    const main = document.querySelector<HTMLDivElement>('main') || document.body
    main.appendChild(element)
  }

  return element
}

function popoverWrap(element: HTMLLinkElement, filledCallback?: (popover: HTMLDivElement) => void) {
  if (element.parentElement && element.parentElement.classList.contains('Popover')) {
    return
  }
  let title = ''
  let product = ''
  let intro = ''
  let anchor = ''

  // Is it an in-page anchor link? If so, get the title, intro
  // and product from within the DOM. But only if we can use the anchor
  // destination to find a DOM node that has text.
  if (
    element.href.includes('#') &&
    element.href.split('#')[1] &&
    element.href.startsWith(`${window.location.href.split('#')[0]}#`)
  ) {
    const domID = element.href.split('#')[1]
    const domElement = document.querySelector(`#${domID}`)
    if (domElement && domElement.textContent) {
      anchor = domElement.textContent
      // Headings will have the `#` character to the right which is to
      // indicate that it's a "permalink". It becomes part of the heading's
      // text as a DOM element. Strip that.
      if (anchor.endsWith(' #')) {
        anchor = anchor.slice(0, -2)
      }

      // Now we have to make up the product, intro, and title
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

  fetch(`/api/pageinfo/v1?${new URLSearchParams({ pathname })}`).then(async (response) => {
    if (response.ok) {
      const { info } = (await response.json()) as APIInfo
      fillPopover(element, info, filledCallback)
    }
  })
}

function fillPopover(
  element: HTMLLinkElement,
  info: Info,
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
        // All a.href attributes are always full absolute URLs, as a string.
        // We assume that the "product landing page" is the first
        // portion of all links.
        productHeadLink.href = linkURL.pathname.split('/').slice(0, 3).join('/')
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
    // The caret pointing upwards
    popoverMessageElement.classList.remove('Popover-message--bottom-left')
    popoverMessageElement.classList.add('Popover-message--top-left')
  } else {
    // Default
    popoverMessageElement.classList.remove('Popover-message--top-left')
    popoverMessageElement.classList.add('Popover-message--bottom-left')
  }

  // We can't know what the height of the popover element is when it's
  // `display:none` so we guess offset to the offset and adjust it later.
  popover.style.top = `${top}px`
  popover.style.left = `${left}px`
  popover.style.display = 'block'

  if (below) {
    // This moves the popover about the height of the <a> element down.
    // You can't use element.getBoundingClientRect() because that could
    // give a height that is twice that of a single line of text.
    // For example:
    //
    //     <p>Bla bla <a href="...">Link</a> ble and <a href="...">Other
    //     Link Text</a> yada yada</p>
    //
    // In this case the second `<a>` element will have a height that is
    // twice of the first `<a>` because the second one spans two lines.
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

// The top/left offset of an element is only relative to its parent.
// So if you have...
//
//   <body>
//     <div id="main">
//       <div id="sub" style="position:relative">
//         <a href="...">Link</a>
//
// The `<a>` element's offset is based on the `<div id="sub" style="position:relative">`
// and not the body as the user sees it relative to the viewport.
// So you have to traverse the offsets till you get to the root.
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

function popoverShow(target: HTMLLinkElement, callback?: (popover: HTMLDivElement) => void) {
  if (popoverStartTimer) {
    window.clearTimeout(popoverStartTimer)
  }

  // The mouse has been moved over a link. If this is the "first time",
  // we want to delay showing the popover because it could be that the
  // *intention* of the user was not to hover over, but they might have
  // just moved the mouse over the link by "accident", or in a hurry
  // on their way to something else.
  // However, if they hover over the link because the popover is already
  // open, which happens when you hover over the popover and back again
  // to the link, then we don't want any delay.
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
  // Important to use `window.setTimeout` instead of `setTimeout` so
  // that TypeScript knows which kind of timeout we're talking about.
  // If you use plain `setTimeout` TypeScript might think it's a
  // Node eventloop kinda timer.

  if (popoverStartTimer) {
    window.clearTimeout(popoverStartTimer)
  }

  popoverCloseTimer = window.setTimeout(() => {
    const popover = getOrCreatePopoverGlobal()
    popover.style.display = 'none'

    // Reset because we're closing the popover, so we have to start from afresh.
    currentlyOpen = null
  }, DELAY_HIDE)
}

let lastFocussedLink: HTMLLinkElement | null = null

export function LinkPreviewPopover() {
  const { t } = useTranslation('popovers')
  const { locale } = useRouter()

  useEffect(() => {
    const element = getOrCreateDescribeByElement()
    if (element) {
      element.textContent = t('keyboard_shortcut_description')
    }
  }, [locale])

  // This is to track if the user entirely tabs out of the window.
  // For example if they go to the address bar.
  useEffect(() => {
    function windowBlur() {
      popoverHide()
    }
    window.addEventListener('blur', windowBlur)
    return () => {
      window.removeEventListener('blur', windowBlur)
    }
  }, [])

  useEffect(() => {
    function showPopover(event: MouseEvent) {
      const target = event.currentTarget as HTMLLinkElement
      popoverShow(target)

      // Just in case you *had* used the keyboard shortcut, but now
      // hovered over something else, reset the last focussed link.
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

    // Note, this is attached, as an event listener, to the `document`
    // meaning an Escape event here could be for anything.
    // But the `popoverHide` function is cheap to call. If the popover
    // was visible, it's hidden now. If it wasn't visible, nothing happens.
    // Because we do other things on Escape, we have to make sure that
    // this Escape was for closing a currently open popover.
    function escapeHandler(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        const popover = getOrCreatePopoverGlobal()
        if (popover.style.display !== 'none') {
          popoverHide()

          // If this is true, the keyboard shortcut was used to open
          // the popover when the link (that can have a popover)
          // was used. So upon, Escape go back to focussing on that link.
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
      // This filters out links that are not internal or in-page
      // and the ones that are in-page anchor links next to the headings.
      // Remember that `link.href` is always absolute because it comes
      // from the DOM. So to test the pathname, we have to parse it
      // and extract the pathname from the whole URL object.
      const { pathname } = new URL(link.href)
      return (
        link.href.startsWith(window.location.origin) &&
        !link.classList.contains('heading-link') &&
        !pathname.startsWith('/public/') &&
        !pathname.startsWith('/assets/') &&
        // This skips those ToolPicker links with `data-tool="vscode"`
        // attribute, for example.
        !link.dataset.tool &&
        !link.dataset.platform
      )
    })

    // Ideally, we'd have an event listener for the entire container and
    // the filter, at "runtime", within by filtering for the target
    // elements we're interested in. However, this is not possible
    // because then when you hover over the text in
    // a tag like <a href="..."><strong>Link</strong></a> the target
    // element is that of the `STRONG` tag.
    // The reason it would be better to have a single event listener and
    // filter is because it would work even if the DOM changes by
    // adding new `<a>` elements.
    for (const link of links) {
      link.addEventListener('mouseover', showPopover)
      link.addEventListener('mouseout', hidePopover)
      link.addEventListener('keydown', keyboardHandler)

      if (!link.getAttribute('aria-roledescription')) {
        link.setAttribute('aria-roledescription', t('role_description'))
      }
      if (!link.getAttribute('aria-describedby')) {
        link.setAttribute('aria-describedby', DESCRIBEDBY_ELEMENT_ID)
      }
    }

    document.addEventListener('keydown', escapeHandler)

    return () => {
      for (const link of links) {
        link.removeEventListener('mouseover', showPopover)
        link.removeEventListener('mouseout', hidePopover)
        link.removeEventListener('keydown', keyboardHandler)
      }
      document.removeEventListener('keydown', escapeHandler)
    }
  }) // Note that this runs on every single mount

  return null
}
