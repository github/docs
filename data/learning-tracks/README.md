# Learning Tracks (aka Learning Paths)

Learning tracks are a collection of articles that help you master a particular subject. Learning tracks are defined on a per-product basis. For example, see https://docs.github.com/en/actions/guides.

## How it works

Learning track data for a product is defined in two places:

1. A simple array of learning track names is defined in the product guides index page frontmatter.

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

## Versioning

Versioning for learning tracks is processed at page render time. The code lives in [`lib/learning-tracks.js`](lib/learning-tracks.js), which is called by `page.render()`. The processed learning tracks are then rendered by `components/guides`.

Liquid conditionals do **not** have to be used for versioning in the YAML file for guides. Only the learning track guides that apply to the current version will be rendered automatically. If there aren't any tracks with guides that belong to the current version, the learning tracks section will not render at all.

Explicit versioning within a product's learning tracks YML data is supported as well. The format and allowed values are the same as the [frontmatter versions property](/content#versions).

For example:

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

If the `versions` property is not included, it's assumed the track is available in all versions.

## Schema enforcement

The schema for validating the learning track YAML lives in [`src/content-linter/lib/learning-tracks-schema.js`](src/content-linter/lib/learning-tracks-schema.js) and is exercised by [`tests/content/lint-files.js`](tests/content/lint-files.js).
