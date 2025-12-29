/**
 * Common types used across learning track components
 */

import type { Context, Page as MainPage } from '@/types'

// Re-export Context from main types to avoid duplicate definitions
export type { Context }

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
 * Using the main Page type from @/types
 */
export type Page = MainPage

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
  versions?: unknown
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
