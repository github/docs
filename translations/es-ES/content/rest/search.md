---
title: Search
intro: 'La API de búsqueda permite buscar elementos específicos en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/search
ms.openlocfilehash: 71f21fc712f7c2121b780d79d20eb9615ad82c90
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147110365'
---
## Acerca de la API de búsqueda

La API de Búsqueda te ayuda a buscar el elemento específico que quieres encontrar. Por ejemplo, puedes buscar un usuario o un archivo específico en el repositorio. Tómalo como el simil de realizar una búsqueda en Google. Se diseñó para ayudarte a encontrar el resultado exacto que estás buscando (o tal vez algunos de los resultados que buscas). Tal como la búsqueda en Google, a veces quieres ver algunas páginas de los resultados de búsqueda para que puedas encontrar el elemento que mejor satisfaga tus necesidades. Para satisfacer esta necesidad, la API de búsqueda de {% data variables.product.product_name %} proporciona **hasta 1000 resultados por búsqueda**.

Puedes delimitar tu búsqueda utilizando consultas. Para obtener más información sobre la sintaxis de las consultas de búsqueda, consulte "[Construcción de una consulta de búsqueda](/rest/reference/search#constructing-a-search-query)".

### Clasificar los resultados de la búsqueda

A menos de que se proporcione algún otro tipo de opción como parámetro de consulta, los resultados se clasificarán de acuerdo a la exactitud de la coincidencia en orden descendente. Varios factores se combinan para impulsar el elemento más relevante hasta arriba de la lista de resultados.

### Límite de frecuencia

{% data reusables.enterprise.rate_limit %}

