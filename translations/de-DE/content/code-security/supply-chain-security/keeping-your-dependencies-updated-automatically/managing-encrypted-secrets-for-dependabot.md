---
title: Managing encrypted secrets for Dependabot
intro: 'You can store sensitive information, like passwords and access tokens, as encrypted secrets and then reference these in the {% data variables.product.prodname_dependabot %} configuration file.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
---

### About encrypted secrets for {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} secrets are encrypted credentials that you create at either the organization level or the repository level.
When you add a secret at the organization level, you can specify which repositories can access the secret. You can use secrets to allow {% data variables.product.prodname_dependabot %} to update dependencies located in private package registries. When you add a secret it's encrypted before it reaches {% data variables.product.prodname_dotcom %} and it remains encrypted until it's used by {% data variables.product.prodname_dependabot %} to access a private package registry.

After you add a {% data variables.product.prodname_dependabot %} secret, you can reference it in the _dependabot.yml_ configuration file like this: {% raw %}`${{secrets.NAME}}`{% endraw %}, where "NAME" is the name you chose for the secret. Ein Beispiel:

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

For more information, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)."

#### Benennen Ihrer Geheimnisse

The name of a {% data variables.product.prodname_dependabot %} secret:
* Can only contain alphanumeric characters (`[A-Z]`, `[0-9]`) or underscores (`_`). Leerzeichen sind nicht zulässig. If you enter lowercase letters these are changed to uppercase.
* Must not start with the `GITHUB_` prefix.
* Must not start with a number.

### Adding a repository secret for {% data variables.product.prodname_dependabot %}

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. Click **New repository secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den Wert für Ihr Geheimnis ein.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value. You can click **Remove** to delete the secret.

   ![Update or remove a repository secret](/assets/images/help/dependabot/update-remove-repo-secret.png)

### Adding an organization secret for {% data variables.product.prodname_dependabot %}

Beim Erstellen eines geheimen Schlüssels in einer Organisation können Sie eine Richtlinie verwenden, um einzuschränken, welche Repositorys auf diesen geheimen Schlüssel zugreifen können. Sie können z. B. Zugriff auf alle Repositorys gewähren oder den Zugriff auf nur private Repositorys oder eine angegebene Liste von Repositorys beschränken.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. Click **New organization secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den **Value** für Ihr Geheimnis ein.
1. Wählen Sie im **Repository-Zugriff** Dropdownliste eine Zugriffsrichtlinie aus.
1. If you chose **Selected repositories**:

   * Click {% octicon "gear" aria-label="The Gear icon" %}.
   * Choose the repositories that can access this secret. ![Select repositories for this secret](/assets/images/help/dependabot/secret-repository-access.png)
   * Click **Update selection**.

1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value or its access policy. You can click **Remove** to delete the secret.

   ![Update or remove an organization secret](/assets/images/help/dependabot/update-remove-repo-secret.png)
