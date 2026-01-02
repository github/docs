Advanced setup is considered **inactive** for a repository if the repository meets any of the following criteria:

* The latest {% data variables.product.prodname_codeql %} analysis is more than 90 days old.
* All {% data variables.product.prodname_codeql %} configurations have been deleted.
* The workflow file has been deleted or disabled (exclusively for advanced setup run using actions).
