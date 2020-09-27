---
title: GitHub App-Manager aus Deiner Organisation entfernen
intro: 'Organisationsinhaber können die einem Organisationsmitglied erteilten {{ site.data.variables.product.prodname_github_app }}-Managerberechtigungen entziehen.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Weitere Informationen zu den Berechtigungen für {{ site.data.variables.product.prodname_github_app }}-Manager findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization#github-app-managers).“

### Berechtigungen eines {{ site.data.variables.product.prodname_github_app }}-Managers für die gesamte Organisation entfernen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. Suche unter „Management“ (Verwaltung) den Benutzernamen der Person, deren {{ site.data.variables.product.prodname_github_app }}-Managerberechtigungen Du entziehen möchtest, und klicke auf **Revoke** (Entziehen). ![{{ site.data.variables.product.prodname_github_app }}-Managerberechtigungen entziehen](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Berechtigungen eines {{ site.data.variables.product.prodname_github_app }}-Managers für eine einzelne {{ site.data.variables.product.prodname_github_app }} entfernen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. Klicke unter „{{ site.data.variables.product.prodname_github_app }}s“ auf den Avatar der App, für die Du einen {{ site.data.variables.product.prodname_github_app }}-Manager entfernen möchtest. ![{{ site.data.variables.product.prodname_github_app }} auswählen](/assets/images/help/organizations/select-github-app.png)
{{ site.data.reusables.organizations.app-managers-settings-sidebar }}
1. Suche unter „App managers“ (App-Manager) den Benutzernamen der Person, deren {{ site.data.variables.product.prodname_github_app }}-Managerberechtigungen Du entziehen möchtest, und klicke auf **Revoke** (Entziehen). ![{{ site.data.variables.product.prodname_github_app }}-Managerberechtigungen entziehen](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Informationen zu {{ site.data.variables.product.prodname_dotcom }}-Marketplace](/articles/about-github-marketplace/)“
{% endif %}
