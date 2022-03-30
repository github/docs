---
title: Usar SAML
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

SAML es un estándar basado en XML para autenticación y autorización. When you configure SAML for {% data variables.product.product_location %}, the external system for authentication is called an identity provider (IdP). Your instance acts as a SAML service provider (SP). For more information, see [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on Wikipedia.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Servicios SAML admitidos

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

If your IdP supports encrypted assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Consideraciones sobre el nombre de usuario con SAML

Cada nombre de usuario {% data variables.product.prodname_ghe_server %} lo determina una de las siguientes aserciones en la respuesta SAML, ordenadas por prioridad:

- El atributo de nombre de usuario personalizado, si está definido y si hay uno.
- Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, si hay una.
- Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, si hay una.
- El elemento `NameID`.

Se requiere el elemento `NameID`, incluso si hay otros atributos.

Se crea un mapeo entre la `NameID` y el nombre de usuario de {% data variables.product.prodname_ghe_server %}, para que la `NameID` deba ser persistente, única, y no estar sujeta a cambios para el ciclo de vida del usuario.

{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the user will see an error message when they try to sign into {% data variables.product.product_location %}. To restore the user's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

## Metadatos SAML

The service provider metadata for {% data variables.product.product_location %} is available at `http(s)://[hostname]/saml/metadata`.

Para configurar tu proveedor de identidad de forma manual, la URL del Servicio de consumidor de aserciones (ACS) es `http(s)://[hostname]/saml/consume`. Esta usa el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

## Atributos de SAML

Estos atributos están disponibles. You can change the attribute names in the [management console](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), with the exception of the `administrator` attribute.

| Nombre de atributo predeterminado | Tipo      | Descripción                                                                                                                                                                                                                                                                                 |
| --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ID del nombre`                   | Requerido | Un identificador de usuario persistente. Se puede usar cualquier formato de identificador de nombre persistente. El elemento `NameID` se usará para un nombre de usuario {% data variables.product.prodname_ghe_server %}, a menos que se proporcione una de las aserciones alternativas. |
| `administrador`                   | Opcional  | Cuando el valor es "true", el usuario será promovido automáticamente como un administrador. Cualquier otro valor o un valor no existente degradará al usuario a una cuenta de usuario normal.                                                                                               |
| `nombre de usuario`               | Opcional  | El nombre de usuario {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                    |
| `nombre_completo`                 | Opcional  | El nombre del usuario que se muestra en su página de perfil. Los usuarios pueden cambiar sus nombres después del aprovisionamiento.                                                                                                                                                         |
| `emails`                          | Opcional  | Las direcciones de correo electrónico para el usuario. Se puede especificar más de una.                                                                                                                                                                                                     |
| `claves_públicas`                 | Opcional  | Las claves SSH públicas para el usuario. Se puede especificar más de una.                                                                                                                                                                                                                   |
| `gpg_keys`                        | Opcional  | Las claves GPG para el usuario. Se puede especificar más de una.                                                                                                                                                                                                                            |

Para especificar más de un valor para un atributo, utiliza elementos múltiples de `<saml2:AttributeValue>`.

```
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Configurar parámetros SAML

You can enable or disable SAML authentication for {% data variables.product.product_location %}, or you can edit an existing configuration. You can view and edit authentication settings for {% data variables.product.product_name %} in the {% data variables.enterprise.management_console %}. Para obtener más información, consulta la sección "[Acceder a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Note**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecciona **SAML**.

   ![Screenshot of option to enable SAML authentication in management console](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot of option to enable built-in authentication outside of SAML IdP](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Opcionalmente, para activar el SSO de respuesta no solicitada, selecciona **IdP initiated SSO**. Por defecto, {% data variables.product.prodname_ghe_server %} responderá a una solicitud iniciada por un proveedor de identidad (IdP) no solicitada con una `AuthnRequest` de vuelta al IdP.

   ![Screenshot of option to enable IdP-initiated unsolicited response](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Note**: We recommend keeping this value **unselected**. You should enable this feature **only** in the rare instance that your SAML implementation does not support service provider initiated SSO, and when advised by {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Selecciona **Disable administrator demotion/promotion (Desactivar la degradación/promoción del administrador)** si **no** quieres que tu proveedor de SAML determine los derechos del administrador para los usuarios en {% data variables.product.product_location %}.

   ![Screenshot of option to enable option to respect the "administrator" attribute from the IdP to enable or disable administrative rights](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
{%- ifversion ghes > 3.3 %}
1. Optionally, to allow {% data variables.product.product_location %} to receive encrypted assertions from your SAML IdP, select **Require encrypted assertions**. You must ensure that your IdP supports encrypted assertions and that the encryption and key transport methods in the management console match the values configured on your IdP. You must also provide {% data variables.product.product_location %}'s public certificate to your IdP. Para obtener más información, consulta la sección "[Habilitar las aserciones cifradas](#enabling-encrypted-assertions)".

   ![Captura de pantalla de la casilla de verificación "Habilitar aserciones cifradas" dentro de la sección de "Autenticación"de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
{%- endif %}
1. In the **Single sign-on URL** field, type the HTTP or HTTPS endpoint on your IdP for single sign-on requests. Este valor lo provee la configuración de tu IdP. If the host is only available from your internal network, you may need to [configure {% data variables.product.product_location %} to use internal nameservers](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/).

   ![Screenshot of text field for single sign-on URL](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Optionally, in the **Issuer** field, type your SAML issuer's name. This verifies the authenticity of messages sent to {% data variables.product.product_location %}.

   ![Screenshot of text field for SAML issuer URL](/assets/images/enterprise/management-console/saml-issuer.png)
1. In the **Signature Method** and **Digest Method** drop-down menus, choose the hashing algorithm used by your SAML issuer to verify the integrity of the requests from {% data variables.product.product_location %}. Specify the format with the **Name Identifier Format** drop-down menu.

   ![Screenshot of drop-down menus to select signature and digest method](/assets/images/enterprise/management-console/saml-method.png)
1. Dentro de **Verification certificate (Certificado de comprobación)**, haz clic en **Choose File (Elegir archivo)** y elige un certificado para validar las respuestas SAML desde el IdP.

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

   ![Captura de pantalla de la casilla de verificación "Habilitar aserciones cifradas" dentro de la sección de "Autenticación"de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
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
1. Haz clic en **Guardar parámetros**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

If you enabled SAML debugging to test authentication with encrypted assertions, disable SAML debugging when you're done testing. For more information, see "[Configuring SAML debugging](#configuring-saml-debugging)."

{% endif %}

## Updating a user's SAML `NameID`

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecciona **SAML**. ![Elemento de "Todos los usuarios" en la barra lateral en la configuración de administrador de sitio](/assets/images/enterprise/site-admin-settings/all-users.png)
3. En la lista de usuarios, da clic en el nombre de usuario del cual te gustaría actualizar el mapeo de la `NameID`. ![Nombre de usuario en la lista de cuentas de usuario de la instancia](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** . ![Botón de "Editar" debajo de "Autenticación de SAML" y a la derecha de "Actualizar la NameID de SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. En el campo de "NameID", teclea la `NameID` nueva para el usuario. ![Campo de "NameID" en diálogo modal con el valor de NameID ingresado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Da clic en **Actualizar NameID**. ![Botón de "Actualizar NameID" debajo del valor actualizado de la NameID dentro del modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

## Revocar acceso a {% data variables.product.product_location %}

Si eliminas un usuario desde tu proveedor de identidad, también debes suspenderlos de forma manual. De lo contrario, seguirán estando disponibles para autenticarse usando los tokens de acceso o las claves SSH. Para obtener más información, consulta "[Suspender y anular suspensión de usuarios](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

## Requisitos para los mensajes de respuesta

El mensaje de respuesta debe cumplir con los siguientes requisitos:

- Se debe proporcionar el elemento `<Destination>` en el documento de respuesta raíz y empatar la URL ACS únicamente cuando dicho documento se firme. Si la aserción está firmada, ésta se ignorará.
- Siempre deberá proporcionarse el elemento `<Audience>` como parte del elemento `<AudienceRestriction>`. It must match the `EntityId` for {% data variables.product.prodname_ghe_server %}. Ésta es la URL para la instancia de {% data variables.product.prodname_ghe_server %}, tal como `https://ghe.corp.example.com`.
- Each assertion in the response **must** be protected by a digital signature. Esto se puede lograr firmando cada elemento `<Assertion>` individual o firmando el elemento `<Response>`.
- Un elemento `<NameID>` se debe proporcionar como parte del elemento `<Subject>`. Se puede usar cualquier formato de identificador de nombre persistente.
- El atributo `Recipient` debe estar presente y establecido en la URL ACS. Por ejemplo:

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

## Autenticación SAML

{% data variables.product.prodname_ghe_server %} logs error messages for failed SAML authentication in the authentication log at  _/var/log/github/auth.log_. Para obtener más información sobre los requisitos de respuesta de SAML, consulta la sección "[Requisitos de mensaje de respuesta](#response-message-requirements)".

### Error: "Another user already owns the account"

Cuando un usuario ingresa en {% data variables.product.prodname_ghe_server %} por primera vez con la autenticación de SAML, {% data variables.product.prodname_ghe_server %} crea una cuenta de usuario en la instancia y mapea la `NameID` de SAML hacia la cuenta.

Cuando el usuario vuelve a ingresar, {% data variables.product.prodname_ghe_server %} compara el mapeo de la `NameID` de la cuenta con la respuesta del IdP. Si la `NameID` en la respuesta del IdP ya no empata con la `NameID` que {% data variables.product.prodname_ghe_server %} espera para el usuario, el inicio de sesión fallará. El usuario verá el siguiente mensaje.

> Another user already owns the account. Please have your administrator check the authentication log.

Este mensaje habitualmente indica que el nombre de usuario o dirección de correo electrónico cambió en el IdP. Ensure that the `NameID` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` on your IdP. For more information, see "[Updating a user's SAML `NameID`](#updating-a-users-saml-nameid)."

### Si la respuesta SAML no está firmada o la firma no coincide con los contenidos, se presentará el siguiente mensaje de error en el registro de autenticación:

If the `Recipient` does not match the ACS URL for {% data variables.product.product_location %}, one of the following two error messages will appear in the authentication log when a user attempts to authenticate.

```
El destinatario en la respuesta SAML no debe estar en blanco.
```

```
El destinatario en la respuesta SAML no era válido.
```

Ensure that you set the value for `Recipient` on your IdP to the full ACS URL for {% data variables.product.product_location %}. Por ejemplo, `https://ghe.corp.example.com/saml/consume`.

### Error: "SAML Response is not signed or has been modified"

Si tu IdP no firma la respuesta de SAML, o si la firma no empata con el contenido, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```
SAML Response is not signed or has been modified.
```

Asegúrate de haber configurado aserciones firmadas para la aplicación de {% data variables.product.prodname_ghe_server %} en tu IdP.

### Error: "Audience is invalid" or "No assertion found"

Si la respuesta del IdP carece o tiene un valor incorrecto para `Audience`, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```shell
La audiencia es no válida. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for {% data variables.product.product_location %}, which is the full URL to {% data variables.product.product_location %}. Por ejemplo, `https://ghe.corp.example.com`.

### Configuring SAML debugging

You can configure {% data variables.product.product_name %} to write verbose debug logs to _/var/log/github/auth.log_ for every SAML authentication attempt. You may be able to troubleshoot failed authentication attempts with this extra output.

{% warning %}

**Advertencias**:

- Only enable SAML debugging temporarily, and disable debugging immediately after you finish troubleshooting. If you leave debugging enabled, the size of your log may increase much faster than usual, which can negatively impact the performance of {% data variables.product.product_name %}.
- Test new authentication settings for {% data variables.product.product_location %} in a staging environment before you apply the settings in your production environment. Para obtener más información, consulta "[Configurar una instancia de preparación](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

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
