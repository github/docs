---
title: Installierte Integrationen Ihrer Organisation überprüfen
intro: Du kannst die Berechtigungsebenen für die installierten Integrationen Deiner Organisation überprüfen und den Zugriff jeder Integration auf die Repositorys Deiner Organisation konfigurieren.
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130805"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Klicke im Abschnitt „Integrationen" der Randleiste auf **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}** .
{% else %}
1. Klicke auf der linken Randleiste auf **Installierte {% data variables.product.prodname_github_apps %}** .
  ![Installierte Registerkarte {% data variables.product.prodname_github_apps %} in der Seitenleiste mit den Organisationseinstellungen](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. Klicke neben der {% data variables.product.prodname_github_app %}, die du überprüfen machst, auf **Konfigurieren**.
  ![Schaltfläche „Konfigurieren“](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Überprüfe die Berechtigungen und den Repositoryzugriff der {% data variables.product.prodname_github_app %}.
  ![Option zur Festlegung des Zugriffs der {% data variables.product.prodname_github_app %} auf alle Repositorys oder ausgewählte Repositorys](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Soll die {% data variables.product.prodname_github_app %} Zugriff auf alle Repositorys deiner Organisation haben, wähle **Alle Repositorys**.
    - Soll die Anwendung nur auf bestimmte Repositorys Zugriff haben, wähle **Nur ausgewählte Repositorys** aus und gib einen Repository-Namen ein.
7. Klicken Sie auf **Speichern**.
