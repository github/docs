---
title: GitHub Actions Secrets
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: 'The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Secrets API

The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows. {% data reusables.actions.about-secrets %} For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `secrets` permission to use this API. Authenticated users must have collaborator access to a repository to create, update, or read secrets.
