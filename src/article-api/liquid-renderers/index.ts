/**
 * API Transformer Liquid Tags
 *
 * This module contains custom Liquid tags used by article-api transformers
 * to render API documentation in a consistent format.
 */

import { restTags } from './rest-tags'

// Export all API transformer tags for registration
export const apiTransformerTags = {
  ...restTags,
}

// Re-export individual tag modules for direct access if needed
export { restTags } from './rest-tags'
