import { sentenceCase } from 'change-case'
import GithubSlugger from 'github-slugger'

interface RawPreview {
  title: string
  description?: string
  toggled_on: string[]
  toggled_by: string
  announcement?: unknown
  updates?: unknown
  owning_teams?: string[]
}

interface ProcessedPreview extends Omit<RawPreview, 'announcement' | 'updates'> {
  accept_header: string
  href: string
}

const slugger = new GithubSlugger()
const inputOrPayload = /(Input|Payload)$/m

export default function processPreviews(previews: RawPreview[]): ProcessedPreview[] {
  return previews.map((raw) => {
    let title = sentenceCase(raw.title)
      .replace(/ -.+/, '') // remove any extra info that follows a hyphen
      .replace('it hub', 'itHub') // fix overcorrected `git hub` from sentenceCasing
      .replace(' s ', "'s ") // sentenceCase replaces apostrophes with spaces

    // Add `preview` to the end of titles if needed
    title = title.endsWith('preview') ? title : `${title} preview`

    // filter out schema members that end in `Input` or `Payload`
    const toggled_on = raw.toggled_on.filter(
      (schemaMember: string) => !inputOrPayload.test(schemaMember),
    )

    // remove unnecessary leading colon
    const toggled_by = raw.toggled_by.replace(':', '')

    // add convenience properties
    const accept_header = `application/vnd.github.${toggled_by}+json`

    slugger.reset()
    const href = `/graphql/overview/schema-previews#${slugger.slug(title)}`

    // Preserve all original properties except announcement/updates
    return {
      title,
      description: raw.description,
      toggled_on,
      toggled_by,
      owning_teams: raw.owning_teams,
      accept_header,
      href,
    }
  })
}
