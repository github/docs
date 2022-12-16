---
title: Erfordern der zweistufigen Authentifizierung in deiner Organisation
intro: 'Organisationsbesitzer*innen können erfordern, dass {% ifversion fpt or ghec %}Organisationsmitglieder, externe Projektmitarbeiter*innen und Abrechnungsmanager{% else %}Organisationsmitglieder und externe Projektmitarbeiter*innen{% endif %} die zweistufige Authentifizierung für ihre persönlichen Konten aktivieren müssen, sodass es für Personen mit böswilligen Absichten schwieriger ist, auf die Repositorys und Einstellungen der Organisation zuzugreifen.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
ms.openlocfilehash: 1a6ea397b010855917f9304db9a5c51cb5440a22
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147872303'
---
## Informationen zur zweistufigen Authentifizierung für Organisationen

{% data reusables.two_fa.about-2fa %} Du kannst erzwingen, dass alle {% ifversion fpt or ghec %}Mitglieder, externen Projektmitarbeiter*innen und Abrechnungsmanager*innen{% else %}Mitglieder und externen Projektmitarbeiter*innen{% endif %} in deiner Organisation die zweistufige Authentifizierung auf {% data variables.product.product_name %} aktivieren müssen. Weitere Informationen zur zweistufigen Authentifizierung findest du unter [Schützen deines Kontos mit der zweistufigen Authentifizierung (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).

{% ifversion fpt or ghec %}

Du kannst die zweistufige Authentifizierung auch für Organisationen in einem Unternehmen erzwingen. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise).

{% endif %}

{% warning %}

**Warnungen:**

- Wenn du innerhalb der Organisation die zweistufige Authentifizierung erzwingst, werden {% ifversion fpt or ghec %}Mitglieder, externe Projektmitarbeiter*innen und Abrechnungsmanager*innnen{% else %}Mitglieder und externe Projektmitarbeiter*innen{% endif %} (einschließlich Bot-Konten), die keine 2FA verwenden, aus der Organisation entfernt und verlieren so den Zugriff auf deren Repositorys. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation. Du kannst die [Zugriffsberechtigungen und Einstellungen wiederherstellen](/articles/reinstating-a-former-member-of-your-organization), wenn sie die zweistufige Authentifizierung für ihre persönlichen Konten innerhalb einer Frist von drei Monaten ab ihrer Entfernung aus der Organisation aktivieren.
- Wenn ein*e Organisationsbesitzer*in, ein Mitglied, {% ifversion fpt or ghec %}ein*e Abrechnungsmanager*in{% endif %} oder ein*e externe*r Projektmitarbeiter*in die 2FA für sein*ihr persönliches Konto deaktiviert, nachdem du die zweistufige Authentifizierung erzwungen hast, wird diese Person automatisch aus der Organisation entfernt.
- Falls du der einzige Inhaber einer Organisation bist, bei der die Zwei-Faktor-Authentifizierung verlangt wird, kannst du die 2FA für dein persönliches Konto nicht deaktivieren, ohne gleichzeitig die Erzwingung der Zwei-Faktor-Authentifizierung für die Organisation aufzuheben.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## Voraussetzungen

Bevor du erzwingen kannst, dass {% ifversion fpt or ghec %}Organisationsmitglieder, externe Projektmitarbeiter*innen und Abrechnungsmanager*innen{% else %}Organisationsmitglieder und externe Projektmitarbeiter*innen{% endif %} die zweistufige Authentifizierung verwenden, musst du die zweistufige Authentifizierung für dein Konto auf {% data variables.product.product_name %} aktivieren. Weitere Informationen findest du unter [Schützen deines Kontos mit der zweistufigen Authentifizierung (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).

Es wird empfohlen, die {% ifversion fpt or ghec %}Organisationsmitglieder, externen Projektmitarbeiter*innen und Abrechnungsmanager*innen{% else %}Organisationsmitglieder und externen Projektmitarbeiter*innen{% endif %} vor dem Erzwingen zu benachrichtigen und sie zu bitten, die 2FA für ihre Konten einzurichten. Du kannst überprüfen, ob Mitglieder und externe Projektmitarbeiter*innen bereits die 2FA verwenden. Weitere Informationen findest du unter [Anzeigen, ob Benutzer*innnen in deiner Organisation 2FA aktiviert haben](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled).

## Erfordern der zweistufigen Authentifizierung in deiner Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %} {% ifversion fpt or ghec %}
8. Wenn Mitglieder und externe Mitarbeiter aus deiner Organisation entfernt werden, weil sie keine 2FA verwenden, empfehlen wir Dir, diesen Personen eine Einladung zur Wiedereinsetzung ihrer bisherigen Privilegien und Zugriffsrechte für deine Organisation zu senden. Vor der Annahme dieser Einladung müssen sie allerdings die Zwei-Faktor-Authentifizierung aktivieren.
{% endif %}

## Aus deiner Organisation entfernte Personen anzeigen

Wenn du Personen anzeigen möchtest, die automatisch aus deiner Organisation entfernt wurden, da du die zweistufige Authentifizierung zum Zeitpunkt der Erzwingung nicht aktiviert hattest, kannst du [das Überwachungsprotokoll der Organisation nach Personen durchsuchen](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log), die aus deiner Organisation entfernt wurden. Die im Auditprotokoll aufgezeichneten Ereignisse geben an, ob eine Person aufgrund der Nichterfüllung der 2FA-Anforderung aus der Organisation entfernt wurde.

![Ereignis im Auditprotokoll zur Entfernung eines Benutzers aufgrund der Nichterfüllung der 2FA-Anforderung](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Gib deine Suchabfrage ein. Verwende für deine Suche die folgenden Abfragen:
    - Verwende `action:org.remove_member` in deiner Suchabfrage, um entfernte Organisationsmitglieder zu finden.
    - Verwende `action:org.remove_outside_collaborator` in deiner Suchabfrage{% ifversion fpt or ghec %}, um entfernte externe Projektmitarbeiter*innen zu finden.
    - Verwende `action:org.remove_billing_manager` in deiner Suchabfrage, um entfernte Abrechnungsmanager*innen zu finden.{% endif %}

 Du kannst Personen, die aus deiner Organisation entfernt wurden, auch anzeigen, indem du einen [Zeitrahmen](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) in der Suche verwendest.

## Entfernten Organisationsmitgliedern und externen Mitarbeitern den Wiedereintritt zu deiner Organisation erleichtern

Organisationsmitglieder und externe Mitarbeiter, die aufgrund der Erzwingung der Zwei-Faktor-Authentifizierung aus deiner Organisation entfernt werden, erhalten eine E-Mail-Benachrichtigung hinsichtlich der Löschung. In dieser E-Mail wird ihnen empfohlen, die 2FA für ihr persönliches Konto zu aktivieren und anschließend bei einem Organisationsinhaber den Wiedereintritt zur Organisation zu ersuchen.

## Weitere Informationsquellen

- [Überprüfen, ob Benutzer*innen in deiner Organisation die zweistufige Authentifizierung aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)
- [Schützen deines Kontos durch die zweistufige Authentifizierung (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa)
- [Wiederherstellen eines ehemaligen Mitglieds deiner Organisation](/articles/reinstating-a-former-member-of-your-organization)
- [Wiederherstellen des Zugriffs von externen Projektmitarbeiter*innen auf deine Organisation](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)
