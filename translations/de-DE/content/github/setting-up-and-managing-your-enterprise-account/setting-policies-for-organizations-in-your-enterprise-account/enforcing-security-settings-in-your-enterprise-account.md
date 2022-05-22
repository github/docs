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
versions:
  free-pro-team: '*'
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

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Du kannst auch zugelassene IP-Adressen für eine einzelne Organisation konfigurieren. Weitere Informationen findest Du auf „[Zugelassene IP-Adressen für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)."

#### Eine zulässige IP-Adresse hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

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

### SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto aktivieren

{% data reusables.saml.dotcom-saml-explanation %} Weitere Informationen findest Du unter „[Informationen über Identitäts- und Zugriffsmanagement mit SAML Single Sign-On](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)."

Enterprise-Inhaber können SAML SSO und zentralisierte Authentifizierung über einen SAML IdP in allen Organisationen eines Enterprise-Kontos ermöglichen. Wenn Du SAML SSO für Dein Enterprise-Konto aktiviert hast, wird SAML SSO standardmäßig für alle Organisationen Deines Enterprise-Kontos aktiviert. Alle Mitglieder müssen sich über SAML SSO authentifizieren, um auf die Organisationen zuzugreifen, bei denen sie Mitglied sind. Enterprise-Inhaber müssen sich über SAML SSO authentifizieren, wenn sie auf ein Enterprise-Konto zugreifen.

{% data reusables.saml.about-saml-access-enterprise-account %} Weitere Informationen findest Du auf „[Anzeigen und Verwalten des SAML-Zugriffs eines Benutzers auf Dein Enterprise-Konto](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)."

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} If you're not participating in the private beta, SCIM is not supported for enterprise accounts. For more information, see "[Managing user provisioning for organizations in your enterprise account](#managing-user-provisioning-for-organizations-in-your-enterprise-account)."

{% note %}

