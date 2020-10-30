---
title: Integrierte Authentifizierung verwenden
intro: 'Wenn Sie die standardmäßige Authentifizierungsmethode verwenden, werden alle Authentifizierungsdetails in {% data variables.product.product_location_enterprise %} gespeichert. Die integrierte Authentifizierung ist die Standardmethode, wenn Sie nicht bereits über einen etablierten Authentifizierungsanbieter wie LDAP, SAML oder CAS verfügen.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
versions:
  enterprise-server: '*'
---

Du kannst frei definierbare Nachrichten erstellen, die Benutzern auf den Anmelde- und Abmeldeseiten angezeigt werden. Weitere Informationen finden Sie unter „[Benutzermeldungen auf Ihrer Instanz anpassen](/enterprise/admin/user-management/customizing-user-messages-on-your-instance)“.

### Integrierte Authentifizierung konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Wählen Sie **Built in authentication** (Integrierte Authentifizierung) aus. ![Option zur Auswahl der integrierten Authentifizierung](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Ihr Konto erstellen und Benutzer hinzufügen

Nachdem Ihre Instanz erstellt wurde, müssen Sie Ihr eigenes Administratorkonto erstellen und es zum Verteilen von Benutzern verwenden.

1. Wählen Sie auf der Seite „Create Admin Account“ (Administratorkonto erstellen) unter `http(s)://[hostname]/join` Ihren Benutzernamen, Ihr Passwort und Ihre E-Mail-Adresse aus, und klicken Sie anschließend auf **Create an account** (Konto erstellen). ![Admin-Account erstellen](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}
