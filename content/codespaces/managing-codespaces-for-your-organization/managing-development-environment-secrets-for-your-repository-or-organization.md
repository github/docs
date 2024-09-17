---
title: Managing development environment secrets for your repository or organization
shortTitle: Manage secrets
intro: 'Development environment secrets allow you to store sensitive information in your organization or repository for use with {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage development environment secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces
product: 'Development environment secrets are available in all public repositories, in private repositories owned by personal accounts, and in private repositories owned by organizations on {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plans. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."'
---

## About secrets

Development environment secrets are {% ifversion fpt or ghec %}encrypted {% endif %}environment variables that you create in the {% data variables.product.prodname_github_codespaces %} settings for an organization, a repository, or a personal account. This article explains how to manage organization secrets and repository secrets. For information on creating user-specific secrets, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)."

The development environment secrets that you create are available to use in {% data variables.product.prodname_github_codespaces %}. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets before they reach {% data variables.product.prodname_dotcom %} and only decrypts them when you use them in a codespace.

{% endif %}Organization secrets let you share secrets between multiple repositories, which reduces the need to create duplicate secrets. You can use access policies to control which repositories can use organization secrets.

{% data reusables.codespaces.secrets-on-start %}

### Naming secrets

{% data reusables.codespaces.secrets-naming %} For example, a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  {% data reusables.codespaces.secret-precedence %}

### Limits for secrets

You can store up to 100 secrets per organization and 100 secrets per repository.

Secrets are limited to 48 KB in size.

### Recommended secrets for a repository

Your project may require specific user secrets. For example, to run the application in a codespace, the user may need to supply a personal API key. If this is the case, you can specify recommended secrets in the dev container configuration. The user will then be prompted to supply values for these secrets, if they haven't already created these personal secrets, when they use the advanced options page to create a codespace. If the user supplies a secret value for use in the codespace, this secret is added to their personal settings for {% data variables.product.prodname_codespaces %}. They will not have to enter a value for this secret when they create a codespace for this repository in future. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/specifying-recommended-secrets-for-a-repository)."

## Adding secrets for a repository

To create development environment secrets for an organization repository, you must have administrator access.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.codespaces.sidebar-secret %}

1. At the top of the page, click **New repository secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

## Adding secrets for an organization

When creating a development environment secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.organizations.secrets-permissions-statement %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.codespaces.sidebar-secret %}

1. At the top of the page, click **New secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

## Reviewing access to organization-level secrets

You can check which access policies are applied to a development environment secret in your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.codespaces.sidebar-secret %}

1. Optionally, to view or edit the configured permissions for each secret, to the right of the secret, click {% octicon "pencil" aria-label="Edit secret" %}.

## Further reading

* "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)"
