---
title: GitHub App-Manager zu Deiner Organisation hinzufügen
intro: 'Organisationsinhaber können Benutzern die Berechtigung zum Verwalten bestimmter oder aller {% data variables.product.prodname_github_app %}s der Organisation erteilen.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

Weitere Informationen zu den Berechtigungen für {% data variables.product.prodname_github_app %}-Manager findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization#github-app-managers).“

### Jemandem die Berechtigung zur Verwaltung aller {% data variables.product.prodname_github_app %}s der Organisation erteilen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Gib unter „Management“ (Verwaltung) den Benutzernamen der Person ein, die Du als {% data variables.product.prodname_github_app %}-Manager in der Organisation festlegen möchtest. Klicke anschließend auf **Grant** (Erteilen). ![Einen {% data variables.product.prodname_github_app %}-Manager hinzufügen](/assets/images/help/organizations/add-github-app-manager.png)

### Jemandem die Berechtigung zur Verwaltung einer einzelnen {% data variables.product.prodname_github_app %} erteilen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "
{% data variables.product.prodname_github_app %}s", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for.
![{% data variables.product.prodname_github_app %} auswählen](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Gib unter „App managers“ (App-Manager) den Benutzernamen der Person ein, die Du als GitHub App-Manager für die App festlegen möchtest. Klicke anschließend auf **Grant** (Erteilen). ![Einen {% data variables.product.prodname_github_app %}-Manager für eine bestimmte App hinzufügen](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Informationen zu {% data variables.product.prodname_dotcom %}-Marketplace](/articles/about-github-marketplace/)“
{% endif %}
