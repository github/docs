import { useEffect } from 'react'

// We delay the closing over the popover slightly in case the mouse
// movement either comes back (mouseover, mouseout, and back to mouseover)
// or if the user moves the mouse from the link to the popover itself
// and vice versa.
const DELAY = 300

// A global that is used for a slow/delayed closing of the popovers.
// It can be global because there's only 1 popover DOM node that gets
// created the first time it's needed.
let popoverCloseTimer: number | null = null

function getOrCreatePopoverGlobal() {
  let popoverGlobal = document.querySelector('div.Popover') as HTMLDivElement | null
  if (!popoverGlobal) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('Popover', 'position-absolute')
    wrapper.style.display = 'none'
    wrapper.style.outline = 'none'
    wrapper.style.zIndex = `100`
    const inner = document.createElement('div')
    inner.classList.add(
      ...'Popover-message Popover-message--large p-3 Box color-shadow-large Popover-message--bottom-left'.split(
        /\s+/g
      )
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
      }, DELAY)
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

  // We can't know what the height of the popover element is when it's
  // `display:none` so we guess offset to the offset and adjust it later.
  popover.style.top = `${top - 100}px`
  popover.style.left = `${left}px`
  popover.style.display = 'block'

  popover.style.top = `${top - popover.offsetHeight - 10}px`
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

function popoverHide() {
  // Important to use `window.setTimeout` instead of `setTimeout` so
  // that TypeScript knows which kind of timeout we're talking about.
  // If you use plain `setTimeout` TypeScript might think it's a
  // Node eventloop kinda timer.
  popoverCloseTimer = window.setTimeout(() => {
    const popover = getOrCreatePopoverGlobal()
    popover.style.display = 'none'
  }, DELAY)
}

function testTarget(target: HTMLLinkElement) {
  // Return true if the element is an A tag, whose `href` starts with
  // a `/`, and it's not one of those permalink ones next to headings
  // (with the chain looking icon).
  return (
    target.tagName === 'A' &&
    target.href.startsWith(window.location.origin) &&
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
        popoverWrap(target)
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
    const container = document.querySelector<HTMLDivElement>('#article-contents')
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
