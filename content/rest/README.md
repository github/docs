# REST

The `/content/rest` directory is where the GitHub REST API docs live!

* The `/content/rest/guides` and `/content/rest/overview` directories contain regular articles. These are human-editable.
* The `/content/rest/reference` directory contains a skeleton structure for the REST API reference. However, each REST API endpoint's content is inserted using `include`s.

  The content for the `include`s are generated from the API source code internally in GitHub, and is processed using the scripts and static `json` files in the `/lib/rest` directory.

  **As a result, we cannot accept contributions to REST API reference content in this repository.**
