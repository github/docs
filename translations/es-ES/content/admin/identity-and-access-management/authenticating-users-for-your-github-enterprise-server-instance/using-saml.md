---
title: Usar SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication
  - /enterprise/admin/articles/about-saml-authentication
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
  - /admin/authentication/using-saml
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-saml
intro: 'Puedes configurar el inicio de sesión único de SAML (SSO) para {% data variables.product.product_name %}, el cual permite que los usuarios se autentiquen mediante un proveedor de identidad (IdP) de SAML para acceder a tu instancia.'
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

## Acerca de SAML para {% data variables.product.product_name %}

El SSO de SAML permite que las personas se autentiquen y accedan a {% data variables.product.product_location %} mediante un sistema externo para la administración de identidades.

SAML es un estándar basado en XML para autenticación y autorización. Cuando configuras SAML para {% data variables.product.product_location %}, el sistema de autenticación externo se denomina un "proveedor de identidad" (IdP). Tu instancia actúa como un proveedor de servicios (PS) de SAML. Para obtener más información, consulta el [Lenguaje de Marcado para Confirmaciones de Seguridad](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) en Wikipedia.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Servicios SAML admitidos

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

Si tu IdP es compatible con confirmaciones cifradas, puedes configurarlas en {% data variables.product.product_name %} para incrementar la seguridad durante el proceso de autenticación.

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

**Nota**: su ka `NameID` de un usuario sí cambia en el IdP, este verá un mensaje de error cuando intente iniciar sesión en {% data variables.product.product_location %}. Para restablecer el acceso de un usuario, necesitarás actualizar el mapeo de la `NameID` de la cuenta del usuario. Para obtener más información, consulta la sección "[Actualizar la `NameID` de SAML de un usuario](#updating-a-users-saml-nameid)".

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

## Metadatos SAML

Los metadatos del proveedor de servicios de {% data variables.product.product_location %} se encuentran disponibles en `http(s)://[hostname]/saml/metadata`.

Para configurar tu proveedor de identidad de forma manual, la URL del Servicio de consumidor de aserciones (ACS) es `http(s)://[hostname]/saml/consume`. Esta usa el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

## Atributos de SAML

Estos atributos están disponibles. Puedes modificar el nombre del atributo en [Consola de administración](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), a excepción del atributo `administrator`.

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

