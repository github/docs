import { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Link } from 'components/Link'
import { sendEvent, EventType } from 'src/events/components/events'

import styles from './Survey.module.scss'

enum ViewState {
  START = 'START',
  YES = 'YES',
  NO = 'NO',
  END = 'END',
}

export const Survey = () => {
  const { asPath, locale } = useRouter()
  const { t } = useTranslation('survey')
  const [state, setState] = useState<ViewState>(ViewState.START)
  const [isEmailError, setIsEmailError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Always reset the form if navigating to a new page because what
    // you might have said or started to say belongs exclusively to
    // to the page you started on.
    setState(ViewState.START)
  }, [asPath])

  useEffect(() => {
    // After the form is submitted we need to manually set the focus since we
    // remove the form inputs after submit.  The privacy policy link is the
    // next focusable element in the footer so we focus that.
    if (state === ViewState.END) {
      document
        .querySelector<HTMLAnchorElement>(
          `footer a[href="/${locale}/site-policy/privacy-policies/github-privacy-statement"]`,
        )
        ?.focus()
    }
  }, [state])

  function vote(state: ViewState) {
    return () => {
      trackEvent(getFormData())
      setState(state)
    }
  }

  // Though we set `type="email"` on the email address input which gives us browser
  // validation of the field, that has accessibility issues (e.g. some screen
  // readers won't read the error message) so we need to do manual validation
  // ourselves.
  function handleEmailInputChange() {
    const emailRegex = /[^@\s.][^@\s]*@\[?[a-z0-9.-]+\]?/i
    const surveyEmail = getFormData()?.get('survey-email')?.toString()

    if (surveyEmail?.length === 0 || surveyEmail?.match(emailRegex)) {
      setIsEmailError(false)
    } else {
      setIsEmailError(true)
    }
  }

  function submit(evt: React.FormEvent) {
    evt.preventDefault()
    trackEvent(getFormData())
    if (!isEmailError) {
      setState(ViewState.END)
      setIsEmailError(false)
    }
  }

  function getFormData() {
    if (!formRef.current) return
    return new FormData(formRef.current)
  }

  return (
    <form
      className="f5"
      onSubmit={submit}
      ref={formRef}
      data-testid="survey-form"
      aria-live="polite"
    >
      <h3 id="survey-title" className="f4 mb-3">{t`able_to_find`}</h3>

      {/* Honeypot: token isn't a real field */}
      <input type="text" className="d-none" name="survey-token" />

      {state !== ViewState.END && (
        <div className="radio-group mb-2" role="radiogroup" aria-labelledby="survey-title">
          <input
            className={cx(styles.visuallyHidden, styles.customRadio)}
            id="survey-yes"
            type="radio"
            name="survey-vote"
            value="Y"
            aria-label={t`yes`}
            onChange={vote(ViewState.YES)}
            checked={state === ViewState.YES}
          />
          <label
            className={cx(
              'btn mr-1 color-border-accent-emphasis',
              state === ViewState.YES && 'color-bg-accent-emphasis',
            )}
            htmlFor="survey-yes"
          >
            <ThumbsupIcon size={16} className={state === ViewState.YES ? '' : 'color-fg-muted'} />
          </label>
          <input
            className={cx(styles.visuallyHidden, styles.customRadio)}
            id="survey-no"
            type="radio"
            name="survey-vote"
            value="N"
            aria-label={t`no`}
            onChange={vote(ViewState.NO)}
            checked={state === ViewState.NO}
          />
          <label
            className={cx(
              'btn color-border-accent-emphasis',
              state === ViewState.NO && 'color-bg-danger-emphasis',
            )}
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
          <div className={cx('form-group', isEmailError ? 'warn' : '')}>
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
              onChange={handleEmailInputChange}
              aria-invalid={isEmailError}
              {...(isEmailError ? { 'aria-describedby': 'email-input-validation' } : {})}
            />
            {isEmailError && (
              <p className="note warning" id="email-input-validation">
                {t`email_validation`}
              </p>
            )}
          </div>
          <span className="f6 color-fg-muted">{t`not_support`}</span>
          <div className="d-flex flex-justify-end flex-items-center mt-3">
            <button
              type="button"
              className="btn btn-sm btn-invisible mr-3"
              onClick={() => {
                setState(ViewState.START)
                setIsEmailError(false)
              }}
            >
              Cancel
            </button>
            <button
              disabled={isEmailError}
              type="submit"
              className="btn btn-sm color-border-accent-emphasis"
            >
              {t`send`}
            </button>
          </div>
        </>
      )}

      {state === ViewState.END && (
        <p role="status" className="color-fg-muted f6" data-testid="survey-end">{t`feedback`}</p>
      )}

      <Link
        className="f6 text-underline"
        href={`/${locale}/site-policy/privacy-policies/github-privacy-statement`}
        target="_blank"
      >
        {t`privacy_policy`}
      </Link>
    </form>
  )
}

function trackEvent(formData?: FormData) {
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
