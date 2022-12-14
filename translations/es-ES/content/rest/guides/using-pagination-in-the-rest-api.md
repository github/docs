---
title: Uso de la paginación en la API de REST
intro: Obtén información sobre cómo navegar por las respuestas paginadas desde la API de REST.
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
  - /rest/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3a47974e431b227a225584ff6d3cd65f21a1ab9a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193442'
---
## Acerca de la paginación

Si una respuesta de la API de REST va a incluir muchos resultados, {% data variables.product.company_short %} paginará los resultados y devolverá un subconjunto de los resultados. Por ejemplo, `GET /repos/octocat/Spoon-Knife/issues` solo devolverá 30 incidencias del repositorio `octocat/Spoon-Knife`, aunque el repositorio incluya más de 1600 incidencias abiertas. Esto hace que los servidores y los usuarios puedan tratar la respuesta más fácilmente.

En esta guía se describe cómo solicitar más páginas de resultados de respuestas paginadas, cómo cambiar el número de resultados devueltos en cada página y cómo escribir un script para capturar varias páginas de resultados.

## Uso de encabezados de vínculo

Cuando una respuesta está paginada, los encabezados de respuesta incluirán un encabezado de vínculo. Este encabezado de vínculo se omitirá si el punto de conexión no admite la paginación o si todos los resultados caben en una misma página. El encabezado de vínculo contiene direcciones URL que puedes usar para capturar más páginas de resultados. Para ver los encabezados de respuesta si usas curl o {% data variables.product.prodname_cli %}, pasa la marca `--include` en tu solicitud. Para ver los encabezados de respuesta si usas una biblioteca para realizar solicitudes, sigue la documentación de esa biblioteca. Por ejemplo:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

Si la respuesta está paginada, el encabezado de vínculo tendrá un aspecto similar a este:

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

El encabezado de vínculo proporciona la dirección URL de la página anterior, siguiente, primera y última de los resultados:

- La dirección URL de la página anterior va seguida de `rel="prev"`.
- La dirección URL de la página siguiente va seguida de `rel="next"`.
- La dirección URL de la última página va seguida de `rel="last"`.
- La dirección URL de la primera página va seguida de `rel="first"`.

En algunos casos, solo hay disponible un subconjunto de estos vínculos. Por ejemplo, el vínculo a la página anterior no aparecerá si estás en la primera página de resultados, como tampoco aparecerá el vínculo a la última página si no se puede calcular.

Puedes usar las direcciones URL del encabezado de vínculo para solicitar otra página de resultados. Siguiendo con el ejemplo anterior, para solicitar la última página de resultados:

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

Las direcciones URL del encabezado de vínculo usan parámetros de consulta para indicar qué página de resultados se va a devolver. Los parámetros de consulta de las direcciones URL de vínculo pueden diferir entre los puntos de conexión: cada punto de conexión paginado usará los parámetros de consulta `page`, `before`/`after` o `since` (algunos puntos de conexión usan el parámetro `since` para cosas distintas a la paginación). En todos los casos, puedes usar las direcciones URL del encabezado de vínculo para capturar más páginas de resultados. Consulta [Introducción a la API de REST](/rest/guides/getting-started-with-the-rest-api#using-query-parameters) para obtener más información sobre los parámetros de consulta.  

## Modificación del número de elementos por página

Si un punto de conexión admite el parámetro de consulta `per_page`, puedes controlar cuántos resultados se devuelven en una página. Consulta [Introducción a la API de REST](/rest/guides/getting-started-with-the-rest-api#using-query-parameters) para obtener más información sobre los parámetros de consulta.

Por ejemplo, en esta solicitud se usa el parámetro de consulta `per_page` para devolver dos elementos por página:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

El parámetro `per_page` se incluirá automáticamente en el encabezado del vínculo. Por ejemplo:

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## Scripting con paginación

En lugar de copiar manualmente las direcciones URL desde el encabezado de vínculo, puedes escribir un script para capturar varias páginas de resultados.

En los siguientes ejemplos se usa JavaScript y la biblioteca Octokit.js de {% data variables.product.company_short %}. Para obtener más información sobre Octokit.js, consulta [Introducción a la API de REST](/rest/guides/getting-started-with-the-rest-api?tool=javascript) y el [archivo Léame de Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Ejemplo de uso del método de paginación de Octokit.js

Para capturar los resultados paginados con Octokit.js, puedes usar `octokit.paginate()`. `octokit.paginate()` capturará la siguiente página de resultados hasta llegar a la última página y, a continuación, devolverá todos los resultados como una sola matriz. Algunos puntos de conexión devuelven resultados paginados como matriz en un objeto, en lugar de devolverlos como una matriz. `octokit.paginate()` siempre devuelve una matriz de elementos, aun cuando el resultado sin procesar sea un objeto. Si los resultados no están paginados, `octokit.paginate()` se comportarán como `octokit.request()`.

Por ejemplo, este script obtiene todas las incidencias del repositorio `octocat/Spoon-Knife`. Aunque se solicitan 100 incidencias a la vez, la función no regresará hasta que se alcance la última página de datos.

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

const data = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 100,{% ifversion api-date-versioning %}
  headers: {
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",
  },{% endif %}
});

console.log(data)
```

Puedes pasar una función de asignación opcional a `octokit.paginate()` para finalizar la paginación antes de que se alcance la última página, o bien reducir el uso de memoria conservando solo un subconjunto de la respuesta. También puedes usar `octokit.paginate.iterator()` para recorrer en iteración una sola página cada vez, en lugar de solicitar cada página. Para obtener más información, consulta la [documentación de Octokit.js](https://github.com/octokit/octokit.js#pagination).

### Ejemplo de creación de un método de paginación

Si usas otro lenguaje o biblioteca que no tiene un método de paginación, puedes crear tu propio método de paginación. En este ejemplo se sigue usando la biblioteca Octokit.js para realizar solicitudes, pero no se usa `octokit.paginate()`.

La función `getPaginatedData` realiza una solicitud a un punto de conexión con `octokit.request()`. Los datos de la respuesta se procesan mediante `parseData`, que controla los casos en los que no se devuelven datos o los casos en los que los datos devueltos son un objeto, en lugar de una matriz. A continuación, los datos procesados se anexan a una lista que contiene todos los datos paginados recopilados hasta el momento. Si la respuesta incluye un encabezado de vínculo y este incluye un vínculo a la página siguiente, la función usa un patrón RegEx (`nextPattern`) para obtener la dirección URL de la siguiente página. Tras ello, la función repite los pasos anteriores, usando ahora esta nueva dirección URL. Cuando el encabezado de vínculo deje de incluir un vínculo a la página siguiente, se devuelven todos los resultados.

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

async function getPaginatedData(url) {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let data = [];

  while (pagesRemaining) {
    const response = await octokit.request(`GET ${url}`, {
      per_page: 100,{% ifversion api-date-versioning %}
      headers: {
        "X-GitHub-Api-Version":
          "{{ allVersions[currentVersion].latestApiVersion }}",
      },{% endif %}
    });

    const parsedData = parseData(response.data)
    data = [...data, ...parsedData];

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

function parseData(data) {
  // If the data is an array, return that
    if (Array.isArray(data)) {
      return data
    }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return []
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];
  
  return data;
}

const data = await getPaginatedData("/repos/octocat/Spoon-Knife/issues");

console.log(data);
```
