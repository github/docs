import { useState, useRef } from 'react'
import cx from 'classnames'
import { ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { sendEvent, EventType } from 'components/lib/events'

enum ViewState {
  START = 'START',
  YES = 'YES',
  NO = 'NO',
  END = 'END',
}

export const Survey = () => {
  const { t } = useTranslation('survey')
  const [state, setState] = useState<ViewState>(ViewState.START)
  const formRef = useRef<HTMLFormElement>(null)

  function vote(state: ViewState) {
    return () => {
      trackEvent(getFormData())
      setState(state)
    }
  }

  function submit(evt: React.FormEvent) {
    evt.preventDefault()
    trackEvent(getFormData())
    setState(ViewState.END)
  }

  function getFormData() {
    if (!formRef.current) return
    return new FormData(formRef.current)
  }

  return (
    <form className="f5 js-survey" onSubmit={submit} ref={formRef} data-testid="survey-form">
      <h2 className="mb-1 f4">
        {t`able_to_find`}

        <Link
          className="f6 text-normal ml-3 color-text-link"
          href="/github/site-policy/github-privacy-statement"
          target="_blank"
        >
          {t`privacy_policy`}
        </Link>
      </h2>

      {/* Honeypot: token isn't a real field */}
      <input type="text" className="d-none" name="survey-token" aria-hidden="true" />

      {state !== ViewState.END && (
        <p className="radio-group">
          <input
            id="survey-yes"
            type="radio"
            name="survey-vote"
            value="Y"
            aria-label={t`yes`}
            hidden
            onChange={vote(ViewState.YES)}
            defaultChecked={state === ViewState.YES}
            checked={state === ViewState.YES}
          />
          <label
            className={cx('btn mr-1', state === ViewState.YES && 'color-bg-info-inverse')}
            htmlFor="survey-yes"
          >
            <ThumbsupIcon
              size={24}
              className={state === ViewState.YES ? 'color-text-primary' : 'color-text-tertiary'}
            />
          </label>
          <input
            id="survey-no"
            type="radio"
            name="survey-vote"
            value="N"
            aria-label={t`no`}
            hidden
            onChange={vote(ViewState.NO)}
            defaultChecked={state === ViewState.NO}
            checked={state === ViewState.NO}
          />
          <label
            className={cx('btn', state === ViewState.NO && 'color-bg-danger-inverse')}
            htmlFor="survey-no"
          >
            <ThumbsdownIcon
              size={24}
              className={state === ViewState.NO ? 'color-text-primary' : 'color-text-tertiary'}
            />
          </label>
        </p>
      )}

      {[ViewState.YES, ViewState.NO].includes(state) && (
        <>
          <p className="mb-3">
            <label className="d-block mb-1 f6" htmlFor="survey-comment">
              <span>
                {state === ViewState.YES && t`comment_yes_label`}
                {state === ViewState.NO && t`comment_no_label`}
              </span>
              <span className="text-normal color-text-tertiary float-right ml-1">
                {t`optional`}
              </span>
            </label>
            <textarea
              className="form-control input-sm width-full"
              name="survey-comment"
              id="survey-comment"
            ></textarea>
          </p>
          <p>
            <label className="d-block mb-1 f6" htmlFor="survey-email">
              {t`email_label`}
              <span className="text-normal color-text-tertiary float-right ml-1">
                {t`optional`}
              </span>
            </label>
            <input
              type="email"
              className="form-control input-sm width-full"
              name="survey-email"
              id="survey-email"
              placeholder={t`email_placeholder`}
            />
            <span className="f6 color-text-secondary">{t`not_support`}</span>
          </p>
          <div className="d-flex flex-justify-end flex-items-center mt-3">
            <button
              type="button"
              className="btn btn-sm btn-invisible mr-3"
              onClick={() => setState(ViewState.START)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-sm">
              {t`send`}
            </button>
          </div>
        </>
      )}

      {state === ViewState.END && (
        <p className="color-text-secondary f6" data-testid="survey-end">{t`feedback`}</p>
      )}
    </form>
  )
}

function trackEvent(formData: FormData | undefined) {
  if (!formData) return
  // Nota bene: convert empty strings to undefined
  return sendEvent({
    type: EventType.survey,
    survey_token: (formData.get('survey-token') as string) || undefined, // Honeypot
    survey_vote: formData.get('survey-vote') === 'Y',
    survey_comment: (formData.get('survey-comment') as string) || undefined,
    survey_email: (formData.get('survey-email') as string) || undefined,
  })
}
