import { Label, LabelGroup, Link } from '@primer/react'
import { ValidOcticon, getOcticonComponent } from '../lib/octicons'

import styles from './CookBookArticleCard.module.scss'

type IconType = ValidOcticon

type Props = {
  title: string
  icon?: IconType
  url: string
  description: string
  tags: string[]
  spotlight?: boolean
  image?: string
  complexity?: string
}

function setImage(image: string, alt: string) {
  return image ? <img src={image} alt={alt} className={styles.spotlightImage} /> : null
}
const spotlightClasses = 'd-flex flex-column align-items-center'
export const CookBookArticleCard = ({
  title,
  icon,
  tags,
  description,
  image = '',
  url,
  spotlight = false,
}: Props) => {
  const IconComponent = getOcticonComponent(icon)
  return (
    <div className="m-2">
      <div
        className={`${styles.cardContainer} ${spotlight ? spotlightClasses : 'd-flex pb-3 border-bottom'}`}
      >
        {spotlight ? setImage(image, title) : null}
        {spotlight
          ? null
          : IconComponent && (
              <IconComponent
                size={48}
                className="mr-4 bgColor-accent-muted p-3 circle fgColor-accent"
              />
            )}
        <div>
          <h3 className="h4 fgColor-accent">
            <Link href={url}>{title}</Link>
          </h3>
          <div className="fgColor-muted mb-3 mt-2">{description}</div>
          <LabelGroup>
            {tags.map((tag, index) => (
              <Label key={index} variant="accent" className={styles.label} size="small">
                {tag}
              </Label>
            ))}
          </LabelGroup>
        </div>
      </div>
    </div>
  )
}
