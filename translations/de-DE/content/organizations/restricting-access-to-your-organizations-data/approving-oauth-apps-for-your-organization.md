---
title: OAuth-Apps für Ihre Organisation genehmigen
intro: Wenn ein Organisationsmitglied {% data variables.product.prodname_oauth_app %}-Zugriff auf Organisationsressourcen anfordert, können Organisationsinhaber die Anforderung genehmigen oder ablehnen.
redirect_from:
- /articles/approving-third-party-applications-for-your-organization
- /articles/approving-oauth-apps-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Approve OAuth Apps
ms.openlocfilehash: b4f8f81b9ad773af86c7e2b488459d8865de3a49
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134409"
---
Wenn {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen aktiviert sind, müssen Organisationsmitglieder die [Genehmigung eines Organisationsbesitzers einholen](/articles/requesting-organization-approval-for-oauth-apps), bevor sie eine {% data variables.product.prodname_oauth_app %} autorisieren können, die Zugriff auf die Ressourcen der Organisation hat.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Klicke neben der Anwendung, die du genehmigen möchtest, auf **Überprüfen**.
![Link zum Anfordern einer Überprüfung](/assets/images/help/settings/settings-third-party-approve-review.png)
6. Nachdem du die Informationen zur angeforderten Anwendung überprüft hast, klicke auf **Zugriff gewähren**.
![Schaltfläche „Zugriff gewähren“](/assets/images/help/settings/settings-third-party-approve-grant.png)

## Weiterführende Themen

- [Informationen zu {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/about-oauth-app-access-restrictions)
