---
title: Aktivieren der OAuth-App-Zugriffseinschränkungen für deine Organisation
intro: Organisationsinhaber*innen können {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen aktivieren, um zu verhindern, dass nicht vertrauenswürdige Apps auf die Ressourcen der Organisation zugreifen, und gleichzeitig Organisationsmitgliedern die Nutzung von {% data variables.product.prodname_oauth_apps %} für ihre persönlichen Konten zu erlauben.
redirect_from:
- /articles/enabling-third-party-application-restrictions-for-your-organization
- /articles/enabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Enable OAuth App
ms.openlocfilehash: 7ae5885530f449c8ce9981067b0d0fe8b23af0d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134401"
---
{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Warnungen**:
- Durch die Aktivierung von {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen wird allen zuvor autorisierten {% data variables.product.prodname_oauth_apps %} und SSH-Schlüsseln der Zugriff auf die Organisation entzogen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/about-oauth-app-access-restrictions).
- Wenn du die {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen eingerichtet hast, stelle sicher, dass du alle {% data variables.product.prodname_oauth_app %}s erneut autorisierst, die regelmäßig Zugriff auf die privaten Daten der Organisation benötigen. Alle Organisationsmitglieder müssen neue SSH-Schlüssel erstellen, und die Organisation muss nach Bedarf neue Deployment-Schlüssel erstellen.
- Wenn {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen aktiviert sind, können Anwendungen mit einem OAuth-Token auf Informationen zu {% data variables.product.prodname_marketplace %}-Transaktionen zugreifen.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Klicke unter „Zugriffsrichtlinie für Drittanbieteranwendungen“ auf **Anwendungszugriffseinschränkungen einrichten**.
  ![Schaltfläche „Beschränkungen einrichten“](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. Wenn du die Informationen zu Zugriffseinschränkungen für Drittanbieter gelesen hast, klicke auf **Zugriff von Drittanbieteranwendungen einschränken**.
  ![Schaltfläche „Beschränkungen bestätigen“](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
