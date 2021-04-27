# Learning Tracks (aka Learning Paths)

Learning tracks are a collection of articles that help you master a particular subject. Learning tracks are defined on a per-product basis. For example, see https://docs.github.com/en/actions/guides.

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

    For example, in `data/learning-tracks/actions.yml`, each of the items from the list in #1 is represented with additional data such as `title`, `description`, and a list of `guides` links.

    One, and only one, learning track in this YAML must be designated as a "featured" learning track via `featured_track: true`, which will set it to appear at the top of the product sublanding page. Schema validation will fail if this property is missing.

Versioning for learning tracks happens at page render time. The code lives in [`lib/learning-tracks.js`](lib/learning-tracks.js), which is called by `page.render()`. The processed learning tracks are then rendered by `layouts/product-sublanding.html`.

The schema for validating the learning track YAML lives in [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) and is exercised by [`tests/content/lint-files.js`](tests/content/lint-files.js).
