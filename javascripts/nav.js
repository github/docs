export default function () {
  // Open and close mobile nav
  const hamburgerButton = document.querySelector('.nav-mobile-burgerIcon')
  const mobileDropdown = document.querySelector('.nav-mobile-dropdown')

  hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault()
    hamburgerButton.classList.toggle('js-open')
    mobileDropdown.classList.toggle('js-open')
  })
}
