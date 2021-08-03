---
title: Buscar
redirect_from:
  - /v3/search
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

La API de Búsqueda te ayuda a buscar el elemento específico que quieres encontrar. Por ejemplo, puedes buscar un usuario o un archivo específico en el repositorio. Tómalo como el simil de realizar una búsqueda en Google. Se diseñó para ayudarte a encontrar el resultado exacto que estás buscando (o tal vez algunos de los resultados que buscas). Tal como la búsqueda en Google, a veces quieres ver algunas páginas de los resultados de búsqueda para que puedas encontrar el elemento que mejor satisfaga tus necesidades. Para satisfacer esta necesidad, la API de Búsqueda de {% data variables.product.product_name %} proporciona **hasta 1,000 resultados por búsqueda**.

Puedes delimitar tu búsqueda utilizando consultas. Para aprender más sobre la sintaxis de las consultas de búsqueda, dirígete a "[Construir una consulta de búsqueda](/rest/reference/search#constructing-a-search-query)".

### Clasificar los resultados de la búsqueda

A menos de que se proporcione algún otro tipo de opción como parámetro de consulta, los resultados se clasificarán de acuerdo a la exactitud de la coincidencia en orden descendente. Varios factores se combinan para impulsar el elemento más relevante hasta arriba de la lista de resultados.

### Limite de tasa

