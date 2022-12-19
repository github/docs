---
title: Von einer Organisation die Genehmigung für OAuth-Apps anfordern
intro: 'Organisationsmitglieder und externe Projektmitarbeiter können anfordern, dass ein Besitzer den Zugriff auf Organisationsressourcen für {% data variables.product.prodname_oauth_apps %} genehmigt.'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: affc908d710811563e49bfee6a4e2e906750bf4b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008184'
---
## Informationen zum Anfordern einer Organisationsgenehmigung für eine {% data variables.product.prodname_oauth_app %}

Organisationsmitglieder können jederzeit die Genehmigung des Besitzers für {% data variables.product.prodname_oauth_apps %} anfordern, die sie verwenden möchten, und die Organisationsbesitzer erhalten eine Benachrichtigung über ausstehende Anforderungen.{% ifversion limit-app-access-requests %} Externe Projektmitarbeiter können die Genehmigung des Besitzers für {% data variables.product.prodname_oauth_apps %} anfordern, die sie verwenden möchten, wenn Integrationszugriffsanforderungen aktiviert sind. Weitere Informationen findest du unter [Einschränken von OAuth-App- und GitHub-App-Zugriffsanforderungen](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests).{% endif %}

## Von einer Organisation die Genehmigung für eine {% data variables.product.prodname_oauth_app %} anfordern, die du bereits für dein persönliches Konto zugelassen hast

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. Klicke in der Liste der Anwendungen auf den Namen der {% data variables.product.prodname_oauth_app %}, für die du Zugriff anfordern möchtest.
![Schaltfläche „Anwendung anzeigen“](/assets/images/help/settings/settings-third-party-view-app.png)
4. Klicke neben der Organisation, auf die {% data variables.product.prodname_oauth_app %} zugreifen soll, auf **Zugriff anfordern**.
![Schaltfläche „Zugriff anfordern“](/assets/images/help/settings/settings-third-party-request-access.png)
5. Lies die Informationen zum Anfordern des Zugriffs auf {% data variables.product.prodname_oauth_app %}, und klicke dann auf **Genehmigung von Inhabern anfordern**.
![Schaltfläche zum Anfordern der Genehmigung](/assets/images/help/settings/oauth-access-request-approval.png)

## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/about-oauth-app-access-restrictions)
