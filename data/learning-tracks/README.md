# Learning Tracks (aka Learning Paths)

Learning tracks are a collection of articles that help you master a particular subject. Learning tracks are defined on a per-product basis. For example, see https://docs.github.com/en/actions/guides.

## How it works

Learning track data for a product is defined in two places:

1. A simple array of learning track names is defined in the product sublanding index page frontmatter.

    For example, in `content/actions/guides/index.md`:
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. Additional data for each track is defined in a YAML file named for the **product** in the `data` directory.

    For example, in `data/learning-tracks/actions.yml`, each of the items from the content file's `learningTracks` array is represented with additional data such as `title`, `description`, and an array of `guides` links.

    One learning track in this YAML **per version** must be designated as a "featured" learning track via `featured_track: true`, which will set it to appear at the top of the product sublanding page. A test will fail if this property is missing.

    The `featured_track` property can be a simple boolean (i.e., `featured_track: true`) or it can be a string that includes versioning statements (e.g., `featured_track: '{% if currentVersion == "free-pro-team@latest" %}true{% else %}false{% endif %}'`). If you use versioning, you'll have multiple `featured_track`s per YML file, but make sure that only one will render in each currently supported version. A test will fail if there are more or less than one featured link for each version.

## Versioning

Versioning for learning tracks is processed at page render time. The code lives in [`lib/learning-tracks.js`](lib/learning-tracks.js), which is called by `page.render()`. The processed learning tracks are then rendered by `layouts/product-sublanding.html`.

Liquid conditionals do **not** have to be used for versioning in the YAML file for guides. Only the learning track guides that apply to the current version will be rendered automatically. If there aren't any tracks with guides that belong to the current version, the learning tracks section will not render at all.

Explicit versioning within a product's learning tracks YML data is supported as well. For example:
```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    enterprise-server: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```
If the `versions` property is not included, it's assumed the track is available in all versions.

## Schema enforcement

The schema for validating the learning track YAML lives in [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) and is exercised by [`tests/content/lint-files.js`](tests/content/lint-files.js).
