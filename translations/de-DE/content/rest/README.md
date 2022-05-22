# REST

The `/content/rest` directory is where the GitHub REST API docs live!

* The `/content/rest/guides` and `/content/rest/overview` directories contain regular articles. These are human-editable.
* The `/content/rest/reference` directory contains an article for each group of endpoints in the GitHub REST API. Most of the content in this directory is rendered using `include` tags.

  The content rendered by `include` tags is sourced from the `/lib/rest/static` directory, which is automatically generated from the API source code internally in GitHub, and should not be edited by a human. For more information, see the [`/lib/rest/README.md`](/lib/rest/README.md).

  **As a result, we cannot accept contributions to REST API reference content in this repository.**
