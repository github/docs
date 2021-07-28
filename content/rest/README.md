# REST

The `/content/rest` directory is where the GitHub REST API docs live!

* The `/content/rest/guides` and `/content/rest/overview` directories contain regular articles. These are human-editable.
* The `/content/rest/reference` directory contains an article for each group of endpoints in the GitHub REST API. Most of the content in this directory is rendered using `include` tags.

  The content rendered by `include` tags is sourced from the `/lib/rest/static` directory, which is automatically generated from the API source code internally in GitHub, and should not be edited by a human. For more information, see the [`/lib/rest/README.md`](/lib/rest/README.md).

  For internal contributors:
    To edit content that is rendered by `include` tags, you must edit the OpenAPI schema in the `github/github` repo. For information on how to do this, see:

    - [The Hub](https://thehub.github.com/engineering/development-and-ops/public-apis/rest/openapi/)
    - [More info about creating API docs](https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/content-creation/creating-rest-api-documentation.md)
    - [More info about publishing API docs](https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/publishing-documentation/publishing-REST-api-docs.md)

  For external contributors:
    We cannot accept changes to content that is rendered by `include` tags. However, you can open an issue describing the changes you would like to see.
