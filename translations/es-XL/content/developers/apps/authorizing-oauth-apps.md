---
title: Autorizar aplicaciones OAuth
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps/
  - /v3/oauth/
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps/
  - /apps/building-oauth-apps/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

La implementación de OAuth de {% data variables.product.product_name %} es compatible con el [tipo de auotrización para otorgamiento de código](https://tools.ietf.org/html/rfc6749#section-4.1){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} y con el [Otorgamiento de autorizción para dispositivos](https://tools.ietf.org/html/rfc8628) de OAuth 2.0 para las apps que no tengan acceso a un buscador web{% endif %}.

Si quieres saltar el proceso de autorización de tu app en el modo estándar, tal como sucede cuando la estás probando, puedes utilizar el [flujo no web para aplicaciones](#non-web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

Para autorizar tu app de OAuth, considera qué flujo de autorizaciones queda mejor con ella.

- [flujo web de aplicaciones](#web-application-flow): Se utiliza para autorizar a los usuarios para las aplicaciones de OAuth que se ejecutan en el buscador. (El [tipo de concesión implícito](https://tools.ietf.org/html/rfc6749#section-4.2) no es compatible)
- [flujo de dispositivos](#device-flow): Se utiliza para las apps sin encabezado, tales como las herramientas de CLI.

{% else %}

Para las apps estándar que se ejecutan en el buscador, utiliza el [flujo web de aplicaciones](#web-application-flow) para obtener un código de autorización e intercambiarlo por un token. (El [tipo de concesión implícito](https://tools.ietf.org/html/rfc6749#section-4.2) no es compatible)

{% endif %}

### Flujo de aplicaciones Web

{% note %}

**Nota:** Si estás creando una GitHub App, aún puedes utilizar el flujo de aplicaciones web de OAuth, pero la configuración tiene diferencias importantes. Consulta la sección "[Identificar y autorizar usuarios para las GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obtener más información.

{% endnote %}

El flujo web de aplicaciones para autorizar a los usuarios en tu app es:

1. Se redirecciona a los usuarios para solicitar su identidad de GitHub
2. GitHub redirecciona a los usuarios de vuelta a tu sitio
3. Tu aplicación accede a la API con el token de acceso del usuario

#### 1. Solicita la identidad de un usuario de GitHub

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Cuando tu GitHub App especifica un parámetro de `login`, solicita a los usuarios con una cuenta específica que pueden utilizar para registrarse y autorizar tu app.

##### Parámetros

| Nombre         | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `secuencia` | **Requerido**. La ID de cliente que recibiste de GitHub cuando te {% if currentVersion == "free-pro-team@latest" %}[registraste](https://github.com/settings/applications/new){% else %}registraste{% endif %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `redirect_uri` | `secuencia` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Consulta los siguientes detalles sobre [urls de redireccionamiento](#redirect-urls).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `login`        | `secuencia` | Sugiere una cuenta específica para utilizar para registrarse y autorizar la app.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `alcance`      | `secuencia` | Una lista de [alcances](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) delimitada en espacio. De no proporcionarse, el `scope` será, predeterminadamente, una lista vacía para los usuarios que no han autorizado ningún alcance para la aplicación. Para los usuarios que han autorizado alcances para la aplicación, el usuario no se mostrará en la página de autorización de OAuth con la lista de alcances. En vez de esto, este paso del flujo se completara automáticamente con el conjunto de alcances que el usuario haya autorizado para la aplicación. Por ejemplo, si un usuario ya realizó el flujo web dos veces y autorizó un token con alcance de `user` y otro con alcance de `repo`, un tercer flujo web que no proporcione un `scope` recibirá un token con los alcances `user` y `repo`. |
| `state`        | `secuencia` | {% data reusables.apps.state_description %}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `allow_signup` | `secuencia` | Ya sea que se ofrezca o no una opción para registrarse en GitHub a los usuarios sin autenticar durante el flujo de OAuth, la opción predeterminada es `true`. Utiliza `false` cuando una política prohíba los registros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### 2. GitHub redirecciona a los usuarios de vuelta a tu sitio

Si el usuario acepta tu solicitud, {% data variables.product.product_name %} lo redirecciona a tu sitio con un `code` temporal en un parámetro de código así como el estado que proporcionaste en el paso previo en un parámetro de `state`. El código temporal caducará después de 10 minutos. Si los estados no empatan, entonces un tercero creó la solicitud, y debes abandonar el proceso.

Intercambia este `code` por un token de acceso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### Parámetros

| Nombre          | Tipo        | Descripción                                                                                                                                                            |
| --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `secuencia` | **Requerido.** La ID de cliente que recibiste de {% data variables.product.product_name %} para tu {% data variables.product.prodname_github_app %}.       |
| `client_secret` | `secuencia` | **Requerido.** El secreto del cliente que recibiste de {% data variables.product.product_name %} para tu {% data variables.product.prodname_github_app %}. |
| `código`        | `secuencia` | **Requerido.** El código que recibiste como respuesta al Paso 1.                                                                                                       |
| `redirect_uri`  | `secuencia` | La URL en tu aplicación, hacia la cual se envía a los usuarios después de su autorización.                                                                             |
| `state`         | `secuencia` | La secuencia aleatoria indescifrable que proporcionaste en el Paso 1.                                                                                                  |

##### Respuesta

Predeterminadamente, la respuesta toma la siguiente forma:

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

También puedes recibir el contenido en diferentes formatos, dependiendo del encabezado de aceptación:

    Accept: application/json
    {"access_token":"e72e16c7e42f292c6912e7710c838347ae178b4a", "scope":"repo,gist", "token_type":"bearer"}
    
    Accept: application/xml
    <OAuth>
      <token_type>bearer</token_type>
      <scope>repo,gist</scope>
      <access_token>e72e16c7e42f292c6912e7710c838347ae178b4a</access_token>
    </OAuth>

#### 3. Utiliza el token de acceso para acceder a la API

El token de acceso te permite hacer solicitudes a la API a nombre de un usuario.

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por ejemplo, en curl, puedes configurar el encabezado de autorización de la siguiente manera:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Flujo de dispositivos

{% note %}

**Nota:** El flujo de dispositivos se encuentra en beta público y está sujeto a cambios.{% if currentVersion == "free-pro-team@latest" %} Para habilitar esta característica beta, consulta la sección "[Activar las características beta para las apps](/developers/apps/activating-beta-features-for-apps)".{% endif %}

{% endnote %}

Este flujo de dispositivos te permite autorizar usuarios para una app sin encabezado, tal como una herramienta de CLI o un administrador de credenciales de Git.

#### Resumen del flujo de dispositivos

1. Tu app solicita el dispositivo y los códigos de verificación de usuario y obtiene una URL de autoización en donde el usuario ignresará su código de verificación de usuario.
2. La app pide al usuario ingresar un código de verificación de usuario en {% data variables.product.device_authorization_url %}.
3.  La app sondea el estado de autenticación del usuario. Una vez que el usuario haya autorizado el dispositivo, la app podrá hacer llamadas a la API con un token de acceso nuevo.

#### Paso 1: La app solicita los códigos de dispositivo y de usuario a GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

Tu app debe solicitar un código de verificación de usuario y una URL de verificación que la app utilizará para indicar al usuario que se autentique en el siguiente paso. Esta solicitud también devuelve un código de verificación de dispositivo que debe utilizar la app para recibir un token de acceso y verificar así el estado de la autenticación del usuario.

##### Parámetros de entrada

| Nombre      | Tipo        | Descripción                                                                                                  |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `client_id` | `secuencia` | **Requerido.** La ID de cliente que recibiste de {% data variables.product.product_name %} para tu app. |
| `alcance`   | `secuencia` | El alcance al cual está solicitando acceso tu app.                                                           |

##### Respuesta


{% if currentVersion == "free-pro-team@latest" %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "https://github.com/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% else %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "http(s)://[hostname]/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% endif %}

##### Parámetros de respuesta

| Nombre             | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `device_code`      | `secuencia` | El código de verificación de dispositivo es de 40 caracteres y se utiliza para verificar dicho dispositivo.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `user_code`        | `secuencia` | El código de verificación de usuario se muestra en el dispositivo para que el usuario pueda ingresar dicho código en un buscador. El código es de 8 caracteres con un guión medio a la mitad.                                                                                                                                                                                                                                                                                                                |
| `verification_uri` | `secuencia` | La URL de verificación en donde los usuarios necesitan ingresar el `user_code`: {% data variables.product.device_authorization_url %}.                                                                                                                                                                                                                                                                                                                                                                |
| `expires_in`       | `número`    | La cantidad de segundos antes de que caduquen tanto el `device_code` como el `user_code`. La cantidad predeterminada es de 900 segundos o 15 minutos.                                                                                                                                                                                                                                                                                                                                                        |
| `interval`         | `número`    | La cantidad mínima de segundos que deben transcurrir antes de que puedas hacer una soliciud de token de acceso nueva (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) para completar la autorización del dispositivo. Por ejemplo, si el intervalo es 5, entonces no puedes hacer una solicitud nueva hasta que hayan transcurrido 5 segudos. Si haces más de una solicitud en estos 5 segundos, entonces lelgarás al límite de tasa y recibirás un error de `slow_down`. |

#### Paso 2: Indicar al usuario ingresar el código de usuario en un buscador

Tu dispositivo mostrará el código de verificación de usuario y pedirá al usuario ingresar el código en la {% data variables.product.device_authorization_url %}.

  ![Campo para ingresar el código de verificación de usuario nuevo en tu dispositivo](/assets/images/github-apps/device_authorization_page_for_user_code.png)

#### Paso 3: La app sondea GitHub para verificar si el usuario autorizó el dispositivo

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

Tu app hará solicitudes de autorización de dispositivo que sondean a `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`, hasta que los códigos de dispositivo y de usuario caduquen o hasta que el usuario haya autorizado la app con éxito con un código de usuario válido. La app debe usar el `interval` de sondeo mínimo que se ha recuperado en el paso 1 para evitar los errores de límite de tasa. Para obtener más información, consulta la sección "[Límites de tasa para el flujo del dispositivo](#rate-limits-for-the-device-flow)".

El usuario debe ingresar un código válido dentro de los 15 minutos (o 900 segundos) siguientes. Después de transcurridos estos 15 minutos, necesitarás solicitar un código de autorización de dispositivo nuevo con `POST {% data variables.product.oauth_host_code %}/login/device/code`.

Ya que el usuario lo haya autorizado, la app recibirá un token de acceso que se puede utilizar para hacer solicitudes a la API en nombre de un usuario.

##### Parámetros de entrada

| Nombre        | Tipo        | Descripción                                                                                                                                                           |
| ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`   | `secuencia` | **Requerido.** La ID de cliente que recibiste de {% data variables.product.product_name %} para tu {% data variables.product.prodname_oauth_app %}.       |
| `device_code` | `secuencia` | **Requerido.** El código de verificación del dispositivo que recibiste de la solicitud de `POST {% data variables.product.oauth_host_code %}/login/device/code`. |
| `grant_type`  | `secuencia` | **Requerido.** El tipo de otorgamiento debe ser `urn:ietf:params:oauth:grant-type:device_code`.                                                                       |

##### Respuesta

```json
{
 "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "token_type": "bearer",
  "scope": "user"
}
```

#### Límites de tasa para el flujo del dispositivo

Cuando un usuario emite el código de verificación en el buscador, habrá un límite de tasa de 50 emisiones por hora por aplicación.

Si realizas más de una solicitud de acceso con token (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) dentro del marco de tiempo mínimo requerido entre solicitudes (o `interval`), alcanzarás el límite de tasa y recibirás una respuesta de error de `slow_down`. La respuesta de error `slow_down` agrega 5 segundos al último `interval`. Para obtener más información, consulta los [Errores para el flujo del dispositivo](#errors-for-the-device-flow).

#### Códigos de error para el flujo del dispositivo

| Código de error                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorization_pending`        | Este error ocurre cuando la solicitud de autorización se encuentra pendiente y el usuario no ha ingresado el código de usuario aún. Se espera que la app siga sondeando la solicitud de  `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` sin exceder el [`interval`](#response-parameters), lo cual requiere una cantidad mínima de segundos entre cada solicitud.                                                                                                                                                                                      |
| `slow_down`                    | Cuando recibes el error de `slow_down`, se agregan 5 segundos extra al `interval` mínimo o al marco de tiempo requerido entre tus solicitudes utilizando `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`. Por ejemplo, si el intervalo de inicio requirió por lo menos 5 segundos entre solicitudes y obtienes una respuesta de error de `slow_down`, ahora necesitarás esperar por lo menos 10 segundos antes de que hagas una solicitud nueva para un token de acceso de OAuth. La respuesta de error incluye el nuevo `interval` que debes utilizar. |
| `expired_token`                | Si el código de dispositivo expiró, entonces verás el error `token_expired`. Debes hacer una nueva solicitud para un código de dispositivo.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `unsupported_grant_type`       | El tipo de otorgamiento debe ser `urn:ietf:params:oauth:grant-type:device_code` y se debe incluir como un parámetro de entrada cuando sondeas la solicitud de token de OAuth `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`.                                                                                                                                                                                                                                                                                                                           |
| `incorrect_client_credentials` | Para el flujo de dispositivos, debes pasar la ID de cliente de tu app, la cual puedes encontrar en la página de configuración de la misma. No se necesita el `client_secret` para el flujo del dispositivo.                                                                                                                                                                                                                                                                                                                                                                               |
| `incorrect_device_code`        | El device_code que se proporcionó es inválido.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `access_denied`                | Cuando un usuario da clic en cancelar durante el proceso de autorización, recibirás un error de `access_denied` y el usuario no podrá utilizar el código de verificación nuevamente.                                                                                                                                                                                                                                                                                                                                                                                                      |

Para obtener más información, consulta la sección "[Otorgamiento de Autorización de Dispositivo de OAuth 2.0](https://tools.ietf.org/html/rfc8628#section-3.5)".

{% endif %}

### Flujo de aplicaciónes no web

La autenticación no web está disponible para situaciones limitadas, como las pruebas. Si lo necesitas, puedes utilizar la [Autenticación Básica](/v3/auth#basic-authentication) para crear un token de acceso personal utilizando tu [página de configuración de los tokens de acceso personal](/articles/creating-an-access-token-for-command-line-use). Esta técnica le permite al usuario revocar el acceso en cualquier momento.

{% note %}

**Nota:** CUando utilices el flujo de aplicaciones no web para crear un token OAuth2, asegúrate de entender cómo [trabajar con autenticaciones de dos factores](/v3/auth/#working-with-two-factor-authentication) si tú o tus usuarios han habilitado dicho tipo de autenticación.

{% endnote %}

### URLs de Redirección

El parámetro `redirect_uri` es opcional. Si se deja fuera, GitHub redireccionará a los usuarios a la URL de rellamado configurada en la aplicación de OAuth. De proporcionarse, el puerto y host de las URL de rellamado deberán empatar exactamente con la URL de rellamado. La ruta de las URL de redireccionamiento deberán referenciar un subdirectorio de la URL de rellamado.

    CALLBACK: http://example.com/path
    
    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

#### URLs de redirección de Localhost

El parámetro opcional `redirect_uri` también puede utilizarse para las URL de localhost. Si la aplicación especifica una URL y puerto de localhost, entonces, después de autorizar la aplicación, los usuarios se redireccionarán al puerto y URL proporcionados. La `redirect_uri` no necesita empatar con el puerto especificado en la url de rellamado para la app.

Para la URL de rellamado de `http://localhost/path`, puedes utilizar esta `redirect_uri`:

   http://localhost:1234/path

### Crear tokens múltiples para Apps de OAuth

Puedes crear tokens múltiples para una combinación de usuario/aplicación/alcance para crear tokens para casos de uso específicos.

Esto es útil si tu Aplicación de OAuth es compatible con un flujo de trabajo que utilice GitHub para registrarse y requiera solo información básica del usuario. Otro flujo de trabajo podría requerir acceso a los repositorios privados del usuario. Al utilizar tokens múltiples, tu App de OAuth podrá llevar a cabo el flujo web para cada caso de uso, solicitando únicamente los alcances que necesite. Si un usuario utiliza tu aplicación únicamente para registrarse, nunca se les solicitará otorgar acceso a tu App de OAuth para sus repositorios privados.

Hay un límite en la cantidad de tokens que se emiten por combinación de usuario/aplicación/alcance. Si tu aplicación solicita suficientes tokens para sobrepasar uno de los límites, los tokens anteriores _con el mismo alcance que se está solicitando_ dejarán de funcionar.

{% data reusables.apps.deletes_ssh_keys %}

### Dirigir a los usuarios para revisar su acceso

Puedes vincular a la información de autorización para una App de OAuth para que los usuarios puedan revisar y revocar sus autorizaciones de la aplicación.

Para crear este vínculo, necesitarás el `client_id` de tus Apps de Oauth, el cual recibiste de GitHub cuando registraste la aplicación.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Tip:** Para aprender más acerca de los recursos a los cuales puede acceder tu App de OAuth para un usuario, consulta la sección "[Descubrir recursos para un usuario](/v3/guides/discovering-resources-for-a-user/)".

{% endtip %}

### Solución de problemas

* "[Solución de problemas para errores de solicitud de autorización](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)"
* "[Solución de problemas para errores de solicitud de tokens de acceso para Apps de OAuth](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)"
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
* "[Errores de flujo de dispositivo](#errors-for-the-device-flow)"
{% endif %}
