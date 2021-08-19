export default function localization() {
  const linkToEnglish = document.querySelector('#to-english-doc') as HTMLAnchorElement

  if (linkToEnglish) {
    const pathname = window.location.pathname.split('/')
    pathname[1] = 'en'
    linkToEnglish.href = pathname.join('/')
  }
}
