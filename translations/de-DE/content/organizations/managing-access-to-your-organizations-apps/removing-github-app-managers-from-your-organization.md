---
title: GitHub App-Manager aus deiner Organisation entfernen
intro: Organisationsinhaber*innen können die einem Organisationsmitglied erteilten {% data variables.product.prodname_github_app %}-Managerberechtigungen entziehen.
redirect_from:
- /articles/removing-github-app-managers-from-your-organization
- /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: c7dc813294a1fdd7e928a4212af30efa1182fd3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130773"
---
Weitere Informationen zu {% data variables.product.prodname_github_app %}-Manager-Berechtigungen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers).

## Berechtigungen eines {% data variables.product.prodname_github_app %}-Managers für die gesamte Organisation entfernen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Suche unter „Verwaltung“ den Benutzernamen der Person, deren {% data variables.product.prodname_github_app %}-Manager-Berechtigungen du entfernen möchtest, und klicke auf **Widerrufen**.
![Widerrufen von {% data variables.product.prodname_github_app %}-Manager-Berechtigungen](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## Berechtigungen eines {% data variables.product.prodname_github_app %}-Managers für eine einzelne {% data variables.product.prodname_github_app %} entfernen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Klicke unter „{% data variables.product.prodname_github_apps %}“ auf den Avatar der App, für die du einen {% data variables.product.prodname_github_app %}-Manager entfernen möchtest.
![Wähle {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %} aus.
1. Suche unter „App-Manager“ den Benutzernamen der Person, deren {% data variables.product.prodname_github_app %}-Manager-Berechtigungen du entfernen möchtest, und klicke auf **Widerrufen**.
![Widerrufen von {% data variables.product.prodname_github_app %}-Manager-Berechtigungen](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## Weiterführende Themen

- [Informationen zum {% data variables.product.prodname_dotcom %}-Marketplace](/articles/about-github-marketplace/) {% endif %}
