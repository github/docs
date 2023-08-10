---
title: Configuring access to private registries for Dependabot
intro: 'You can configure {% data variables.product.prodname_dependabot %} to access dependencies stored in private registries. You can store authentication information, like passwords and access tokens, as encrypted secrets and then reference these in the {% data variables.product.prodname_dependabot %} configuration file.{% ifversion fpt or ghec %} You can also add {% data variables.product.prodname_dependabot %} to your registries IP allow list.{% endif %}'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
  - /code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Configure access to private registries
---

{% data reusables.dependabot.beta-security-and-version-updates %}

## About private registries

{% data variables.product.prodname_dependabot_version_updates %} keeps your dependencies up-to-date. {% data variables.product.prodname_dependabot %} can access public registries. In addition, you can give {% data variables.product.prodname_dependabot_version_updates %} access to private package registries and private {% data variables.product.prodname_dotcom %} repositories so that you can keep your private and innersource dependencies as up-to-date as your public dependencies.

In most ecosystems, private dependencies are usually published to private package registries. These private registries are similar to their public equivalents, but they require authentication.

{% ifversion dependabot-private-registries %}
For specific ecosystems, you can configure {% data variables.product.prodname_dependabot %} to access _only_ private registries by removing calls to public registries. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/removing-dependabot-access-to-public-registries)."
{% endif %}

## Configuring private registries

You configure {% data variables.product.prodname_dependabot %}'s access to private registries in the `dependabot.yml` file.
The top-level `registries` key is optional and specifies authentication details. {% data reusables.dependabot.dependabot-updates-registries %}

{% data reusables.dependabot.dependabot-updates-registries-options %}

For more information about the configuration options that are available, how to use them, and about the supported types, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-private-registries)."

## Storing credentials for Dependabot to use

To give {% data variables.product.prodname_dependabot %} access to the private registries supported by {% data variables.product.prodname_dotcom %}, you store the registry’s access token or secret in the secret store for your repository or organization.

### About encrypted secrets for {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} secrets are encrypted credentials that you create at either the organization level or the repository level.
When you add a secret at the organization level, you can specify which repositories can access the secret. You can use secrets to allow {% data variables.product.prodname_dependabot %} to update dependencies located in private package registries. When you add a secret, it's encrypted before it reaches {% data variables.product.prodname_dotcom %} and it remains encrypted until it's used by {% data variables.product.prodname_dependabot %} to access a private package registry.

{% data variables.product.prodname_dependabot %} secrets also include secrets that are used by {% data variables.product.prodname_actions %} workflows triggered by {% data variables.product.prodname_dependabot %} pull requests. {% data variables.product.prodname_dependabot %} itself may not use these secrets, but the workflows require them. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#accessing-secrets)."

After you add a {% data variables.product.prodname_dependabot %} secret, you can reference it in the `dependabot.yml` configuration file like this: {% raw %}`${{secrets.NAME}}`{% endraw %}, where "NAME" is the name you chose for the secret. For example:

{% raw %}

```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```

{% endraw %}

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-private-registries)."

#### Naming your secrets

The name of a {% data variables.product.prodname_dependabot %} secret:
- Can only contain alphanumeric characters (`[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed. If you enter lowercase letters these are changed to uppercase.
- Must not start with the `GITHUB_` prefix.
- Must not start with a number.

### Adding a repository secret for {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.dependabot.sidebar-secret %}
1. Click **New repository secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value. You can click **Remove** to delete the secret.

### Adding an organization secret for {% data variables.product.prodname_dependabot %}

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.organizations.secrets-permissions-statement %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.dependabot.sidebar-secret %}
1. Click **New organization secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. If you chose **Selected repositories**:

   - Click {% octicon "gear" aria-label="selected repositories" %}.
   - In the dialog box, select the repositories that can access this secret.
   - Click **Update selection**.

1. Click **Add secret**.

   The name of the secret is listed on the {% data variables.product.prodname_dependabot %} secrets page. You can click **Update** to change the secret value or its access policy. You can click **Remove** to delete the secret.

{% ifversion fpt or ghec %}

## Configuring firewall IP rules

You can add {% data variables.product.prodname_dependabot %} to your registries IP allow list.

If your private registry is configured with an IP allow list, you can find the IP addresses {% data variables.product.prodname_dependabot %} uses to access the registry in the meta API endpoint, under the `dependabot` key. For more information, see "[AUTOTITLE](/rest/meta)."

{% endif %}
