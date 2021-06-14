import parseUserAgent from './user-agent'
const supportedPlatforms = ['mac', 'windows', 'linux']
const detectedPlatforms = new Set()

// Emphasize content for the visitor's OS (inferred from user agent string)

export default function displayPlatformSpecificContent() {
  let platform = getDefaultPlatform() || parseUserAgent().os

  // adjust platform names to fit existing mac/windows/linux scheme
  if (!platform) platform = 'linux'
  if (platform === 'ios') platform = 'mac'

  const platformsInContent = findPlatformSpecificContent(platform)

  hideSwitcherLinks(platformsInContent)

  showContentForPlatform(platform)

  // configure links for switching platform content
  switcherLinks().forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target as HTMLElement
      showContentForPlatform(target.dataset.platform || '')
      findPlatformSpecificContent(target.dataset.platform || '')
    })
  })
}

function showContentForPlatform(platform: string) {
  // (de)activate switcher link appearances
  switcherLinks().forEach((link) => {
    link.dataset.platform === platform
      ? link.classList.add('selected')
      : link.classList.remove('selected')
  })
}

function findPlatformSpecificContent(platform: string) {
  // find all platform-specific *block* elements and hide or show as appropriate
  // example: {{ #mac }} block content {{/mac}}
  const markdowns = Array.from(
    document.querySelectorAll('.extended-markdown')
  ) as Array<HTMLElement>
  markdowns
    .filter((el) => supportedPlatforms.some((platform) => el.classList.contains(platform)))
    .forEach((el) => {
      detectPlatforms(el)
      el.style.display = el.classList.contains(platform) ? '' : 'none'
    })

  // find all platform-specific *inline* elements and hide or show as appropriate
  // example: <span class="platform-mac">inline content</span>
  const platforms = Array.from(
    document.querySelectorAll('.platform-mac, .platform-windows, .platform-linux')
  ) as Array<HTMLElement>
  platforms.forEach((el) => {
    detectPlatforms(el)
    el.style.display = el.classList.contains('platform-' + platform) ? '' : 'none'
  })

  return Array.from(detectedPlatforms) as Array<string>
}

// hide links for any platform-specific sections that are not present
function hideSwitcherLinks(platformsInContent: Array<string>) {
  const links = Array.from(
    document.querySelectorAll('a.platform-switcher')
  ) as Array<HTMLAnchorElement>
  links.forEach((link) => {
    if (platformsInContent.includes(link.dataset.platform || '')) return
    link.style.display = 'none'
  })
}

function detectPlatforms(el: HTMLElement) {
  el.classList.forEach((elClass) => {
    const value = elClass.replace(/platform-/, '')
    if (supportedPlatforms.includes(value)) detectedPlatforms.add(value)
  })
}

function getDefaultPlatform() {
  const el = document.querySelector('[data-default-platform]') as HTMLElement
  if (el) return el.dataset.defaultPlatform
}

function switcherLinks(): Array<HTMLAnchorElement> {
  return Array.from(document.querySelectorAll('a.platform-switcher'))
}
