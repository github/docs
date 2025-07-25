---
title: Secrets reference
shortTitle: Secrets
intro: 'Find technical information about secrets in {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /actions/reference/secrets-reference
---

## Naming your secrets

>[!TIP]
> To help ensure that {% data variables.product.prodname_dotcom %} redacts your secrets in logs correctly, avoid using structured data as the values of secrets.

The following rules apply to secret names:

{% data reusables.actions.actions-secrets-and-variables-naming %}

{% data reusables.codespaces.secret-precedence %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.

## Limits for secrets

You can store up to 1,000 organization secrets, 100 repository secrets, and 100 environment secrets.

A workflow created in a repository can access the following number of secrets:

* All 100 repository secrets.
* If the repository is assigned access to more than 100 organization secrets, the workflow can only use the first 100 organization secrets (sorted alphabetically by secret name).
* All 100 environment secrets.

Secrets are limited to 48 KB in size. To store larger secrets, see [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-guides/using-secrets-in-github-actions#storing-large-secrets).

## When {% data variables.product.prodname_actions %} reads secrets

Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.

## Automatically redacted secrets

{% data variables.product.prodname_dotcom %} automatically redacts the following sensitive information from workflow logs.

> [!NOTE] If you would like other types of sensitive information to be automatically redacted, please reach out to us in our [community discussions](https://github.com/orgs/community/discussions?discussions_q=is%3Aopen+label%3AActions).

* 32-byte and 64-byte Azure keys
* Azure AD client app passwords
* Azure Cache keys
* Azure Container Registry keys
* Azure Function host keys
* Azure Search keys
* Database connection strings
* HTTP Bearer token headers
* JWTs
* NPM author tokens
* NuGet API keys
* v1 GitHub installation tokens
* v2 GitHub installation tokens (`ghp`, `gho`, `ghu`, `ghs`, `ghr`)
* v2 GitHub PATs

## Security

For security best practices using secrets, see [AUTOTITLE](/actions/reference/secure-use-reference#use-secrets-for-sensitive-information).
