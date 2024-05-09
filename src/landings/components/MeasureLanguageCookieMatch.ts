/**
 * This component tests if the user has a language cookie whose
 * value does not match the current URL. For example, the user has,
 * at some point, explictitly selected a language in the drop-down
 * but is now on a URL whose language prefix is not the same.
 * We're curious to see how often this happens in the wild.
 *
 * This experiment is meant to be temporary. At least until we know and
 * have documented how often this happens.
 *
 */

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { sendEvent, EventType } from 'src/events/components/events'

const EXPERIMENT_NAME = 'language_cookie_match'

const COOKIE_KEY = 'user_language'

function sendExperimentResult(desiredLanguage: string, matched: boolean) {
  sendEvent({
    type: EventType.experiment,
    experiment_name: EXPERIMENT_NAME,
    experiment_variation: desiredLanguage,
    experiment_success: matched,
  })
}

export function MeasureLanguageCookieMismatch() {
  const { locale } = useRouter()

  useEffect(() => {
    try {
      const cookie = Cookies.get(COOKIE_KEY)
      if (cookie) {
        sendExperimentResult(cookie, cookie === locale)
      }
    } catch (error) {
      console.error('Error measuring language cookie match', error)
    }
  }, [locale])

  return null
}
