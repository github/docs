export enum EventType {
  aiSearchResult = 'aiSearchResult',
  page = 'page',
  exit = 'exit',
  keyboard = 'keyboard',
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
    title?: string
    href: string
    hostname: string
    path: string
    search: string
    hash: string
    path_language: string
    path_version: string
    path_product?: string
    path_article: string
    page_document_type: string
    page_type: string
    content_type: string
    status: number
    is_logged_in: boolean
    dotcom_user: string
    is_staff: boolean
    octo_client_id?: string
    os: string
    os_version: string
    browser: string
    browser_version: string
    is_headless: boolean
    viewport_width?: number
    viewport_height?: number
    screen_width?: number
    screen_height?: number
    pixel_ratio?: number
    ip?: string
    user_agent?: string
    timezone: number
    user_language: string
    os_preference: string
    application_preference: string
    color_mode_preference: string
    code_display_preference: string
    experiment_variation?: string
    event_group_key?: string
    event_group_id?: string
  }
}

export type EventPropsByType = {
  [EventType.aiSearchResult]: {
    // Dynamic JSON string of an array of "link" objects in the form:
    // [{ "type": "reference" | "inline", "url": "https://..", "product": "issues" | "pages" | ... }, ...]
    ai_search_result_links_json: string
    ai_search_result_provided_answer: boolean
    ai_search_result_response_status: number
    ai_search_result_connected_event_id?: string
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
  [EventType.keyboard]: {
    pressed_key: string
    pressed_on: string
  }
  [EventType.link]: {
    link_url: string
    link_samesite?: boolean
    link_samepage?: boolean
    link_container?: string
  }
  [EventType.page]: { type: string } // no unique properties
  [EventType.preference]: {
    preference_name: string
    preference_value: string
  }
  [EventType.print]: { type: string } // no unique properties
  [EventType.search]: {
    search_query: string
    search_context?: string
    search_client?: string
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
    survey_connected_event_id?: string
  }
}
