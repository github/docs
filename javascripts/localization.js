export default function () {
  const linkToEnglish = document.querySelector('#to-english-doc')

  if (linkToEnglish) {
    const pathname = window.location.pathname.split('/')
    pathname[1] = 'en'
    linkToEnglish.href = pathname.join('/')
  }
}
