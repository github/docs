---
title: Hinzufügen von GitHub-App-Managern in deiner Organisation
intro: Organisationsinhaber*innen können Benutzer*innen die Möglichkeit gewähren, einige oder alle {% data variables.product.prodname_github_apps %} der Organisation zu verwalten.
redirect_from:
- /articles/adding-github-app-managers-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: d8389c85c847b750bdb83eb8b922ad16bfa33bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130777"
---
Weitere Informationen zu {% data variables.product.prodname_github_app %}-Manager-Berechtigungen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers).

## Jemandem die Berechtigung zur Verwaltung aller {% data variables.product.prodname_github_apps %} der Organisation erteilen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Gib unter „Verwaltung“ den Benutzernamen der Person ein, die du als {% data variables.product.prodname_github_app %}-Manager in der Organisation festlegen möchtest. Klicke anschließend auf **Erteilen**.
![Hinzufügen eines {% data variables.product.prodname_github_app %}-Managers](/assets/images/help/organizations/add-github-app-manager.png)

## Jemandem die Berechtigung zur Verwaltung einer einzelnen {% data variables.product.prodname_github_app %} erteilen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Klicke unter {% data variables.product.prodname_github_apps %} auf den Avatar der App, zu der du einen {% data variables.product.prodname_github_app %}-Manager hinzufügen möchtest.
![Wähle {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %} aus.
1. Gib unter „App-Manager“ den Benutzernamen der Person ein, die du als GitHub App-Manager für die App festlegen möchtest. Klicke anschließend auf **Erteilen**.
![Hinzufügen eines {% data variables.product.prodname_github_app %}-Managers für eine bestimmte App](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## Weiterführende Themen

- [Informationen zum {% data variables.product.prodname_dotcom %}-Marketplace](/articles/about-github-marketplace/) {% endif %}
