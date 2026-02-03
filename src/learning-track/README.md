# Learning Tracks

This module manages "Learning Tracks"—curated, ordered lists of articles that guide a user through a specific topic or goal. When a user enters a learning track, they see a persistent banner or navigation element that helps them move sequentially through the guides.

## Purpose & Scope

The goal of this feature is to:
- **Group Content**: Logically group related articles into a sequence.
- **Guide Users**: Provide "Next" and "Previous" navigation context to keep users on the path.
- **Track Progress**: Visually indicate where the user is within the sequence (e.g., "Step 2 of 5").

## Architecture

### Data Source

Learning tracks are defined in YAML files located in `data/learning-tracks`.
- **Structure**: `data/learning-tracks/<product>.yml`
- **Schema**: Each file contains multiple tracks, where each track is defined as a top-level key with properties like:
  - `title`: Display title of the track.
  - `description`: Short summary.
  - `guides`: An ordered list of relative paths to the articles.
  - `versions`: (Optional) Which versions this track applies to.

### Middleware

The core logic for *active* tracking happens in `src/learning-track/middleware/learning-track.ts`.
- **Trigger**: It looks for the `?learn=<track_name>` query parameter in the URL.
- **Context Injection**: If a valid track is found:
  - It calculates the current position (index) based on the current page path.
  - It resolves the `prevGuide` and `nextGuide` links.
  - It injects a `currentLearningTrack` object into `req.context`, which the UI components use to render the progress banner.

### Library

`src/learning-track/lib/process-learning-tracks.ts` is used (often by landing pages) to list available tracks.
- **Rendering**: It handles Liquid rendering for titles and descriptions.
- **Versioning**: It filters out tracks or specific guides that don't exist in the current documentation version.
- **Translation Fallback**: It ensures that if a translated track has broken data, it falls back to the English structure (guides list) while keeping translated titles if possible.

## Setup & Usage

### Defining a Track

Add a track to `data/learning-tracks/YOUR_PRODUCT.yml`:

```yaml
getting_started:
  title: "Getting Started with GitHub"
  description: "Learn the basics of repositories and commits."
  versions:
    fpt: '*'
    ghec: '*'
  guides:
    - /get-started/signing-up-for-github/signing-up-for-a-new-github-account
    - /get-started/first-steps-with-git/set-up-git
```

### Linking to a Track

To start a user on a track, link to the first guide with the `learn` parameter (matching the track key defined in the YAML):
`/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account?learn=getting_started`

### URL Structure

- **`learn=<track_name>`**: Identifies the active track.
- **`learnProduct=<product_name>`**: (Optional) Used when the track belongs to a different product than the current page context.

## Dependencies

- **`data/learning-tracks`**: The source of truth for track definitions.
- **`src/content-render`**: Used to render Liquid within track titles and descriptions.
- **`src/versions`**: Used to filter tracks based on the current page version.

## Ownership

- **Team**: `@github/docs-engineering`
- **Content Owners**: The Writers and Content Strategists who define the tracks in the `data` directory.

## Current State & Known Issues

- **Query Param Persistence**: The feature relies on the `?learn=` parameter persisting as the user clicks links. If a user navigates away via a link that doesn't preserve query params (e.g., a standard markdown link outside the track navigation), they "fall off" the track.
- **Translation Sync**: Translators sometimes translate the `guides` list paths or break the YAML structure. The code has specific logic to force-use English guide lists to prevent 404s in translated versions.