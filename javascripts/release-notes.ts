export default function releaseNotes() {
  // @ts-ignore
  if (window.IS_NEXTJS_PAGE) return

  const patches = Array.from(document.querySelectorAll('.js-release-notes-patch'))
  if (patches.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const { version } = (entry.target as HTMLElement).dataset
        const patchLink = document.querySelector(
          `.js-release-notes-patch-link[data-version="${version}"]`
        )
        patchLink?.classList.toggle('selected', entry.isIntersecting)
      }
    },
    {
      rootMargin: '-40% 0px -50%',
    }
  )

  patches.forEach((patch) => {
    observer.observe(patch)
  })
}
