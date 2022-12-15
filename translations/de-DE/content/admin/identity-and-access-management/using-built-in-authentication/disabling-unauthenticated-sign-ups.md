---
title: Nicht authentifizierte Registrierungen deaktivieren
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: 'Wenn du die integrierte Authentifizierung für {% data variables.product.product_location %} verwendest, kannst du verhindern, dass nicht authentifizierte Benutzer*innen neue Benutzerkonten in deiner Instanz erstellen.'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
ms.openlocfilehash: 063da3aa1e73501d05251e40d7afcb271833afaf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065385'
---
## Informationen zu nicht authentifizierten Registrierungen

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} Du kannst nicht authentifizierte Registrierungen deaktivieren und festlegen, dass neue Benutzerkonten in deiner Instanz nur mit Einladung erstellt werden können.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Nicht authentifizierte Registrierungen deaktivieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Deaktiviere **Registrierung aktivieren**.
![Aktivieren des Kontrollkästchens für die Registrierung](/assets/images/enterprise/management-console/enable-sign-up.png) {% data reusables.enterprise_management_console.save-settings %}
