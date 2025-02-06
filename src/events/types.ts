export enum EventType {
  aiSearchResult = 'aiSearchResult',
  page = 'page',
  exit = 'exit',
  link = 'link',
  hover = 'hover',
  search = 'search',
  searchResult = 'searchResult',
  survey = 'survey',
  experiment = 'experiment',
  preference = 'preference',
  clipboard = 'clipboard',
  print = 'print',
}

export type EventProps = {
  type: EventType
  version: string
  context: {
    event_id: string
    user: string
    version: string
    created: string
    page_event_id: string
    referrer: string
    href: string
    hostname: string
    path: string
    search: string
    hash: string
    path_language: string
    path_version: string
    path_article: string
    path_document_type: string
    path_type: string
    status: number
    is_logged_in: boolean
    dotcom_user: string
    is_staff: boolean
    os: string
    os_version: string
    browser: string
    browser_version: string
    timezone: number
    user_language: string
    application_preference: string
    color_mode_preference: string
    os_preference: string
    code_display_preference: string
    event_group_key?: string
    event_group_id?: string
  }
}

export type EventPropsByType = {
  [EventType.aiSearchResult]: {
    ai_search_result_query: string
    ai_search_result_response: string
    // Dynamic JSON string of an array of "link" objects in the form:
    // [{ "type": "reference" | "inline", "url": "https://..", "product": "issues" | "pages" | ... }, ...]
    ai_search_result_links_json: string
  }
  [EventType.clipboard]: {
    clipboard_operation: string
    clipboard_target?: string
  }
  [EventType.exit]: {
    exit_render_duration?: number
    exit_first_paint?: number
    exit_dom_interactive?: number
    exit_dom_complete?: number
    exit_visit_duration?: number
    exit_scroll_length?: number
    exit_scroll_flip?: number
  }
  [EventType.experiment]: {
    experiment_name: string
    experiment_variation: string
    experiment_success?: boolean
  }
  [EventType.hover]: {
    hover_url: string
    hover_samesite?: boolean
  }
  [EventType.link]: {
    link_url: string
    link_samesite?: boolean
    link_samepage?: boolean
    link_container?: string
  }
  [EventType.page]: {}
  [EventType.preference]: {
    preference_name: string
    preference_value: string
  }
  [EventType.print]: {}
  [EventType.search]: {
    search_query: string
    search_context?: string
  }
  [EventType.searchResult]: {
    search_result_query: string
    search_result_index: number
    search_result_total: number
    search_result_rank: number
    search_result_url: string
  }
  [EventType.survey]: {
    survey_token?: string // Honeypot, doesn't exist in schema
    survey_vote: boolean
    survey_comment?: string
    survey_email?: string
    survey_rating?: number
    survey_comment_language?: string
  }
}
