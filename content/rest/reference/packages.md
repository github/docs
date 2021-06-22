---
title: Packages
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The {% data variables.product.prodname_registry %} API enables you to manage packages using the REST API. To learn more about restoring or deleting packages, see "[Restoring and deleting packages](/packages/learn-github-packages/deleting-and-restoring-a-package)."

To use this API, you must authenticate using a personal access token. 
  - To access package metadata, your token must include the `read:packages` scope.
  - To delete packages and package versions, your token must include the `read:packages` and `delete:packages` scopes.
  - To restore packages and package versions, your token must include the `read:packages` and `write:packages` scopes.

If your `package_type` is `npm`, `maven`, `rubygems`, or `nuget`, then your token must also include the `repo` scope since your package inherits permissions from a {% data variables.product.prodname_dotcom %} repository. If your package is in the {% data variables.product.prodname_container_registry %}, then your `package_type` is `container` and your token does not need the `repo` scope to access or manage this `package_type`. `container` packages offer granular permissions separate from a repository. For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

If you want to use the {% data variables.product.prodname_registry %} API to access resources in an organization with SSO enabled, then you must enable SSO for your personal access token. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
