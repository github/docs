import { ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'

export const Survey = () => {
  const { t } = useTranslation('survey')

  return (
    <form className="js-survey f5">
      <h2 data-help-start data-help-yes data-help-no className="mb-1 f4">
        {t`able_to_find`}
      </h2>
      <p className="f6">
        <a href="/github/site-policy/github-privacy-statement">Privacy policy</a>
      </p>
      <p className="radio-group" data-help-start data-help-yes data-help-no>
        <input
          hidden
          id="survey-yes"
          type="radio"
          name="survey-vote"
          value="Yes"
          aria-label={t('yes')}
        />
        <label className="btn x-radio-label mr-1" htmlFor="survey-yes">
          <ThumbsupIcon size={24} className="color-text-tertiary" />
        </label>
        <input
          hidden
          id="survey-no"
          type="radio"
          name="survey-vote"
          value="No"
          aria-label={t`no`}
        />
        <label className="btn x-radio-label" htmlFor="survey-no">
          <ThumbsdownIcon size={24} className="color-text-tertiary" />
        </label>
      </p>
      <p className="color-text-secondary f6" hidden data-help-yes>
        {t('yes_feedback')}
      </p>
      <p className="color-text-secondary f6" hidden data-help-no>
        {t('no_feedback')}
      </p>
      <input type="text" className="d-none" name="survey-token" aria-hidden="true" />
      <p hidden data-help-no>
        <label className="d-block mb-1 f6" htmlFor="survey-comment">
          <span>{t('comment_label')}</span>
          <span className="text-normal color-text-tertiary float-right ml-1">{t('optional')}</span>
        </label>
        <textarea
          className="form-control input-sm width-full"
          name="survey-comment"
          id="survey-comment"
        ></textarea>
      </p>
      <p>
        <label className="d-block mb-1 f6" htmlFor="survey-email" hidden data-help-no>
          {t('email_label')}
          <span className="text-normal color-text-tertiary float-right ml-1">{t('optional')}</span>
        </label>
        <input
          type="email"
          className="form-control input-sm width-full"
          name="survey-email"
          id="survey-email"
          placeholder={t('email_placeholder')}
          hidden
          data-help-yes
          data-help-no
        />
      </p>
      <p className="text-right" hidden data-help-yes data-help-no>
        <button type="submit" className="btn btn-sm">
          {t('send')}
        </button>
      </p>
      <p className="color-text-secondary f6" hidden data-help-end>
        {t('feedback')}
      </p>
    </form>
  )
}