La API de Búsqueda tiene un límite de tasa personalizado. Para las solicitudes que utilizan [Autenticación Básica](/rest#authentication), [OAuth](/rest#authentication), o [secreto e ID de cliente](/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications), puedes hacer hasta 30 solicitudes por minuto. Para las solicitudes sin autenticar, el límite de tasa te permite hacer hasta 10 por minuto.

{% data reusables.enterprise.rate_limit %}

Consulta la [documentación del límite de tasa](/rest/reference/rate-limit) para obtener más detalles sobre cómo determinar tu estado de límite de tasa actual.

### Construir una consulta de búsqueda

Cada terminal en la API de búsqueda utiliza [parámetros de búsqueda](https://en.wikipedia.org/wiki/Query_string) para realizar búsqeudas en {% data variables.product.product_name %}. Observa la terminal individual an la API de Búsqueda para encontrar un ejemplo que incluye los parámetros de consulta y de terminal.

Una consulta puede contener cualquier combinación de calificadores de búsqueda que sea compatible con {% data variables.product.product_name %}. El formato de esta consulta de búsqueda es:

```
SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N
```

Por ejemplo, si quisieras buscar todos los _repositorios_ que pertenecen a `defunkt` y que contienen la palabra `GitHub` y `Octocat` en el archivo de README, utilizarías la siguiente consulta con la terminal de _buscar repositorios_:

```
GitHub Octocat in:readme user:defunkt
```

**Nota:** Asegúrate de utilizar el codificador HTML preferido de tu lenguaje de programación para construir tus cadenas de consulta. Por ejemplo:
```javascript
// JavaScript
const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
```

Consulta la sección "[Buscar en GitHub](/articles/searching-on-github/)" para encontrar una lista completa de calificadores disponibles, su formato, y ejemplos de cómo utilizarlos. Para obtener más información acerca de cómo utilizar los operadores para que coincidan con cantidades y fechas específicas, o para que excluyan resultados, consulta "[Entender la sintaxis de búsqueda](/articles/understanding-the-search-syntax/)".

### Limitaciones sobre la longitud de la consulta

La API de búsqueda no es compatible con consultas que:
- sean mayores a 256 caracteres (sin incluir los operadores o calificativos).
- tengan más de cinco operadores de `AND`, `OR`, o `NOT`.

Estas consultas de búsqueda devolverán un mensaje de error de "Validation failed".

### Tiempos excedidos y resultados incompletos

Para que la API de Búsqueda se mantenga rápida para todos, limitamos el tiempo que puede jecutarse cualquier consulta específica. Para las consultas que [exceden el límite de tiempo](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), la API devuelve las coincidencias que ya se habían encontrado antes de exceder el tiempo, y la respuesta tiene la propiedad `incomplete_results` como `true`.

Llegar a una interrupción no necesariamente significa que los resultados de búsqueda estén incompletos. Puede que se hayan encontrado más resultados, pero también puede que no.

### Errores de acceso o resultados de búsqueda faltantes

Necesitas autenticarte exitosamente y tener acceso a los repositorios en tus consultas de búsqueda, de lo contrario, verás un error de `422 Unprocessible Entry` con un mensaje de "Validation Failed". Por ejemplo, tu búsqueda fallará si tu consulta incluye los calificadores `repo:`, `user:`, o `org:` que solicitan los recursos a los cuales no tienes acceso cuando inicias sesión en {% data variables.product.prodname_dotcom %}.

Cuando tu consulta de búsqueda solicita recursos múltiples, la respuesta solo contendrá aquellos a los que tengas acceso y **no** proporcionará un mensaje de error que liste los recursos que no se devolvieron.

Por ejemplo, si tu consulta de búsqueda quiere buscar en los repositorios `octocat/test` y `codertocat/test`, pero solo tienes acceso a `octocat/test`, tu respuesta mostrará los resultados de búsqueda para `octocat/test` y no mostrará nada para `codertocat/test`. Este comportamiento simula cómo funciona la búsqueda en {% data variables.product.prodname_dotcom %}.

{% include rest_operations_at_current_path %}


### Metadatos en el texto coincidente

En GitHub, puedes utilizar el contexto que te proporcionan los extractos de código y los puntos destacados en los resultados de búsqueda. La API de Búsqueda ofrece metadatos adicionales que te permiten resaltar los términos de búsqueda coincidentes cuando se muestran los resultados de la búsqueda.

![resaltado del fragmento de código](/assets/images/text-match-search-api.png)

Las solicitudes pueden decidir recibir esos fragmentos de texto en la respuesta, y cada fragmento se acompaña de intervalos numéricos que identifican la ubicación exacta de cada término de búsqueda coincidente.

Para obtener estos metadatos en tus resultados de búsqueda, especifica el tipo de medios `text-match` en tu encabezado de `Accept`.

```shell
application/vnd.github.v3.text-match+json
```

Cuando proporcionas el tipo de medios `text-match`, recibirás una clave extra en la carga útil de JSON llamada `text_matches`, la cual proporciona información acerca de la posición de tus términos de búsqueda dentro del texto y la `property` que incluye dicho término de búsqueda. Dentro de la matriz `text_matches`, cada objeto incluye los siguientes atributos:

| Nombre        | Descripción                                                                                                                                                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object_url`  | La URL del recurso que contiene una propiedad de secuencia que empata con uno de los términos de búsqueda.                                                                                                                                                                                    |
| `object_type` | El nombre del tipo de recurso que existe en la `object_url` específica.                                                                                                                                                                                                                       |
| `property`    | El nombre de la propiedad del recurso que existe en la `object_url`. Esa propiedad es una secuencia que empata con uno de los términos de la búsqueda. (En el JSON que se devuelve de la `object_url`, el contenido entero para el `fragment` se encontrará en la propiedad con este nombre.) |
| `fragmento`   | Un subconjunto del valor de `property`. Este es el fragmento de texto que empata con uno o más de los términos de búsqueda.                                                                                                                                                                   |
| `matches`     | Una matriz de uno o más términos de búsqueda presentes en el `fragment`. Los índices (es decir, "intervalos") son relativos al fragmento. (No son relativos al contenido _completo_ de `property`.)                                                                                           |

#### Ejemplo

Si utilizas cURL y también el [ejemplo de búsqueda de informe de problemas](#search-issues-and-pull-requests) anterior, nuestra solicitud de la API se vería así:

``` shell
curl -H 'Accept: application/vnd.github.v3.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'
```

La respuesta incluirá una matriz de `text_matches` para cada resultado de búsqueda. En el JSON que se muestra a continuación, tenemos dos objetos en la matriz `text_matches`.

La primera coincidencia de texto ocurrió en la propiedad de `body` del informe de problemas. Aquí vemos un fragmento de texto del cuerpo del informe de problemas. El término de búsqueda (`windows`) aparece dos veces dentro de ese fragmento, y tenemos los índices para cada ocurrencia.

La segunda coincidencia de texto ocurrió en la propiedad `body` de uno de los comentarios del informe de problemas. Tenemos la URL para el comentario del informe de problemas. Y, por supuesto, vemos un fragmento de texto del cuerpo del comentario. El término de búsqueda (`windows`) se muestra una vez dentro de ese fragmento.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly distributed windows font that supports them then no problem (we can use html font tags) but otherwise the '(21)' style is probably better.\n",
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
      "fragment": " right after that are a bit broken IMHO :). I suppose we could have some hack that maxes out at whatever the font does...\n\nI'll check what the state of play is on Windows.\n",
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
