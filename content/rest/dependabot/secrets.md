---
title: Dependabot secrets
shortTitle: Secrets
intro: 'Use the REST API to manage {% data variables.product.prodname_dependabot %} secrets for an organization or repository.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## About {% data variables.product.prodname_dependabot %} secrets

You can create, update, delete, and retrieve information about encrypted secrets using the REST API. {% data reusables.actions.about-secrets %} For more information, see "[Configuring access to private registries for {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `dependabot_secrets` permission to use these endpoints. Authenticated users must have collaborator access to a repository to create, update, or read secrets.
