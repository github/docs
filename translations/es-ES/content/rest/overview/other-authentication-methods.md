---
title: Otros métodos de autenticación
intro: Puedes utilizar la autenticación básica para hacer pruebas en un ambiente diferente al productivo.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: 9698e18a2d57eceb328ae32f94bdb9f72b7b6fa7
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717849'
---
{% ifversion fpt or ghes or ghec %} Aunque la API proporciona varios métodos para la autenticación, se recomienda encarecidamente usar [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) para las aplicaciones de producción. Los otros métodos que se proporcionan están diseñados para utilizarse con scripts o pruebas (por ejemplo, en los casos en los que utilizar OAuth con su máximo rendimiento sería excesivo). Las aplicaciones de terceros que dependen de {% data variables.product.product_name %} para la autenticación no solicitan ni recopilan las credenciales de {% data variables.product.product_name %}.
En su lugar, deben usar el [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% ifversion ghae %}

Para autenticarse, se recomienda usar tokens de [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/), como un token de acceso personal a través del [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

## Autenticación básica

La API admite la autenticación básica tal como se define en [RFC2617](http://www.ietf.org/rfc/rfc2617.txt), con algunas pequeñas diferencias.
La principal diferencia es que el RFC requiere que las solicitudes no autenticadas se respondan con respuestas de `401 Unauthorized`. En muchos lugares, esto divulgaría la existencia de los datos de los usuarios. Para evitarlo, la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} responde con un `404 Not Found`.
Esto puede provocar problemas para las bibliotecas HTTP que asumen que la respuesta será `401 Unauthorized`. La solución es crear manualmente el encabezado `Authorization`.

### A través de OAuth y los tokens de acceso personal

Te recomendamos utilizar tokens de OAuth para autenticarte en la API de GitHub. Entre los tokens de OAuth se incluyen [tokens de acceso personal][personal-access-tokens] que permiten al usuario revocar el acceso en cualquier momento.

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

Este acercamiento es útil si tus herramientas solo son compatibles con la Autenticación Básica pero quieres sacar ventaja de las características de seguridad de los tokens de acceso de OAuth.

### A través de nombre de usuario y contraseña

{% ifversion fpt or ghec %}

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} ha interrumpido la autenticación de contraseña en la API desde el 13 de noviembre de 2020 para todas las cuentas de {% data variables.product.prodname_dotcom_the_website %}, incluidas aquellas que pertenecen a planes {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} {% data variables.product.prodname_ghe_cloud %}. Ahora debes autenticarte en la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} con un token de la API, tal como un token de acceso OAuth, un token de acceso a la instalación de una GitHub App o un token de acceso personal, dependiendo de lo que necesites hacer con el token. Para obtener más información, consulte "[Solución de problemas](/rest/overview/troubleshooting#basic-authentication-errors)".
 
{% endnote %}

{% endif %}

{% ifversion ghes %} Para usar la autenticación básica con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, solo tiene que enviar el nombre de usuario y la contraseña que se asocian con la cuenta.

Por ejemplo, si accede a la API a través de [cURL][curl], el siguiente comando le permitirá autenticarse si reemplaza `<username>` por su nombre de usuario de {% data variables.product.product_name %}.
(cURL te pedirá ingresar la contraseña.)

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
Si tiene habilitada la autenticación en dos fases, asegúrese de que entiende bien cómo se [trabaja con la autenticación en dos fases](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% endif %}

{% ifversion fpt or ghec %}
### Autenticarse con el SSO de SAML

{% note %}

**Nota:** Las integraciones y aplicaciones de OAuth que generan tokens en nombre de otros usuarios se autorizan automáticamente.

{% endnote %}

{% note %}

**Nota:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Si usa la API para acceder a una organización que aplica el [inicio de sesión único de SAML][saml-sso] para la autenticación, deberá crear un token de acceso personal (PAT) y [autorizar el token][allowlist] para esa organización. Visite la dirección URL especificada en `X-GitHub-SSO` para autorizar el token para la organización.

```shell
$ curl -v -H "Authorization: Bearer <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Al solicitar datos que podrían provenir de varias organizaciones (por ejemplo, [solicitar una lista de incidencias creadas por el usuario][user-issues]), el encabezado `X-GitHub-SSO` indica qué organizaciones requieren que autorice el token de acceso personal:

```shell
$ curl -v -H "Authorization: Bearer <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

El valor `organizations` es una lista separada por comas de los identificadores de las organizaciones que requieren la autorización de su token de acceso personal.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Trabajar con la autenticación de dos factores

Cuando tiene habilitada la autenticación en dos fases, [la autenticación básica](#basic-authentication) de la _mayoría_ de los puntos de conexión de la API de REST requiere que use un token de acceso personal{% ifversion ghes %} o token de OAuth en lugar del nombre de usuario y la contraseña{% endif %}.

Puede generar un token de acceso personal {% ifversion fpt or ghec %}con la configuración de desarrollador de [{% data variables.product.product_name %}](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %} con el punto de conexión "[Crear autorización][/rest/reference/oauth-authorizations#create-a-new-authorization]" de la API de autorizciones de OAuth para generar un nuevo token de OAuth{% endif %}. Para obtener más información, consulte "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". A continuación, podría usar estos tokens para [autenticarse mediante el token de OAuth][oauth-auth] con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. {% ifversion ghes %} La única vez que necesita autenticarse con el nombre de usuario y la contraseña es cuando se crea el token de OAuth o se usa la API de autorizaciones de OAuth.{% endif %}

{% endif %}

{% ifversion ghes %}
### Utilizar la API de Autorizaciones de OAuth con autenticación de dos factores

Cuando haces llamadas a la API de Autorizaciones de OAuth, la Autenticación Básica requiere que utilces una contraseña de única vez (OTP) así como tu nombre de usuario y contraseña en vez de utilizar tokens. Cuando intenta autenticarse con la API de autorizaciones de OAuth, el servidor le responde con un `401 Unauthorized` y con uno de estos encabezados para informarle de que necesita un código de autenticación en dos fases:

`X-GitHub-OTP: required; SMS` o `X-GitHub-OTP: required; app`.  

Este encabezado te dice cómo tu cuenta recibe sus códigos de autenticación de dos factores. Dependiendo de cómo configures tu cuenta, podrías recibir tus códigos de OTP por SMS o utilizarías una aplicación tal como Google Autenticator o como 1Password. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)". Passa la OTP en el encabezado:

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
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
