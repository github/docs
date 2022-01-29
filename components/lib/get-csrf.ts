export default function getCsrf() {
  const csrfEl = document.querySelector('meta[name="csrf-token"]')
  if (!csrfEl) return ''
  return csrfEl.getAttribute('content')
}
