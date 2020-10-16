---
title: GitHub App-Manager aus Deiner Organisation entfernen
intro: 'Organisationsinhaber können die einem Organisationsmitglied erteilten {% data variables.product.prodname_github_app %}-Managerberechtigungen entziehen.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Weitere Informationen zu den Berechtigungen für {% data variables.product.prodname_github_app %}-Manager findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization#github-app-managers).“

### Berechtigungen eines {% data variables.product.prodname_github_app %}-Managers für die gesamte Organisation entfernen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Suche unter „Management“ (Verwaltung) den Benutzernamen der Person, deren {% data variables.product.prodname_github_app %}-Managerberechtigungen Du entziehen möchtest, und klicke auf **Revoke** (Entziehen). ![{% data variables.product.prodname_github_app %}-Managerberechtigungen entziehen](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### Berechtigungen eines {% data variables.product.prodname_github_app %}-Managers für eine einzelne {% data variables.product.prodname_github_app %} entfernen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "
{% data variables.product.prodname_github_app %}s", click on the avatar of the app you'd like to remove a {% data variables.product.prodname_github_app %} manager from.
![{% data variables.product.prodname_github_app %} auswählen](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Suche unter „App managers“ (App-Manager) den Benutzernamen der Person, deren {% data variables.product.prodname_github_app %}-Managerberechtigungen Du entziehen möchtest, und klicke auf **Revoke** (Entziehen). ![{% data variables.product.prodname_github_app %}-Managerberechtigungen entziehen](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Informationen zu {% data variables.product.prodname_dotcom %}-Marketplace](/articles/about-github-marketplace/)“
{% endif %}
