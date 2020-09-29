---
title: Integrierte Authentifizierung für Benutzer außerhalb Ihres Identity Providers zulassen
intro: 'Sie können die integrierte Authentifizierung konfigurieren, um Benutzer zu authentifizieren, die keinen Zugriff auf Ihren Identity Provider haben, der LDAP, SAML oder CAS verwendet.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  enterprise-server: '*'
---

### Informationen zur integrierten Authentifizierung für Benutzer außerhalb Ihres Identity Providers

Sie können die integrierte Authentifizierung für externe Benutzer verwenden, wenn Sie nicht in der Lage sind, Ihrem Identity Provider (IdP) bestimmte Konten, beispielsweise Konten für Vertragsnehmer oder Maschinenbenutzer hinzuzufügen. Darüber hinaus können Sie die integrierte Authentifizierung verwenden, um auf ein Fallback-Konto zuzugreifen, falls der Identity Provider nicht verfügbar ist.

Nach der Konfiguration der integrierten Authentifizierung und der erfolgreichen Authentifizierung eines Benutzers mit SAML oder CAS kann er sich nicht mehr mittels Benutzername und Passwort authentifizieren. Wenn sich ein Benutzer erfolgreich mit LDAP authentifiziert, werden die Anmeldeinformationen nicht mehr als intern erachtet.

Die integrierte Authentifizierung für einen spezifischen IdP ist standardmäßig deaktiviert.

{% warning %}

**Warnung:** Falls Sie die integrierte Authentifizierung deaktivieren, müssen Sie die Benutzer einzeln sperren, die nicht mehr auf die Instanz zugreifen sollen. Weitere Informationen finden Sie unter „[Benutzer sperren und entsperren](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)“.

{% endwarning %}

### Integrierte Authentifizierung für Benutzer außerhalb Ihres Identity Providers konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Wählen Sie den gewünschten Identity Provider aus.![Option zur Auswahl des Identity Providers](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Wählen Sie **Allow creation of accounts with built-in authentication** (Erstellung von Konten mit integrierter Authentifizierung zulassen) aus. ![Option zur Auswahl der integrierten Authentifizierung](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lesen Sie die Warnung, und klicken Sie anschließend auf **Ok**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Benutzer außerhalb Ihres Identity Providers zur Authentifizierung an Ihrer Instanz einladen

Wenn ein Benutzer die Einladung akzeptiert, kann er sich anstatt über den IdP mittels Benutzername und Passwort anmelden.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

### Weiterführende Informationen

- „[LDAP verwenden](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap)“
- „[SAML verwenden](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)“
- „[CAS verwenden](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)“
