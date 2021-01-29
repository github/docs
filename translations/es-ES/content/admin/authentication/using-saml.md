---
title: Usar SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
intro: 'SAML es un estándar basado en XML para autenticación y autorización. {% data variables.product.prodname_ghe_server %} puede actuar como un proveedor de servicios (SP) con tu proveedor de identidad (IdP) SAML interno.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Servicios SAML admitidos

{% data reusables.saml.saml-supported-idps %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Consideraciones sobre el nombre de usuario con SAML

Cada nombre de usuario {% data variables.product.prodname_ghe_server %} lo determina una de las siguientes aserciones en la respuesta SAML, ordenadas por prioridad:

- El atributo de nombre de usuario personalizado, si está definido y si hay uno.
- Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, si hay una.
- Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, si hay una.
- El elemento `NameID`.

Se requiere el elemento `NameID`, incluso si hay otros atributos.

Se crea un mapeo entre la `NameID` y el nombre de usuario de {% data variables.product.prodname_ghe_server %}, para que la `NameID` deba ser persistente, única, y no estar sujeta a cambios para el ciclo de vida del usuario.

{% note %}

**Nota**: Si la `NameID` de un usuario sí cambia en el IdP, el usuario verá un mensaje de error cuando intente ingresar en tu instancia de {% data variables.product.prodname_ghe_server %}. {% if currentVersion ver_gt "enterprise-server@2.21" %}Para restablecer el acceso del usuario, necesitarás actualizar el mapeo de `NameID` de la cuenta de usuario. Para obtener más información, consulta la sección "[Actualizar la `NameID`](#updating-a-users-saml-nameid) de SAML de un usuario.{% else %} Para obtener más información, consulta "[Error: 'Another user already owns the account'](#error-another-user-already-owns-the-account)".{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### Metadatos SAML

Los metadatos del provedor de servicios de tu instancia de {% data variables.product.prodname_ghe_server %} se encuentran disponibles en `http(s)://[hostname]/saml/metadata`.

Para configurar tu proveedor de identidad de forma manual, la URL del Servicio de consumidor de aserciones (ACS) es `http(s)://[hostname]/saml/consume`. Esta usa el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Atributos de SAML

Estos atributos están disponibles. Puedes modificar el nombre del atributo en [Consola de administración](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), a excepción del atributo `administrator`.

| Nombre de atributo predeterminado | Type      | Descripción                                                                                                                                                                                                                                                                                 |
| --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ID del nombre`                   | Requerido | Un identificador de usuario persistente. Se puede usar cualquier formato de identificador de nombre persistente. El elemento `NameID` se usará para un nombre de usuario {% data variables.product.prodname_ghe_server %}, a menos que se proporcione una de las aserciones alternativas. |
| `administrator`                   | Opcional  | Cuando el valor es "true", el usuario será promovido automáticamente como un administrador. Cualquier otro valor o un valor no existente degradará al usuario a una cuenta de usuario normal.                                                                                               |
| `username`                        | Opcional  | El nombre de usuario {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                    |
| `nombre_completo`                 | Opcional  | El nombre del usuario que se muestra en su página de perfil. Los usuarios pueden cambiar sus nombres después del aprovisionamiento.                                                                                                                                                         |
| `emails`                          | Opcional  | Las direcciones de correo electrónico para el usuario. Se puede especificar más de una.                                                                                                                                                                                                     |
| `claves_públicas`                 | Opcional  | Las claves SSH públicas para el usuario. Se puede especificar más de una.                                                                                                                                                                                                                   |
| `gpg_keys`                        | Opcional  | Las claves GPG para el usuario. Se puede especificar más de una.                                                                                                                                                                                                                            |

### Configurar parámetros SAML

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Selecciona **SAML**. ![Autenticación SAML](/assets/images/enterprise/management-console/auth-select-saml.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Seleccionar la casilla de verificación Autenticación integrada SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
5. Opcionalmente, para activar el SSO de respuesta no solicitada, selecciona **IdP initiated SSO**. Por defecto, {% data variables.product.prodname_ghe_server %} responderá a una solicitud iniciada por un proveedor de identidad (IdP) no solicitada con una `AuthnRequest` de vuelta al IdP. ![SSO del IdP SAML](/assets/images/enterprise/management-console/saml-idp-sso.png)

  {% tip %}

  **Nota**: Te recomendamos mantener este valor **sin seleccionar**. Debes activar esta función **solo** en el caso inusual que tu implementación SAML no admita el SSO iniciado del proveedor de servicios y que {% data variables.contact.enterprise_support %} lo aconseje.

  {% endtip %}

5. Selecciona **Disable administrator demotion/promotion (Desactivar la degradación/promoción del administrador)** si **no** quieres que tu proveedor de SAML determine los derechos del administrador para los usuarios en {% data variables.product.product_location %}. ![Configuración de administración para desactivar SAML](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
6. En el campo **URL de inicio de sesión único**, escribe la HTTP o el extremo HTTPS en tu IdP para las solicitudes de inicio de sesión único. Este valor lo provee la configuración de tu IdP. Si el host solo está disponible desde tu red interna, es posible que sea necesario [configurar {% data variables.product.product_location %} para usar los servidores de nombres internos](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/). ![Autenticación SAML](/assets/images/enterprise/management-console/saml-single-sign-url.png)
7. También puedes escribir tu nombre de emisor de SAML en el campo **Emisor**. Esto verifica la autenticidad de los mensajes enviados a {% data variables.product.product_location %}. ![Emisor SAML](/assets/images/enterprise/management-console/saml-issuer.png)
8. En los menúes desplegables **Método de firma** y **Método de resumen**, elige el algoritmo de hash que usa tu emisor SAML para verificar la integridad de las respuestas desde {% data variables.product.product_location %}. Especifica el formato con el menú desplegable **Formato de identificador de nombre**. ![Método SAML](/assets/images/enterprise/management-console/saml-method.png)
9. Dentro de **Verification certificate (Certificado de comprobación)**, haz clic en **Choose File (Elegir archivo)** y elige un certificado para validar las respuestas SAML desde el IdP. ![Autenticación SAML](/assets/images/enterprise/management-console/saml-verification-cert.png)
10. Modifica los nombres de atributo de SAML para hacerlos coincidir con tu IdP, si es necesario, o acepta los nombres predeterminados. ![Nombres de atributo de SAML](/assets/images/enterprise/management-console/saml-attributes.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Revocar acceso a {{ site.data.variables.product.product_location_enterprise }}

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecciona **SAML**. ![Elemento de "Todos los usuarios" en la barra lateral en la configuración de administrador de sitio](/assets/images/enterprise/site-admin-settings/all-users.png)
3. En la lista de usuarios, da clic en el nombre de usuario del cual te gustaría actualizar el mapeo de la `NameID`. ![Nombre de usuario en la lista de cuentas de usuario de la instancia](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. Dentro de **Verification certificate (Certificado de comprobación)**, haz clic en **Choose File (Elegir archivo)** y elige un certificado para validar las respuestas SAML desde el IdP. ![Botón de "Editar" debajo de "Autenticación de SAML" y a la derecha de "Actualizar la NameID de SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. En el campo de "NameID", teclea la `NameID` nueva para el usuario. ![Campo de "NameID" en diálogo modal con el valor de NameID ingresado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Da clic en **Actualizar NameID**. ![Botón de "Actualizar NameID" debajo del valor actualizado de la NameID dentro del modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

{% endif %}

### Revocar acceso a {% data variables.product.product_location %}

Si eliminas un usuario desde tu proveedor de identidad, también debes suspenderlos de forma manual. De lo contrario, seguirán estando disponibles para autenticarse usando los tokens de acceso o las claves SSH. Para obtener más información, consulta "[Suspender y anular suspensión de usuarios](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

### Requisitos para los mensajes de respuesta

El mensaje de respuesta debe cumplir con los siguientes requisitos:

- Se debe proporcionar el elemento `<Destination>` en el documento de respuesta raíz y empatar la URL ACS únicamente cuando dicho documento se firme. Si la aserción está firmada, ésta se ignorará.
- Siempre deberá proporcionarse el elemento `<Audience>` como parte del elemento `<AudienceRestriction>`. Siempre deberá proporcionarse el elemento `<Audience>` como parte del elemento `<AudienceRestriction>`. Ésta es la URL para la instancia de {% data variables.product.prodname_ghe_server %}, tal como `https://ghe.corp.example.com`.
- Cada aserción en la respuesta **debe** estar protegida por una firma digital. Esto se puede lograr firmando cada elemento `<Assertion>` individual o firmando el elemento `<Response>`.
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

### Autenticación SAML

de entidad del {% data variables.product.prodname_ghe_server %}, se presentará el siguiente mensaje de error en el registro de autenticación: Para obtener más información sobre los requisitos de respuesta de SAML, consulta la sección "[Requisitos de mensaje de respuesta](#response-message-requirements)".

#### Error: "Another user already owns the account"

Cuando un usuario ingresa en {% data variables.product.prodname_ghe_server %} por primera vez con la autenticación de SAML, {% data variables.product.prodname_ghe_server %} crea una cuenta de usuario en la instancia y mapea la `NameID` de SAML hacia la cuenta.

Cuando el usuario vuelve a ingresar, {% data variables.product.prodname_ghe_server %} compara el mapeo de la `NameID` de la cuenta con la respuesta del IdP. Si la `NameID` en la respuesta del IdP ya no empata con la `NameID` que {% data variables.product.prodname_ghe_server %} espera para el usuario, el inicio de sesión fallará. El usuario verá el siguiente mensaje.

> Another user already owns the account. Please have your administrator check the authentication log.

Este mensaje habitualmente indica que el nombre de usuario o dirección de correo electrónico cambió en el IdP. {% if currentVersion ver_gt "enterprise-server@2.21" %}Asegúrate de que el mapeo de la `NameID` para la cuenta de usuario en {% data variables.product.prodname_ghe_server %} concuerde con la `NameID` del usuario en tu IdP. Para obtener más información, consulta la sección "[Actualizar la `NameID` de SAML de un usuario](#updating-a-users-saml-nameid)".{% else %}Para encontrar ayuda para actualizar el mapeo de la `NameID`, contacta a {% data variables.contact.contact_ent_support %}.{% endif %}

#### Si la respuesta SAML no está firmada o la firma no coincide con los contenidos, se presentará el siguiente mensaje de error en el registro de autenticación:

Si el `Recipient` no coincide con la URL ACS, se presentará el siguiente mensaje de error en el registro de autenticación:

```
El destinatario en la respuesta SAML no debe estar en blanco.
```

```
El destinatario en la respuesta SAML no era válido.
```

Asegúrate de que configuraste el valor para `Recipient` en tu IdP como la URL de ACS completa para tu instancia de {% data variables.product.prodname_ghe_server %}. Por ejemplo, `https://ghe.corp.example.com/saml/consume`.

#### Error: "SAML Response is not signed or has been modified"

Si tu IdP no firma la respuesta de SAML, o si la firma no empata con el contenido, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```
SAML Response is not signed or has been modified.
```

Asegúrate de haber configurado aserciones firmadas para la aplicación de {% data variables.product.prodname_ghe_server %} en tu IdP.

#### Error: "Audience is invalid" or "No assertion found"

Si la respuesta del IdP carece o tiene un valor incorrecto para `Audience`, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```shell
La audiencia es no válida. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Asegúrate de haber configurado el valor para `Audience` en tu IdP como la `EntityId` para tu instancia de {% data variables.product.prodname_ghe_server %}, la cual es la URL completa para tu instancia de {% data variables.product.prodname_ghe_server %}. Por ejemplo, `https://ghe.corp.example.com`.
