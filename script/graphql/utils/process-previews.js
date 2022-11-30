const { sentenceCase } = require('change-case')
const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()
const inputOrPayload = /(Input|Payload)$/m

module.exports = function processPreviews (previews) {
  // clean up raw yml data
  previews.forEach(preview => {
    // remove any extra info that follows a hyphen
    preview.title = sentenceCase(preview.title.replace(/ -.+/, ''))
      .replace('it hub', 'itHub') // fix overcorrected `git hub` from sentenceCasing

    // Add `preview` to the end of titles if needed
    preview.title = preview.title.endsWith('preview')
      ? preview.title
      : `${preview.title} preview`

    // filter out schema members that end in `Input` or `Payload`
    preview.toggled_on = preview.toggled_on.filter(schemaMember => !inputOrPayload.test(schemaMember))

    // remove unnecessary leading colon
    preview.toggled_by = preview.toggled_by.replace(':', '')

    // add convenience properties
    preview.accept_header = `application/vnd.github.${preview.toggled_by}+json`

    delete preview.announcement
    delete preview.updates

    slugger.reset()
    preview.href = `/graphql/overview/schema-previews#${slugger.slug(preview.title)}`
  })

  return previews
}
