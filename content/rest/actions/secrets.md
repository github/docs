---
title: GitHub Actions Secrets
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: 'Use the REST API to interact with secrets in {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About secrets in {% data variables.product.prodname_actions %}

You can use the REST API to create, update, delete, and retrieve information about encrypted secrets that can be used in workflows in {% data variables.product.prodname_actions %}. {% data reusables.actions.about-secrets %} For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `secrets` permission to use these endpoints. Authenticated users must have collaborator access to a repository to create, update, or read secrets.
