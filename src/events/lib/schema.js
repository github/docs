import { languageKeys } from '#src/languages/lib/languages.js'
import { allVersionKeys } from '#src/versions/lib/all-versions.js'
import { productIds } from '#src/products/lib/all-products.js'
import { allTools } from '#src/tools/lib/all-tools.js'

const versionPattern = '^\\d+(\\.\\d+)?(\\.\\d+)?$' // eslint-disable-line

const context = {
  type: 'object',
  additionalProperties: false,
  required: ['event_id', 'user', 'version', 'created', 'path'],
  properties: {
    // Required of all events
    event_id: {
      type: 'string',
      description: 'The unique identifier of the event.',
      format: 'uuid',
    },
    user: {
      type: 'string',
      description:
        "The unique identifier of the current user performing the event. Please use randomly generated values or hashed values; we don't want to be able to look up in a database.",
      format: 'uuid',
    },
    version: {
      type: 'string',
      description: 'The version of the event schema.',
      pattern: versionPattern,
    },
    created: {
      type: 'string',
      format: 'date-time',
      description: 'The time we created the event; please reference UTC.',
    },
    page_event_id: {
      type: 'string',
      description: 'The id of the corresponding `page` event.',
      format: 'uuid',
    },

    // Content information
    referrer: {
      type: 'string',
      description: 'The browser value of `document.referrer`.',
      format: 'uri-reference',
    },
    href: {
      type: 'string',
      description: 'The browser value of `location.href`.',
      format: 'uri',
    },
    hostname: {
      type: 'string',
      description: 'The browser value of `location.hostname.`',
      format: 'uri-reference',
    },
    path: {
      type: 'string',
      description: 'The browser value of `location.pathname`.',
      format: 'uri-reference',
    },
    search: {
      type: 'string',
      description: 'The browser value of `location.search`.',
    },
    hash: {
      type: 'string',
      description: 'The browser value of `location.hash`.',
    },
    path_language: {
      type: 'string',
      description: 'The language the user is viewing, from the URL path.',
      enum: languageKeys,
    },
    path_version: {
      type: 'string',
      description: 'The GitHub version of the docs, from the URL path.',
      enum: allVersionKeys,
    },
    path_product: {
      type: 'string',
      description: 'The GitHub product the docs are for, from the URL path.',
      enum: productIds.concat(['homepage']),
    },
    path_article: {
      type: 'string',
      description: 'The article path without language or version, from the URL path.',
    },
    page_document_type: {
      type: 'string',
      description: 'The generic page document type based on URL path.',
      enum: ['homepage', 'early-access', 'product', 'category', 'mapTopic', 'article'], // get-document-type.js
    },
    page_type: {
      type: 'string',
      description: 'Optional page type from the content frontmatter.',
      enum: ['overview', 'quick_start', 'tutorial', 'how_to', 'reference', 'rai'], // frontmatter.js
    },
    status: {
      type: 'number',
      description: 'The HTTP response status code of the main page HTML.',
      minimum: 0,
      maximum: 999,
    },
    is_logged_in: {
      type: 'boolean',
      description: 'Anonymous -- whether the user has github.com cookies set.',
    },

    // Device information
    os: {
      type: 'string',
      description: 'The type of operating system the user is working with.',
      enum: ['windows', 'mac', 'linux', 'ios', 'android', 'cros', 'other'],
      default: 'other',
    },
    os_version: {
      type: 'string',
      description: 'The version of the operating system the user is using.',
    },
    browser: {
      type: 'string',
      description: 'The type of browser the user is browsing with.',
      enum: ['chrome', 'safari', 'firefox', 'edge', 'opera', 'other'],
      default: 'other',
    },
    browser_version: {
      type: 'string',
      description: 'The version of the browser the user is browsing with.',
    },
    viewport_width: {
      type: 'number',
      description: 'The viewport width, not the overall device size.',
      minimum: 1,
    },
    viewport_height: {
      type: 'number',
      description: 'The viewport height, not the overall device height.',
      minimum: 1,
    },

    // Location information
    timezone: {
      type: 'number',
      description: 'The timezone the user is in, as `new Date().getTimezoneOffset() / -60`.',
    },
    user_language: {
      type: 'string',
      description: 'The browser value of `navigator.language`.',
    },

    // Preference information
    os_preference: {
      type: 'string',
      enum: ['linux', 'mac', 'windows'],
      description: 'The os for examples selected by the user.',
    },
    application_preference: {
      type: 'string',
      enum: Object.keys(allTools),
      description: 'The application selected by the user.',
    },
    color_mode_preference: {
      enum: ['dark', 'light', 'auto', 'auto:dark', 'auto:light'],
      description: 'The color mode selected by the user.',
    },
    code_display_preference: {
      enum: ['beside', 'inline'],
      description: 'How the user prefers to view code examples.',
    },
  },
}

