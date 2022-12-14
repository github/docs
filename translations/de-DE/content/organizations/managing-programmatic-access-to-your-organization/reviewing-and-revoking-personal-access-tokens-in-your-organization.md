---
title: Überprüfen und Widerrufen persönlicher Zugriffstoken in deiner Organisation
intro: 'Organisationsbesitzer können {% data variables.product.pat_v2 %} mit Zugriff auf ihre Organisation überprüfen. Sie können auch den Zugriff über bestimmte {% data variables.product.pat_v2 %} widerrufen.'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: 5503d5c0daaa506030ffc022e7251f9a016a8034
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107389'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Informationen zum Überprüfen und Widerrufen von {% data variables.product.pat_v2 %}

Organisationsbesitzer können alle {% data variables.product.pat_v2 %} mit Zugriff auf Ressourcen anzeigen, die der Organisation gehören. Sie können den Zugriff durch {% data variables.product.pat_v2 %} auch widerrufen. Wird ein {% data variables.product.pat_v2 %} widerrufen, funktionieren die durch das Token erstellte SSH-Schlüssel weiterhin, und das Token kann weiter öffentliche Ressourcen innerhalb der Organisation lesen.

Wird ein Token widerrufen, erhält der Benutzer/die Benutzerin, der/die das Token erstellt hat, eine Benachrichtigung per E-Mail.

Organisationsbesitzer können nur {% data variables.product.pat_v2 %} anzeigen und widerrufen, nicht {% data variables.product.pat_v1_plural %}. Sofern die Organisation {% ifversion ghec or ghes or ghae %}oder das Unternehmen {% endif %}den Zugriff über {% data variables.product.pat_v1_plural %} nicht eingeschränkt hat, können {% data variables.product.pat_v1 %} bis zum Ablauf des Tokens auf Organisationsressourcen zugreifen. Weitere Informationen zur Einschränkung des Zugriffs über {% data variables.product.pat_v1_plural %} findest du unter [Festlegen einer {% data variables.product.pat_generic %}-Richtlinie für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization){% ifversion ghec or ghes or ghae %} und [Erzwingen von Richtlinien für {% data variables.product.pat_generic %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise){% endif %}.

{% ifversion ghec %} Organisationsbesitzer können {% data variables.product.pat_v1_plural %} auch anzeigen und widerrufen, wenn ihre Organisation das einmalige Anmelden mit SAML erfordert. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs von Benutzer*innen auf dein Unternehmen](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials). Weitere Informationen zur Verwendung der REST-API in diesem Zusammenhang findest du unter [Auflisten von SAML-SSO-Autorisierungen für eine Organisation](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization) und [Entfernen einer SAML-SSO-Autorisierung für eine Organisation](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization).{% endif %}

## Überprüfen und Widerrufen von {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Aktive Token**. Es werden alle {% data variables.product.pat_v2 %} mit Zugriff auf deine Organisation angezeigt.
1. Klicke auf den Namen des Tokens, das du überprüfen oder widerrufen möchtest.
1. Überprüfe den Zugriff und die Berechtigungen, über die das Token verfügt.
1. Klicke auf **Widerrufen**, um den Zugriff des Tokens auf die Organisation zu widerrufen.

Du kannst auch mehrere Token gleichzeitig widerrufen:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Aktive Token**. Es werden alle {% data variables.product.pat_v2 %} mit Zugriff auf deine Organisation angezeigt.
1. Optional kannst du über das Dropdownmenü **Besitzer** die Token nach den Mitgliedern filtern, die das Token erstellt haben.
1. Wähle alle Token aus, die du widerrufen möchtest.
1. Wähle das Dropdownmenü **Ausgewählte Token** aus, und klicke auf **Widerrufen**.
