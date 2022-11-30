---
title: Zwei-Faktor-Authentifizierung für eine Organisation erzwingen
intro: 'Sie können vorschreiben, dass Organisationsmitglieder und externe Mitarbeiter die Zwei-Faktor-Authentifizierung für ihre persönlichen Konten in einer Organisation aktiveren müssen, wodurch es für Personen mit böswilliger Absicht schwerer wird, auf die Repositorys und Einstellungen einer Organisation zuzugreifen.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  enterprise-server: '*'
type: how_to
topics:
  - 2fa
  - Enterprise
  - Organizations
  - Policies
  - Security
---
When using LDAP or built-in authentication, two-factor authentication is supported on {% data variables.product.product_location %}. Organisationsadministratoren können festlegen, dass Mitglieder die Zwei-Faktor-Authentifizierung aktivieren müssen.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Weitere Informationen findest Du unter „[Informationen zur Zwei-Faktor-Authentifizierung](/github/authenticating-to-github/about-two-factor-authentication).“

### Anforderungen für die Erzwingung der Zwei-Faktor-Authentifizierung

Bevor Sie festlegen können, dass Organisationsmitglieder und externe Mitarbeiter die Zwei-Faktor-Authentifizierung verwenden müssen, müssen Sie die [Zwei-Faktor-Authentifizierung für Ihr eigenes persönliches Konto aktivieren](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa/).

{% warning %}

**Warnungen:**

- Wenn Sie die Zwei-Faktor-Authentifizierung vorschreiben, werden Mitglieder und externe Mitarbeiter (einschließlich Bot-Konten), welche die Zwei-Faktor-Authentifizierung nicht verwenden, aus der Organisation entfernt und verlieren den Zugriff auf ihre Repositorys, darunter auch ihre Forks der privaten Repositorys. Wenn sie innerhalb von drei Monaten, nachdem sie aus der Organisation entfernt wurden, die Zwei-Faktor-Authentifizierung für ihr persönliches Konto aktivieren, können Sie [ihre Zugriffsberechtigungen und -einstellungen wieder einsetzen](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization).
- Bei erforderlicher Zwei-Faktor-Authentifizierung werden Organisationsmitglieder oder externe Mitarbeiter, welche die Zwei-Faktor-Authentifizierung deaktivieren, automatisch aus der Organisation entfernt.
- Falls Du der einzige Inhaber einer Organisation bist, bei der die Zwei-Faktor-Authentifizierung verlangt wird, kannst Du die 2FA für Dein persönliches Konto nicht deaktivieren, ohne gleichzeitig die Erzwingung der Zwei-Faktor-Authentifizierung für die Organisation aufzuheben.

{% endwarning %}

Bevor Sie festlegen können, dass die Zwei-Faktor-Authentifizierung verwendet werden muss, sollten Sie die Organisationsmitglieder und externen Mitarbeiter benachrichtigen und sie auffordern, die Zwei-Faktor-Authentifizierung für ihre Konten einzurichten. Auf der Registerkarte „People“ (Personen) einer Organisation können Sie [anzeigen, ob die Mitglieder und externen Mitarbeiter die Zwei-Faktor-Authentifizierung bereits verwenden](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}

### Aus Deiner Organisation entfernte Personen anzeigen

Um Personen anzuzeigen, die automatisch aus Ihrer Organisation entfernt wurden, weil sie die erforderliche Zwei-Faktor-Authentifizierung nicht verwendet haben, können Sie mit `reason:two_factor_requirement_non_compliance` im Suchfeld das [Auditprotokoll durchsuchen](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log/).

{% data reusables.audit_log.octicon_icon %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Geben Sie Ihre Suchabfrage ein. Verwenden Sie dazu `reason:two_factor_requirement_non_compliance`. ![Das Personaltools-Auditprotokollereignis zeigt, dass ein Benutzer wegen Nichteinhaltung der 2FA entfernt wurde](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Zum Eingrenzen Ihrer Suche nach:
    - Geben Sie entfernte Organisationsmitglieder `action:org.remove_member AND reason:two_factor_requirement_non_compliance` ein.
    - Geben Sie entfernte externe Mitarbeiter `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance` ein.

  Darüber hinaus können Sie die aus einer bestimmten Organisation entfernten Personen anzeigen. Verwenden Sie dazu den Namen der Organisation in Ihrer Suche:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Click **Search**.

### Entfernten Organisationsmitgliedern und externen Mitarbeitern den Wiedereintritt zu Deiner Organisation erleichtern

Organisationsmitglieder und externe Mitarbeiter, die aufgrund der Erzwingung der Zwei-Faktor-Authentifizierung aus Ihrer Organisation entfernt werden, erhalten eine E-Mail-Benachrichtigung zu ihrer Entfernung. In dieser E-Mail wird ihnen empfohlen, die 2FA für ihr persönliches Konto zu aktivieren und anschließend bei einem Organisationsinhaber ihren Wiederbeitritt zur Organisation zu veranlassen.

### Weiterführende Informationen

- „[Überprüfen, ob die Benutzer Ihrer Organisation die 2FA aktiviert haben](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)“
- „[Konto durch Zwei-Faktor-Authentifizierung (2FA) schützen](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa)“
- „[Ehemaliges Mitglied Ihrer Organisation wieder einsetzen](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)“
- „[Zugriff eines ehemaligen externen Mitarbeiters auf Ihre Organisation wieder einsetzen](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)“
