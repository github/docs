---
title: Packages
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - api
---

The {% data variables.product.prodname_registry %} API enables you to manage packages using the REST API. To learn more about restoring or deleting packages, see "[Restoring and deleting packages](/packages/learn-github-packages/deleting-and-restoring-a-package)."

To use this API, you must authenticate using a personal access token. 
  - To access package metadata, your token must include the `read:packages` scope.
  - To delete packages and package versions, your token must include the `read:packages` and `delete:packages` scopes.
  - To restore packages and package versions, your token must include the `read:packages` and `write:packages` scopes.

If your `package_type` is `npm`, `maven`, `rubygems`, or `nuget`, then your token must also include the `repo` scope since your package inherits permissions from a {% data variables.product.prodname_dotcom %} repository.  For more information about scopes, see "[About scopes and permissions](/packages/learn-github-packages/about-github-packages#about-scopes-and-permissions-for-package-registries)" or "[Using the {% data variables.product.prodname_registry %} API with Docker](#using-the-github-packages-api-with-docker)."

If you want to use the {% data variables.product.prodname_registry %} API to access resources in an organization with SSO enabled, then you must enable SSO for your personal access token. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

#### Using the {% data variables.product.prodname_registry %} API with Docker

If your package is a Docker image using the package namespace `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`, then your `package_type` is `docker` and your token must include the `repo` scope since your package inherits permissions from a {% data variables.product.prodname_dotcom %} repository.

If your package is a Docker image using the package namespace `ghcr.io/OWNER/IMAGE-NAME`, then your `package_type` is `container` and your token does not need the `repo` scope to access or manage this `package_type`. `container` packages offer granular permissions separate from a repository.


{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
