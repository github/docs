import { Label, LabelGroup } from '@primer/react'
import { BugIcon } from '@primer/octicons-react'

type Props = {
  title?: string
  icon?: string
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
  icon: 'bugicon',
}

function setIcon(icon: string) {
  switch (icon) {
    case 'bugicon':
      return <BugIcon size={48} className="mr-4 bgColor-accent-muted p-3 circle fgColor-accent" />
    case 'none':
      return null
    default:
      return null
  }
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
  icon = defaultProps.icon,
  tags = defaultProps.tags,
  description = defaultProps.description,
  image = '',
  spotlight = false,
}: Props) => {
  return (
    <div className="m-2">
      <div
        style={{ minHeight: 200 }}
        className={spotlight ? spotlightClasses : 'd-flex pb-3 border-bottom'}
      >
        {spotlight ? setImage(image) : null}
        {spotlight ? setIcon('none') : setIcon(icon)}
        <div>
          <h3 className="h4">{title}</h3>
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
