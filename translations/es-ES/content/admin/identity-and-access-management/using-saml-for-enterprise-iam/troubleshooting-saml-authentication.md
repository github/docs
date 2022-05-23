---
title: Autenticación SAML
shortTitle: Troubleshoot SAML SSO
intro: 'If you use SAML single sign-on (SSO) and people are unable to authenticate to access {% data variables.product.product_location %}, you can troubleshoot the problem.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
---

## About problems with SAML authentication

{% data variables.product.product_name %} logs error messages for failed SAML authentication in the authentication log at _/var/log/github/auth.log_. You can review responses in this log file, and you can also configure more verbose logging.

For more information about SAML response requirements, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)."

## Configurar la depuración de SAML

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

## Decodificar respuestas en _auth.log_

Alguna salida en _auth.log_ podría estar cifrada en Base64. Puedes acceder al shell administrativo y utilizar la utilidad de `base64` en {% data variables.product.product_location %} para decodificar estas respuestas. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```

## Error: "Another user already owns the account"

When a user signs into {% data variables.product.product_location %} for the first time with SAML authentication, {% data variables.product.product_name %} creates a user account on the instance and maps the SAML `NameID` to the account.

Cuando el usuario vuelve a ingresar, {% data variables.product.prodname_ghe_server %} compara el mapeo de la `NameID` de la cuenta con la respuesta del IdP. Si la `NameID` en la respuesta del IdP ya no empata con la `NameID` que {% data variables.product.product_name %} espera para el usuario, el inicio de sesión fallará. El usuario verá el siguiente mensaje.

> Another user already owns the account. Please have your administrator check the authentication log.

Este mensaje habitualmente indica que el nombre de usuario o dirección de correo electrónico cambió en el IdP. Asegúrate de que el mapeo de la `NameID` de la cuenta de usuario de {% data variables.product.prodname_ghe_server %} coincida con la `NameID` en tu IdP. Para obtener más información, consulta la sección "[Actualizar la `NameID` de SAML de un usuario](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)".

## Si la respuesta SAML no está firmada o la firma no coincide con los contenidos, se presentará el siguiente mensaje de error en el registro de autenticación:

Si el `Recipient` no empata con la URL de ACS para {% data variables.product.product_location %}, uno de los siguientes dos mensajes de error se mostrará en la bitácora de autenticación cuando un usuario intenta autenticarse.

```
El destinatario en la respuesta SAML no debe estar en blanco.
```

```
El destinatario en la respuesta SAML no era válido.
```

Asegúrate de que hayas configurado el valor de `Recipient` en tu IdP en la URL completa de ACS para {% data variables.product.product_location %}. Por ejemplo, `https://ghe.corp.example.com/saml/consume`.

## Error: "SAML Response is not signed or has been modified"

Si tu IdP no firma la respuesta de SAML, o si la firma no empata con el contenido, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```
SAML Response is not signed or has been modified.
```

Asegúrate de haber configurado aserciones firmadas para la aplicación de {% data variables.product.product_name %} en tu IdP.

## Error: "Audience is invalid" or "No assertion found"

Si la respuesta del IdP carece o tiene un valor incorrecto para `Audience`, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```
La audiencia es no válida. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for {% data variables.product.product_location %}, which is the full URL to your instance. Por ejemplo, `https://ghe.corp.example.com`.
