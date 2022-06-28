import { expect, jest } from '@jest/globals'
import { CookieJar } from 'tough-cookie'
import { getDOM, post } from '../helpers/e2etest.js'

describe('POST /events', () => {
  jest.setTimeout(60 * 1000)

  let csrfToken = ''
  const cookieJar = new CookieJar()

  beforeEach(async () => {
    const $ = await getDOM('/en', { cookieJar })
    csrfToken = $('meta[name="csrf-token"]').attr('content')
  })

  async function checkEvent(data, code) {
    const combined = Object.assign({ _csrf: csrfToken }, data)
    const body = JSON.stringify(combined)
    const res = await post('/events', {
      body,
      headers: {
        'content-type': 'application/json',
        'csrf-token': csrfToken,
      },
      cookieJar,
    })
    expect(res.statusCode).toBe(code)
  }

  const baseExample = {
    context: {
      // Primitives
      event_id: 'a35d7f88-3f48-4f36-ad89-5e3c8ebc3df7',
      user: '703d32a8-ed0f-45f9-8d78-a913d4dc6f19',
      version: '1.0.0',
      created: '2020-10-02T17:12:18.620Z',

      // Content information
      path: '/github/docs/issues',
      hostname: 'github.com',
      referrer: 'https://github.com/github/docs',
      search: '?q=is%3Aissue+is%3Aopen+example+',
      href: 'https://github.com/github/docs/issues?q=is%3Aissue+is%3Aopen+example+',
      path_language: 'en',

      // Device information
      os: 'linux',
      os_version: '18.04',
      browser: 'chrome',
      browser_version: '85.0.4183.121',
      viewport_width: 1418,
      viewport_height: 501,

      // Location information
      timezone: -7,
      user_language: 'en-US',
    },
  }

  describe('page', () => {
    const pageExample = { ...baseExample, type: 'page' }

    it('should record a page event', () => checkEvent(pageExample, 200))

    it('should require a type', () => checkEvent(baseExample, 400))

    it('should require an event_id in uuid', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            event_id: 'asdfghjkl',
          },
        },
        400
      ))

    it('should require a user in uuid', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            user: 'asdfghjkl',
          },
        },
        400
      ))

    it('should require a version', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            version: undefined,
          },
        },
        400
      ))

    it('should require created timestamp', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            timestamp: 1234,
          },
        },
        400
      ))

    it('should allow page_event_id', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            page_event_id: baseExample.context.event_id,
          },
        },
        200
      ))

    it('should not allow a honeypot token', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            token: 'zxcv',
          },
        },
        400
      ))

    it('should path be uri-reference', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            path: ' ',
          },
        },
        400
      ))

    it('should hostname be uri-reference', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            hostname: ' ',
          },
        },
        400
      ))

    it('should referrer be uri-reference', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            referrer: ' ',
          },
        },
        400
      ))

    it('should search a string', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            search: 1234,
          },
        },
        400
      ))

    it('should href be uri', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            href: '/example',
          },
        },
        400
      ))

    it('should path_language is a valid option', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            path_language: 'nl',
          },
        },
        400
      ))

    it('should os a valid os option', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            os: 'ubuntu',
          },
        },
        400
      ))

    it('should os_version a string', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            os_version: 25,
          },
        },
        400
      ))

    it('should browser a valid option', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            browser: 'opera',
          },
        },
        400
      ))

    it('should browser_version a string', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            browser_version: 25,
          },
        },
        400
      ))

    it('should viewport_width a number', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            viewport_width: -500,
          },
        },
        400
      ))

    it('should viewport_height a number', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            viewport_height: '53px',
          },
        },
        400
      ))

    it('should timezone in number', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            timezone: 'GMT-0700',
          },
        },
        400
      ))

    it('should user_language is a string', () =>
      checkEvent(
        {
          ...pageExample,
          context: {
            ...pageExample.context,
            user_language: true,
          },
        },
        400
      ))
  })

  describe('exit', () => {
    const exitExample = {
      ...baseExample,
      type: 'exit',
      exit_render_duration: 0.9,
      exit_first_paint: 0.1,
      exit_dom_interactive: 0.2,
      exit_dom_complete: 0.3,
      exit_visit_duration: 5,
      exit_scroll_length: 0.5,
    }

    it('should record an exit event', () => checkEvent(exitExample, 200))

    it('should exit_render_duration is a positive number', () =>
      checkEvent(
        {
          ...exitExample,
          exit_render_duration: -0.5,
        },
        400
      ))

    it('exit_first_paint is a number', () =>
      checkEvent({ ...exitExample, exit_first_paint: 'afjdkl' }, 400))

    it('exit_dom_interactive is a number', () =>
      checkEvent({ ...exitExample, exit_dom_interactive: '202' }, 400))

    it('exit_visit_duration is a number', () =>
      checkEvent({ ...exitExample, exit_visit_duration: '75' }, 400))

    it('exit_scroll_length is a number between 0 and 1', () =>
      checkEvent({ ...exitExample, exit_scroll_length: 1.1 }, 400))
  })

  describe('link', () => {
    const linkExample = {
      ...baseExample,
      type: 'link',
      link_url: 'https://example.com',
    }

    it('should send a link event', () => checkEvent(linkExample, 200))

    it('link_url is a required uri formatted string', () =>
      checkEvent({ ...linkExample, link_url: 'foo' }, 400))
  })

  describe('search', () => {
    const searchExample = {
      ...baseExample,
      type: 'search',
      search_query: 'github private instances',
      search_context: 'private',
    }

    it('should record a search event', () => checkEvent(searchExample, 200))

    it('search_query is required string', () =>
      checkEvent({ ...searchExample, search_query: undefined }, 400))

    it('search_context is optional string', () =>
      checkEvent({ ...searchExample, search_context: undefined }, 200))
  })

  describe('navigate', () => {
    const navigateExample = {
      ...baseExample,
      type: 'navigate',
      navigate_label: 'drop down',
    }

    it('should record a navigate event', () => checkEvent(navigateExample, 200))

    it('navigate_label is optional string', () =>
      checkEvent({ ...navigateExample, navigate_label: undefined }, 200))
  })

  describe('survey', () => {
    const surveyExample = {
      ...baseExample,
      type: 'survey',
      survey_vote: true,
      survey_comment: 'I love this site.',
      survey_email: 'daisy@example.com',
    }

    it('should record a survey event', () => checkEvent(surveyExample, 200))

    it('survey_vote is boolean', () =>
      checkEvent({ ...surveyExample, survey_vote: undefined }, 400))

    it('survey_comment is string', () => {
      checkEvent({ ...surveyExample, survey_comment: 1234 }, 400)
    })

    it('survey_email is email', () => {
      checkEvent({ ...surveyExample, survey_email: 'daisy' }, 400)
    })
  })

  describe('experiment', () => {
    const experimentExample = {
      ...baseExample,
      type: 'experiment',
      experiment_name: 'change-button-copy',
      experiment_variation: 'treatment',
      experiment_success: true,
    }

    it('should record an experiment event', () => checkEvent(experimentExample, 200))

    it('experiment_name is required string', () =>
      checkEvent({ ...experimentExample, experiment_name: undefined }, 400))

    it('experiment_variation is required string', () =>
      checkEvent({ ...experimentExample, experiment_variation: undefined }, 400))

    it('experiment_success is optional boolean', () =>
      checkEvent({ ...experimentExample, experiment_success: undefined }, 200))
  })

  describe('redirect', () => {
    const redirectExample = {
      ...baseExample,
      type: 'redirect',
      redirect_from: 'http://example.com/a',
      redirect_to: 'http://example.com/b',
    }

    it('should record an redirect event', () => checkEvent(redirectExample, 200))

    it('redirect_from is required url', () =>
      checkEvent({ ...redirectExample, redirect_from: ' ' }, 400))

    it('redirect_to is required url', () =>
      checkEvent({ ...redirectExample, redirect_to: undefined }, 400))
  })

  describe('clipboard', () => {
    const clipboardExample = {
      ...baseExample,
      type: 'clipboard',
      clipboard_operation: 'copy',
    }

    it('should record an clipboard event', () => checkEvent(clipboardExample, 200))

    it('clipboard_operation is required copy, paste, cut', () =>
      checkEvent({ ...clipboardExample, clipboard_operation: 'destroy' }, 400))
  })

  describe('print', () => {
    const printExample = {
      ...baseExample,
      type: 'print',
    }

    it('should record a print event', () => checkEvent(printExample, 200))
  })

  describe('preference', () => {
    const preferenceExample = {
      ...baseExample,
      type: 'preference',
      preference_name: 'application',
      preference_value: 'cli',
    }

    it('should record an application event', () => checkEvent(preferenceExample, 200))

    it('preference_name is string', () => {
      checkEvent({ ...preferenceExample, preference_name: null }, 400)
    })

    it('preference_value is string', () => {
      checkEvent({ ...preferenceExample, preference_value: null }, 400)
    })
  })
})
