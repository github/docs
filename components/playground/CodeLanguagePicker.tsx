import { SelectMenu, Button, Dropdown } from '@primer/components'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'
import { usePlaygroundContext } from 'components/context/PlaygroundContext'

type Props = {
  variant?: 'tabs' | 'dropdown'
}
export const CodeLanguagePicker = ({ variant }: Props) => {
  const router = useRouter()
  const { codeLanguages, currentLanguage } = usePlaygroundContext()
  const routePath = router.asPath.split('?')[0]

  if (variant === 'tabs') {
    return (
      <nav aria-label="Programming Language">
        {codeLanguages.map((language) => {
          return (
            <Link
              key={language.id}
              className="subnav-item"
              href={`${routePath}?langId=${language.id}`}
              aria-current={language.id === currentLanguage.id ? 'page' : undefined}
            >
              {language.label}
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <SelectMenu css className="position-relative">
      <Button as="summary" css>
        {currentLanguage.label} <Dropdown.Caret />
      </Button>
      <SelectMenu.Modal css style={{ minWidth: 300 }} align="right">
        <SelectMenu.Header css>Programming Language</SelectMenu.Header>
        <SelectMenu.List>
          {codeLanguages.map((language) => (
            <SelectMenu.Item
              key={language.id}
              css
              as="a"
              href={`${routePath}?langId=${language.id}`}
              selected={language.id === currentLanguage.id}
            >
              {language.label}
            </SelectMenu.Item>
          ))}
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
  )
}
