---
title: Solución de problemas
intro: Aprende cómo resolver los problemas más comunes que las personas pueden encontrar en la API de REST.
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ecfa3a360ef9b042d96a1f80a2f0cde49390727f
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184239'
---
Si detecta elementos extraños en la API, a continuación se muestra una lista de posibles soluciones a algunos de estos problemas que podrías experimentar.

{% ifversion api-date-versioning %}

## Error `400` de una versión de API no admitida

Debes usar el encabezado `X-GitHub-Api-Version` para especificar una versión de API. Por ejemplo:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Si especificas una versión que no existe, recibirás un error `400`.

Para más información, consulta "[Versiones de API](/rest/overview/api-versions)".

{% endif %}

## Error `404` para un repositorio existente

Habitualmente, enviamos un error `404` cuando el cliente no está correctamente autenticado.
En estos caso, debería ver `403 Forbidden`. Pero como no queremos proporcionar _ningún_ tipo de información sobre los repositorios privados, en su lugar la API devuelve un error `404`.

Para solucionarlo, asegúrese de que [está autenticando correctamente](/guides/getting-started/), el [token de acceso de OAuth tiene los ámbitos necesarios](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), las [restricciones de aplicaciones de terceros][oap-guide] no bloquean el acceso y que el [token no haya expirado ni se haya revocado](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

## No se devolvieron todos los resultados

La mayoría de las llamadas API que acceden a una lista de recursos (_por ejemplo_, usuarios, incidencias, _etc._ ) admiten la paginación. Si realiza solicitudes y recibe un conjunto de resultados incompleto, es probable que solo esté viendo la primera página. Tendrá que solicitar las páginas restantes para obtener más resultados.

Es importante que *no* intente adivinar el formato de la URL de paginación. No todas las llamadas API usan la misma estructura. En su lugar, puede extraer la información de paginación del [encabezado de vínculo](/rest#pagination), que se envía en todas las solicitudes.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## Errores de autenticación básicos

Desde el 13 de noviembre de 2020, la autenticación con nombre de usuario y contraseña a la API de REST y a la API de Autorizaciones de OAuth se obsoletizaron y ya no funcionan.

### Uso de `username`/`password` para la autenticación básica

Si usa `username` y `password` para las llamadas API, ya no podrán autenticarse. Por ejemplo:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

En su lugar, usa un [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) al probar puntos de conexión o realizar el desarrollo local:

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

Para las aplicaciones de OAuth, debe usar el [flujo de aplicación web](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) para generar un token de OAuth que se usará en el encabezado de la llamada API:

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## Tiempos de espera

Si a {% data variables.product.product_name %} le toma más de 10 segundos procesar una solicitud de la API, {% data variables.product.product_name %} terminará la solicitud y recibirás una respuesta de tiempo de espera excedido.

{% endif %}
