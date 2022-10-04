---
title: Managing encrypted secrets for Dependabot
intro: 'You can store sensitive information, like passwords and access tokens, as encrypted secrets and then reference these in the {% data variables.product.prodname_dependabot %} configuration file.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
---

{% data reusables.dependabot.beta-security-and-version-updates %}

## About encrypted secrets for {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} secrets are encrypted credentials that you create at either the organization level or the repository level.
When you add a secret at the organization level, you can specify which repositories can access the secret. You can use secrets to allow {% data variables.product.prodname_dependabot %} to update dependencies located in private package registries. When you add a secret it's encrypted before it reaches {% data variables.product.prodname_dotcom %} and it remains encrypted until it's used by {% data variables.product.prodname_dependabot %} to access a private package registry.

After you add a {% data variables.product.prodname_dependabot %} secret, you can reference it in the _dependabot.yml_ configuration file like this: {% raw %}`${{secrets.NAME}}`{% endraw %}, where "NAME" is the name you chose for the secret. For example: 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

For more information, see "[Configuration options for the dependabot.yml file](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)."

### Naming your secrets

The name of a {% data variables.product.prodname_dependabot %} secret:
* Can only contain alphanumeric characters (`[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed. If you enter lowercase letters these are changed to uppercase.
* Must not start with the `GITHUB_` prefix.
* Must not start with a number.

## Adding a repository secret for {% data variables.product.prodname_dependabot %}

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.dependabot.sidebar-secret %}
1. Click **New repository secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value. You can click **Remove** to delete the secret.

   ![Update or remove a repository secret](/assets/images/help/dependabot/update-remove-repo-secret.png)

## Adding an organization secret for {% data variables.product.prodname_dependabot %}

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.dependabot.sidebar-secret %}
1. Click **New organization secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. If you chose **Selected repositories**:

   * Click {% octicon "gear" aria-label="The Gear icon" %}.
   * Choose the repositories that can access this secret. 
     ![Select repositories for this secret](/assets/images/help/dependabot/secret-repository-access.png)
   * Click **Update selection**.

1. Click **Add secret**.

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value or its access policy. You can click **Remove** to delete the secret.

   ![Update or remove an organization secret](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## Adding {% data variables.product.prodname_dependabot %} to your registries IP allow list

If your private registry is configured with an IP allow list, you can find the IP addresses {% data variables.product.prodname_dependabot %} uses to access the registry in the meta API endpoint, under the `dependabot` key. For more information, see "[Meta](/rest/reference/meta)."