const page = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^page$',
    },
  },
}

const exit = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^exit$',
    },
    exit_render_duration: {
      type: 'number',
      description: 'How long the server took to render the page content, in seconds.',
      minimum: 0.001,
    },
    exit_first_paint: {
      type: 'number',
      minimum: 0.001,
      description:
        'The duration until `first-contentful-paint`, in seconds. Informs CSS performance.',
    },
    exit_dom_interactive: {
      type: 'number',
      minimum: 0.001,
      description:
        'The duration until `PerformanceNavigationTiming.domInteractive`, in seconds. Informs JavaScript loading performance.',
    },
    exit_dom_complete: {
      type: 'number',
      minimum: 0.001,
      description:
        'The duration until `PerformanceNavigationTiming.domComplete`, in seconds. Informs JavaScript execution performance.',
    },
    exit_visit_duration: {
      type: 'number',
      minimum: 0.001,
      description:
        'The duration of exit.timestamp - page.timestamp, in seconds. Informs bounce rate.',
    },
    exit_scroll_length: {
      type: 'number',
      minimum: 0,
      maximum: 1,
      description: 'The percentage of how far the user scrolled on the page.',
    },
    exit_scroll_flip: {
      type: 'number',
      minimum: 0,
      description: 'The number of times the scroll direction changes.',
    },
  },
}

const link = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'link_url'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^link$',
    },
    link_url: {
      type: 'string',
      format: 'uri',
      description:
        'The href of the anchor tag the user clicked, or the page or object they directed their browser to.',
    },
    link_samesite: {
      type: 'boolean',
      description: 'If the link stays on docs.github.com.',
    },
    link_samepage: {
      type: 'boolean',
      description: 'If the link stays on the same page (hash link).',
    },
    link_container: {
      type: 'string',
      enum: [
        'header',
        'nav',
        'breadcrumbs',
        'title',
        'lead',
        'notifications',
        'article',
        'toc',
        'footer',
        'static',
      ],
      description: 'The part of the page where the user clicked the link.',
    },
  },
}

const hover = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'hover_url'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^hover$',
    },
    hover_url: {
      type: 'string',
      format: 'uri',
      description:
        'The href of the anchor tag the user hovered, or the page or object they directed their browser to.',
    },
    hover_samesite: {
      type: 'boolean',
      description: 'If the hover link stays on docs.github.com.',
    },
  },
}

const search = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'search_query'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^search$',
    },
    search_query: {
      type: 'string',
      description: 'The actual text content of the query string the user sent to the service.',
    },
    search_context: {
      type: 'string',
      description: 'Any additional search context, such as component searched.',
    },
  },
}

const searchResult = {
  type: 'object',
  additionalProperties: false,
  required: [
    'type',
    'context',
    'search_result_query',
    'search_result_index',
    'search_result_total',
    'search_result_rank',
    'search_result_url',
  ],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^searchResult$',
    },
    search_result_query: {
      type: 'string',
      description: 'The query the user searched for.',
    },
    search_result_index: {
      type: 'number',
      description: 'The order position of the user selected search result.',
    },
    search_result_total: {
      type: 'number',
      description: 'The total number of search results we returned for the query.',
    },
    search_result_rank: {
      type: 'number',
      description:
        'The rank score of the order position of the search result, example: `(total - index) / total`.',
    },
    search_result_url: {
      type: 'string',
      description: 'The destination url of the search result the user selected.',
    },
  },
}

