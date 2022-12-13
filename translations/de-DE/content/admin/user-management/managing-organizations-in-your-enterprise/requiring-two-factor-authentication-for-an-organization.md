---
title: Zwei-Faktor-Authentifizierung für eine Organisation erzwingen
intro: 'Du kannst vorschreiben, dass Organisationsmitglieder und externe Projektmitarbeiter*innen die zweistufige Authentifizierung für ihre persönlichen Konten in einer Organisation aktiveren müssen, wodurch es für Personen mit böswilliger Absicht schwerer wird, auf die Repositorys und Einstellungen einer Organisation zuzugreifen.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 2f7fe986cf3b13a171f85da9d5fdb74eeed0d648
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331640'
---
Bei Verwendung von LDAP oder der integrierten Authentifizierung wird die zweistufige Authentifizierung für {% data variables.product.product_location %} unterstützt. Organisationsadministratoren können festlegen, dass Mitglieder die Zwei-Faktor-Authentifizierung aktivieren müssen.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Weitere Informationen findest du unter [Informationen zur zweistufigen Authentifizierung](/github/authenticating-to-github/about-two-factor-authentication).

## Anforderungen für die Erzwingung der Zwei-Faktor-Authentifizierung

Um die zweistufige Authentifizierung für Organisationsmitglieder und externe Mitarbeiter erzwingen zu können, musst du für dein eigenes persönliches Konto die [zweistufige Authentifizierung aktivieren](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/).

{% warning %}

**Warnungen:**

- Wenn du die Zwei-Faktor-Authentifizierung vorschreibst, werden Mitglieder und externe Mitarbeiter (einschließlich Bot-Konten), welche die Zwei-Faktor-Authentifizierung nicht verwenden, aus der Organisation entfernt und verlieren den Zugriff auf ihre Repositorys, darunter auch ihre Forks der privaten Repositorys. Wenn sie die zweistufige Authentifizierung für ihre persönlichen Konten innerhalb von drei Monaten nach ihrer Entfernung aus der Organisation aktivieren, kannst du ihre [Zugriffsberechtigungen und Einstellungen wiederherstellen](/enterprise/user/articles/reinstating-a-former-member-of-your-organization).
- Bei erforderlicher Zwei-Faktor-Authentifizierung werden Organisationsmitglieder oder externe Mitarbeiter, welche die Zwei-Faktor-Authentifizierung deaktivieren, automatisch aus der Organisation entfernt.
- Falls du der einzige Inhaber einer Organisation bist, bei der die Zwei-Faktor-Authentifizierung verlangt wird, kannst du die 2FA für dein persönliches Konto nicht deaktivieren, ohne gleichzeitig die Erzwingung der Zwei-Faktor-Authentifizierung für die Organisation aufzuheben.

{% endwarning %}

Bevor du festlegen kannst, dass die Zwei-Faktor-Authentifizierung verwendet werden muss, solltest du die Organisationsmitglieder und externen Mitarbeiter benachrichtigen und sie auffordern, die Zwei-Faktor-Authentifizierung für ihre Konten einzurichten. Auf der Personenseite einer Organisation kannst du [überprüfen, ob Mitglieder und externe Mitarbeiter bereits die zweistufige Authentifizierung verwenden](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## Aus deiner Organisation entfernte Personen anzeigen

Wenn du Personen anzeigen möchtest, die automatisch aus deiner Organisation entfernt wurden, da sie trotz Vorgabe die zweistufige Authentifizierung nicht aktiviert haben, kannst du [das Überwachungsprotokoll durchsuchen](/enterprise/admin/guides/installation/searching-the-audit-log/) und dabei `reason:two_factor_requirement_non_compliance` im Suchfeld angeben.

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Gib deine Suchabfrage unter Verwendung von `reason:two_factor_requirement_non_compliance` ein.
 ![Überwachungsprotokollereignis der Personaltools, das einen Benutzer zeigt, der aufgrund von Nichtkonformität mit der zweistufigen Authentifizierung entfernt wurde](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Die Suche kann wie folgt eingegrenzt werden:
    - Suche nach entfernten Organisationsmitgliedern: Gib `action:org.remove_member AND reason:two_factor_requirement_non_compliance` ein.
    - Suche nach entfernten externen Mitarbeitern: Gib `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance` ein.

  Darüber hinaus kannst du die aus einer bestimmten Organisation entfernten Personen anzeigen. Verwende dazu den Namen der Organisation in deiner Suche:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Klicke auf **Suchen**.  

## Entfernten Organisationsmitgliedern und externen Mitarbeitern den Wiedereintritt zu deiner Organisation erleichtern

Organisationsmitglieder und externe Mitarbeiter, die aufgrund der Erzwingung der Zwei-Faktor-Authentifizierung aus deiner Organisation entfernt werden, erhalten eine E-Mail-Benachrichtigung hinsichtlich der Löschung. In dieser E-Mail wird ihnen empfohlen, die 2FA für ihr persönliches Konto zu aktivieren und anschließend bei einem Organisationsinhaber den Wiedereintritt zur Organisation zu ersuchen.

## Weiterführende Themen

- [Überprüfen, ob Benutzer*innen in deiner Organisation die zweistufige Authentifizierung aktiviert haben](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)
- [Schützen deines Kontos durch die zweistufige Authentifizierung (2FA)](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa)
- [Wiederherstellen eines ehemaligen Mitglieds deiner Organisation](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)
- [Wiederherstellen des Zugriffs von externen Projektmitarbeiter*innen auf deine Organisation](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)
