import GithubSlugger from 'github-slugger'

const slugger = new GithubSlugger()

export type PropsT = {
  children: string
  as: keyof JSX.IntrinsicElements
  slug?: string
  className?: string
}

export function PermalinkHeader({ children, as: Component, slug, className }: PropsT) {
  slug = slug || slugger.slug(children)
  return (
    <Component id={slug} className={className} tabIndex={-1}>
      <a className="permalink" href={`#${slug}`}>
        {children}
        <span aria-hidden="true" className="permalink-symbol">
          {' '}
          #
        </span>
      </a>
    </Component>
  )
}