const survey = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'survey_vote'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^survey$',
    },
    survey_vote: {
      type: 'boolean',
      description: 'Whether the user found the page helpful.',
    },
    survey_comment: {
      type: 'string',
      description: 'Any textual comments the user wanted to provide.',
    },
    survey_email: {
      type: 'string',
      format: 'email',
      description: "The user's email address, if the user provided and consented.",
    },
    survey_rating: {
      type: 'number',
      description:
        'The computed rating of the quality of the survey comment. Used for spam filtering and quality control.',
    },
    survey_comment_language: {
      type: 'string',
      description:
        'The guessed language of the survey comment. The guessed language is very inaccurate when the string contains fewer than 3 or 4 words.',
    },
  },
}

const experiment = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'experiment_name', 'experiment_variation'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^experiment$',
    },
    experiment_name: {
      type: 'string',
      description: 'The test that this event is part of.',
    },
    experiment_variation: {
      type: 'string',
      description: 'The variation this user we bucketed in, such as control or treatment.',
    },
    experiment_success: {
      type: 'boolean',
      default: true,
      description: 'Whether or not the user successfully performed the test goal.',
    },
  },
}

const clipboard = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'clipboard_operation'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^clipboard$',
    },
    clipboard_operation: {
      type: 'string',
      description: 'Which clipboard operation the user is performing.',
      enum: ['copy', 'paste', 'cut'],
    },
    clipboard_target: {
      type: 'string',
      description: 'How the user got the contents into their clipboard.',
    },
  },
}

const print = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^print$',
    },
  },
}

const preference = {
  type: 'object',
  additionalProperties: false,
  required: ['type', 'context', 'preference_name', 'preference_value'],
  properties: {
    context,
    type: {
      type: 'string',
      pattern: '^preference$',
    },
    preference_name: {
      type: 'string',
      enum: ['application', 'color_mode', 'os', 'code_display'],
      description: 'The preference name, such as os, application, or color_mode',
    },
    preference_value: {
      type: 'string',
      enum: [
        // application
        ...Object.keys(allTools),
        // color_mode
        'dark',
        'light',
        'auto',
        'auto:dark',
        'auto:light',
        // os
        'linux',
        'mac',
        'windows',
        // code_display
        'beside',
        'inline',
      ],
      description: 'The application, color_mode, os, or code_display selected by the user.',
    },
  },
}

const validation = {
  type: 'object',
  additionalProperties: false,
  properties: {
    event_id: { type: 'string', format: 'uuid' },
    version: { type: 'string', pattern: versionPattern },
    created: { type: 'string', format: 'date-time' },
    raw: { type: 'string' },
    // https://ajv.js.org/api.html#error-objects
    keyword: { type: 'string' },
    instance_path: { type: 'string' },
    schema_path: { type: 'string' },
    params: { type: 'string' },
    property_name: { type: 'string' },
    message: { type: 'string' },
    schema: { type: 'string' },
    parent_schema: { type: 'string' },
    data: { type: 'string' },
  },
}

// We are not using `oneOf` to keep the list of errors short.
export const schemas = {
  page,
  exit,
  link,
  hover,
  search,
  searchResult,
  survey,
  experiment,
  clipboard,
  print,
  preference,
  validation,
}

export const hydroNames = {
  page: 'docs.v0.PageEvent',
  exit: 'docs.v0.ExitEvent',
  link: 'docs.v0.LinkEvent',
  hover: 'docs.v0.HoverEvent',
  search: 'docs.v0.SearchEvent',
  searchResult: 'docs.v0.SearchResultEvent',
  survey: 'docs.v0.SurveyEvent',
  experiment: 'docs.v0.ExperimentEvent',
  clipboard: 'docs.v0.ClipboardEvent',
  print: 'docs.v0.PrintEvent',
  preference: 'docs.v0.PreferenceEvent',
  validation: 'docs.v0.ValidationEvent',
}

const schemasKeys = Object.keys(schemas)
const hydroNamesKeys = Object.keys(hydroNames)
if (
  schemasKeys.length !== hydroNamesKeys.length ||
  !schemasKeys.every((k) => hydroNamesKeys.includes(k))
) {
  throw new Error("The keys in 'schemas' doesn't match with the keys in 'hydroNames'")
}
