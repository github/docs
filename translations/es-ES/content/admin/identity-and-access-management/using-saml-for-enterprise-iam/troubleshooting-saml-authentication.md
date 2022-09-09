---
title: Autenticación SAML
shortTitle: Troubleshoot SAML SSO
intro: 'Si usas el inicio de sesión único (SSO) de SAML y los usuarios no pueden autenticarse para acceder a {% data variables.product.product_location %}, puede solucionar el problema.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 977431b9c9872f405a2c8491372f11d8e4ada907
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093042'
---
{% ifversion ghes %}
## Acerca de los problemas con la autenticación SAML

{% data variables.product.product_name %} registra mensajes de error para la autenticación de SAML con errores en el registro de autenticación en _/var/log/github/auth.log_. Puedes revisar las respuestas en este archivo de registro, así como configurar un registro más detallado.

Para obtener más información sobre los requisitos de respuesta de SAML, consulta "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)".

## Configurar la depuración de SAML

Puede configurar {% data variables.product.product_name %} a fin de escribir registros detallados de depuración en _/var/log/github/auth.log_ para cada intento de autenticación de SAML. Es posible que puedas solucionar los problemas de los intentos de autenticación fallidos con esta salida adicional.

{% warning %}

**Advertencias**:

- Habilita la depuración de SAML solo temporalmente e inhabilita la depuración inmediatamente después de que termines de solucionar los problemas. Si dejas habilitada la depuración, el tamaño de tu bitácora podría incrementarse mucho más rápido de lo habitual, lo cual podría impactar negativamente el rendimiento de {% data variables.product.product_name %}.
- Prueba los ajustes de autenticación nuevos de {% data variables.product.product_location %} en un ambiente de pruebas antes de aplicar los ajustes en tu ambiente de producción. Para más información, vea "[Configuración de una instancia de ensayo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. En "SAML debugging" (Depuración de SAML), seleccione la lista desplegable y haga clic en **Enabled** (Habilitado).

   ![Captura de pantalla del menú desplegable para habilitar la depuración de SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Intenta iniciar sesión en {% data variables.product.product_location %} mediante tu IdP de SAML.

1. Revise la salida de depuración en _/var/log/github/auth.log_ en {% data variables.product.product_location %}.

1. Cuando haya terminado de solucionar problemas, seleccione la lista desplegable y haga clic en **Disabled** (Deshabilitado).

   ![Captura de pantalla del menú desplegable para inhabilitar la depuración de SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## Descodificación de respuestas en _auth.log_

Algunos resultados de _auth.log_ pueden estar codificados en Base64. Puede acceder al shell administrativo y utilizar la utilidad de `base64` en {% data variables.product.product_location %} para descodificar estas respuestas. Para obtener más información, consulte "[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```

## Error: "Another user already owns the account"

Cuando un usuario inicia sesión en {% data variables.product.product_location %} por primera vez con la autenticación de SAML, {% data variables.product.product_name %} crea una cuenta de usuario en la instancia y asigna el elemento `NameID` de SAML a la cuenta.

Cuando el usuario vuelve a iniciar sesión, {% data variables.product.prodname_ghe_server %} compara la asignación de `NameID` de la cuenta con la respuesta del IdP. Si elemento `NameID` de la respuesta del IdP ya no coincide con el elemento `NameID` que {% data variables.product.product_name %} espera para el usuario, se producirá un error en el inicio de sesión. El usuario verá el siguiente mensaje.

> Another user already owns the account. Please have your administrator check the authentication log.

Este mensaje habitualmente indica que el nombre de usuario o dirección de correo electrónico cambió en el IdP. Asegúrese de que la asignación `NameID` de la cuenta de usuario en {% data variables.product.prodname_ghe_server %} coincide con el elemento `NameID` del usuario en el IdP. Para más información, vea "[Actualizar el `NameID` del SAML de un usuario](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)".

## Si la respuesta SAML no está firmada o la firma no coincide con los contenidos, se presentará el siguiente mensaje de error en el registro de autenticación:

Si `Recipient` no coincide con la URL de ACS para {% data variables.product.product_location %}, uno de los siguientes dos mensajes de error se mostrará en el registro de autenticación cuando un usuario intente autenticarse.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Asegúrese de que haya configurado el valor de `Recipient` en el IdP en la URL completa de ACS para {% data variables.product.product_location %}. Por ejemplo, `https://ghe.corp.example.com/saml/consume`.

## Error: "SAML Response is not signed or has been modified"

Si tu IdP no firma la respuesta de SAML, o si la firma no empata con el contenido, se mostrará el siguiente mensaje de error en la bitácora de autenticación.

```
SAML Response is not signed or has been modified.
```

Asegúrate de configurar aserciones firmadas para la aplicación de {% data variables.product.product_name %} en tu IdP.

## Error: "Audience is invalid" or "No assertion found"

Si la respuesta del IdP tiene un valor que falta o que es incorrecto `Audience`, se mostrará el mensaje de error siguiente en el registro de autenticación.

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Asegúrate de establecer el valor de `Audience` del IdP en `EntityId` para {% data variables.product.product_location %}, que es la dirección URL completa de la instancia. Por ejemplo, `https://ghe.corp.example.com`.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}
