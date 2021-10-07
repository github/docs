import { PeopleIcon, CommentDiscussionIcon } from '@primer/octicons-react'

import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { useMainContext } from 'components/context/MainContext'

export const Support = () => {
  const { isEnterprise } = useVersion()
  const { t } = useTranslation('support')
  const { relativePath } = useMainContext()

  let updatedCommunityLink = ''

  if (
    relativePath?.startsWith('codespaces') ||
    relativePath?.startsWith('discussions') ||
    relativePath?.startsWith('sponsors')
  ) {
    const product = relativePath.substring(0, relativePath.indexOf('/'))
    updatedCommunityLink = `https://github.com/github/feedback/discussions/categories/${product}-feedback`
  }

  return (
    <div>
      <h2 className="mb-3 f4">{t`still_need_help`}</h2>
      <div className="mb-2">
        <a
          id="ask-community"
          href={updatedCommunityLink === '' ? 'https://github.community/' : updatedCommunityLink}
          className="Link—secondary text-bold"
        >
          <PeopleIcon size="small" className="octicon mr-1" />
          {updatedCommunityLink === '' ? t`ask_community` : 'Provide GitHub Feedback'}
        </a>
      </div>
      <div>
        <a
          id="contact-us"
          href={
            isEnterprise
              ? 'https://enterprise.github.com/support'
              : 'https://support.github.com/contact'
          }
          className="Link—secondary text-bold"
        >
          <CommentDiscussionIcon size="small" className="octicon mr-1" />
          {t`contact_support`}
        </a>
      </div>
    </div>
  )
}
