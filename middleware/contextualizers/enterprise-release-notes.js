const renderContent = require('../../lib/render-content')
const patterns = require('../../lib/patterns')

module.exports = async (req, res, next) => {
  // The `/release-notes` sub-path
  if (!req.path.endsWith('/release-notes')) return next()

  // ignore paths that don't have an enterprise version number
  if (!patterns.getEnterpriseServerNumber.test(req.path)) return next()

  // extract enterprise version from path, e.g. 2.16
  const requestedVersion = req.path.match(patterns.getEnterpriseServerNumber)[1]

  const versionString = `${requestedVersion.replace(/\./g, '-')}`

  const allReleaseNotes = req.context.site.data['release-notes']

  // This version doesn't have any release notes - let's be helpful and redirect
  // to the notes on `enterprise.github.com`
  if (!allReleaseNotes || !allReleaseNotes[versionString]) {
    return res.redirect(`https://enterprise.github.com/releases/${requestedVersion}.0/notes`)
  }

  const releaseNotes = allReleaseNotes[versionString]
  const keys = Object.keys(releaseNotes)
  // Turn { [key]: { notes, intro, date } }
  // into [{ version, notes, intro, date }]
  const patches = keys
    .sort((a, b) => {
      if (a > b) return -1
      if (a < b) return 1
      return 0
    })
    .map(key => ({ version: `${requestedVersion}.${key}`, ...releaseNotes[key] }))

  const renderedPatches = await Promise.all(patches.map(async patch => {
    // Render the intro block, it might contain markdown formatting
    patch.intro = await renderContent(patch.intro, req.context)

    // Run the notes through the markdown rendering pipeline
    patch.notes = await Promise.all(patch.notes.map(async note => {
      if (note.note) note.note = await renderContent(note.note, req.context)
      return note
    }))

    // Sort the notes into sections
    // Takes an array of notes: Array<{ note, type }>
    // Turns it into { [type]: [{ note }] }
    patch.sortedNotes = patch.notes.reduce((prev, curr) => {
      const existingObj = prev.find(o => o.title === curr.type)
      if (!existingObj) {
        prev.push({ title: curr.type, notes: [curr] })
      } else {
        existingObj.notes.push(curr)
      }
      return prev
    }, [])

    return patch
  }))

  req.context.releaseNotes = renderedPatches

  return next()
}
