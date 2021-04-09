---
title: GitHub App-Manager aus Deiner Organisation entfernen
intro: 'Organisationsinhaber können die einem Organisationsmitglied erteilten {% data variables.product.prodname_github_app %}-Managerberechtigungen entziehen.'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
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
1. Klicken Sie unter „{% data variables.product.prodname_github_app %}s“ auf den Avatar der App, für die Sie einen {% data variables.product.prodname_github_app %}-Manager entfernen möchten. ![{% data variables.product.prodname_github_app %} auswählen](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Suche unter „App managers“ (App-Manager) den Benutzernamen der Person, deren {% data variables.product.prodname_github_app %}-Managerberechtigungen Du entziehen möchtest, und klicke auf **Revoke** (Entziehen). ![{% data variables.product.prodname_github_app %}-Managerberechtigungen entziehen](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Informationen zu {% data variables.product.prodname_dotcom %}-Marketplace](/articles/about-github-marketplace/)“
{% endif %}
