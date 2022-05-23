// This middleware, exclusively in 'development' tries to spot flaws in
// the content you're actively viewing.
// The hopeful assumption is that if you're actively viewing this
// page on localhost, you're actively working on its content.

import path from 'path'

import kleur from 'kleur'

export default async function spotContentFlaws(req, res, next) {
  const { page } = req.context
  if (process.env.NODE_ENV === 'development' && page) {
    const trailingSlashRedirects = (page.redirect_from || []).filter(
      (uri) => uri.endsWith('/') && uri.startsWith('/')
    )
    if (trailingSlashRedirects.length > 0) {
      console.warn(
        `The page ${kleur.bold(path.relative(process.cwd(), page.fullPath))} has ${
          trailingSlashRedirects.length
        } redirect_from entries that have a trailing slash\n  ${kleur.yellow(
          trailingSlashRedirects.join('\n  ')
        )}`
      )
      console.log(
        "If you're actively working on this page, consider",
        kleur.bold('deleting all trailing slashes in redirect_from.\n')
      )
    }
  }

  return next()
}
