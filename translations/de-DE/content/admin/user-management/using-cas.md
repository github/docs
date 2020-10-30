---
title: CAS verwenden
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication/
  - /enterprise/admin/articles/about-cas-authentication/
  - /enterprise/admin/user-management/using-cas
intro: 'CAS ist ein Single Sign-On-Protokoll (SSO) für mehrere Webanwendungen. Ein CAS-Benutzerkonto übernimmt eine(n) {% if currentVersion ver_gt "enterprise-server@2.16" %}Benutzerlizenz{% else %}Benutzer{% endif %} erst nach Anmeldung des Benutzers.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Grundlegendes für Benutzernamen bei CAS

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### CAS-Attribute

Die folgenden Attribute sind verfügbar.

| Attributname | Typ          | Beschreibung                                                              |
| ------------ | ------------ | ------------------------------------------------------------------------- |
| `username`   | Erforderlich | Der {% data variables.product.prodname_ghe_server %}-Benutzername. |

### CAS konfigurieren
{% warning %}

**Warnung:** Bevor Sie CAS auf {% data variables.product.product_location_enterprise %} konfigurieren, sollten Sie beachten, dass Benutzer ihre CAS-Benutzernamen und -Passwörter nicht verwenden können, um API-Anforderungen oder Git-Vorgänge über HTTP/HTTPS zu authentifizieren. Stattdessen müssen sie ein [Zugriffstoken erstellen](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Wählen Sie **CAS** aus. ![CAS-Auswahl](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Aktivierung des Kontrollkästchen für integrierte CAS-Authentifizierung](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. Geben Sie im Feld **Server URL** (Server-URL) die vollständige URL Ihres CAS-Servers ein. Wenn Ihr CAS-Server ein Zertifikat verwendet, das von {% data variables.product.prodname_ghe_server %} nicht validiert werden kann, können Sie den Befehl `ghe-ssl-ca-certificate-install` ausführen, um es als ein vertrauenswürdiges Zertifikat zu installieren.
