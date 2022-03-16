import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  notes: Array<string>
  enabledForGitHubApps: boolean
}

export function RestNotes({ notes, enabledForGitHubApps }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <h4 className="pt-4">{t('rest.reference.notes')}</h4>
      <ul className="mt-2 pl-3 pb-2">
        {enabledForGitHubApps && (
          <li>
            <a href="/developers/apps">Works with GitHub Apps</a>
          </li>
        )}
        {notes.map((note: string) => {
          return <li>{note}</li>
        })}
      </ul>
    </>
  )
}
