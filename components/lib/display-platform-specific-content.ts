import Cookies from 'js-cookie'
import parseUserAgent from './user-agent'
import { sendEvent, EventType } from './events'

const supportedPlatforms = ['mac', 'windows', 'linux']
const detectedPlatforms = new Set<string>()

// Emphasize content for the visitor's OS (inferred from user agent string)

export default function displayPlatformSpecificContent() {
  let platform = getDefaultPlatform() || parseUserAgent().os

  // adjust platform names to fit existing mac/windows/linux scheme
  if (!platform) platform = 'linux'
  if (platform === 'ios') platform = 'mac'

  const platformsInContent = getDetectedPlatforms()
  // when the `defaultPlatform` frontmatter isn't set and the article
  // does not define all platforms in the content, documentation is hidden
  // for users with the undefined platform. This sets a default
  // platform for those users to prevent unintentionally hiding content
  if (!platformsInContent.includes(platform)) {
    // uses the order of the supportedPlatforms array to
    // determine the default platform
    platform = supportedPlatforms.filter((elem) => platformsInContent.includes(elem))[0]
  }

  showPlatformSpecificContent(platform)

  hideSwitcherLinks(platformsInContent)

  setActiveSwitcherLinks(platform)

  // configure links for switching platform content
  switcherLinks().forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target as HTMLElement
      setActiveSwitcherLinks(target.dataset.platform || '')
      showPlatformSpecificContent(target.dataset.platform || '')

      Cookies.set('osPreferred', target.dataset.platform || '', {
        sameSite: 'strict',
        secure: true,
      })

      // Send event data
      sendEvent({
        type: EventType.preference,
        preference_name: 'os',
        preference_value: target.dataset.platform,
      })
    })
  })
}

function setActiveSwitcherLinks(platform: string) {
  // (de)activate switcher link appearances
  switcherLinks().forEach((link) => {
    link.dataset.platform === platform
      ? link.classList.add('selected')
      : link.classList.remove('selected')
  })
}

function showPlatformSpecificContent(platform: string) {
  // find all platform-specific *block* elements and hide or show as appropriate
  // example: {{ #mac }} block content {{/mac}}
  const markdowns = Array.from(document.querySelectorAll<HTMLElement>('.extended-markdown'))
  markdowns
    .filter((el) => supportedPlatforms.some((platform) => el.classList.contains(platform)))
    .forEach((el) => {
      el.style.display = el.classList.contains(platform) ? '' : 'none'
    })

  // find all platform-specific *inline* elements and hide or show as appropriate
  // example: <span class="platform-mac">inline content</span>
  const platforms = Array.from(
    document.querySelectorAll<HTMLElement>('.platform-mac, .platform-windows, .platform-linux')
  )
  platforms.forEach((el) => {
    el.style.display = el.classList.contains('platform-' + platform) ? '' : 'none'
  })
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

// gets the list of detected platforms in the current article
function getDetectedPlatforms(): Array<string> {
  // find all platform-specific *block* elements and hide or show as appropriate
  // example: {{ #mac }} block content {{/mac}}
  const allEls = Array.from(document.querySelectorAll('.extended-markdown')) as Array<HTMLElement>
  allEls
    .filter((el) => supportedPlatforms.some((platform) => el.classList.contains(platform)))
    .forEach((el) => detectPlatforms(el))

  // find all platform-specific *inline* elements and hide or show as appropriate
  // example: <span class="platform-mac">inline content</span>
  const platformEls = Array.from(
    document.querySelectorAll<HTMLElement>('.platform-mac, .platform-windows, .platform-linux')
  )
  platformEls.forEach((el) => detectPlatforms(el))

  return Array.from(detectedPlatforms)
}

function detectPlatforms(el: HTMLElement) {
  el.classList.forEach((elClass) => {
    const value = elClass.replace(/platform-/, '')
    if (supportedPlatforms.includes(value)) detectedPlatforms.add(value)
  })
}

function getDefaultPlatform() {
  if (Cookies.get('osPreferred')) return Cookies.get('osPreferred')

  const el = document.querySelector('[data-default-platform]') as HTMLElement
  if (el) return el.dataset.defaultPlatform
}

function switcherLinks(): Array<HTMLAnchorElement> {
  return Array.from(document.querySelectorAll('a.platform-switcher'))
}