**Hinweis:** Wenn Du die Authentifizierung mit SAML Single Sign-On für Dein Enterprise-Konto aktivierst, werden alle bestehenden SAML-Konfigurationen auf Organisationsebene überschrieben.

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle unter „SAML single sign-on“ (SAML Single Sign-On) **Enable SAML authentication** (SAML-Authentifizierung aktivieren) aus. ![Kontrollkästchen zum Aktivieren von SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. Gib im Feld **Sign on URL** (Sign-On-URL) den HTTPS-Endpunkt für Deinen IdP für Single Sign-On-Anforderungen ein. Diesen Wert findest Du in der IdP-Konfiguration. ![Feld für die URL, auf die Mitglieder bei der Anmeldung weitergeleitet werden](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Gib optional im Feld **Issuer** (Aussteller) den Namen Deines SAML-Ausstellers ein. Dadurch wird die Authentizität versendeter Nachrichten verifiziert. ![Feld für den Namen des SAML-Ausstellers](/assets/images/help/saml/saml_issuer.png)
8. Füge unter **Public Certificate** (Öffentliches Zertifikat) ein Zertifikat ein, um die SAML-Antworten zu verifizieren. ![Feld für das öffentliche Zertifikat des Identity Providers](/assets/images/help/saml/saml_public_certificate.png)
9. Um die Integrität der Anforderungen von Ihrem SAML-Aussteller zu überprüfen, klicken Sie auf {% octicon "pencil" aria-label="The edit icon" %}. Wähle dann in den Dropdownmenüs „Signature Method“ (Signaturmethode) und „Digest Method“ (Digest-Methode) den Hash-Algorithmus aus, den Dein SAML-Aussteller verwendet. ![Dropdownmenüs für die Hash-Algorithmen für die Signaturmethode und Digest-Methode, die Dein SAML-Aussteller verwendet](/assets/images/help/saml/saml_hashing_method.png)
10. Bevor Du SAML SSO für Dein Unternehmen aktivierst, klicke auf **Test SAML configuration** (SAML-Konfiguration testen), um sicherzustellen, dass die eingegebenen Informationen korrekt sind. ![Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/saml/saml_test.png)
11. Klicke auf **Save** (Speichern).

### Managing user provisioning for organizations in your enterprise account

Enterprise owners can manage organization membership in an enterprise account directly from an identity provider (IdP).

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Optionally, you can also enable SAML provisioning and, separately, deprovisioning.

If you configure SCIM in your IdP, each time you make changes to group membership in your IdP, your IdP will make a SCIM call to {% data variables.product.prodname_dotcom %} to update the corresponding organization's membership. If you enable SAML provisioning, each time an enterprise member accesses a resource protected by your enterprise account's SAML configuration, that SAML assertion will trigger provisioning.

For each SCIM call or SAML assertion, {% data variables.product.product_name %} will check the IdP groups the user belongs to and perform the following operations:

- If the user is a member of an IdP group that corresponds to an organization owned by your enterprise account, and the user is not currently a member of that organization, add the user to the organization (SAML assertion) or send the user an email invitation to join the organization (SCIM call).
- Cancel any existing invitations for the user to join an organization owned by your enterprise account.

For each SCIM call and, if you enable SAML deprovisioning, each SAML assertion, {% data variables.product.product_name %} will also perform the following operation:

- If the user is not a member of an IdP group that corresponds to an organization owned by your enterprise account, and the user is currently a member of that organization, remove the user from the organization.

If deprovisioning removes the last remaining owner from an organization, the organization will become unowned. Enterprise owners can assume ownership of unowned organizations. For more information, see "[Managing unowned organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/managing-unowned-organizations-in-your-enterprise-account)."

To enable user provisioning for your enterprise account using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

### Teamsynchronisierung für Organisationen in Deinem Enterprise-Konto verwalten

Enterprise-Inhaber können die Teamsynchronisierung zwischen einem IdP und {% data variables.product.product_name %} ermöglichen, um Organisationsinhabern und Teambetreuern die Verbindung von Teams in den Organisationen Deines Enterprise-Kontos mit IdP-Gruppen zu ermöglichen.

{% data reusables.identity-and-permissions.about-team-sync %}

Mit Deinem Enterprise-Konto kannst Du die Teamsynchronisation mit Azure AD verwenden.

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Du kannst auch die Teamsynchronisation für eine einzelne Organisation konfigurieren und verwalten. Weitere Informationen findest Du unter „[Teamsynchronisation für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)."

#### Vorrausetzungen

Bevor Du die Teamsynchronisierung für Dein Enterprise-Konto aktivieren kannst:
  - müssen Du oder Dein Azure AD-Administrator ein Global-Administrator oder ein Privileged Role-Administrator in Azure AD sein.
  - musst Du SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto mit Deinem unterstützten IdP aktivieren. Weitere Informationen findest Du unter „[SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto aktivieren](#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."
  - musst Du mit SAML SSO und der unterstützten IdP zu Deinem Enterprise-Konto authentifizieren. Weitere Informationen findest Du unter „[Authentifizierung mit SAML Single Sign-On](/articles/authenticating-with-saml-single-sign-on).“

#### Teamsynchronisation für Azure AD verwalten

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Überprüfe die Mandanteninformation des Identitätsanbieters, den Du zu Deinem Enterprise-Konto verbinden willst, dann klicke auf **Approve** (Genehmigen). ![Ausstehende Anforderung zum Aktivieren der Teamsynchronisierung für einen IdP-Mandanten mit der Option zur Genehmigung oder Ablehnung](/assets/images/help/teams/approve-team-synchronization.png)
8. Um die Teamsynchronisation zu deaktivieren, klicke auf **Disable team synchronization** (Teamsynchronisation deaktivieren). ![Deaktivieren der Teamsynchronisierung](/assets/images/help/teams/disable-team-synchronization.png)

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
