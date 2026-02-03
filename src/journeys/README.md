# Journeys

The **journeys** subject provides guided learning experiences (called "tracks") that help users navigate through a sequence of related documentation articles. Tracks appear on special landing pages and provide contextual navigation to move through articles in a structured learning path.

## Purpose & Scope

This subject is responsible for:
- Rendering journey landing pages that display multiple learning tracks
- Providing prev/next navigation within journey track articles
- Resolving journey context based on the current article path
- Rendering Liquid templates in journey metadata (titles, descriptions, guide paths)

Journey tracks are defined in article frontmatter using the `journeyTracks` field on pages with `layout: journey-landing`.

## Architecture & Key Assets

```
src/journeys/
├── components/
│   ├── JourneyTrackCard.tsx    # Card showing journey progress with next/prev links
│   ├── JourneyTrackNav.tsx     # Navigation bar for prev/next articles in a track
│   └── index.ts                # Component exports
├── lib/
│   ├── get-link-data.ts        # Fetches title and href data for journey guide links
│   └── journey-path-resolver.ts # Core logic: resolves journey context and tracks
├── middleware/
│   └── journey-track.ts        # Express middleware that attaches journey data to requests
└── tests/
    └── journey-path-resolver.ts # Unit tests for journey resolution logic
```



## Setup & Usage

### Prerequisites
- Journey landing pages must have `layout: journey-landing` in their frontmatter
- Journey tracks are defined in the `journeyTracks` frontmatter field (see example below)

### Running tests
```bash
npm run test -- src/journeys/tests
```

### Example frontmatter for journey landing page
```yaml
---
title: Enterprise onboarding
layout: journey-landing
journeyTracks:
  - id: 'getting_started'
    title: 'Getting started with {% data variables.product.prodname_ghe_cloud %}'
    description: 'Master the fundamentals and get started with a trial.'
    guides:
      - '/enterprise-onboarding/choose-an-enterprise-type'
      - '/enterprise-onboarding/setting-up-a-trial'
      - '/enterprise-onboarding/adding-users'
---
```

## Data & External Dependencies

### Data inputs
- **Content frontmatter**: `journeyTracks` field on landing pages defines track structure
- **Article metadata**: Article titles and paths are resolved via `get-link-data.ts`
- **Liquid variables**: Track titles, descriptions, and guide paths support Liquid templating

### Dependencies
- **`@/content-render`**: Used to render Liquid templates in journey metadata
- **`@/frame/lib/path-utils`**: Normalizes paths for consistent matching
- **`@/versions`**: Checks version compatibility between journey pages and articles
- **`@/languages`**: Executes rendering with fallback for internationalization
- **`@/landings`**: Journey components are consumed by landing page layouts

### Data outputs
- **`req.context.currentJourneyTrack`**: Journey context object with track info and prev/next links
- **`req.context.page.resolvedJourneyTracks`**: Array of resolved track data for landing pages

## Current State & Next Steps

### Known limitations
- Journey tracks currently inherit version constraints from their landing page
- Path normalization logic must stay synchronized with other path-handling middleware
- Journey context resolution has some performance overhead due to iterating all pages
- Currently only support a particular page belonging to a single journey track/step - we won't show nav components for all the journeys an article belongs to

Continued work to expand and add more journey tracks.
