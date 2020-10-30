---
title: SAML verwenden
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
intro: 'SAML ist ein XML-basierter Standard für die Authentifizierung und Autorisierung. {% data variables.product.prodname_ghe_server %} kann als ein Service Provider (SP) mit Ihrem internen SAML Identity Provider (IdP) funktionieren.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Unterstützte SAML-Dienste

{% data reusables.saml.saml-supported-idps %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Grundlegendes für Benutzernamen bei SAML

Jeder {% data variables.product.prodname_ghe_server %}-Benutzername wird nach Priorität geordnet durch eine der folgenden Assertions in der SAML-Antwort bestimmt:

- das benutzerdefinierte Attribut für den Benutzernamen, sofern definiert und vorhanden
- eine ggf. vorhandene Assertion `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- eine ggf. vorhandene Assertion `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- das Element `NameID`

Das Element `NameID` ist selbst dann erforderlich, wenn andere Attribute vorhanden sind.

Zwischen `NameID` und dem {% data variables.product.prodname_ghe_server %}-Benutzernamen wird eine Zuordnung erstellt, daher sollte `NameID` persistent, eindeutig und für den Lebenszyklus des Benutzers nicht änderbar sein.

{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the user will see an error message when they try to sign in to your {% data variables.product.prodname_ghe_server %} instance. {% if currentVersion ver_gt "enterprise-server@2.21" %}To restore the user's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."{% else %} For more information, see "[Error: 'Another user already owns the account'](#error-another-user-already-owns-the-account)."{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### SAML-Metadaten

Die Service Provider-Metadaten Ihrer {% data variables.product.prodname_ghe_server %}-Instanzen sind unter `http(s)://[hostname]/saml/metadata` verfügbar.

Wenn Sie Ihren Identity Provider manuell konfigurieren möchten, lautet die Assertionsverbraucherdienst-URL (ACS) `http(s)://[hostname]/saml/consume`. Dafür wird die Bindung `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` verwendet.

### SAML-Attribute

Die folgenden Attribute sind verfügbar. Mit Ausnahme der `administrator`-Attribute können Sie die Attributnamen in der [Managementkonsole](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/) ändern.

| Standardmäßiger Attributname | Typ          | Beschreibung                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NameID`                     | Erforderlich | Ein persistenter Benutzerkennzeichner. Es kann ein beliebiges Format für persistente Namenskennzeichner verwendet werden. Das Element `NameID` wird für einen {% data variables.product.prodname_ghe_server %}-Benutzernamen verwendet, sofern keine der alternativen Assertions bereitgestellt wird. |
| `Administrator`              | Optional     | Wenn der Wert „true“ lautet, wird der Benutzer automatisch zu einem Administrator hochgestuft. Bei anderen oder nicht vorhandenen Werten wird der Benutzer auf ein normales Benutzerkonto zurückgestuft.                                                                                                     |
| `Benutzername`               | Optional     | Der {% data variables.product.prodname_ghe_server %}-Benutzername.                                                                                                                                                                                                                                    |
| `full_name`                  | Optional     | Der Name des Benutzers, der auf seiner Profilseite angezeigt wird. Nach der Bereitstellung können Benutzer ihre Namen ändern.                                                                                                                                                                                |
| `emails`                     | Optional     | Die E-Mail-Adressen für den Benutzer. Es können mehrere angegeben werden.                                                                                                                                                                                                                                    |
| `public_keys`                | Optional     | Die öffentlichen SSH-Schlüssel für den Benutzer. Es können mehrere angegeben werden.                                                                                                                                                                                                                         |
| `gpg_keys`                   | Optional     | Die GPG-Schlüssel für den Benutzer. Es können mehrere angegeben werden.                                                                                                                                                                                                                                      |

### SAML-Einstellungen konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Wählen Sie **SAML** aus. ![SAML-Authentifizierung](/assets/images/enterprise/management-console/auth-select-saml.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Aktivierung des Kontrollkästchens für integrierte SAML-Authentifizierung](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
5. Wählen Sie optional zum Aktivieren des Unsolicited-Response-SSOs die Option **IdP initiated SSO** (IdP-initiiertes SSO) aus. {% data variables.product.prodname_ghe_server %} antwortet auf eine von einem Identity Provider (IdP) initiierte unaufgeforderte Anforderung standardmäßig durch das Zurücksenden einer `AuthnRequest` an den IdP. ![IdP-SSO über SAML](/assets/images/enterprise/management-console/saml-idp-sso.png)

  {% tip %}

  **Hinweis**: Der Wert sollte bei **unselected** (Nicht ausgewählt) belassen werden. Sie sollten dieses Feature **nur** dann aktivieren, wenn Ihre SAML-Implementierung das vom Service Provider initiierte SSO nicht unterstützt und Sie vom {% data variables.contact.enterprise_support %} dazu angewiesen werden.

  {% endtip %}

5. Wählen Sie **Disable administrator demotion/promotion** (Hochstufen/Zurücksetzen des Administrators deaktivieren) aus, wenn Sie **nicht** möchten, dass Ihr SAML-Anbieter die Administratorrechte für Benutzer auf {% data variables.product.product_location_enterprise %} bestimmen kann. ![SAML-Konfiguration zum Deaktivieren der Administratoroption](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
6. Geben Sie im Feld **Single sign-on URL** (Single Sign-On-URL) den HTTP- oder HTTPS-Endpunkt für Ihren IdP für Single Sign-On-Anforderungen ein. Dieser Wert wird durch Ihre IdP-Konfiguration angegeben. Wenn der Host in Ihrem internen Netzwerk nicht verfügbar ist, müssen Sie [{% data variables.product.product_location_enterprise %} ggf. zur Verwendung interner Nameserver konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/). ![SAML-Authentifizierung](/assets/images/enterprise/management-console/saml-single-sign-url.png)
7. Gib optional im Feld **Issuer** (Aussteller) den Namen Deines SAML-Ausstellers ein. Dadurch wird die Authentizität von Nachrichten verifiziert, die an {% data variables.product.product_location_enterprise %} gesendet werden. ![SAML-Aussteller](/assets/images/enterprise/management-console/saml-issuer.png)
8. Wählen Sie in den Dropdownmenüs **Signature Method** (Signaturmethode) und **Digest Method** (Digest-Methode) den von Ihrem SAML-Aussteller verwendeten Hashalgorithmus aus, um die Integrität der Anforderungen von {% data variables.product.product_location_enterprise %} zu verifizieren. Geben Sie das Format mit dem Dropdownmenü **Name Identifier Format** (Format für Namenskennzeichner) an. ![SAML-Methode](/assets/images/enterprise/management-console/saml-method.png)
9. Klicken Sie unter **Verification certificate** (Verifizierungszertifikat) auf **Choose File** (Datei auswählen), und wählen Sie ein Zertifikat aus, um Ihre SAML-Antworten vom IdP zu validieren. ![SAML-Authentifizierung](/assets/images/enterprise/management-console/saml-verification-cert.png)
10. Ändern Sie die SAML-Attributnamen bei Bedarf so, dass sie mit Ihrem IdP übereinstimmen, oder akzeptieren Sie die Standardnamen.![SAML-Attributnamen](/assets/images/enterprise/management-console/saml-attributes.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Zugriff auf {% data variables.product.product_location_enterprise %} widerrufen

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Wählen Sie **SAML** aus. !["All users" sidebar item in site administrator settings](/assets/images/enterprise/site-admin-settings/all-users.png)
3. In the list of users, click the username you'd like to update the `NameID` mapping for. ![Username in list of instance user accounts](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** . ![SAML-Authentifizierung](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. In the "NameID" field, type the new `NameID` for the user. !["NameID" field in modal dialog with NameID typed](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Click **Update NameID**. !["Update NameID" button under updated NameID value within modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

{% endif %}

### Zugriff auf {% data variables.product.product_location_enterprise %} widerrufen

Wenn Sie einen Benutzer von Ihrem Identity Provider entfernen, müssen Sie ihn zudem manuell sperren. Andernfalls kann er sich weiterhin mithilfe der Zugriffstoken oder SSH-Schlüssel authentifizieren. Weitere Informationen finden Sie unter „[Benutzer sperren und entsperren](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)“.

### Anforderungen für die Antwortmeldung

Die Antwortmeldung muss die folgenden Anforderungen erfüllen:

- Das Element `<Destination>` muss im Root-Antwortdokument bereitgestellt werden und mit der ACS-URL übereinstimmen, und zwar genau dann, wenn das Root-Antwortdokument signiert ist. If the assertion is signed, it will be ignored.
- Das Element `<Audience>` muss immer als Bestandteil des Elements `<AudienceRestriction>` angegeben werden. Das Element `<Audience>` muss immer als Bestandteil des Elements `<AudienceRestriction>` angegeben werden. Dies ist die URL der {% data variables.product.prodname_ghe_server %}-Instanz, wie z.B.`https://ghe.corp.example.com`.
- Jede Assertion in der Antwort **muss** durch eine digitale Signatur geschützt sein. Dies kann erfolgen, indem jedes einzelne `<Assertion>`-Element signiert wird oder indem das `<Response>`-Element signiert wird.
- Ein `<NameID>`-Element muss als Bestandteil des `<Subject>`-Elements bereitgestellt werden. Es kann ein beliebiges Format für persistente Namenskennzeichner verwendet werden.
- Ein `Recipient`-Attribut muss vorhanden und auf die Assertionsverbraucherdienst-URL festgelegt sein. Ein Beispiel:

```xml
<samlp:Response ...>
  <saml:Assertion ...>
    <saml:Subject>
      <saml:NameID ...>...</saml:NameID>
      <saml:SubjectConfirmation ...>
        <saml:SubjectConfirmationData Recipient="https://ghe.corp.example.com/saml/consume" .../>
      </saml:SubjectConfirmation>
    </saml:Subject>
    <saml:AttributeStatement>
      <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
        <saml:AttributeValue>monalisa</saml:AttributeValue>
      </saml:Attribute>
    </saml:AttributeStatement>
  </saml:Assertion>
</samlp:Response>
```

### SAML-Authentifizierung

{% data variables.product.prodname_ghe_server %} logs error messages for failed SAML authentication in the authentication log at  _/var/log/github/auth.log_. For more information about SAML response requirements, see "[Response message requirements](#response-message-requirements)."

#### Error: "Another user already owns the account"

When a user signs in to {% data variables.product.prodname_ghe_server %} for the first time with SAML authentication, {% data variables.product.prodname_ghe_server %} creates a user account on the instance and maps the SAML `NameID` to the account.

When the user signs in again, {% data variables.product.prodname_ghe_server %} compares the account's `NameID` mapping to the IdP's response. If the `NameID` in the IdP's response no longer matches the `NameID` that {% data variables.product.prodname_ghe_server %} expects for the user, the sign-in will fail. The user will see the following message.

> Another user already owns the account. Please have your administrator check the authentication log.

The message typically indicates that the person's username or email address has changed on the IdP. {% if currentVersion ver_gt "enterprise-server@2.21" %}Ensure that the `NameID` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` on your IdP. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."{% else %}For help updating the `NameID` mapping, contact {% data variables.contact.contact_ent_support %}.{% endif %}

#### Wenn die SAML-Antwort nicht signiert ist oder die Signatur nicht mit dem Inhalt übereinstimmt, wird im Authentifizierungsprotokoll die folgende Fehlermeldung angezeigt:

Wenn der `Empfänger` nicht mit der Assertionsverbraucherdienst-URL übereinstimmt, wird im Authentifizierungsprotokoll die folgende Fehlermeldung angezeigt:

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Ensure that you set the value for `Recipient` on your IdP to the full ACS URL for your {% data variables.product.prodname_ghe_server %} instance. For example, `https://ghe.corp.example.com/saml/consume`.

#### Error: "SAML Response is not signed or has been modified"

If your IdP does not sign the SAML response, or the signature does not match the contents, the following error message will appear in the authentication log.

```
SAML Response is not signed or has been modified.
```

Ensure that you configure signed assertions for the {% data variables.product.prodname_ghe_server %} application on your IdP.

#### Error: "Audience is invalid" or "No assertion found"

If the IdP's response has a missing or incorrect value for `Audience`, the following error message will appear in the authentication log.

```shell
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for your {% data variables.product.prodname_ghe_server %} instance, which is the full URL to your {% data variables.product.prodname_ghe_server %} instance. For example, `https://ghe.corp.example.com`.
