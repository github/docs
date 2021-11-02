---
title: Enforcing policies for security settings in your enterprise
intro: 'You can enforce policies to manage security settings in your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
---

## About policies for security settings in your enterprise

You can enforce policies to control the security settings for organizations owned by your enterprise on {% data variables.product.product_name %}. By default, organization owners can manage security settings. For more information, see "[Keeping your organization secure](/organizations/keeping-your-organization-secure)."

{% ifversion ghec or ghes %}

## Requiring two-factor authentication for organizations in your enterprise

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their personal accounts.

Before you can require 2FA for all organizations owned by your enterprise, you must enable two-factor authentication for your own account. Weitere Informationen findest Du unter „[Dein Konto durch Zwei-Faktor-Authentifizierung (2FA) schützen](/articles/securing-your-account-with-two-factor-authentication-2fa/).“

{% warning %}

**Warnungen:**

- When you require two-factor authentication for your enterprise, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation. Du kannst die Zugriffsberechtigungen und Einstellungen dieser Personen wiederherstellen, wenn sie die Zwei-Faktor-Authentifizierung für ihre persönlichen Konten innerhalb einer Frist von drei Monaten ab ihrer Entfernung aus der Organisation aktivieren. Weitere Informationen findest Du unter „[Ehemaliges Mitglied Deiner Organisation wieder einsetzen](/articles/reinstating-a-former-member-of-your-organization).“
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their personal account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of a enterprise that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

Bevor Du die Zwei-Faktor-Authentifizierung vorschreiben, empfehlen wir, Organisationsmitglieder, externe Mitarbeiter und Abrechnungsmanager über diesen Schritt zu informieren und sie darum zu bitten, die Zwei-Faktor-Authentifizierung für ihre Konten einzurichten. Organisationsinhaber können auf der Personenseite ihrer Organisationen sehen, ob Mitglieder und externe Mitarbeiter bereits die 2FA verwenden. Weitere Informationen findest Du unter „[Überprüfen, ob die Benutzer Deiner Organisation die 2FA aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).“

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Überprüfe unter „Two-factor authentication“ (Zwei-Faktor-Authentifizierung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle unter „Two-factor authentication“ (Zwei-Faktor-Authentifizierung) **Require two-factor authentication for all organizations in your business** (Zwei-Faktor-Authentifizierung für alle Organisationen in Deinem Unternehmen vorschreiben) aus, und klicke dann auf **Save** (Speichern). ![Kontrollkästchen zum Vorschreiben der Zwei-Faktor-Authentifizierung](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise. To confirm the change, type your enterprise's name, then click **Remove members & require two-factor authentication**. ![Feld zum Bestätigen der vorgeschriebenen 2FA](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Vor der Annahme dieser Einladung müssen diese Benutzer die Zwei-Faktor-Authentifizierung aktivieren.

{% endif %}

{% ifversion ghec or ghae %}

## Managing allowed IP addresses for organizations in your enterprise

{% ifversion ghae %}

You can restrict network traffic to your enterprise on {% data variables.product.product_name %}. For more information, see "[Restricting network traffic to your enterprise](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)."

{% elsif ghec %}

Enterprise owners can restrict access to assets owned by organizations in an enterprise by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

Du kannst auch zugelassene IP-Adressen für eine einzelne Organisation konfigurieren. Weitere Informationen findest Du auf „[Zugelassene IP-Adressen für Deine Organisation verwalten](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

### Eine zulässige IP-Adresse hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Allowing access by {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Zulässige IP-Adressen aktivieren

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. Wähle unter „IP allow list“ (Liste der zulässigen IP-Adressen) **Enable IP allow list** (Liste der zulässigen IP-Adressen aktivieren) aus. ![Kontrollkästchen, um IP-Adressen zuzulassen](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Klicke auf **Save** (Speichern).

### Eine zulässige IP-Adresse bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicke auf **Update** (Aktualisieren).

### Eine zulässige IP-Adresse löschen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authorities (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %} Weitere Informationen finden Sie unter „[Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)“.

### Eine SSH-Zertifizierungsstelle hinzufügen

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Eine SSH-Zertifizierungsstelle löschen

Das Löschen einer Zertifizierungsstelle kann nicht rückgängig gemacht werden. Wenn Sie dieselbe Zertifizierungsstelle in Zukunft wieder verwenden möchten, müssen Sie sie erneut hochladen.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}

## Weiterführende Informationen

- "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"

{% endif %}
