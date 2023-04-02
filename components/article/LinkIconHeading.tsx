import { LinkIcon } from '@primer/octicons-react'

type Props = {
  slug: string
}
export const LinkIconHeading = ({ slug }: Props) => {
  return (
    <a className="doctocat-link" href={`#${slug}`}>
      <LinkIcon className="octicon-link" size="small" verticalAlign="middle" />
    </a>
  )
}
