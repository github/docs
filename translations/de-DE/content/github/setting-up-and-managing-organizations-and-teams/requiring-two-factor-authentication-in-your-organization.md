---
title: Zwei-Faktor-Authentifizierung in Deiner Organisation erzwingen
intro: 'Organisationsinhaber können von {% if currentVersion == "free-pro-team@latest" %}Organisationsmitgliedern, externen Mitarbeitern und Abrechnungsmanagern{% else %}Organisationsmitgliedern und externen Mitarbeitern{% endif %} die Aktivierung der Zwei-Faktor-Authentifizierung (2FA) für ihre persönlichen Konten erzwingen, um böswillige Angriffe auf die Repositorys und Einstellungen ihrer Organisation zu erschweren.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.two_fa.auth_methods_2fa %}

### Anforderungen für die Erzwingung der Zwei-Faktor-Authentifizierung

Bevor Du von {% if currentVersion == "free-pro-team@latest" %}Organisationsmitgliedern, externen Mitarbeitern und Abrechnungsmanagern{% else %}Organisationsmitgliedern und externen Mitarbeitern{% endif %} die Verwendung der 2FA erzwingst, musst Du selbst die [Zwei-Faktor-Authentifizierung für Dein eigenes persönliches Konto aktivieren](/articles/securing-your-account-with-two-factor-authentication-2fa/).

{% warning %}

**Warnungen:**

- Wenn Du innerhalb Deiner Organisation die Zwei-Faktor-Authentifizierung verlangst, werden {% if currentVersion == "free-pro-team@latest" %}Organisationsmitglieder, externe Mitarbeiter und Abrechnungsmanager{% else %}Organisationsmitglieder und externe Mitarbeiter{% endif %} (einschließlich Bot-Konten), die keine 2FA verwenden, aus der Organisation entfernt und verlieren so den Zugriff auf dessen Repositorys. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation. Du kannst [die Zugriffsberechtigungen und Einstellungen dieser Personen wiederherstellen](/articles/reinstating-a-former-member-of-your-organization), wenn sie die Zwei-Faktor-Authentifizierung für ihre persönlichen Konten innerhalb einer Frist von drei Monaten ab ihrer Entfernung aus der Organisation aktivieren.
- Wenn ein Organisationsinhaber, ein Mitglied{% if currentVersion == "free-pro-team@latest" %}, ein Abrechnungsmanager{% endif %} oder ein externer Mitarbeiter die 2FA für sein persönliches Konto deaktiviert, nachdem Du die Erzwingung der Zwei-Faktor-Authentifizierung aktiviert hast, wird diese Person automatisch aus der Organisation entfernt.
- Falls Du der einzige Inhaber einer Organisation bist, bei der die Zwei-Faktor-Authentifizierung verlangt wird, kannst Du die 2FA für Dein persönliches Konto nicht deaktivieren, ohne gleichzeitig die Erzwingung der Zwei-Faktor-Authentifizierung für die Organisation aufzuheben.

{% endwarning %}

Vor der Erzwingung der Zwei-Faktor-Authentifizierung empfehlen wir Dir, Deine {% if currentVersion == "free-pro-team@latest" %}Organisationsmitglieder, externen Mitarbeiter und Abrechnungsmanager{% else %}Organisationsmitglieder und externen Mitarbeiter{% endif %} zu benachrichtigen und sie zu bitten, die 2FA für ihre Konten einzurichten. Auf der Personenseite Deiner Organisation kannst Du [überprüfen, ob die Mitglieder und externen Mitarbeiter Deiner Organisation die 2FA bereits verwenden](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
8. Wenn Mitglieder und externe Mitarbeiter aus Deiner Organisation entfernt werden, weil sie keine 2FA verwenden, empfehlen wir Dir, diesen Personen eine Einladung zur Wiedereinsetzung ihrer bisherigen Privilegien und Zugriffsrechte für Deine Organisation zu senden. Vor der Annahme dieser Einladung müssen sie allerdings die Zwei-Faktor-Authentifizierung aktivieren.
{% endif %}

### Aus Deiner Organisation entfernte Personen anzeigen

Wenn Du wissen möchtest, welche Personen automatisch aus Deiner Organisation entfernt wurden, weil sie Deiner Anforderung zur Aktivierung der Zwei-Faktor-Authentifizierung nicht Folge leisteten, kannst Du [das Auditprotokoll Deiner Organisation nach Personen durchsuchen](/articles/reviewing-the-audit-log-for-your-organization/#accessing-the-audit-log), die aus der Organisation entfernt wurden. Die im Auditprotokoll aufgezeichneten Ereignisse geben an, ob eine Person aufgrund der Nichterfüllung der 2FA-Anforderung aus der Organisation entfernt wurde.

![Ereignis im Auditprotokoll zur Entfernung eines Benutzers aufgrund der Nichterfüllung der 2FA-Anforderung](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Gib Deine Suchabfrage ein. Verwende für Deine Suche die folgenden Abfragen:
    - für die Suche nach entfernten Organisationsmitgliedern die Suchabfrage `action:org.remove_member`
    - für die Suche nach entfernten externen Mitarbeitern die Suchabfrage `action:org.remove_outside_collaborator`{% if currentVersion == "free-pro-team@latest" %}
    - für die Suche nach entfernten Abrechnungsmanagern die Suchabfrage `action:org.remove_billing_manager`{% endif %}

 Die Suche nach Personen, die aus Deiner Organisation entfernt wurden, kannst Du auch durch Angabe eines [Zeitfensters](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) in der Suchabfrage eingrenzen.

### Entfernten Organisationsmitgliedern und externen Mitarbeitern den Wiedereintritt zu Deiner Organisation erleichtern

Organisationsmitglieder und externe Mitarbeiter, die aufgrund der Erzwingung der Zwei-Faktor-Authentifizierung aus Ihrer Organisation entfernt werden, erhalten eine E-Mail-Benachrichtigung zu ihrer Entfernung. In dieser E-Mail wird ihnen empfohlen, die 2FA für ihr persönliches Konto zu aktivieren und anschließend bei einem Organisationsinhaber ihren Wiederbeitritt zur Organisation zu veranlassen.

### Weiterführende Informationen

- „[Überprüfen, ob die Benutzer Deiner Organisation die 2FA aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)“
- „[Dein Konto durch die Zwei-Faktor-Authentifizierung (2FA) schützen](/articles/securing-your-account-with-two-factor-authentication-2fa)“
- „[Ehemaliges Mitglied Deiner Organisation wieder einsetzen](/articles/reinstating-a-former-member-of-your-organization)“
- „[Zugriff eines ehemaligen externen Mitarbeiters auf Deine Organisation wieder einsetzen](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)“
