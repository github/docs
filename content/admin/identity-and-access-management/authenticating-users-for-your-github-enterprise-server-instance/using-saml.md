---
title: Using SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication
  - /enterprise/admin/articles/about-saml-authentication
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
  - /admin/authentication/using-saml
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-saml
intro: 'You can configure SAML single sign-on (SSO) for {% data variables.product.product_name %}, which allows users to authenticate through a SAML identity provider (IdP) to access your instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About SAML for {% data variables.product.product_name %}

SAML SSO allows people to authenticate and access {% data variables.product.product_location %} through an external system for identity management.

SAML is an XML-based standard for authentication and authorization. When you configure SAML for {% data variables.product.product_location %}, the external system for authentication is called an identity provider (IdP). Your instance acts as a SAML service provider (SP). For more information, see [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on Wikipedia. 

{% data reusables.enterprise_user_management.built-in-authentication %}

## Supported SAML services

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

If your IdP supports encrypted assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Username considerations with SAML

Each {% data variables.product.prodname_ghe_server %} username is determined by one of the following assertions in the SAML response, ordered by priority:

- The custom username attribute, if defined and present
- An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` assertion, if present
- An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, if present
- The `NameID` element

The `NameID` element is required even if other attributes are present.

A mapping is created between the `NameID` and the {% data variables.product.prodname_ghe_server %} username, so the `NameID` should be persistent, unique, and not subject to change for the lifecycle of the user.

{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the user will see an error message when they try to sign into {% data variables.product.product_location %}. To restore the user's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

## SAML metadata

The service provider metadata for {% data variables.product.product_location %} is available at `http(s)://[hostname]/saml/metadata`.

To configure your identity provider manually, the Assertion Consumer Service (ACS) URL is `http(s)://[hostname]/saml/consume`. It uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

## SAML attributes

These attributes are available. You can change the attribute names in the [management console](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), with the exception of the `administrator` attribute.

| Default attribute name  | Type     | Description |
|-----------------|----------|-------------|
| `NameID` | Required | A persistent user identifier. Any persistent name identifier format may be used. The `NameID` element will be used for a {% data variables.product.prodname_ghe_server %} username unless one of the alternative assertions is provided. |
| `administrator` | Optional | When the value is 'true', the user will automatically be promoted as an administrator. Any other value or a non-existent value will demote the user to a normal user account. |
| `username` | Optional | The {% data variables.product.prodname_ghe_server %} username. |
| `full_name`     | Optional | The name of the user displayed on their profile page. Users may change their names after provisioning. |
| `emails`        | Optional | The email addresses for the user. More than one can be specified. |
| `public_keys`   | Optional | The public SSH keys for the user. More than one can be specified. |
| `gpg_keys`   | Optional | The GPG keys for the user. More than one can be specified.  |

To specify more than one value for an attribute, use multiple `<saml2:AttributeValue>` elements.

```
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Configuring SAML settings

You can enable or disable SAML authentication for {% data variables.product.product_location %}, or you can edit an existing configuration. You can view and edit authentication settings for {% data variables.product.product_name %} in the {% data variables.enterprise.management_console %}. For more information, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)."

{% note %}

**Note**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Select **SAML**.
   
   ![Screenshot of option to enable SAML authentication in management console](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot of option to enable built-in authentication outside of SAML IdP](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Optionally, to enable unsolicited response SSO, select **IdP initiated SSO**. By default, {% data variables.product.prodname_ghe_server %} will reply to an unsolicited Identity Provider (IdP) initiated request with an `AuthnRequest` back to the IdP.

   ![Screenshot of option to enable IdP-initiated unsolicited response](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Note**: We recommend keeping this value **unselected**. You should enable this feature **only** in the rare instance that your SAML implementation does not support service provider initiated SSO, and when advised by {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Select **Disable administrator demotion/promotion** if you **do not** want your SAML provider to determine administrator rights for users on {% data variables.product.product_location %}.

   ![Screenshot of option to enable option to respect the "administrator" attribute from the IdP to enable or disable administrative rights](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
{%- ifversion ghes > 3.3 %}
1. Optionally, to allow {% data variables.product.product_location %} to receive encrypted assertions from your SAML IdP, select **Require encrypted assertions**. You must ensure that your IdP supports encrypted assertions and that the encryption and key transport methods in the management console match the values configured on your IdP. You must also provide {% data variables.product.product_location %}'s public certificate to your IdP. For more information, see "[Enabling encrypted assertions](#enabling-encrypted-assertions)."

   ![Screenshot of "Enable encrypted assertions" checkbox within management console's "Authentication" section](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
{%- endif %}
1. In the **Single sign-on URL** field, type the HTTP or HTTPS endpoint on your IdP for single sign-on requests. This value is provided by your IdP configuration. If the host is only available from your internal network, you may need to [configure {% data variables.product.product_location %} to use internal nameservers](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/).

   ![Screenshot of text field for single sign-on URL](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Optionally, in the **Issuer** field, type your SAML issuer's name. This verifies the authenticity of messages sent to {% data variables.product.product_location %}.

   ![Screenshot of text field for SAML issuer URL](/assets/images/enterprise/management-console/saml-issuer.png)
1. In the **Signature Method** and **Digest Method** drop-down menus, choose the hashing algorithm used by your SAML issuer to verify the integrity of the requests from {% data variables.product.product_location %}. Specify the format with the **Name Identifier Format** drop-down menu.

   ![Screenshot of drop-down menus to select signature and digest method](/assets/images/enterprise/management-console/saml-method.png)
1. Under **Verification certificate**, click **Choose File** and choose a certificate to validate SAML responses from the IdP.

   ![Screenshot of button for uploading validation certificate from IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modify the SAML attribute names to match your IdP if needed, or accept the default names.

   ![Screenshot of fields for entering additional SAML attributes](/assets/images/enterprise/management-console/saml-attributes.png)

{% ifversion ghes > 3.3 %}

## Enabling encrypted assertions

To enable encrypted assertions, your SAML IdP must also support encrypted assertions. You must provide {% data variables.product.product_location %}'s public certificate to your IdP, and configure encryption settings that match your IdP.

{% note %}

**Note**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Optionally, enable SAML debugging. SAML debugging records verbose entries in {% data variables.product.product_name %}'s authentication log, and may help you troubleshoot failed authentication attempts. For more information, see "[Configuring SAML debugging](#configuring-saml-debugging)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Select **Require encrypted assertions**.

   ![Screenshot of "Enable encrypted assertions" checkbox within management console's "Authentication" section](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. To the right of "Encryption Certificate", click **Download** to save a copy of {% data variables.product.product_location %}'s public certificate on your local machine.

   ![Screenshot of "Download" button for public certificate for encrypted assertions](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Sign into your SAML IdP as an administrator.
1. In the application for {% data variables.product.product_location %}, enable encrypted assertions.
   - Note the encryption method and key transport method.
   - Provide the public certificate you downloaded in step 7.
1. Return to the management console on {% data variables.product.product_location %}.
1. To the right of "Encryption Method", select the encryption method for your IdP from step 9.

   ![Screenshot of "Encryption Method" for encrypted assertions](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. To the right of "Key Transport Method", select the key transport method for your IdP from step 9.

   ![Screenshot of "Key Transport Method" for encrypted assertions](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Click **Save settings**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

If you enabled SAML debugging to test authentication with encrypted assertions, disable SAML debugging when you're done testing. For more information, see "[Configuring SAML debugging](#configuring-saml-debugging)."

{% endif %}

## Updating a user's SAML `NameID`

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. In the left sidebar, click **All users**.
  !["All users" sidebar item in site administrator settings](/assets/images/enterprise/site-admin-settings/all-users.png)
3. In the list of users, click the username you'd like to update the `NameID` mapping for.
  ![Username in list of instance user accounts](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** .
  !["Edit" button under "SAML authentication" and to the right of "Update SAML NameID"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. In the "NameID" field, type the new `NameID` for the user.
  !["NameID" field in modal dialog with NameID typed](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Click **Update NameID**.
  !["Update NameID" button under updated NameID value within modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

## Revoking access to {% data variables.product.product_location %}

If you remove a user from your identity provider, you must also manually suspend them. Otherwise, they'll continue to be able to authenticate using access tokens or SSH keys. For more information, see "[Suspending and unsuspending users](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

## Response message requirements

The response message must fulfill the following requirements:

- The `<Destination>` element must be provided on the root response document and match the ACS URL only when the root response document is signed. If the assertion is signed, it will be ignored.
- The `<Audience>` element must always be provided as part of the `<AudienceRestriction>` element. It must match the `EntityId` for {% data variables.product.prodname_ghe_server %}. This is the URL to the {% data variables.product.prodname_ghe_server %} instance, such as `https://ghe.corp.example.com`.
- Each assertion in the response **must** be protected by a digital signature. This can be accomplished by signing each individual `<Assertion>` element or by signing the `<Response>` element.
- A `<NameID>` element must be provided as part of the `<Subject>` element. Any persistent name identifier format may be used.
- The `Recipient` attribute must be present and set to the ACS URL. For example:

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

## Troubleshooting SAML authentication

{% data variables.product.prodname_ghe_server %} logs error messages for failed SAML authentication in the authentication log at  _/var/log/github/auth.log_. For more information about SAML response requirements, see "[Response message requirements](#response-message-requirements)."

### Error: "Another user already owns the account"

When a user signs in to {% data variables.product.prodname_ghe_server %} for the first time with SAML authentication, {% data variables.product.prodname_ghe_server %} creates a user account on the instance and maps the SAML `NameID` to the account.

When the user signs in again, {% data variables.product.prodname_ghe_server %} compares the account's `NameID` mapping to the IdP's response. If the `NameID` in the IdP's response no longer matches the `NameID` that {% data variables.product.prodname_ghe_server %} expects for the user, the sign-in will fail. The user will see the following message.

> Another user already owns the account. Please have your administrator check the authentication log.

The message typically indicates that the person's username or email address has changed on the IdP. Ensure that the `NameID` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` on your IdP. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."

### Error: Recipient in SAML response was blank or not valid

If the `Recipient` does not match the ACS URL for {% data variables.product.product_location %}, one of the following two error messages will appear in the authentication log when a user attempts to authenticate.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Ensure that you set the value for `Recipient` on your IdP to the full ACS URL for {% data variables.product.product_location %}. For example, `https://ghe.corp.example.com/saml/consume`.

### Error: "SAML Response is not signed or has been modified"

If your IdP does not sign the SAML response, or the signature does not match the contents, the following error message will appear in the authentication log.

```
SAML Response is not signed or has been modified.
```

Ensure that you configure signed assertions for the {% data variables.product.prodname_ghe_server %} application on your IdP.

### Error: "Audience is invalid" or "No assertion found"

If the IdP's response has a missing or incorrect value for `Audience`, the following error message will appear in the authentication log.

```shell
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for {% data variables.product.product_location %}, which is the full URL to {% data variables.product.product_location %}. For example, `https://ghe.corp.example.com`.

### Configuring SAML debugging

You can configure {% data variables.product.product_name %} to write verbose debug logs to _/var/log/github/auth.log_ for every SAML authentication attempt. You may be able to troubleshoot failed authentication attempts with this extra output.

{% warning %}

**Warnings**:

- Only enable SAML debugging temporarily, and disable debugging immediately after you finish troubleshooting. If you leave debugging enabled, the size of your log may increase much faster than usual, which can negatively impact the performance of {% data variables.product.product_name %}.
- Test new authentication settings for {% data variables.product.product_location %} in a staging environment before you apply the settings in your production environment. For more information, see "[Setting up a staging instance](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "SAML debugging", select the drop-down and click **Enabled**.

   ![Screenshot of drop-down to enable SAML debugging](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Attempt to sign into {% data variables.product.product_location %} through your SAML IdP.

1. Review the debug output in _/var/log/github/auth.log_ on {% data variables.product.product_location %}.

1. When you're done troubleshooting, select the drop-down and click **Disabled**.

   ![Screenshot of drop-down to disable SAML debugging](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

### Decoding responses in _auth.log_

Some output in _auth.log_ may be Base64-encoded. You can access the administrative shell and use the `base64` utility on {% data variables.product.product_location %} to decode these responses. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```
