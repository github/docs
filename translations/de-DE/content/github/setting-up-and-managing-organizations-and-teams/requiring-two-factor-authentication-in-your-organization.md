---
title: Zwei-Faktor-Authentifizierung in Deiner Organisation erzwingen
intro: 'Organization owners can require {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to enable two-factor authentication for their personal accounts, making it harder for malicious actors to access an organization''s repositories and settings.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About two-factor authentication for organizations

{% data reusables.two_fa.about-2fa %} You can require all {% if currentVersion == "free-pro-team@latest" %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} in your organization to enable two-factor authentication on {% data variables.product.product_name %}. For more information about two-factor authentication, see "[Securing your account with two-factor authentication (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)."

{% if currentVersion == "free-pro-team@latest" %}

You can also require two-factor authentication for organizations in an enterprise. Weiter Informationen findest Du unter „[Sicherheitseinstellungen für Dein Enterprise-Konto erzwingen](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#requiring-two-factor-authentication-for-organizations-in-your-enterprise-account)."

{% endif %}

{% warning %}

**Warnungen:**

- When you require use of two-factor authentication for your organization, {% if currentVersion == "free-pro-team@latest" %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} (including bot accounts) who do not use 2FA will be removed from the organization and lose access to its repositories. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation. Du kannst [die Zugriffsberechtigungen und Einstellungen dieser Personen wiederherstellen](/articles/reinstating-a-former-member-of-your-organization), wenn sie die Zwei-Faktor-Authentifizierung für ihre persönlichen Konten innerhalb einer Frist von drei Monaten ab ihrer Entfernung aus der Organisation aktivieren.
- If an organization owner, member,{% if currentVersion == "free-pro-team@latest" %} billing manager,{% endif %} or outside collaborator disables 2FA for their personal account after you've enabled required two-factor authentication, they will automatically be removed from the organization.
- Falls Du der einzige Inhaber einer Organisation bist, bei der die Zwei-Faktor-Authentifizierung verlangt wird, kannst Du die 2FA für Dein persönliches Konto nicht deaktivieren, ohne gleichzeitig die Erzwingung der Zwei-Faktor-Authentifizierung für die Organisation aufzuheben.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

### Vorrausetzungen

Before you can require {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to use two-factor authentication, you must enable two-factor authentication for your account on {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[Dein Konto durch Zwei-Faktor-Authentifizierung (2FA) schützen](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).“

Before you require use of two-factor authentication, we recommend notifying {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} and asking them to set up 2FA for their accounts. You can see if members and outside collaborators already use 2FA. Weitere Informationen findest Du unter „[Überprüfen, ob die Benutzer Deiner Organisation die 2FA aktiviert haben](/github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled).“

### Zwei-Faktor-Authentifizierung in Deiner Organisation erzwingen

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

Wenn Sie wissen möchten, welche Personen automatisch aus Ihrer Organisation entfernt wurden, weil sie Ihrer Anforderung der Aktivierung der Zwei-Faktor-Authentifizierung nicht Folge leisteten, können Sie [das Auditprotokoll Ihrer Organisation nach Personen durchsuchen](/articles/reviewing-the-audit-log-for-your-organization/#accessing-the-audit-log), die aus der Organisation entfernt wurden. Die im Auditprotokoll aufgezeichneten Ereignisse geben an, ob eine Person aufgrund der Nichterfüllung der 2FA-Anforderung aus der Organisation entfernt wurde.

![Ereignis im Auditprotokoll zur Entfernung eines Benutzers aufgrund der Nichterfüllung der 2FA-Anforderung](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Gib Deine Suchabfrage ein. Verwende für Deine Suche die folgenden Abfragen:
    - für die Suche nach entfernten Organisationsmitgliedern die Suchabfrage `action:org.remove_member`
    - Outside collaborators removed, use `action:org.remove_outside_collaborator` in your search query{% if currentVersion == "free-pro-team@latest" %}
    - für die Suche nach entfernten Abrechnungsmanagern die Suchabfrage `action:org.remove_billing_manager`{% endif %}

 Die Suche nach Personen, die aus Deiner Organisation entfernt wurden, kannst Du auch durch Angabe eines [Zeitfensters](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) in der Suchabfrage eingrenzen.

### Entfernten Organisationsmitgliedern und externen Mitarbeitern den Wiedereintritt zu Deiner Organisation erleichtern

Organisationsmitglieder und externe Mitarbeiter, die aufgrund der Erzwingung der Zwei-Faktor-Authentifizierung aus Ihrer Organisation entfernt werden, erhalten eine E-Mail-Benachrichtigung zu ihrer Entfernung. In dieser E-Mail wird ihnen empfohlen, die 2FA für ihr persönliches Konto zu aktivieren und anschließend bei einem Organisationsinhaber ihren Wiederbeitritt zur Organisation zu veranlassen.

### Weiterführende Informationen

- „[Überprüfen, ob die Benutzer Deiner Organisation die 2FA aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)“
- „[Dein Konto durch die Zwei-Faktor-Authentifizierung (2FA) schützen](/articles/securing-your-account-with-two-factor-authentication-2fa)“
- „[Ehemaliges Mitglied Deiner Organisation wieder einsetzen](/articles/reinstating-a-former-member-of-your-organization)“
- „[Zugriff eines ehemaligen externen Mitarbeiters auf Deine Organisation wieder einsetzen](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)“
