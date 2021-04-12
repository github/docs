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
  - api
---


{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
Cuando la API proporciona varios métodos de autenticación, te recomendamos fuertemente utilizar [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) para las aplicaciones productivas. Los otros métodos que se proporcionan tienen la intención de que se utilicen para scripts o para pruebas (por ejemplo, en los casos en donde utilizar todo el OAuth sería exagerado). Las aplicaciones de terceros que dependen de
{% data variables.product.product_name %} para la autenticación no deben pedir o recolectar credenciales de {% data variables.product.product_name %}.
En vez de esto, deben utilizar el [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% if currentVersion == "github-ae@latest" %}

Para autenticarte, te recomendamos utilizar los tokens de [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/), tales como un token de acceso personal a través del [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

### Autenticación Básica

La API es compatible con la autenticación básica de acuerdo a lo que se define en el [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) con algunas diferencias menores. La diferencia principal es que el RFC requiere de solicitudes sin autenticar para que se le den respuestas `401 Unauthorized`. En muchos lugares, esto divulgaría la existencia de los datos de los usuarios. En cambio, la API de {% data variables.product.product_name %} responde con un `404 Not Found`. Esto puede causar problemas para las bibliotecas de HTTP que asumen una respuesta de `401 Unauthorized`. La solución es construir manualmente el encabezado de `Authorization`.

#### A través de OAuth y los tokens de acceso personal

Te recomendamos utilizar tokens de OAuth para autenticarte en la API de GitHub. Los tokens de OAuth incluyen a los [tokens de acceso personal][personal-access-tokens] y habilitan al usuario para revocar el acceso en cualquier momento.

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

Este acercamiento es útil si tus herramientas solo son compatibles con la Autenticación Básica pero quieres sacar ventaja de las características de seguridad de los tokens de acceso de OAuth.

#### A través de nombre de usuario y contraseña

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Nota:** {% data variables.product.prodname_dotcom %} descontinuó la autenticación por contraseña hacia la API desde el 13 de noviembre de 2020 para todas las cuentas de {% data variables.product.prodname_dotcom_the_website %}, incluyendo aquellas en planes {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}. {% data variables.product.prodname_team %}, o {% data variables.product.prodname_ghe_cloud %}. Debes autenticarte en la API de {% data variables.product.prodname_dotcom %} con un token de API, tal como un token de acceso de OAuth, un token de acceso de instalación para GitHub Apps, o un token de acceso personal, dependiendo de lo que necesites hacer con el token. Para obtener más información, consulta la sección "[Solución de problemas](/rest/overview/troubleshooting#basic-authentication-errors)".

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Para utilizar la autenticación básica con la
API de {% data variables.product.product_name %}, simplemente envía el nombre de usuario y
contraseña asociados con la cuenta.

Por ejemplo, si estás accediendo a la API a través de [cURL][curl], el siguiente comando te autenticaría si lo reemplazas al `<username>` con tu nombre de usuario de {% data variables.product.product_name %}. (cURL te pedirá ingresar la contraseña.)

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
Si habilitaste la autenticación de dos factores, asegúrate de que entiendes como [trabajar con ella](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% endif %}

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

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
### Trabajar con la autenticación de dos factores

Cuando tienes la autenticación bifactorial habilitada, la [Autenticación Básica](#basic-authentication) para la _mayoría_ de las terminales en la API de REST requiere que utilices un token de acceso personal{% if enterpriseServerVersions contains currentVersion %} o un token de OAuth en vez de tu nombre de usuario y contraseña{% endif %}.

Puedes generar un token de acceso personal {% if currentVersion == "free-pro-team@latest" %}utilizando la [configuración de desarrollador de {% data variables.product.product_name %}](https://github.com/settings/tokens/new){% endif %}{% if enterpriseServerVersions contains currentVersion %} o con la terminal de "\[Crear una autorización nueva\]\[/rest/reference/oauth-authorizations#create-a-new-authorization\]" en la API de autorizciones de OAuth para generar un token de OAuth nuevo{% endif %}. Para obtener más información, consulta la sección"[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Entonces utilizarías estos tokens para [autenticarte utilizando un token de OAuth][oauth-auth] con la API de {% data variables.product.prodname_dotcom %}.{% if enterpriseServerVersions contains currentVersion %} La única ocasión en la que necesitas autenticarte con tu nombre de usuario y contraseña es cuando creas tu token de OAuth o cuando utilizas la API de autorizaciones de OAuth.{% endif %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
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
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
