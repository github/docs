---
title: Otros métodos de autenticación
intro: Puedes utilizar la autenticación básica para hacer pruebas en un ambiente diferente al productivo.
redirect_from:
  - /v3/auth
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---



Cuando la API proporciona varios métodos de autenticación, te recomendamos fuertemente utilizar [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) para las aplicaciones productivas. Los otros métodos que se proporcionan tienen la intención de que se utilicen para scripts o para pruebas (por ejemplo, en los casos en donde utilizar todo el OAuth sería exagerado). Las aplicaciones de terceros que dependen de {% data variables.product.product_name %} para la autenticación no piden ni recolectan las credenciales de {% data variables.product.product_name %}. En vez de esto, deben utilizar el [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

### Autenticación Básica

La API es compatible con la autenticación básica de acuerdo a lo que se define en el [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) con algunas diferencias menores. La diferencia principal es que el RFC requiere de solicitudes sin autenticar para que se le den respuestas `401 Unauthorized`. En muchos lugares, esto divulgaría la existencia de los datos de los usuarios. En cambio, la API de {% data variables.product.product_name %} responde con un `404 Not Found`. Esto puede causar problemas para las bibliotecas de HTTP que asumen una respuesta de `401 Unauthorized`. La solución es construir manualmente el encabezado de `Authorization`.

#### A través de OAuth y los tokens de acceso personal

Te recomendamos utilizar tokens de OAuth para autenticarte en la API de GitHub. Los tokens de OAuth incluyen a los [tokens de acceso personal][personal-access-tokens] y habilitan al usuario para revocar el acceso en cualquier momento.

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

Este acercamiento es útil si tus herramientas solo son compatibles con la Autenticación Básica pero quieres sacar ventaja de las características de seguridad de los tokens de acceso de OAuth.

#### A través de nombre de usuario y contraseña

{% data reusables.apps.deprecating_password_auth %}

Para utilizar la autenticación básica con la API de {% data variables.product.product_name %}, simplemente envía el nombre de usuario y contraseña asociados con la cuenta.

Por ejemplo, si estás accediendo a la API a través de [cURL][curl], el siguiente comando te autenticaría si lo reemplazas al `<username>` con tu nombre de usuario de {% data variables.product.product_name %}. (cURL te pedirá ingresar la contraseña.)

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
Si habilitaste la autenticación de dos factores, asegúrate de que entiendes como [trabajar con ella](/v3/auth/#working-with-two-factor-authentication).

{% if currentVersion == "free-pro-team@latest" %}
#### Autenticarse con el SSO de SAML

{% note %}

**Nota:** Las integraciones y las aplicaciones de OAuth que generan tokens en nombre de otros se autorizan automáticamente.

{% endnote %}

Si estás usando la API para acceder a una organización que requiere el [SSO de SAML][saml-sso] para la autenticación, necesitarás crear un token de acceso personal (PAT) y [autorizarlo][allowlist] para esa organización. Visita la URL especificada en `X-GitHub-SSO` para autorizar el token para la organización.

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Cuando solicites datos que pudieran venir de organizaciones múltiples (por ejemplo, [solicitar la lista de informes de problemas que creó el usuario][user-issues]), el encabezado `X-GitHub-SSO` indica qué organizaciones te solicitarán autorizar tu token de acceso personal:

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

El valor `organizations` es una lista separada por comas de las ID de organización para aquellas que requieren autorización de tu token de acceso personal.
{% endif %}

### Trabajar con la autenticación de dos factores

{% data reusables.apps.deprecating_password_auth %}

Cuando habilitas la autenticación de dos factores, [La Autenticación Básica](#basic-authentication) para la _mayoría_de las terminales en la API de REST necesita que utilices un token de acceso personal o un token de OAuth en vez de tu nombre de usuario o contraseña.

Puedes generar un token de acceso personal nuevo {% if currentVersion == "free-pro-team@latest" %}con los [ajustes de desarrollador de {% data variables.product.product_name %}](https://github.com/settings/tokens/new){% endif %} o utilizar la terminal "[Crear una autorización nueva][create-access]" en la API de autorizaciones de OAuth para generar un nuevo token de OAuth. Para obtener más información, consulta la sección"[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Entonces utilizarías estos tokens para [autenticarte utilizando un token de OAuth][oauth-auth] con la API de GitHub. La única vez que necesitas autenticarte con tu usuario y contraseña es cuando creas tu token de OAuth o cuando utilizas la API de autorizaciones de OAuth.

#### Utilizar la API de Autorizaciones de OAuth con autenticación de dos factores

Cuando haces llamadas a la API de Autorizaciones de OAuth, la Autenticación Básica requiere que utilces una contraseña de única vez (OTP) así como tu nombre de usuario y contraseña en vez de utilizar tokens. Cuando intentas autenticarte con la API de Autorizaciones de OAuth, el servidor te responderá con un `401 Unauthorized` y con uno de estos encabezados para decirte que necesitas un código de autenticación de dos factores:

`X-GitHub-OTP: required; SMS` or `X-GitHub-OTP: required; app`.

Este encabezado te dice cómo tu cuenta recibe sus códigos de autenticación de dos factores. Dependiendo de cómo configures tu cuenta, podrías recibir tus códigos de OTP por SMS o utilizarías una aplicación tal como Google Autenticator o como 1Password. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)". Passa la OTP en el encabezado:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic <em>PASSWORD</em>' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: <em>OTP</em>' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```

[create-access]: /v3/oauth_authorizations/#create-a-new-authorization
[curl]: http://curl.haxx.se/
[oauth-auth]: /v3/#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /v3/issues/#list-issues-assigned-to-the-authenticated-user
