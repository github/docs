# Trilhos de aprendizado (também conhecido como caminhos de aprendizado)

Os trilhos de aprendizado são uma coleção de artigos que ajudam você a dominar um assunto específico. Os caminhos de aprendizado são definidos por produto. For example, see https://docs.github.com/en/actions/guides.

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

Versioning for learning tracks is processed at page render time. The code lives in [`lib/learning-tracks.js`](lib/learning-tracks.js), which is called by `page.render()`. The processed learning tracks are then rendered by `layouts/product-sublanding.html`.

The schema for validating the learning track YAML lives in [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) and is exercised by [`tests/content/lint-files.js`](tests/content/lint-files.js).
