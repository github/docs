---
title: GitHub Actions für Deine Organisation Deaktivieren oder Einschränken
intro: 'Organisationsinhaber können GitHub Actions für eine Organisation deaktivieren, aktivieren oder einschränken.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Über {{ site.data.variables.product.prodname_actions }}-Berechtigungen für Deine Organisation

{{ site.data.reusables.github-actions.disabling-github-actions }} Weitere Informationen zu {{ site.data.variables.product.prodname_actions }} findest Du unter „[Über {{ site.data.variables.product.prodname_actions }}](/actions/getting-started-with-github-actions/about-github-actions)."

Du kannst {{ site.data.variables.product.prodname_actions }} für alle Repositories in Deiner Organisation aktivieren. {{ site.data.reusables.github-actions.enabled-actions-description }} Du kannst {{ site.data.variables.product.prodname_actions }} für alle Repositorys in Deiner Organisation deaktivieren. {{ site.data.reusables.github-actions.disabled-actions-description }}

Alternativ kannst Du {{ site.data.variables.product.prodname_actions }} für alle Repository in Deiner Organisation aktivieren, aber die Aktionen limitieren, die ein Workflow ausführen kann. {{ site.data.reusables.github-actions.enabled-local-github-actions }}

### {{ site.data.variables.product.prodname_actions }}-Berechtigungen für Deine Organisation verwalten

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
1. Under **Local and third-party Actions**, select an option. ![Aktiviere, deaktiviere oder limitiere die Aktionen für diese Organisation](/assets/images/help/repository/enable-org-actions.png)
1. Klicke auf **Save** (Speichern).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{{ site.data.reusables.github-actions.private-repository-forks-overview }}

#### Configuring the private fork policy for an organization

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.private-repository-forks-configure }}
{% endif %}
