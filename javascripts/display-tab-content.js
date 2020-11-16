export default function tabs () {
  const tabContent = findTabContent()

  hideTabContent(tabContent)
  showFirstTab()

  // configure links for switching platform content
  tabLinks().forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      console.log(`Tab group: ${event.target.dataset.group}, id: ${event.target.dataset.tab}`)
      hideTabContent(tabContent)
      Array.from(document.querySelectorAll(`.tab.tab-${ event.target.dataset.tab }`))
        //.filter( tab => tab.dataset.group === event.target.dataset.group )
        .forEach( block => {
          block.style.display = ''
        })
      tabLinks().forEach(link_ => {
        link_.dataset.tab == event.target.dataset.tab
          ? link_.classList.add('selected')
          : link_.classList.remove('selected')
      })
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
}
