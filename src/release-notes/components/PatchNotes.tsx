import { slug } from 'github-slugger'
import { ReleaseNotePatch } from './types'
import { HeadingLink } from 'src/frame/components/article/HeadingLink'

const SectionToLabelMap: Record<string, string> = {
  features: 'Features',
  bugs: 'Bug fixes',
  known_issues: 'Known issues',
  security_fixes: 'Security fixes',
  changes: 'Changes',
  deprecations: 'Deprecations',
  backups: 'Backups',
  errata: 'Errata',
}

type Props = {
  patch: ReleaseNotePatch
}
export function PatchNotes({ patch }: Props) {
  return (
    <>
      {Object.entries(patch.sections).map(([key, sectionItems]) => {
        const sectionSlug = `${patch.version}-${key.replaceAll('_', '-')}`
        return (
          <div key={key}>
            <HeadingLink as="h3" slug={sectionSlug}>
              {`${patch.version}: ${SectionToLabelMap[key] || 'INVALID SECTION'}`}
            </HeadingLink>

            <ul>
              {sectionItems.map((item, i) => {
                if (typeof item === 'string') {
                  return <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                }

                const headingSlug = item.heading ? slug(item.heading) : `heading${i}`
                return (
                  <li key={headingSlug}>
                    <h4 id={headingSlug}>
                      <a href={`#${headingSlug}`}>{item.heading}</a>
                    </h4>
                    <ul>
                      {item.notes.map((note) => {
                        return <li key={note} dangerouslySetInnerHTML={{ __html: note }} />
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
