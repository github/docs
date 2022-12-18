---
title: Autorisierte Integrationen überprüfen
intro: 'Du kannst deine autorisierten Integrationen überprüfen, um den Zugriff der einzelnen Integrationen auf dein Konto und deine Daten zu prüfen.'
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086016'
---
## Überprüfen deiner autorisierten {% data variables.product.prodname_oauth_apps %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## Überprüfen deiner autorisierten {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. Klicke auf die Registerkarte **Autorisierte {% data variables.product.prodname_github_apps %}**. ![Registerkarte „Autorisierte {% data variables.product.prodname_github_apps %}“](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Überprüfe die {% data variables.product.prodname_github_apps %}, die Zugriff auf dein Konto haben. Bei denjenigen, die du nicht kennst oder die nicht mehr aktuell sind, klicke auf **Löschen**. Wenn du alle {% data variables.product.prodname_github_apps %} widerrufen möchtest, klicke auf **Alle widerrufen**.
   ![Liste der autorisierten {% data variables.product.prodname_github_app %}](/assets/images/help/settings/revoke-github-app.png)

## Weitere Informationsquellen
{% ifversion fpt or ghec %}
- „[Informationen zu Integrationen](/articles/about-integrations)“{% endif %}
- [Überprüfen deiner autorisierten Anwendungen (OAuth)](/articles/reviewing-your-authorized-applications-oauth)
