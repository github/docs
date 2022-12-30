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
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172721'
---
{% ifversion fpt or ghes or ghec %} Aunque la API proporciona varios métodos para la autenticación, se recomienda encarecidamente usar [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) para las aplicaciones de producción. Los otros métodos que se proporcionan están diseñados para utilizarse con scripts o pruebas (por ejemplo, en los casos en los que utilizar OAuth con su máximo rendimiento sería excesivo). Las aplicaciones de terceros que dependen de {% data variables.product.product_name %} para la autenticación no solicitan ni recopilan las credenciales de {% data variables.product.product_name %}.
En su lugar, deben usar el [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% ifversion ghae %}

Para la autenticación, se recomienda usar tokens de [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/), como {% data variables.product.pat_generic %} a través del [flujo web de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

## Autenticación básica

La API admite la autenticación básica tal como se define en [RFC2617](http://www.ietf.org/rfc/rfc2617.txt), con algunas pequeñas diferencias.
La principal diferencia es que el RFC requiere que las solicitudes no autenticadas se respondan con respuestas de `401 Unauthorized`. En muchos lugares, esto divulgaría la existencia de los datos de los usuarios. Para evitarlo, la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} responde con un `404 Not Found`.
Esto puede provocar problemas para las bibliotecas HTTP que asumen que la respuesta será `401 Unauthorized`. La solución es crear manualmente el encabezado `Authorization`.

### Usando un {% data variables.product.pat_generic %}

Se recomienda usar un {% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %} para la autenticación en la API de GitHub.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

Este enfoque es útil si tus herramientas solo admiten la autenticación básica, pero quieres aprovechar las características de seguridad de {% data variables.product.pat_generic %}.

{% ifversion not ghae %}
### A través de nombre de usuario y contraseña

{% ifversion fpt or ghec %} {% note %}

**Note:** {% data variables.product.prodname_dotcom %} ha interrumpido la autenticación de contraseña en la API desde el 13 de noviembre de 2020 para todas las cuentas de {% data variables.product.prodname_dotcom_the_website %}, incluidas aquellas que pertenecen a planes {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} {% data variables.product.prodname_ghe_cloud %}. Ahora debes autenticarte en la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} con un token de API, como un token de acceso de OAuth, un token de acceso de instalación de una aplicación de GitHub o {% data variables.product.pat_generic %}, según lo que necesites hacer con el token. Para obtener más información, consulte "[Solución de problemas](/rest/overview/troubleshooting#basic-authentication-errors)".
 
{% endnote %} {% else %}

Para utilizar la autenticación básica con la API de {% data variables.product.product_name %}, simplemente envía el nombre de usuario y la contraseña asociados con la cuenta.

Por ejemplo, si accede a la API a través de [cURL][curl], el siguiente comando le permitirá autenticarse si reemplaza `<username>` por su nombre de usuario de {% data variables.product.product_name %}.
(cURL te pedirá ingresar la contraseña.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
Si tiene habilitada la autenticación en dos fases, asegúrese de que entiende bien cómo se [trabaja con la autenticación en dos fases](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### Autenticarse con el SSO de SAML

{% note %}

**Nota:** Las integraciones y aplicaciones de OAuth que generan tokens en nombre de otros usuarios se autorizan automáticamente.

{% endnote %}

{% note %}

**Nota:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Si usas la API para acceder a una organización que exige el uso de [SSO de SAML][saml-sso] para la autenticación, debes crear un {% data variables.product.pat_generic %} y [autorizar el token][allowlist] para esa organización. Visite la dirección URL especificada en `X-GitHub-SSO` para autorizar el token para la organización.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Al solicitar datos que podrían venir de varias organizaciones (por ejemplo, [solicitar una lista de incidencias creadas por el usuario][user-issues]), el encabezado `X-GitHub-SSO` indica qué organizaciones requieren que autorices el {% data variables.product.pat_generic %}:

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

El valor `organizations` es una lista separada por comas de los identificadores de las organizaciones que requieren la autorización de tu {% data variables.product.pat_generic %}.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Trabajar con la autenticación de dos factores

Cuando tienes habilitada la autenticación en dos fases, la [autenticación básica](#basic-authentication) de la _mayoría_ de los puntos de conexión de la API REST requiere el uso de un {% data variables.product.pat_generic %}{% ifversion ghes %} o un token de OAuth en lugar del nombre de usuario y la contraseña{% endif %}.

Puedes generar un {% data variables.product.pat_generic %} {% ifversion fpt or ghec %}usando la [configuración del desarrollador de {% data variables.product.product_name %}](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %} o con el punto de conexión "[Crear nueva autorización][/rest/reference/oauth-authorizations#create-a-new-authorization]" de la API de autorizaciones de OAuth para generar un nuevo token de OAuth{% endif %}. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %} para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". A continuación, podría usar estos tokens para [autenticarse mediante el token de OAuth][oauth-auth] con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. {% ifversion ghes %} La única vez que necesita autenticarse con el nombre de usuario y la contraseña es cuando se crea el token de OAuth o se usa la API de autorizaciones de OAuth.{% endif %}

{% endif %}

{% ifversion ghes %}
### Utilizar la API de Autorizaciones de OAuth con autenticación de dos factores

Cuando haces llamadas a la API de Autorizaciones de OAuth, la Autenticación Básica requiere que utilces una contraseña de única vez (OTP) así como tu nombre de usuario y contraseña en vez de utilizar tokens. Cuando intenta autenticarse con la API de autorizaciones de OAuth, el servidor le responde con un `401 Unauthorized` y con uno de estos encabezados para informarle de que necesita un código de autenticación en dos fases:

`X-GitHub-OTP: required; SMS` o `X-GitHub-OTP: required; app`.  

Este encabezado te dice cómo tu cuenta recibe sus códigos de autenticación de dos factores. Dependiendo de cómo configures tu cuenta, podrías recibir tus códigos de OTP por SMS o utilizarías una aplicación tal como Google Autenticator o como 1Password. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)". Passa la OTP en el encabezado:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
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
