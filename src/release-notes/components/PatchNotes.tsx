import { slug } from 'github-slugger'
import { ReleaseNotePatch } from './types'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

const SectionToLabelMap: Record<string, string> = {
  features: 'Features',
  bugs: 'Bug fixes',
  known_issues: 'Known issues',
  security_fixes: 'Security fixes',
  changes: 'Changes',
  deprecations: 'Deprecations',
  backups: 'Backups',
  errata: 'Errata',
  closing_down: 'Closing down',
  retired: 'Retired',
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
                  return <RenderedHTML as="li" key={item} html={item} />
                }

                const headingSlug = item.heading ? slug(item.heading) : `heading${i}`
                return (
                  <li key={headingSlug}>
                    <h4 id={headingSlug}>
                      <a href={`#${headingSlug}`}>{item.heading}</a>
                    </h4>
                    <ul>
                      {item.notes.map((note) => {
                        return <RenderedHTML as="li" key={note} html={note} />
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
