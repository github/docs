export default function tabs () {
  const tabContent = findTabContent()

  hideTabContent(tabContent)
  showFirstTab()

  // configure links for switching platform content
  tabLinks().forEach(link => {
    // TODO: stop browser from scrolling
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const tab = event.target
      console.log(`Tab group: ${tab.dataset.group}, id: ${tab.dataset.tab}`)
      const offset = tab.getBoundingClientRect().top - window.scrollY
      hideTabContent(tabContent)
      Array.from(document.querySelectorAll(`.tab.tab-${ tab.dataset.tab }`))
        //.filter( tab => tab.dataset.group === tab.dataset.group )
        .forEach( block => {
          block.style.display = ''
        })
      tabLinks().forEach(link_ => {
        link_.dataset.tab == tab.dataset.tab
          ? link_.classList.add('selected')
          : link_.classList.remove('selected')
      })
      // Keep relative offset of tab in viewport to avoid jumping content
      window.scrollTo(window.scrollX, tab.getBoundingClientRect().top - offset)
    })
  })
}

function findTabs () {
  return Array.from(document.querySelectorAll('.tabs'))
}

function findTabContent () {
  return Array.from(document.querySelectorAll('.tab'))
}

function tabLinks () {
  return Array.from(document.querySelectorAll('.tabs a'))
}

function hideTabContent (tabContent) {
  tabContent
    .forEach(block => {
      block.style.display = 'none'
    })
}

// TODO: For every tab group, determine default (first) tab and select respective tab in other groups (order can vary!)
function showFirstTab () {
  let initialTabPerGroup = new Map()
  tabLinks().forEach( tab => {
    if (!initialTabPerGroup.has(tab.dataset.group)) {
      initialTabPerGroup.set(tab.dataset.group, tab.dataset.tab)
    }
  })
  tabLinks().forEach( tab => {
    if (tab.dataset.tab === initialTabPerGroup.get(tab.dataset.group)) {
      tab.classList.add('selected')
      // TODO: distinguish groups
      Array.from(document.querySelectorAll(`.tab.tab-${ tab.dataset.tab }`))
      .forEach( block => {
        block.style.display = ''
      })
    }
  })

  /*
  console.dir(initialTabPerGroup)
  Array.from(document.querySelectorAll('.tabs a:nth-child(1)'))
    .forEach( tab => {
      tab.classList.add('selected')
      //tab.dataset.group
      Array.from(document.querySelectorAll(`.tab.tab-${ tab.dataset.tab }`))
        .forEach(block => {
          //console.log(`Show first tab: ${ Array.from(block.classList).join(', ') }`)
          block.style.display = ''
        })
    })
  */
}
