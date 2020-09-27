---
title: GitHub-Aktionen für ein Repository deaktivieren oder limitieren
intro: 'Repository-Inhaber können {{ site.data.variables.product.prodname_actions }} für ein bestimmtes Repository deaktivieren, aktivieren und limitieren.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Über {{ site.data.variables.product.prodname_actions }}-Berechtigungen für Dein Repository

{{ site.data.reusables.github-actions.disabling-github-actions }} Weitere Informationen zu {{ site.data.variables.product.prodname_actions }} findest Du unter „[Über {{ site.data.variables.product.prodname_actions }}](/actions/getting-started-with-github-actions/about-github-actions)."

Du kannst {{ site.data.variables.product.prodname_actions }} für Dein Repository aktivieren. {{ site.data.reusables.github-actions.enabled-actions-description }} Du kannst {{ site.data.variables.product.prodname_actions }} für Dein Repository komplett deaktivieren. {{ site.data.reusables.github-actions.disabled-actions-description }}

Alternativ kannst Du {{ site.data.variables.product.prodname_actions }} in Deinem Repository aktivieren, aber die Aktionen limitieren, die ein Workflow ausführen kann. {{ site.data.reusables.github-actions.enabled-local-github-actions }}

### {{ site.data.variables.product.prodname_actions }}-Berechtigungen für Dein Repository verwalten

{% note %}

**Note:** You might not be able to manage these settings if your organization has an overriding policy or is managed by an enterprise account that has overriding policy. For more information, see "[Disabling or limiting {{ site.data.variables.product.prodname_actions }} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" or "[Enforcing {{ site.data.variables.product.prodname_actions }} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)."

{% endnote %}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
4. Wähle unter „Actions permissions" (Berechtigungen für Aktionen) eine Option aus. ![Aktiviere, deaktiviere oder limitiere die Aktionen für dieses Repository](/assets/images/help/repository/enable-repo-actions.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configuring the private fork policy for a repository

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
