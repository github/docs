import { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
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
  const { asPath } = useRouter()
  const { t } = useTranslation('survey')
  const [state, setState] = useState<ViewState>(ViewState.START)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Always reset the form if navigating to a new page because what
    // you might have said or started to say belongs exclusively to
    // to the page you started on.
    setState(ViewState.START)
  }, [asPath])

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
    <form className="f5" onSubmit={submit} ref={formRef} data-testid="survey-form">
      <h2 className="f4 mb-3">{t`able_to_find`}</h2>

      {/* Honeypot: token isn't a real field */}
      <input type="text" className="d-none" name="survey-token" aria-hidden="true" />

      {state !== ViewState.END && (
        <div className="radio-group mb-2">
          <input
            id="survey-yes"
            type="radio"
            name="survey-vote"
            value="Y"
            aria-label={t`yes`}
            hidden
            onChange={vote(ViewState.YES)}
            checked={state === ViewState.YES}
          />
          <label
            className={cx('btn mr-1', state === ViewState.YES && 'color-bg-accent-emphasis')}
            htmlFor="survey-yes"
          >
            <ThumbsupIcon size={16} className={state === ViewState.YES ? '' : 'color-fg-muted'} />
          </label>
          <input
            id="survey-no"
            type="radio"
            name="survey-vote"
            value="N"
            aria-label={t`no`}
            hidden
            onChange={vote(ViewState.NO)}
            checked={state === ViewState.NO}
          />
          <label
            className={cx('btn', state === ViewState.NO && 'color-bg-danger-emphasis')}
            htmlFor="survey-no"
          >
            <ThumbsdownIcon size={16} className={state === ViewState.NO ? '' : 'color-fg-muted'} />
          </label>
        </div>
      )}

      {[ViewState.YES, ViewState.NO].includes(state) && (
        <>
          <p className="mb-3">
            <label className="d-block mb-1 f6" htmlFor="survey-comment">
              <span>
                {state === ViewState.YES && t`comment_yes_label`}
                {state === ViewState.NO && t`comment_no_label`}
              </span>
              <span className="text-normal color-fg-muted float-right ml-1">{t`optional`}</span>
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
              <span className="text-normal color-fg-muted float-right ml-1">{t`optional`}</span>
            </label>
            <input
              type="email"
              className="form-control input-sm width-full"
              name="survey-email"
              id="survey-email"
              placeholder={t`email_placeholder`}
            />
            <span className="f6 color-fg-muted">{t`not_support`}</span>
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
        <p className="color-fg-muted f6" data-testid="survey-end">{t`feedback`}</p>
      )}

      <Link
        className="f6 text-normal color-fg-accent"
        href="/github/site-policy/github-privacy-statement"
        target="_blank"
      >
        {t`privacy_policy`}
      </Link>
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
