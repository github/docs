---
title: Sicherheitseinstellungen in Deinem Enterprise-Konto erzwingen
intro: Enterprise-Inhaber können bestimmte Sicherheitsrichtlinien für alle Organisationen eines Enterprise-Kontos erzwingen.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Zwei-Faktor-Authentifizierung für Organisationen in Deinem Enterprise-Konto vorschreiben

Enterprise-Inhaber können vorschreiben, dass Organisationsmitglieder, Abrechnungsmanager und externe Mitarbeiter in allen Organisationen eines Enterprise-Kontos die Zwei-Faktor-Authentifizierung (2FA) für den Schutz ihrer persönlichen Konten verwenden.

Bevor Du die 2FA für alle Organisationen Deines Enterprise-Kontos vorschreiben kannst, musst Du sie zunächst für Dein eigenes Konto aktivieren. Weitere Informationen findest Du unter „[Dein Konto durch Zwei-Faktor-Authentifizierung (2FA) schützen](/articles/securing-your-account-with-two-factor-authentication-2fa/).“

{% warning %}

**Warnungen:**

- Wenn Du die Zwei-Faktor-Authentifizierung für Dein Enterprise-Konto vorschreibst, werden Mitglieder, externe Mitarbeiter und Abrechnungsmanager (einschließlich Bot-Konten) der Organisationen Deines Enterprise-Kontos, die keine 2FA verwenden, aus der Organisation entfernt und verlieren den Zugriff auf die Repositorys der Organisation. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation. Du kannst die Zugriffsberechtigungen und Einstellungen dieser Personen wiederherstellen, wenn sie die Zwei-Faktor-Authentifizierung für ihre persönlichen Konten innerhalb einer Frist von drei Monaten ab ihrer Entfernung aus der Organisation aktivieren. Weitere Informationen findest Du unter „[Ehemaliges Mitglied Deiner Organisation wieder einsetzen](/articles/reinstating-a-former-member-of-your-organization).“
- Alle Organisationsinhaber, Mitglieder, Abrechnungsmanager und externen Mitarbeiter der Organisationen Deines Enterprise-Kontos, die die 2FA für ihr persönliches Konto deaktivieren, nachdem Du die 2FA vorgeschrieben hast, werden automatisch aus der Organisation entfernt.
- Falls Du der einzige Inhaber eines Enterprise-Kontos bist, bei dem die Zwei-Faktor-Authentifizierung vorgeschrieben ist, kannst Du die 2FA für Dein persönliches Konto nicht deaktivieren, ohne gleichzeitig die Erzwingung der Zwei-Faktor-Authentifizierung für das Enterprise-Konto aufzuheben.

{% endwarning %}

Bevor Du die Zwei-Faktor-Authentifizierung vorschreiben, empfehlen wir, Organisationsmitglieder, externe Mitarbeiter und Abrechnungsmanager über diesen Schritt zu informieren und sie darum zu bitten, die Zwei-Faktor-Authentifizierung für ihre Konten einzurichten. Organisationsinhaber können auf der Personenseite ihrer Organisationen sehen, ob Mitglieder und externe Mitarbeiter bereits die 2FA verwenden. Weitere Informationen findest Du unter „[Überprüfen, ob die Benutzer Deiner Organisation die 2FA aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).“

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Überprüfe unter „Two-factor authentication“ (Zwei-Faktor-Authentifizierung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle unter „Two-factor authentication“ (Zwei-Faktor-Authentifizierung) **Require two-factor authentication for all organizations in your business** (Zwei-Faktor-Authentifizierung für alle Organisationen in Deinem Unternehmen vorschreiben) aus, und klicke dann auf **Save** (Speichern). ![Kontrollkästchen zum Vorschreiben der Zwei-Faktor-Authentifizierung](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Wenn Du dazu aufgefordert wirst, lies die Informationen zu Mitgliedern und externen Mitarbeitern, die aus den Organisationen Deines Enterprise-Kontos entfernt werden. Gib zur Bestätigung der Änderung den Namen Deines Enterprise-Kontos ein, und klicke dann auf **Remove members & require two-factor authentication** (Mitglieder entfernen & Zwei-Faktor-Authentifizierung vorschreiben). ![Feld zum Bestätigen der vorgeschriebenen 2FA](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Wenn Mitglieder oder externe Mitarbeiter aus den Organisationen Deines Enterprise-Kontos entfernt werden, empfehlen wir optional, ihnen eine Einladung zum Wiederherstellen ihrer früheren Berechtigungen und ihres Zugriffs auf Deine Organisation zu senden. Vor der Annahme dieser Einladung müssen diese Benutzer die Zwei-Faktor-Authentifizierung aktivieren.

### Zulässige IP-Adressen für Organisationen in Deinem Enterprise-Konto verwalten

Enterprise-Inhaber können den Zugriff auf Objekte im Besitz von Organisationen in Enterprise-Konten einschränken, indem sie eine Zulassungsliste für spezifische IP-Adressen konfigurieren. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

Du kannst auch zugelassene IP-Adressen für eine einzelne Organisation konfigurieren. Weitere Informationen findest Du auf „[Zugelassene IP-Adressen für Deine Organisation verwalten](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

#### Eine zulässige IP-Adresse hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### Allowing access by {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

#### Zulässige IP-Adressen aktivieren

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. Wähle unter „IP allow list“ (Liste der zulässigen IP-Adressen) **Enable IP allow list** (Liste der zulässigen IP-Adressen aktivieren) aus. ![Kontrollkästchen, um IP-Adressen zuzulassen](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Klicke auf **Save** (Speichern).

#### Eine zulässige IP-Adresse bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Klicke auf **Update** (Aktualisieren).

#### Eine zulässige IP-Adresse löschen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### SSH-Zertifizierungsstellen Ihres Enterprise-Kontos verwalten

Enterprise-Inhaber können die SSH-Zertifizierungsstellen eines Enterprise-Kontos hinzufügen und löschen.

Indem Sie eine SSH-Zertifizierungsstelle zu Ihrem Enterprise-Konto hinzufügen, können Sie es den Mitgliedern einer Organisation Ihres Enterprise-Kontos erlauben, mit von Ihnen bereitgestellten SSH-Zertifikaten auf die Repositorys dieser Organisation zuzugreifen. {% data reusables.organizations.can-require-ssh-cert %} Weitere Informationen findest Du unter „[Informationen zu SSH-Zertifizierungsstellen](/articles/about-ssh-certificate-authorities).“

#### Eine SSH-Zertifizierungsstelle hinzufügen

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### Eine SSH-Zertifizierungsstelle löschen

Das Löschen einer Zertifizierungsstelle kann nicht rückgängig gemacht werden. Wenn Sie dieselbe Zertifizierungsstelle in Zukunft wieder verwenden möchten, müssen Sie sie erneut hochladen.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

### Weiterführende Informationen

- "[Configuring identity and access management for your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account)"
