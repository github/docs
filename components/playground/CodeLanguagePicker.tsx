import { SubNav } from '@primer/react'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'
import { usePlaygroundContext } from 'components/context/PlaygroundContext'

export const CodeLanguagePicker = () => {
  const router = useRouter()
  const { codeLanguages, currentLanguage } = usePlaygroundContext()
  const routePath = router.asPath.split('?')[0]

  return (
    <SubNav>
      <SubNav.Links>
        {codeLanguages.map((language) => (
          <SubNav.Link
            as={Link}
            href={`${routePath}?langId=${language.id}`}
            selected={language.id === currentLanguage.id}
          >
            {language.label}
          </SubNav.Link>
        ))}
      </SubNav.Links>
    </SubNav>
  )
}
