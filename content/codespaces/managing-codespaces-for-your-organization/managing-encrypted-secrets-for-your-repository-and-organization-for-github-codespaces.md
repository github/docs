---
title: Managing encrypted secrets for your repository and organization for GitHub Codespaces
shortTitle: Encrypted secrets
intro: 'Encrypted secrets allow you to store sensitive information in your organization, repository, or {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
---

 

## About secrets

Secrets are encrypted environment variables that you create in an organization or  repository. The secrets that you create are available to use in {% data variables.product.prodname_github_codespaces %}. GitHub uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets before they reach GitHub and only decrypts them when you use them in a codespace.

Organization-level secrets let you share secrets between multiple repositories, which reduces the need to create duplicate secrets. You can use access policies to control which repositories can use organization secrets. 

{% data reusables.codespaces.secrets-on-start %}

### Naming secrets

{% data reusables.codespaces.secrets-naming %} For example, a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  {% data reusables.codespaces.secret-precedence %}

### Limits for secrets

You can store up to 100 secrets per organization and 100 secrets per repository.

Secrets are limited to 64 KB in size.

## Adding secrets for a repository

To create secrets for an organization repository, you must have administrator access.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets** then click **{% data variables.product.prodname_codespaces %}**.
2. At the top of the page, click **New repository secret**.
3. Type a name for your secret in the **Name** input box.
4. Enter the value for your secret.
5. Click **Add secret**.

## Adding secrets for an organization

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the "Security" section of the sidebar, select **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets** then click **{% data variables.product.prodname_codespaces %}**.
2. At the top of the page, click **New organization secret**.
3. Type a name for your secret in the **Name** input box.
4. Enter the **Value** for your secret.
5. From the **Repository access** dropdown list, choose an access policy.
    ![Repository Access list with private repositories selected](/assets/images/help/codespaces/secret-repository-access.png)
6. Click **Add secret**.

## Reviewing access to organization-level secrets

You can check which access policies are applied to a secret in your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secret %}
1. The list of secrets includes any configured permissions and policies. For example:
![Secrets list](/assets/images/help/settings/actions-org-secrets-list.png)
1. For more details on the configured permissions for each secret, click **Update**.

## Further reading

- "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
