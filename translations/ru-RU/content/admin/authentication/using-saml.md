---
title: Using SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
intro: 'SAML is an XML-based standard for authentication and authorization. {% data variables.product.prodname_ghe_server %} can act as a service provider (SP) with your internal SAML identity provider (IdP).'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Supported SAML services

{% data reusables.saml.saml-supported-idps %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Username considerations with SAML

Each {% data variables.product.prodname_ghe_server %} username is determined by one of the following assertions in the SAML response, ordered by priority:

- The custom username attribute, if defined and present
- An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` assertion, if present
- An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, if present
- The `NameID` element

The `NameID` element is required even if other attributes are present.

A mapping is created between the `NameID` and the {% data variables.product.prodname_ghe_server %} username, so the `NameID` should be persistent, unique, and not subject to change for the lifecyle of the user.

{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the user will see an error message when they try to sign in to your {% data variables.product.prodname_ghe_server %} instance. {% if currentVersion ver_gt "enterprise-server@2.21" %}To restore the user's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."{% else %} For more information, see "[Error: 'Another user already owns the account'](#error-another-user-already-owns-the-account)."{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### SAML metadata

Your {% data variables.product.prodname_ghe_server %} instances's service provider metadata is available at `http(s)://[hostname]/saml/metadata`.

To configure your identity provider manually, the Assertion Consumer Service (ACS) URL is `http(s)://[hostname]/saml/consume`. It uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

### SAML attributes

These attributes are available. You can change the attribute names in the [management console](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), with the exception of the `administrator` attribute.

| Default attribute name | Тип      | Description                                                                                                                                                                                                                                |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NameID`               | Required | A persistent user identifier. Any persistent name identifier format may be used. The `NameID` element will be used for a {% data variables.product.prodname_ghe_server %} username unless one of the alternative assertions is provided. |
| `администратор`        | Optional | When the value is 'true', the user will automatically be promoted as an administrator. Any other value or a non-existent value will demote the user to a normal user account.                                                              |
| `имя пользователя`     | Optional | The {% data variables.product.prodname_ghe_server %} username.                                                                                                                                                                           |
| `full_name`            | Optional | The name of the user displayed on their profile page. Users may change their names after provisioning.                                                                                                                                     |
| `emails`               | Optional | The email addresses for the user. More than one can be specified.                                                                                                                                                                          |
| `public_keys`          | Optional | The public SSH keys for the user. More than one can be specified.                                                                                                                                                                          |
| `gpg_keys`             | Optional | The GPG keys for the user. More than one can be specified.                                                                                                                                                                                 |

### Configuring SAML settings

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Select **SAML**. ![SAML authentication](/assets/images/enterprise/management-console/auth-select-saml.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Select SAML built-in authentication checkbox](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
5. Optionally, to enable unsolicited response SSO, select **IdP initiated SSO**. By default, {% data variables.product.prodname_ghe_server %} will reply to an unsolicited Identity Provider (IdP) initiated request with an `AuthnRequest` back to the IdP. ![SAML idP SSO](/assets/images/enterprise/management-console/saml-idp-sso.png)

  {% tip %}

  **Note**: We recommend keeping this value **unselected**. You should enable this feature **only** in the rare instance that your SAML implementation does not support service provider initiated SSO, and when advised by {% data variables.contact.enterprise_support %}.

  {% endtip %}

5. Select **Disable administrator demotion/promotion** if you **do not** want your SAML provider to determine administrator rights for users on {% data variables.product.product_location %}. ![SAML disable admin config](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
6. In the **Single sign-on URL** field, type the HTTP or HTTPS endpoint on your IdP for single sign-on requests. This value is provided by your IdP configuration. If the host is only available from your internal network, you may need to [configure {% data variables.product.product_location %} to use internal nameservers](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/). ![SAML authentication](/assets/images/enterprise/management-console/saml-single-sign-url.png)
7. Optionally, in the **Issuer** field, type your SAML issuer's name. This verifies the authenticity of messages sent to {% data variables.product.product_location %}. ![SAML issuer](/assets/images/enterprise/management-console/saml-issuer.png)
8. In the **Signature Method** and **Digest Method** drop-down menus, choose the hashing algorithm used by your SAML issuer to verify the integrity of the requests from {% data variables.product.product_location %}. Specify the format with the **Name Identifier Format** drop-down menu. ![SAML method](/assets/images/enterprise/management-console/saml-method.png)
9. Under **Verification certificate**, click **Choose File** and choose a certificate to validate SAML responses from the IdP. ![SAML authentication](/assets/images/enterprise/management-console/saml-verification-cert.png)
10. Modify the SAML attribute names to match your IdP if needed, or accept the default names. ![SAML attribute names](/assets/images/enterprise/management-console/saml-attributes.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Updating a user's SAML `NameID`

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. In the left sidebar, click **All users**. !["All users" sidebar item in site administrator settings](/assets/images/enterprise/site-admin-settings/all-users.png)
3. In the list of users, click the username you'd like to update the `NameID` mapping for. ![Username in list of instance user accounts](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** . !["Edit" button under "SAML authentication" and to the right of "Update SAML NameID"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. In the "NameID" field, type the new `NameID` for the user. !["NameID" field in modal dialog with NameID typed](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Click **Update NameID**. !["Update NameID" button under updated NameID value within modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

{% endif %}

### Revoking access to {% data variables.product.product_location %}

If you remove a user from your identity provider, you must also manually suspend them. Otherwise, they'll continue to be able to authenticate using access tokens or SSH keys. For more information, see "[Suspending and unsuspending users](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

### Response message requirements

The response message must fulfill the following requirements:

- The `<Destination>` element must be provided on the root response document and match the ACS URL only when the root response document is signed. If the assertion is signed, it will be ignored.
- The `<Audience>` element must always be provided as part of the `<AudienceRestriction>` element. It must match the `EntityId` for {% data variables.product.prodname_ghe_server %}. This is the URL to the {% data variables.product.prodname_ghe_server %} instance, such as `https://ghe.corp.example.com`.
- Each assertion in the response **must** be protected by a digital signature. This can be accomplished by signing each individual `<Assertion>` element or by signing the `<Response>` element.
- A `<NameID>` element must be provided as part of the `<Subject>` element. Any persistent name identifier format may be used.
- The `Recipient` attribute must be present and set to the ACS URL. Например:

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

### Troubleshooting SAML authentication

{% data variables.product.prodname_ghe_server %} logs error messages for failed SAML authentication in the authentication log at  _/var/log/github/auth.log_. For more information about SAML response requirements, see "[Response message requirements](#response-message-requirements)."

#### Error: "Another user already owns the account"

When a user signs in to {% data variables.product.prodname_ghe_server %} for the first time with SAML authentication, {% data variables.product.prodname_ghe_server %} creates a user account on the instance and maps the SAML `NameID` to the account.

When the user signs in again, {% data variables.product.prodname_ghe_server %} compares the account's `NameID` mapping to the IdP's response. If the `NameID` in the IdP's response no longer matches the `NameID` that {% data variables.product.prodname_ghe_server %} expects for the user, the sign-in will fail. The user will see the following message.

> Another user already owns the account. Please have your administrator check the authentication log.

The message typically indicates that the person's username or email address has changed on the IdP. {% if currentVersion ver_gt "enterprise-server@2.21" %}Ensure that the `NameID` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` on your IdP. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."{% else %}For help updating the `NameID` mapping, contact {% data variables.contact.contact_ent_support %}.{% endif %}

#### Error: Recipient in SAML response was blank or not valid

If the `Recipient` does not match the ACS URL for your {% data variables.product.prodname_ghe_server %} instance, one of the following two error messages will appear in the authentication log when a user attempts to authenticate.

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
