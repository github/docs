export default function () {
  // function to scroll up to page top
  const PageTopBtn = document.getElementById('js-scroll-top')
  if (!PageTopBtn) return

  PageTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  // show scroll button only when display is scroll down
  window.addEventListener('scroll', function () {
    const y = document.documentElement.scrollTop // get the height from page top
    if (y < 100) {
      PageTopBtn.classList.remove('show')
    } else if (y >= 100) {
      PageTopBtn.classList.add('show')
    }
  })
}
