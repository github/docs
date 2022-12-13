---
title: Deaktivieren der OAuth-App-Zugriffseinschränkungen für deine Organisation
intro: Organisationsinhaber*innen können Einschränkungen für {% data variables.product.prodname_oauth_apps %} aufheben, die Zugriff auf die Ressourcen der Organisation haben.
redirect_from:
- /articles/disabling-third-party-application-restrictions-for-your-organization
- /articles/disabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 41fae63d8d491eec7a6cd6a275958d5c96fb5f5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134405"
---
{% danger %}

**Warnung**: Wenn du die {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für deine Organisation deaktivierst, gewähren alle Organisationsmitglieder automatisch {% data variables.product.prodname_oauth_app %}-Zugriff auf die privaten Ressourcen der Organisation, wenn sie eine Anwendung zur Verwendung in ihren persönlichen Kontoeinstellungen genehmigen.

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Klicke auf **„Einschränkungen entfernen“**.
  ![Schaltfläche „Einschränkungen entfernen“](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Nachdem du die Informationen zum Deaktivieren der Einschränkungen für Drittanbieteranwendungen gelesen hast, klicke auf **Ja, Anwendungsbeschränkungen entfernen**.
  ![Schaltfläche „Entfernen bestätigen“](/assets/images/help/settings/settings-third-party-confirm-disable.png)
