import { useEffect } from 'react'

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

function getOrCreatePopoverGlobal() {
  let popoverGlobal = document.querySelector('div.Popover') as HTMLDivElement | null
  if (!popoverGlobal) {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('data-testid', 'popover')
    wrapper.classList.add('Popover', 'position-absolute')
    wrapper.style.display = 'none'
    wrapper.style.outline = 'none'
    wrapper.style.zIndex = `100`
    const inner = document.createElement('div')
    // Note that this is lacking the 'Popover-message--bottom-left'
    // or 'Popover-message--top-right`. These get set later when we
    // know where the popover message should appear on the screen.
    inner.classList.add(
      ...'Popover-message Popover-message--large p-3 Box color-shadow-large'.split(/\s+/g)
    )
    inner.style.width = `360px`

    const product = document.createElement('p')
    product.classList.add('product')
    product.classList.add('f6')
    product.classList.add('color-fg-muted')
    inner.appendChild(product)
    inner.appendChild(product)

    const title = document.createElement('h4')
    title.classList.add('h5')
    title.classList.add('my-1')
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
  }
  return popoverGlobal
}

function popoverWrap(element: HTMLLinkElement) {
  if (element.parentElement && element.parentElement.classList.contains('Popover')) {
    return
  }
  let title = element.dataset.title
  let product = element.dataset.productTitle || ''
  let intro = element.dataset.intro || ''
  let anchor = ''

  if (!title) {
    // TEMPORARY
    // We're currently only activating this functionalty on a subset of pages.
    // In fact, only on /$locale/pages/
    // On the server-side, we decide this by setting or not setting the
    // data attributes on the tags. But for in-page anchor links we don't
    // rely on the server.
    // We can remove this if statement once preview hover cards are
    // enabled everywhere.
    const pathnameSplit = new URL(element.href).pathname.split('/')
    // Check for both when you're on free-pro-team@latest and any
    // other version too.
    if (!(pathnameSplit[2] === 'pages' || pathnameSplit[3] === 'pages')) return

    // But, is it an in-page anchor link? If so, get the title, intro
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
    }
  }

  if (!title) return

  const popover = getOrCreatePopoverGlobal()
  const productHead = popover.querySelector('p.product') as HTMLParagraphElement | null
  if (productHead) {
    if (product) {
      productHead.textContent = product
      productHead.style.display = 'block'
    } else {
      productHead.style.display = 'none'
    }
  }

  const anchorElement = popover.querySelector('p.anchor') as HTMLParagraphElement | null
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

  const header = popover.querySelector('h4')
  if (header) header.textContent = title

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

function popoverShow(target: HTMLLinkElement) {
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
    popoverWrap(target)
  } else {
    popoverStartTimer = window.setTimeout(() => {
      popoverWrap(target)
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

function testTarget(target: HTMLLinkElement) {
  // Return true if the element is an A tag, whose `href` starts with
  // a `/`, is contained in either the article-contents (the meat of the article)
  // or the article-intro (which contain product callouts), and it's not one of
  // those permalink ones next to headings (with the chain looking icon).
  return (
    target.tagName === 'A' &&
    target.href.startsWith(window.location.origin) &&
    target.closest('#article-contents, #article-intro') &&
    !target.classList.contains('doctocat-link')
  )
}

export function LinkPreviewPopover() {
  useEffect(() => {
    // This event handler function is used for clicks anywhere in
    // the `#article-contents` div. So we need to filter within.
    function showPopover(event: MouseEvent) {
      const target = event.target as HTMLLinkElement
      if (testTarget(target)) {
        popoverShow(target)
      }
    }
    function hidePopover(event: MouseEvent) {
      const target = event.target as HTMLLinkElement
      if (testTarget(target)) {
        popoverHide()
      }
    }

    // The reason we have an event listener for ALL things within the
    // <div>, instead of one for every `a[href]` element, is because
    // this way we're prepared for the fact that new `a` elements
    // might get introduced some other way. For example, if there's
    // some any other code that does a `container.appendChild(newLink)`
    const container = document.querySelector<HTMLDivElement>('#main-content')
    if (container) {
      container.addEventListener('mouseover', showPopover)
      container.addEventListener('mouseout', hidePopover)
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseover', showPopover)
        container.removeEventListener('mouseout', hidePopover)
      }
    }
  }) // Note that this runs on every single mount

  return null
}
