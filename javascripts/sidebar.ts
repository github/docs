export default function () {
  // TODO override active classes set on server side if sidebar elements are clicked

  const activeMenuItem = document.querySelector('.sidebar .active') as HTMLElement
  if (!activeMenuItem) return

  const verticalBufferAboveActiveItem = 40
  const activeMenuItemPosition = activeMenuItem.offsetTop - verticalBufferAboveActiveItem
  const menu = document.querySelector('.sidebar')

  if (activeMenuItemPosition > window.innerHeight * 0.5) {
    menu?.scrollTo(0, activeMenuItemPosition)
  }

  // if the active category is a standalone category, do not close the other open dropdowns
  const activeStandaloneCategory = document.querySelectorAll(
    '.sidebar-category.active.standalone-category'
  )
  if (activeStandaloneCategory.length) return

  const allOpenDetails = document.querySelectorAll('.sidebar-category:not(.active) details[open]')

  if (allOpenDetails) {
    for (const openDetail of Array.from(allOpenDetails)) {
      openDetail.removeAttribute('open')
      const svgArrowElem = openDetail.querySelector('summary > div > svg')
      svgArrowElem?.remove()
    }
  }
}
