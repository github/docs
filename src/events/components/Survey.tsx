import { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
import { Spinner } from '@primer/react'
import useSWR from 'swr'

import { useTranslation } from 'src/languages/components/useTranslation'
import { Link } from 'src/frame/components/Link'
import { sendEvent, EventType, startVisitTime } from 'src/events/components/events'

import styles from './Survey.module.scss'

enum ViewState {
  START = 'START',
  NEXT = 'NEXT',
  END = 'END',
}

enum VoteState {
  YES = 'YES',
  NO = 'NO',
}

type EventData = {
  vote: boolean
  token?: string
  comment?: string
  email?: string
  rating?: number
}

export const Survey = () => {
  const { asPath, locale } = useRouter()
  const { t } = useTranslation('survey')
  const [state, setState] = useState<ViewState>(ViewState.START)
  const [voteState, setVoteState] = useState<VoteState | null>(null)
  const [isEmailError, setIsEmailError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [comment, setComment] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    // Always reset the form if navigating to a new page because what
    // you might have said or started to say belongs exclusively to
    // to the page you started on.
    setState(ViewState.START)
    setVoteState(null)
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

  function vote(vote: VoteState) {
    return () => {
      trackEvent(getEventData(vote === VoteState.YES))
      setVoteState(vote)
    }
  }

  // Though we set `type="email"` on the email address input which gives us browser
  // validation of the field, that has accessibility issues (e.g. some screen
  // readers won't read the error message) so we need to do manual validation
  // ourselves.
  useEffect(() => {
    const emailRegex = /[^@\s.][^@\s]*@\[?[a-z0-9.-]+\]?/i
    if (!email.trim() || emailRegex.test(email)) {
      setIsEmailError(false)
    } else {
      setIsEmailError(true)
    }
  }, [email])

  const { data, error, isLoading } = useSWR(
    state === ViewState.NEXT && comment.trim() ? '/api/events/survey/preview/v1' : null,
    async (url: string) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: comment.trim(),
          locale,
          url: `/${locale}${asPath}`,
          vote: voteState,
          token,
        }),
      })
      if (response.ok) {
        return await response.json()
      } else {
        throw new Error(`${response.status} on preview`)
      }
    },
  )

  const hasPreview = !!data && !error

  function submit(evt: React.FormEvent) {
    evt.preventDefault()
    if (voteState === null) return
    if (hasPreview) {
      trackEvent(getEventData(voteState === VoteState.YES))
      if (!isEmailError) {
        setState(ViewState.END)
        setIsEmailError(false)
        setComment('')
      }
    } else if (comment.trim()) {
      setState(ViewState.NEXT)
    }
  }

  function getEventData(vote: boolean): EventData {
    const rating = data?.rating
    return {
      vote,
      comment,
      email,
      token,
      rating,
    }
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
      <input
        type="text"
        className="d-none"
        name="survey-token"
        value={token}
        onChange={(event) => setToken(event.target.value)}
      />

      {state !== ViewState.END && (
        <div className="radio-group mb-2" role="radiogroup" aria-labelledby="survey-title">
          <input
            className={cx(styles.visuallyHidden, styles.customRadio)}
            id="survey-yes"
            type="radio"
            name="survey-vote"
            value="Y"
            aria-label={t`yes`}
            onChange={vote(VoteState.YES)}
            checked={voteState === VoteState.YES}
          />
          <label
            className={cx(
              'btn mr-1 color-border-accent-emphasis',
              voteState === VoteState.YES && 'color-bg-accent-emphasis',
            )}
            htmlFor="survey-yes"
          >
            <span className="visually-hidden">{t`yes`}</span>
            <ThumbsupIcon
              size={16}
              className={voteState === VoteState.YES ? '' : 'color-fg-muted'}
            />
          </label>
          <input
            className={cx(styles.visuallyHidden, styles.customRadio)}
            id="survey-no"
            type="radio"
            name="survey-vote"
            value="N"
            aria-label={t`no`}
            onChange={vote(VoteState.NO)}
            checked={voteState === VoteState.NO}
          />
          <label
            className={cx(
              'btn color-border-accent-emphasis',
              voteState === VoteState.NO && 'color-bg-danger-emphasis',
            )}
            htmlFor="survey-no"
          >
            <span className="visually-hidden">{t`no`}</span>
            <ThumbsdownIcon
              size={16}
              className={voteState === VoteState.NO ? '' : 'color-fg-muted'}
            />
          </label>
        </div>
      )}

      {error && <span className="f6 color-fg-danger">{t`server_error`}</span>}

      {[ViewState.START, ViewState.NEXT].includes(state) && voteState && (
        <>
          <p className="mb-3">
            <label className="d-block mb-1 f6" htmlFor="survey-comment">
              <span>
                {voteState === VoteState.YES && t`comment_yes_label`}
                {voteState === VoteState.NO && t`comment_no_label`}
              </span>
            </label>
            <textarea
              className="form-control input-sm width-full"
              name="survey-comment"
              id="survey-comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
          </p>
          {hasPreview && (
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={isEmailError}
                {...(isEmailError ? { 'aria-describedby': 'email-input-validation' } : {})}
              />
              {isEmailError && (
                <p className="note warning" id="email-input-validation">
                  {t`email_validation`}
                </p>
              )}
            </div>
          )}

          {hasPreview && (
            <span
              className="f6 color-fg-muted"
              dangerouslySetInnerHTML={{ __html: t`not_support` }}
            ></span>
          )}
          <div className="d-flex flex-justify-end flex-items-center mt-3">
            <button
              type="button"
              className="btn btn-sm btn-invisible mr-3"
              onClick={() => {
                setState(ViewState.START)
                setVoteState(null)
                setIsEmailError(false)
              }}
            >
              Cancel
            </button>
            {hasPreview ? (
              <button
                disabled={isEmailError}
                type="submit"
                className="btn btn-sm color-border-accent-emphasis"
              >
                {t`send`}
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-sm color-border-accent-emphasis"
                disabled={isLoading || !comment.trim()}
              >
                {t`next`}
                {isLoading && (
                  <>
                    {' '}
                    <Spinner size="small" />
                  </>
                )}
              </button>
            )}
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

function trackEvent(eventData: EventData) {
  // Nota bene: convert empty strings to undefined
  return sendEvent({
    type: EventType.survey,
    survey_token: eventData.token || undefined, // Honeypot
    survey_vote: eventData.vote,
    survey_comment: eventData.comment || undefined,
    survey_email: eventData.email || undefined,
    survey_visit_duration: (Date.now() - startVisitTime) / 1000,
    survey_rating: eventData.rating,
  })
}