Puedes habilitar o inhabilitar la autenticación de SAML para {% data variables.product.product_location %} o puedes editar una configuración existente. Puedes ver y editar los ajustes de autenticación para {% data variables.product.product_name %} en la {% data variables.enterprise.management_console %}. Para obtener más información, consulta la sección "[Acceder a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Nota**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecciona **SAML**.

   ![Captura de pantalla de la opción para habilitar la autenticación de SAML en la consola de administración](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de pantalla de la opción para habilitar la autenticación integrada fuera del IdP de SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Opcionalmente, para activar el SSO de respuesta no solicitada, selecciona **IdP initiated SSO**. Por defecto, {% data variables.product.prodname_ghe_server %} responderá a una solicitud iniciada por un proveedor de identidad (IdP) no solicitada con una `AuthnRequest` de vuelta al IdP.

   ![Captura de pantalla de la opción para habilitar una respuesta no solicitada iniciada por el IdP](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Nota**: Te recomendamos mantener este valor **deseleccionado**. Deberías habilitar esta característica **únicamente** en la remota instancia de que tu implementación de SAML no sea compatible con el SSO que inició el proveedor de servicios y cuando lo recomiende {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Selecciona **Disable administrator demotion/promotion (Desactivar la degradación/promoción del administrador)** si **no** quieres que tu proveedor de SAML determine los derechos del administrador para los usuarios en {% data variables.product.product_location %}.

   ![Captura de pantalla de la opción para habilitar una opción para respetar el atributo de "administrator" desde el IdP para habilitar o inhabilitar los derechos administrativos](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
{%- ifversion ghes > 3.3 %}
1. Opcionalmente, para permitir que {% data variables.product.product_location %} reciba confirmaciones cifradas desde tu IdP de SAML, selecciona **Requerir confirmaciones cifradas**. Debes asegurarte de que tu IdP sea compatible con las aserciones cifradas y que los métodos de transporte de llaves y de cifrado en la consola de administración empaten con los valores configurados en tu IdP. También debes proporcionar un certificado público de {% data variables.product.product_location %} a tu IdP. Para obtener más información, consulta la sección "[Habilitar las aserciones cifradas](#enabling-encrypted-assertions)".

   ![Captura de pantalla de la casilla de verificación "Habilitar aserciones cifradas" dentro de la sección de "Autenticación"de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
{%- endif %}
1. En el campo **URL de inicio de sesión único**, teclea la terminal HTTP o HTTPS en tu IdP para las solicitudes de inicio de sesión único. Este valor lo provee la configuración de tu IdP. Si el host solo se encuentra disponible en tu red interna, podrías necesitar [configurar {% data variables.product.product_location %} para utilizar servidores de nombres internos](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/).

   ![Captura de pantalla del campo de texto para la URL de inicio de sesión único](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Opcionalmente, en el campo de **Emisor**, teclea el nombre del emisor SAML. Esto verifica la autenticidad de los mensajes que se envían a {% data variables.product.product_location %}.

   ![Captura de pantalla del campo de texto para la URL emisora de SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. En los menús desplegables de **Método de firma** y **Método de resumen**, elige el algoritmo de hash que usa tu emisor SAML para verificar la integridad de las respuestas desde {% data variables.product.product_location %}. Especifica el formato con el menú desplegable **Formato de identificador de nombre**.

   ![Captura de pantalla de los menús desplegables para seleccionar la firma y el método de resumen](/assets/images/enterprise/management-console/saml-method.png)
1. Dentro de **Verification certificate (Certificado de comprobación)**, haz clic en **Choose File (Elegir archivo)** y elige un certificado para validar las respuestas SAML desde el IdP.

   ![Captura de pantalla del botón para subir el certificado de validación desde un IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modifica los nombres de atributo de SAML para hacerlos coincidir con tu IdP, si es necesario, o acepta los nombres predeterminados.

   ![Captura de pantalla de los campos para ingresar atributos SAML adicionales](/assets/images/enterprise/management-console/saml-attributes.png)

{% ifversion ghes > 3.3 %}

## Habilitar las aserciones cifradas

Para habilitar las aserciones cifradas, tu IdP de SAML también debe ser compatible con estas. Debes proporcionar un certificado público de {% data variables.product.product_location %} a tu IdP y configurar los ajustes de cifrado que empaten con este.

{% note %}

**Nota**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Opcionalmente, habilita la depuración de SAML. La depuración de SAML registra las entradas verbosas en la bitácora de autenticación de {% data variables.product.product_name %} y podría ayudarte a solucionar problemas de los intentos de autenticación fallidos. Para obtener más información, consulta la sección "[Configurar la depuración de SAML](#configuring-saml-debugging)".
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecciona **Requerir aserciones cifradas**.

   ![Captura de pantalla de la casilla de verificación "Habilitar aserciones cifradas" dentro de la sección de "Autenticación"de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. A la derecha de "Cerficado de cifrado", haz clic en **Descargar** para guardar una copia del certificado público de {% data variables.product.product_location %} en tu máquina local.

   ![Captura de pantalla del botón "Descargar" de un certificado público para las aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Inicia sesión en tu IdP de SAML como administrador.
1. En la aplicación de {% data variables.product.product_location %}, habilita las aserciones cifradas.
   - Anota el método de cifrado y de transporte de llave.
   - Proporciona el certificado público que descargaste en el paso 7.
1. Regresa a la consola de administración en {% data variables.product.product_location %}.
1. A la derecha de "Método de cifrado", selecciona el método de cifrado para tu IdP desde el paso 9.

   ![Captura de pantalla de "Método de cifrado" para las aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. A la derecha de "Método de transporte de llave", selecciona el método de transporte de llave para tu IdP desde el paso 9.

   ![Captura de pantalla del "Método de transporte de llave" para las aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Haz clic en **Guardar parámetros**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Si habilitaste la depuración de SAML para probar la autenticación con las aserciones cifradas, inhabilita la depuración de SAML cuando termines de hacer las pruebas. Para obtener más información, consulta la sección "[Configurar la depuración de SAML](#configuring-saml-debugging)".

{% endif %}

## Actualizar la `NameID` de SAML de un usuario

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecciona **SAML**. ![Elemento de "Todos los usuarios" en la barra lateral en la configuración de administrador de sitio](/assets/images/enterprise/site-admin-settings/all-users.png)
3. En la lista de usuarios, da clic en el nombre de usuario del cual te gustaría actualizar el mapeo de la `NameID`. ![Nombre de usuario en la lista de cuentas de usuario de la instancia](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. A la derecha de "Actualizar la NameID de SAML", haz clic en **Editar**. ![Botón de "Editar" debajo de "Autenticación de SAML" y a la derecha de "Actualizar la NameID de SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. En el campo de "NameID", teclea la `NameID` nueva para el usuario. ![Campo de "NameID" en diálogo modal con el valor de NameID ingresado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Da clic en **Actualizar NameID**. ![Botón de "Actualizar NameID" debajo del valor actualizado de la NameID dentro del modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

## Revocar acceso a {% data variables.product.product_location %}

Si eliminas un usuario desde tu proveedor de identidad, también debes suspenderlos de forma manual. De lo contrario, seguirán estando disponibles para autenticarse usando los tokens de acceso o las claves SSH. Para obtener más información, consulta "[Suspender y anular suspensión de usuarios](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

## Requisitos para los mensajes de respuesta

El mensaje de respuesta debe cumplir con los siguientes requisitos:

- Se debe proporcionar el elemento `<Destination>` en el documento de respuesta raíz y empatar la URL ACS únicamente cuando dicho documento se firme. Si la aserción está firmada, ésta se ignorará.
- Siempre deberá proporcionarse el elemento `<Audience>` como parte del elemento `<AudienceRestriction>`. Debe coincidir con la `EntityId` de {% data variables.product.prodname_ghe_server %}. Ésta es la URL para la instancia de {% data variables.product.prodname_ghe_server %}, tal como `https://ghe.corp.example.com`.
- Cada aserción en la respuesta **debe** estar protegida con una firma digital. Esto se puede lograr firmando cada elemento `<Assertion>` individual o firmando el elemento `<Response>`.
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

{% data variables.product.prodname_ghe_server %} registra los mensajes de error para la autenticación de SAML fallida en la bitácora de autenticación en _/var/log/github/auth.log_. Para obtener más información sobre los requisitos de respuesta de SAML, consulta la sección "[Requisitos de mensaje de respuesta](#response-message-requirements)".

### Error: "Another user already owns the account"

Cuando un usuario ingresa en {% data variables.product.prodname_ghe_server %} por primera vez con la autenticación de SAML, {% data variables.product.prodname_ghe_server %} crea una cuenta de usuario en la instancia y mapea la `NameID` de SAML hacia la cuenta.

Cuando el usuario vuelve a ingresar, {% data variables.product.prodname_ghe_server %} compara el mapeo de la `NameID` de la cuenta con la respuesta del IdP. Si la `NameID` en la respuesta del IdP ya no empata con la `NameID` que {% data variables.product.prodname_ghe_server %} espera para el usuario, el inicio de sesión fallará. El usuario verá el siguiente mensaje.

> Another user already owns the account. Please have your administrator check the authentication log.

Este mensaje habitualmente indica que el nombre de usuario o dirección de correo electrónico cambió en el IdP. Asegúrate de que el mapeo de la `NameID` de la cuenta de usuario de {% data variables.product.prodname_ghe_server %} coincida con la `NameID` en tu IdP. Para obtener más información, consulta la sección "[Actualizar la `NameID` de SAML de un usuario](#updating-a-users-saml-nameid)".

### Si la respuesta SAML no está firmada o la firma no coincide con los contenidos, se presentará el siguiente mensaje de error en el registro de autenticación:

Si el `Recipient` no empata con la URL de ACS para {% data variables.product.product_location %}, uno de los siguientes dos mensajes de error se mostrará en la bitácora de autenticación cuando un usuario intenta autenticarse.

```
El destinatario en la respuesta SAML no debe estar en blanco.
```

```
El destinatario en la respuesta SAML no era válido.
```

Asegúrate de que hayas configurado el valor de `Recipient` en tu IdP en la URL completa de ACS para {% data variables.product.product_location %}. Por ejemplo, `https://ghe.corp.example.com/saml/consume`.

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

Asegúrate de haber configurado el valor de la `Audience` en tu IdP a la `EntityId` de {% data variables.product.product_location %}, la cual es la URL completa de {% data variables.product.product_location %}. Por ejemplo, `https://ghe.corp.example.com`.

### Configurar la depuración de SAML

Puedes configurar {% data variables.product.product_name %} para escribir bitácoras de depuración verbosas en _/var/log/github/auth.log_ para cada intento de autenticación de SAML. Es posible que puedas solucionar los problemas de los intentos de autenticación fallidos con esta salida adicional.

{% warning %}

**Advertencias**:

- Habilita la depuración de SAML solo temporalmente e inhabilita la depuración inmediatamente después de que termines de solucionar los problemas. Si dejas habilitada la depuración, el tamaño de tu bitácora podría incrementarse mucho más rápido de lo habitual, lo cual podría impactar negativamente el rendimiento de {% data variables.product.product_name %}.
- Prueba los ajustes de autenticación nuevos de {% data variables.product.product_location %} en un ambiente de pruebas antes de aplicar los ajustes en tu ambiente de producción. Para obtener más información, consulta "[Configurar una instancia de preparación](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Debajo de "depuración de SAML", selecciona el menú desplegable y haz clic en **Habilitado**.

   ![Captura de pantalla del menú desplegable para habilitar la depuración de SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Intenta iniciar sesión en {% data variables.product.product_location %} mediante tu IdP de SAML.

1. Revisa la salida de depuración en _/var/log/github/auth.log_ en {% data variables.product.product_location %}.

1. Cuando termines de solucionar los problemas, selecciona el menú desplegable y haz clic en **Inhabilitado**.

   ![Captura de pantalla del menú desplegable para inhabilitar la depuración de SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

### Decodificar respuestas en _auth.log_

Alguna salida en _auth.log_ podría estar cifrada en Base64. Puedes acceder al shell administrativo y utilizar la utilidad de `base64` en {% data variables.product.product_location %} para decodificar estas respuestas. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```
