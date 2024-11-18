import { Label, LabelGroup, Link } from '@primer/react'
import {
  BugIcon,
  LightBulbIcon,
  CodeIcon,
  GearIcon,
  RocketIcon,
  BeakerIcon,
  CopilotIcon,
  HubotIcon,
  LogIcon,
  TerminalIcon,
  BookIcon,
} from '@primer/octicons-react'

const Icons = {
  bug: BugIcon,
  lightbulb: LightBulbIcon,
  code: CodeIcon,
  gear: GearIcon,
  rocket: RocketIcon,
  beaker: BeakerIcon,
  copilot: CopilotIcon,
  hubot: HubotIcon,
  log: LogIcon,
  terminal: TerminalIcon,
  book: BookIcon,
}

type IconType = keyof typeof Icons

type Props = {
  title?: string
  icon?: IconType
  url?: string
  description?: string
  tags?: string[]
  spotlight?: boolean
  image?: string
  complexity?: string
}

const defaultProps = {
  title: 'Article Name',
  description:
    'Man bun letterpress put a bird on it la croix offal, meh grailed hot chicken kombucha gochujang messenger bag fit before they sold out lyft.',
  tags: ['Tag Example', 'Tag Example'],
  icon: 'book',
}

function setImage(image: string) {
  return (
    // <div className="d-flex flex-column flex-align-center">
    image ? (
      <div
        style={{
          width: 'max-width',
          height: 200,
          backgroundColor: 'gray',
          marginBottom: 20,
          borderRadius: 5,
        }}
      ></div>
    ) : null
    // </div>
  )
}
const spotlightClasses = 'd-flex flex-column align-items-center'
export const CookBookArticleCard = ({
  title = defaultProps.title,
  icon = defaultProps.icon as IconType,
  tags = defaultProps.tags,
  description = defaultProps.description,
  image = '',
  url,
  spotlight = false,
}: Props) => {
  const setIcon = (icon: keyof typeof Icons) => {
    return Icons[icon] || CopilotIcon
  }

  const IconComponent = setIcon(icon as keyof typeof Icons)
  return (
    <div className="m-2">
      <div
        style={{ minHeight: 200 }}
        className={spotlight ? spotlightClasses : 'd-flex pb-3 border-bottom'}
      >
        {spotlight ? setImage(image) : null}
        {spotlight
          ? null
          : IconComponent && (
              <IconComponent
                size={48}
                className="mr-4 bgColor-accent-muted p-3 circle fgColor-accent"
              />
            )}
        <div>
          <Link href={url}>
            <h3 className="h4">{title}</h3>
          </Link>
          <div className="fgColor-muted mb-3 mt-2">{description}</div>
          <LabelGroup>
            {tags.map((tag, index) => (
              <Label key={index} variant="accent" sx={{ mr: 1 }} size="small">
                {tag}
              </Label> //fix this to have unique keys
            ))}
          </LabelGroup>
        </div>
      </div>
    </div>
  )
}
