#!/usr/bin/env node
import { sentenceCase } from 'change-case'
import GithubSlugger from 'github-slugger'
const slugger = new GithubSlugger()
const inputOrPayload = /(Input|Payload)$/m

export default function processPreviews(previews) {
  // clean up raw yml data
  previews.forEach((preview) => {
    preview.title = sentenceCase(preview.title)
      .replace(/ -.+/, '') // remove any extra info that follows a hyphen
      .replace('it hub', 'itHub') // fix overcorrected `git hub` from sentenceCasing
      .replace(' s ', "'s ") // sentenceCase replaces apostrophes with spaces

    // Add `preview` to the end of titles if needed
    preview.title = preview.title.endsWith('preview') ? preview.title : `${preview.title} preview`

    // filter out schema members that end in `Input` or `Payload`
    preview.toggled_on = preview.toggled_on.filter(
      (schemaMember) => !inputOrPayload.test(schemaMember),
    )

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
