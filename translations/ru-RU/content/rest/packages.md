---
title: Packages
intro: 'With the {% data variables.product.prodname_registry %} API, you can manage packages for your {% data variables.product.prodname_dotcom %} repositories and organizations.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
---

## About the {% data variables.product.prodname_registry %} API

The {% data variables.product.prodname_registry %} API enables you to manage packages using the REST API. To learn more about restoring or deleting packages, see "[Restoring and deleting packages](/packages/learn-github-packages/deleting-and-restoring-a-package)."

To use this API, you must authenticate using a {% data variables.product.pat_v1 %}.
  - To access package metadata, your token must include the `read:packages` scope.
  - To delete packages and package versions, your token must include the `read:packages` and `delete:packages` scopes.
  - To restore packages and package versions, your token must include the `read:packages` and `write:packages` scopes.

If your package is in a registry that supports granular permissions, then your token does not need the `repo` scope to access or manage this package. If your package is in a registry that only supports repository-scoped permissions, then your token must also include the `repo` scope since your package inherits permissions from a {% data variables.product.prodname_dotcom %} repository. For a list of registries that only support repository-scoped permissions, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

If you want to use the {% data variables.product.prodname_registry %} API to access resources in an organization with SSO enabled, then you must enable SSO for your {% data variables.product.pat_v1 %}. For more information, see "[Authorizing a {% data variables.product.pat_generic %} for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
