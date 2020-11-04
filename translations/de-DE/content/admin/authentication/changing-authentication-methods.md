---
title: Authentifizierungsmethoden ändern
intro: 'Sie können jederzeit ändern, wie sich {% data variables.product.prodname_ghe_server %} mit Ihren vorhandenen Konten authentifiziert.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
versions:
  enterprise-server: '*'
---

Wenn Sie die Authentifizierungsmethode ändern, werden die Benutzerkonten auf {% data variables.product.product_location %} beibehalten, und Benutzer melden sich weiterhin beim selben Konto an, sofern ihr Benutzername nicht geändert wird.

Wenn bei der neuen Authentifizierungsmethode Benutzernamen geändert werden, werden neue Konten erstellt. As an administrator, you can rename users through the site admin settings or by using [the User Administration API](/enterprise/{{currentVersion}}/v3/enterprise-admin/users/#rename-an-existing-user).

Zudem sollten Sie die folgenden Issues in Betracht ziehen:

* **Passwörter:** Wenn Sie auf die Verwendung der integrierten Authentifizierung für Ihre Instanz umsteigen, müssen Benutzer nach der erfolgten Änderung ein [Passwort festlegen](/enterprise/user/articles/how-can-i-reset-my-password/)

* **Websiteadministratoren:** Verwaltungsberechtigungen werden [durch Ihren Identity Provider gesteuert, wenn Sie SAML verwenden](/enterprise/admin/guides/user-management/using-saml/#saml-attributes), und können [durch die Gruppenmitgliedschaft gesteuert werden, wenn Sie LDAP verwenden](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Teammitgliedschaft:** Nur mit LDAP können Sie über Ihren Verzeichnisserver die [Teammitgliedschaft steuern](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Benutzersperre:** Wenn Sie LDAP zur Authentifizierung verwenden, kann der Zugriff auf {% data variables.product.prodname_ghe_server %} über _eingeschränkte Gruppen_ gesteuert werden. Nach dem Umstieg auf LDAP werden nach der Konfiguration von eingeschränkten Gruppen vorhandene Benutzer gesperrt, die sich in keiner dieser Gruppen befinden. Die Sperre erfolgt, wenn sie sich anmelden, oder während der nächsten LDAP-Synchronisierung.

* **Gruppenmitgliedschaft:** Wenn Sie LDAP zur Authentifizierung verwenden, werden Benutzer auf Basis der eingeschränkten Gruppenmitgliedschaft und des Kontostatus mit Active Directory automatisch [gesperrt und entsperrt](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

* **Git-Authentifizierung:** SAML und CAS unterstützen die Git-Authentifizierung über HTTP oder HTTPS nur mit einem [persönlichen Zugriffstoken](/articles/creating-an-access-token-for-command-line-use). Die Passwortauthentifizierung über HTTP oder HTTPS wird nicht unterstützt. LDAP unterstützt standardmäßig die passwortbasierte Git-Authentifizierung. Es wird jedoch empfohlen, dass Sie [diese Methode deaktivieren](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) und die Authentifizierung über ein persönliches Zugriffstoken oder über einen SSH-Schlüssel erzwingen.

* **API-Authentifizierung:** SAML und CAS unterstützen die API-Authentifizierung nur mit einem [persönlichen Zugriffstoken](/articles/creating-an-access-token-for-command-line-use). Die einfache Authentifizierung wird nicht unterstützt.

* **Zwei-Faktor-Authentifizierung:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Integrierte Authentifizierung für Benutzer außerhalb Ihres Identity Providers:** Sie können Benutzer einladen, sich bei {% data variables.product.product_location %} zu authentifizieren, ohne sie zu Ihrem Identity Provider hinzuzufügen. Weitere Informationen finden Sie unter „[Integrierte Authentifizierung für Benutzer außerhalb Ihres Identity Providers zulassen](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider)“.
