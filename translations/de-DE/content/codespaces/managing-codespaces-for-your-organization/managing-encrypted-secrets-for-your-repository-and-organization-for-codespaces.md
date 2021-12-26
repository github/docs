---
title: Managing encrypted secrets for your repository and organization for Codespaces
shortTitle: Managing secrets for your repository and organization
intro: 'Encrypted secrets allow you to store sensitive information in your organization, repository, or {% data variables.product.prodname_codespaces %}.'
permissions: 'To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### About secrets

Secrets are encrypted environment variables that you create in an organization or  repository. The secrets that you create are available to use in {% data variables.product.prodname_codespaces %}. GitHub uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets before they reach GitHub and only decrypts them when you use them in a codespace.

Organization-level secrets let you share secrets between multiple repositories, which reduces the need to create duplicate secrets. You can use access policies to control which repositories can use organization secrets.

{% data reusables.codespaces.secrets-on-start %}

#### Naming secrets

{% data reusables.codespaces.secrets-naming %} For example, a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  {% data reusables.codespaces.secret-precedence %}

#### Einschränkungen für Geheimnisse

You can store up to 100 secrets per organization and 100 secrets per repository.

Geheimnisse sind auf 64 KB beschränkt.

### Adding secrets for a repository

To create secrets for an organization repository, you must have administrator access.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Scroll down the page and under **Secrets**, select **Codespaces**. ![Codespaces option in side bar](/assets/images/help/codespaces/codespaces-option-secrets.png)
1. At the top of the page, click **New repository secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den Wert für Ihr Geheimnis ein.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

### Adding secrets for an organization

Beim Erstellen eines geheimen Schlüssels in einer Organisation können Sie eine Richtlinie verwenden, um einzuschränken, welche Repositorys auf diesen geheimen Schlüssel zugreifen können. Sie können z. B. Zugriff auf alle Repositorys gewähren oder den Zugriff auf nur private Repositorys oder eine angegebene Liste von Repositorys beschränken.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Scroll down the page and under **Secrets**, select **Codespaces**. ![Codespaces option in side bar](/assets/images/help/codespaces/codespaces-option-secrets-org.png)
1. At the top of the page, click **New organization secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den **Value** für Ihr Geheimnis ein.
1. Wählen Sie im **Repository-Zugriff** Dropdownliste eine Zugriffsrichtlinie aus. ![Repository Access list with private repositories selected](/assets/images/help/codespaces/secret-repository-access.png)
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

### Überprüfen des Zugriffs auf Geheimnisse auf Organisationsebene

You can check which access policies are applied to a secret in your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Die Liste der Geheimnisse enthält alle konfigurierten Berechtigungen und Richtlinien. Ein Beispiel: ![Geheimliste](/assets/images/help/settings/actions-org-secrets-list.png)
1. Weitere Informationen zu den konfigurierten Berechtigungen für jeden geheimen Schlüssel finden Sie unter **Aktualisieren**.
