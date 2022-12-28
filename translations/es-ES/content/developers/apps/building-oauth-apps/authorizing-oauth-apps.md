---
title: Autorización de aplicaciones de OAuth
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106714'
---
La implementación OAuth de {% data variables.product.product_name %} admite el [tipo de concesión de código de autorización](https://tools.ietf.org/html/rfc6749#section-4.1) estándar y la [concesión de autorización de dispositivos](https://tools.ietf.org/html/rfc8628) de OAuth 2.0 para aplicaciones que no tienen acceso a un explorador web.

Si quiere omitir la autorización de la aplicación de la manera estándar, como al probar la aplicación, puede usar el [flujo de aplicación no web](#non-web-application-flow).

Para autorizar tu app de OAuth, considera qué flujo de autorizaciones queda mejor con ella.

- [Flujo de aplicaciones web](#web-application-flow): se usa para autorizar a los usuarios para las aplicaciones de OAuth estándar que se ejecutan en el explorador. (No se admite el [tipo de concesión implícita](https://tools.ietf.org/html/rfc6749#section-4.2)).
- [flujo de dispositivo](#device-flow): se usa para aplicaciones sin encabezado, como herramientas de la CLI.

## Flujo de aplicaciones Web

{% note %}

**Nota:** Si va a compilar una aplicación de GitHub, todavía puede utilizar el flujo de aplicaciones web de OAuth, pero la configuración tiene diferencias importantes. Vea "[Identificación y autorización de usuarios para aplicaciones de GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para más información.

{% endnote %}

El flujo web de aplicaciones para autorizar a los usuarios en tu app es:

1. Se redirecciona a los usuarios para solicitar su identidad de GitHub
2. GitHub redirecciona a los usuarios de vuelta a tu sitio
3. Tu aplicación accede a la API con el token de acceso del usuario

### 1. Solicitud de la identidad de un usuario de GitHub

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Cuando la aplicación de GitHub especifica un parámetro `login`, solicita a los usuarios con una cuenta concreta que pueden utilizar para iniciar sesión y autorizar la aplicación.

#### Parámetros

Nombre | Tipo | Descripción
-----|------|--------------
`client_id`|`string` | **Requerido**. El id. de cliente que ha recibido de GitHub al {% ifversion fpt or ghec %}[registrarse](https://github.com/settings/applications/new){% else %}registrarse{% endif %}.
`redirect_uri`|`string` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Vea los detalles siguientes sobre las [URL de redireccionamiento](#redirect-urls).
`login` | `string` | Sugiere una cuenta específica para utilizar para registrarse y autorizar la app.
`scope`|`string` | Lista de [ámbitos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) delimitada por espacios. Si no se proporciona, de manera predeterminada `scope` será una lista vacía para los usuarios que no han autorizado ningún ámbito para la aplicación. Para los usuarios que han autorizado alcances para la aplicación, el usuario no se mostrará en la página de autorización de OAuth con la lista de alcances. En vez de esto, este paso del flujo se completara automáticamente con el conjunto de alcances que el usuario haya autorizado para la aplicación. Por ejemplo, si un usuario ya ha realizado el flujo web dos veces y ha autorizado un token con ámbito `user` y otro con ámbito `repo`, un tercer flujo web que no proporcione un valor `scope` recibirá un token con el ámbito `user` y `repo`.
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | Ya sea que se ofrezca o no una opción para registrarse en GitHub a los usuarios sin autenticar durante el flujo de OAuth, El valor predeterminado es `true`. Use `false` cuando una directiva prohíba los registros.

### 2. GitHub redirecciona a los usuarios de vuelta al sitio

Si el usuario acepta la solicitud, {% data variables.product.product_name %} le redirecciona de vuelta al sitio con un valor `code` temporal en un parámetro de código y con el estado que haya proporcionado en el paso anterior en un parámetro `state`. El código temporal caducará después de 10 minutos. Si los estados no empatan, entonces un tercero creó la solicitud, y debes abandonar el proceso.

Intercambie este valor `code` por un token de acceso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parámetros

Nombre | Tipo | Descripción
-----|------|--------------
`client_id` | `string` | **Obligatorio.** El id. de cliente que ha recibido de {% data variables.product.product_name %} para la {% data variables.product.prodname_oauth_app %}.
`client_secret` | `string` | **Obligatorio.** El secreto de cliente que ha recibido de {% data variables.product.product_name %} para la {% data variables.product.prodname_oauth_app %}.
`code` | `string` | **Obligatorio.** Código que ha recibido como respuesta al paso 1.
`redirect_uri` | `string` | La URL en tu aplicación, hacia la cual se envía a los usuarios después de su autorización.

#### Response

Predeterminadamente, la respuesta toma la siguiente forma:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. Uso del token de acceso para acceder a la API

El token de acceso te permite hacer solicitudes a la API a nombre de un usuario.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por ejemplo, en curl, puedes configurar el encabezado de autorización de la siguiente manera:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Flujo de dispositivos

{% note %}

**Nota:** El flujo de dispositivos se encuentra en versión beta pública y está sujeto a cambios.

{% endnote %}

Este flujo de dispositivos te permite autorizar usuarios para una app sin encabezado, tal como una herramienta de CLI o un administrador de credenciales de Git.

{% ifversion device-flow-is-opt-in %}

Antes de que puedas utilizar el flujo de dispositivos para autorizar e identificar usuarios, primero debes habilitarlo en los ajustes de tu app. Para más información sobre cómo habilitar el flujo de dispositivo en la aplicación, vea "[Modificación de una aplicación de OAuth](/developers/apps/managing-oauth-apps/modifying-an-oauth-app)" para aplicaciones de OAuth y "[Modificación de una aplicación de GitHub](/developers/apps/managing-github-apps/modifying-a-github-app)" para aplicaciones de GitHub.

{% endif %}

### Resumen del flujo de dispositivos

1. Tu app solicita el dispositivo y los códigos de verificación de usuario y obtiene una URL de autoización en donde el usuario ignresará su código de verificación de usuario.
2. La app pide al usuario ingresar un código de verificación de usuario en {% data variables.product.device_authorization_url %}.
3.  La app sondea el estado de autenticación del usuario. Una vez que el usuario haya autorizado el dispositivo, la app podrá hacer llamadas a la API con un token de acceso nuevo.

### Paso 1: La app solicita los códigos de dispositivo y de usuario a GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

Tu app debe solicitar un código de verificación de usuario y una URL de verificación que la app utilizará para indicar al usuario que se autentique en el siguiente paso. Esta solicitud también devuelve un código de verificación de dispositivo que debe utilizar la app para recibir un token de acceso y verificar así el estado de la autenticación del usuario.

#### Parámetros de entrada

Nombre | Tipo | Descripción
-----|------|--------------
`client_id` | `string` | **Obligatorio.** Id. de cliente que ha recibido de {% data variables.product.product_name %} para la aplicación.
`scope` | `string` | El alcance al cual está solicitando acceso tu app.

#### Response

Predeterminadamente, la respuesta toma la siguiente forma:

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### Parámetros de respuesta

Nombre | Tipo | Descripción
-----|------|--------------
`device_code` | `string` | El código de verificación de dispositivo es de 40 caracteres y se utiliza para verificar dicho dispositivo.
`user_code` | `string` | El código de verificación de usuario se muestra en el dispositivo para que el usuario pueda ingresar dicho código en un buscador. El código es de 8 caracteres con un guión medio a la mitad.
`verification_uri` | `string` | URL de verificación en la que los usuarios deben escribir el valor `user_code`: {% data variables.product.device_authorization_url %}.
`expires_in` | `integer`| Número de segundos antes de que `device_code` y `user_code` expiren. La cantidad predeterminada es de 900 segundos o 15 minutos.
`interval` | `integer` | Número mínimo de segundos que deben pasar antes de poder realizar una nueva solicitud de token de acceso (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) para completar la autorización del dispositivo. Por ejemplo, si el intervalo es 5, entonces no puedes hacer una solicitud nueva hasta que hayan transcurrido 5 segudos. Si realiza más de una solicitud en estos 5 segundos, alcanzará el límite de frecuenta y se producirá un error `slow_down`.

### Paso 2: Indicar al usuario ingresar el código de usuario en un buscador

Tu dispositivo mostrará el código de verificación de usuario y pedirá al usuario ingresar el código en la {% data variables.product.device_authorization_url %}.

  ![Campo para ingresar el código de verificación de usuario nuevo en tu dispositivo](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### Paso 3: La app sondea GitHub para verificar si el usuario autorizó el dispositivo

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

La aplicación realizará solicitudes de autorización de dispositivo que sondean `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` hasta que expiren los códigos de usuario y dispositivo, o el usuario haya autorizado correctamente la aplicación con un código de usuario válido. La aplicación debe usar el sondeo `interval` mínimo recuperado en el paso 1 para evitar errores de límite de frecuencia. Para más información, vea "[Límites de frecuencia para el flujo del dispositivo](#rate-limits-for-the-device-flow)".

El usuario debe ingresar un código válido dentro de los 15 minutos (o 900 segundos) siguientes. Después de 15 minutos, tendrá que solicitar un nuevo código de autorización de dispositivo con `POST {% data variables.product.oauth_host_code %}/login/device/code`.

Ya que el usuario lo haya autorizado, la app recibirá un token de acceso que se puede utilizar para hacer solicitudes a la API en nombre de un usuario.

#### Parámetros de entrada

Nombre | Tipo | Descripción
-----|------|--------------
`client_id` | `string` | **Obligatorio.** El id. de cliente que ha recibido de {% data variables.product.product_name %} para la {% data variables.product.prodname_oauth_app %}.
`device_code` | `string` | **Obligatorio.** Código de verificación del dispositivo que ha recibido de la solicitud `POST {% data variables.product.oauth_host_code %}/login/device/code`.
`grant_type` | `string` | **Obligatorio.** El tipo de concesión debe ser `urn:ietf:params:oauth:grant-type:device_code`.

#### Response

Predeterminadamente, la respuesta toma la siguiente forma:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### Límites de tasa para el flujo del dispositivo

Cuando un usuario emite el código de verificación en el buscador, hay un límite de tasa de 50 emisiones en una hora por aplicación.

Si realiza más de una solicitud de token de acceso (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) dentro del período mínimo necesario entre las solicitudes (o `interval`), alcanzará el límite de frecuencia y recibirá una respuesta de error `slow_down`. La respuesta de error `slow_down` agrega 5 segundos a la última instancia de `interval`. Para más información, vea [Errores para el flujo del dispositivo](#errors-for-the-device-flow).

### Códigos de error para el flujo del dispositivo

| Código de error | Descripción |
|----|----|
| `authorization_pending`| Este error ocurre cuando la solicitud de autorización se encuentra pendiente y el usuario no ha ingresado el código de usuario aún. Se espera que la aplicación siga sondeando la solicitud `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` sin superar [`interval`](#response-parameters), para lo que se necesita un número mínimo de segundos entre cada solicitud. |
| `slow_down` | Cuando recibe el error `slow_down`, se agregan 5 segundos adicionales al valor `interval` mínimo o período de tiempo necesario entre las solicitudes mediante `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`. Por ejemplo, si en el intervalo de inicio se necesitaban al menos 5 segundos entre solicitudes y recibe una respuesta de error `slow_down`, ahora tendrá que esperar al menos 10 segundos antes de poder realizar una nueva solicitud para un token de acceso de OAuth. La respuesta de error incluye el nuevo valor `interval` que debe usar.
| `expired_token` | Si el código del dispositivo ha expirado, verá el error `token_expired`. Debes hacer una nueva solicitud para un código de dispositivo.
| `unsupported_grant_type` | El tipo de concesión debe ser `urn:ietf:params:oauth:grant-type:device_code` e incluirse como parámetro de entrada al sondear la solicitud de token de OAuth `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`.
| `incorrect_client_credentials` | Para el flujo de dispositivos, debes pasar la ID de cliente de tu app, la cual puedes encontrar en la página de configuración de la misma. `client_secret` no es necesario para el flujo del dispositivo.
| `incorrect_device_code` | El device_code que se proporcionó es inválido.
| `access_denied` | Cuando un usuario hace clic en Cancelar durante el proceso de autorización, recibirá un error `access_denied` y el usuario no podrá volver a utilizar el código de verificación.{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | El flujo de dispositivos no se habilitó en los ajustes de la app. Para más información, vea "[Flujo de dispositivos](#device-flow)".{% endif %}

Para más información, vea "[Concesión de autorización de dispositivos de OAuth 2.0](https://tools.ietf.org/html/rfc8628#section-3.5)".

## Flujo de aplicaciónes no web

La autenticación no web está disponible para situaciones limitadas, como las pruebas. Si lo necesitas, puede usar la [autenticación básica](/rest/overview/other-authentication-methods#basic-authentication) para crear un {% data variables.product.pat_generic %} en la [página de configuración de {% data variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use). Esta técnica le permite al usuario revocar el acceso en cualquier momento.

{% ifversion fpt or ghes or ghec %} {% note %}

**Nota:** Al usar el flujo de aplicaciones que no son web para crear un token de OAuth2, asegúrese de comprender cómo [trabajar con la autenticación en dos fases](/rest/overview/other-authentication-methods#working-with-two-factor-authentication) si usted o los usuarios la han habilitado.

{% endnote %} {% endif %}

## URL de redireccionamiento

El `redirect_uri` es opcional. Si se excluye, GitHub redireccionará a los usuarios a la URL de devolución de llamada configurada en la aplicación de OAuth. Si se indican, el puerto y host de la dirección URL de redireccionamiento (subdominios excluidos) deben coincidir exactamente con los de la dirección URL de devolución de llamada. La ruta de la URL de redireccionamiento debe hacer referencia un subdirectorio de la URL de devolución de llamada.

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### Direcciones URL de redireccionamiento de bucle invertido

El parámetro `redirect_uri` opcional también se puede usar con direcciones URL de bucle invertido. Si la aplicación especifica una dirección URL y un puerto de bucle invertido, los usuarios se redireccionarán al puerto y dirección URL proporcionados después de que la aplicación reciba la autorización. No es necesario que `redirect_uri` coincida con el puerto especificado en la dirección URL de devolución de llamada de la aplicación.

Para la URL de devolución de llamada `http://127.0.0.1/path`, puede usar este valor `redirect_uri`:

```
http://127.0.0.1:1234/path
```

Recuerda que en la especificación RFC de OAuth [se recomienda no usar `localhost`](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3), sino usar el literal de bucle invertido `127.0.0.1` o la IPv6 `::1`.

## Crear tokens múltiples para Apps de OAuth

Puedes crear tokens múltiples para una combinación de usuario/aplicación/alcance para crear tokens para casos de uso específicos.

Esto es útil si tu Aplicación de OAuth es compatible con un flujo de trabajo que utilice GitHub para registrarse y requiera solo información básica del usuario. Otro flujo de trabajo podría requerir acceso a los repositorios privados del usuario. Al utilizar tokens múltiples, tu App de OAuth podrá llevar a cabo el flujo web para cada caso de uso, solicitando únicamente los alcances que necesite. Si un usuario utiliza tu aplicación únicamente para registrarse, nunca se les solicitará otorgar acceso a tu App de OAuth para sus repositorios privados.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## Dirigir a los usuarios para revisar su acceso

Puedes vincular a la información de autorización para una App de OAuth para que los usuarios puedan revisar y revocar sus autorizaciones de la aplicación.

Para crear este vínculo, necesitará el `client_id` de las aplicaciones de OAuth que ha recibido de GitHub al registrar la aplicación.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Sugerencia:** Para más información sobre los recursos a los que puede acceder la aplicación de OAuth para un usuario, vea "[Detección de recursos para un usuario](/rest/guides/discovering-resources-for-a-user)".

{% endtip %}

## Solución de problemas

* "[Solución de errores de solicitud de autorización](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)"
* "[Solución de errores de solicitud de tokens de acceso de aplicaciones de OAuth](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)"
* "[Errores de flujo de dispositivo](#error-codes-for-the-device-flow)"
* "[Expiración y revocación de tokens](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"

## Información adicional

- "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
