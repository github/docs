export async function fillCsrf () {
  const response = await fetch('/csrf', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = response.ok ? await response.json() : {}
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'csrf-token')
  meta.setAttribute('content', json.token)
  document.querySelector('head').append(meta)
}

export default function getCsrf () {
  const csrfEl = document
    .querySelector('meta[name="csrf-token"]')
  if (!csrfEl) return ''
  return csrfEl.getAttribute('content')
}
