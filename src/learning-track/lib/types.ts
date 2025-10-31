/**
 * Common types used across learning track components
 */

/**
 * Basic context interface for rendering operations
 */
export interface Context {
  currentProduct?: string
  currentLanguage?: string
  currentVersion?: string
  pages?: any
  redirects?: any
  // Additional properties that may be needed for rendering
  [key: string]: any
}

/**
 * Options for retrieving link data
 */
export interface LinkOptions {
  title?: boolean
  intro?: boolean
  fullTitle?: boolean
}

/**
 * Result of processing a link
 */
export interface ProcessedLink {
  href: string
  page: Page
  title?: string
  fullTitle?: string
  intro?: string
}

/**
 * Definitions for featured links data
 */
export interface FeaturedLink {
  title: string
  href: string
}

export interface PageFeaturedLinks {
  [key: string]: string[] | FeaturedLink[]
}

/**
 * Page interface for basic page properties
 */
export interface Page {
  renderTitle: (context: Context, opts: any) => Promise<string>
  renderProp: (prop: string, context: Context, opts: any) => Promise<string>
}

/**
 * Guide in a learning track
 */
export interface TrackGuide {
  href: string
  page: Page
  title: string
  intro?: string
}

/**
 * A processed learning track
 */
export interface LearningTrack {
  trackName: string
  trackProduct: string | null
  title: string
  description: string
  guides: TrackGuide[]
}

/**
 * Learning track metadata with guides
 */
export interface LearningTrackMetadata {
  title: string
  description: string
  guides: string[]
  versions?: any
}

/**
 * Collection of learning tracks by product and track name
 */
export interface LearningTracks {
  [productId: string]: {
    [trackName: string]: LearningTrackMetadata
  }
}

/**
 * Return type for processLearningTracks function
 */
export interface ProcessedLearningTracks {
  learningTracks: LearningTrack[]
}

/**
 * Learning track data for the current guide
 */
export interface CurrentLearningTrack {
  trackName: string
  trackProduct: string
  trackTitle: string
  numberOfGuides?: number
  currentGuideIndex?: number
  nextGuide?: {
    href: string
    title: string | undefined
  }
  prevGuide?: {
    href: string
    title: string | undefined
  }
}