La API de Búsqueda tiene un límite de tasa personalizado. En el caso de las solicitudes que usan la [autenticación básica](/rest#authentication), [OAuth](/rest#authentication) o [un identificador de cliente y un secreto](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications), puede realizar hasta 30 solicitudes por minuto. En el caso de las solicitudes sin autenticación, el límite de frecuencia le permite hacer hasta 10 solicitudes por minuto.

Consulte la [documentación sobre el límite de frecuencia](/rest/reference/rate-limit) para obtener más información sobre cómo determinar el estado actual de su límite de frecuencia.

### Construir una consulta de búsqueda

Cada punto de conexión de la API de búsqueda usa [parámetros de consulta](https://en.wikipedia.org/wiki/Query_string) para realizar búsquedas en {% data variables.product.product_name %}. Observa la terminal individual an la API de Búsqueda para encontrar un ejemplo que incluye los parámetros de consulta y de terminal.

Una consulta puede contener cualquier combinación de calificadores de búsqueda que sea compatible con {% data variables.product.product_name %}. El formato de esta consulta de búsqueda es:

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

Por ejemplo, si quiere buscar todos los _repositorios_ que pertenecen a `defunkt` y contienen las palabras `GitHub` y `Octocat` en el archivo Léame, puede usar la consulta siguiente con el punto de conexión de _búsqueda en repositorios_:

```
GitHub Octocat in:readme user:defunkt
```

**Nota:** Asegúrese de usar el codificador HTML preferido de su lenguaje de programación para construir las cadenas de consulta. Por ejemplo:
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

Vea "[Búsqueda en GitHub](/search-github/searching-on-github)" para consultar una lista completa de los calificadores disponibles, su formato y ejemplos de cómo usarlos. Para obtener más información sobre cómo usar los operadores para que coincidan con cantidades y fechas específicas, o para que excluyan resultados, vea "[Descripción de la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax/)".

### Limitaciones sobre la longitud de la consulta

La API de búsqueda no es compatible con consultas que:
- sean mayores a 256 caracteres (sin incluir los operadores o calificativos).
- Tienen más de cinco operadores `AND`, `OR` o `NOT`.

Estas consultas de búsqueda devolverán un mensaje de error de "Validation failed".

### Tiempos excedidos y resultados incompletos

Para que la API de búsqueda sea rápida para todos, limitamos el tiempo que puede ejecutarse una consulta individual. Para las consultas que [superan el límite de tiempo](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), la API devuelve las coincidencias que se han encontrado antes de que se cumpla el tiempo de espera y la respuesta tiene la propiedad `incomplete_results` establecida en `true`.

Llegar a una interrupción no necesariamente significa que los resultados de búsqueda estén incompletos.
Puede que se hayan encontrado más resultados, pero también puede que no.

### Errores de acceso o resultados de búsqueda faltantes

Necesita autenticarse correctamente y tener acceso a los repositorios en sus consultas de búsqueda, de otro modo, verá un error `422 Unprocessable Entry` con el mensaje "Validation Failed". Por ejemplo, se producirá un error en la búsqueda si su consulta incluye calificadores `repo:`, `user:` o `org:` que solicitan recursos a los cuales no tiene acceso cuando inicia sesión en {% data variables.product.prodname_dotcom %}.

Cuando su consulta de búsqueda solicita recursos múltiples, la respuesta solo contendrá aquellos a los que tenga acceso y **no** proporcionará un mensaje de error que liste los recursos que no se han devuelto.

Por ejemplo, si la consulta de búsqueda busca en los repositorios `octocat/test` y `codertocat/test`, pero solo tiene acceso a `octocat/test`, la respuesta mostrará los resultados de la búsqueda para `octocat/test` y no mostrará nada para `codertocat/test`. Este comportamiento simula cómo funciona la búsqueda en {% data variables.product.prodname_dotcom %}.

### Metadatos en el texto coincidente

En GitHub, puedes utilizar el contexto que te proporcionan los extractos de código y los puntos destacados en los resultados de búsqueda. La API de Búsqueda ofrece metadatos adicionales que te permiten resaltar los términos de búsqueda coincidentes cuando se muestran los resultados de la búsqueda.

![resaltado del fragmento de código](/assets/images/text-match-search-api.png)

Las solicitudes pueden decidir recibir esos fragmentos de texto en la respuesta, y cada fragmento se acompaña de intervalos numéricos que identifican la ubicación exacta de cada término de búsqueda coincidente.

Para obtener estos metadatos en los resultados de búsqueda, especifique el tipo de medio `text-match` en el encabezado `Accept`.

```shell
application/vnd.github.text-match+json
```

Al proporcionar el tipo de medio `text-match`, recibirá una clave extra en la carga de JSON llamada `text_matches`, la cual proporciona información sobre la posición de sus términos de búsqueda dentro del texto y la propiedad (`property`) que incluye dicho término de búsqueda. Dentro de la matriz `text_matches`, cada objeto incluye los siguientes atributos:

Nombre | Descripción
-----|-----------|
`object_url` | La URL del recurso que contiene una propiedad de secuencia que empata con uno de los términos de búsqueda.
`object_type` | El nombre del tipo de recurso que existe en el atributo `object_url` especificado.
`property` | El nombre de la propiedad del recurso que existe en `object_url`. Esa propiedad es una secuencia que empata con uno de los términos de la búsqueda. (En el código JSON que se devuelve de `object_url`, el contenido completo del objeto `fragment` se encontrará en la propiedad con este nombre).
`fragment` | Un subconjunto del valor de `property`. Este es el fragmento de texto que empata con uno o más de los términos de búsqueda.
`matches` | Una matriz de uno o más términos de búsqueda presentes en el objeto `fragment`. Los índices (es decir, "intervalos") son relativos al fragmento. (No son relativos al contenido _completo_ del objeto `property`).

#### Ejemplo

Con cURL y el [ejemplo de búsqueda de incidencias](#search-issues-and-pull-requests) anterior, nuestra solicitud de API tendría este aspecto:

``` shell
curl -H 'Accept: application/vnd.github.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug \
+language:python+state:open&sort=created&order=asc'
```

La respuesta incluirá una matriz `text_matches` para cada resultado de búsqueda. En el código JSON siguiente, tenemos dos objetos en la matriz `text_matches`.

La primera coincidencia de texto se produjo en la propiedad `body` de la incidencia. Aquí vemos un fragmento de texto del cuerpo del informe de problemas. El término de búsqueda (`windows`) aparece dos veces en ese fragmento, y tenemos los índices de cada aparición.

La segunda coincidencia de texto se produjo en la propiedad `body` de uno de los comentarios de la incidencia. Tenemos la URL para el comentario del informe de problemas. Y, por supuesto, vemos un fragmento de texto del cuerpo del comentario. El término de búsqueda (`windows`) aparece una vez en ese fragmento.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly
      distributed windows font that supports them then no problem (we can use html
      font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could
      have some hack that maxes out at whatever the font does...\n\nI'll check
      what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```
