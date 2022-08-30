---
title: Secret scanning
intro: Use the Secret scanning API to retrieve and update secret alerts from a repository.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
---

{% data reusables.secret-scanning.api-beta %}

## About the Secret scanning API

The {% data variables.product.prodname_secret_scanning %} API lets you:

- Enable or disable {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} and push protection{% endif %} for a repository. For more information, see "[Repositories](/rest/repos/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section in the REST API documentation.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.

For more information about {% data variables.product.prodname_secret_scanning %}, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)."
