---
title: GitHub App-Manager zu Deiner Organisation hinzufügen
intro: 'Organization owners can grant users the ability to manage some or all {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add GitHub App managers
---

Weitere Informationen zu den Berechtigungen für {% data variables.product.prodname_github_app %}-Manager findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization#github-app-managers).“

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Gib unter „Management“ (Verwaltung) den Benutzernamen der Person ein, die Du als {% data variables.product.prodname_github_app %}-Manager in der Organisation festlegen möchtest. Klicke anschließend auf **Grant** (Erteilen). ![Einen {% data variables.product.prodname_github_app %}-Manager hinzufügen](/assets/images/help/organizations/add-github-app-manager.png)

## Jemandem die Berechtigung zur Verwaltung einer einzelnen {% data variables.product.prodname_github_app %} erteilen

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for. ![{% data variables.product.prodname_github_app %} auswählen](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Gib unter „App managers“ (App-Manager) den Benutzernamen der Person ein, die Du als GitHub App-Manager für die App festlegen möchtest. Klicke anschließend auf **Grant** (Erteilen). ![Einen {% data variables.product.prodname_github_app %}-Manager für eine bestimmte App hinzufügen](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt %}
## Weiterführende Informationen

- „[Informationen zu {% data variables.product.prodname_dotcom %}-Marketplace](/articles/about-github-marketplace/)“
{% endif %}
