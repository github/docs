---
title: Limitaciones de recursos
intro: 'La API de GraphQL de {% data variables.product.prodname_dotcom %} cuenta con limitaciones para la protección contra las llamadas excesivas o abusivas a los servidores de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/guides/resource-limitations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 7a0f040b86435573171c4022a72f8d558ad06c29
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381428'
---
## Límite de nodos

Para pasar la validación del [esquema](/graphql/guides/introduction-to-graphql#schema), todas las [llamadas](/graphql/guides/forming-calls-with-graphql) de GraphQL API deben cumplir estos estándares:

* Los clientes deben proporcionar un argumento `first` o `last` en cualquier [conexión](/graphql/guides/introduction-to-graphql#connection).
* Los valores de `first` y `last` deben estar comprendidos entre 1 y 100.
* Las llamadas individuales no pueden solicitar más de un total de 500 000 [nodos](/graphql/guides/introduction-to-graphql#node).

### Calcular los nodos en una llamada

Estos dos ejemplos te muestran cómo calcular los nodos totales en una llamada.

1. Consulta simple:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            issues(first: <span class="greenbox">10</span>) {
              totalCount
              edges {
                node {
                  title
                  bodyHTML
                }
              }
            }
          }
        }
      }
    }
  }</pre>

  Cálculo:

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. Consulta compleja:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            pullRequests(first: <span class="greenbox">20</span>) {
              edges {
                pullRequest:node {
                  title

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }

            issues(first: <span class="greenbox">20</span>) {
              totalCount
              edges {
                issue:node {
                  title
                  bodyHTML

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      followers(first: <span class="bluebox">10</span>) {
        edges {
          follower:node {
            login
          }
        }
      }
    }
  }</code></pre>

  Cálculo:

  <pre><span class="redbox">50</span>              = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 pullRequests
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 pullRequest comments
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 issues
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 issue comments
   +
  <span class="bluebox">10</span>              = 10 followers

                   = 22,060 total nodes</pre>

## Límite de frecuencia

El límite de GraphQL API es diferente de los [límites de frecuencia](/rest/overview/resources-in-the-rest-api#rate-limiting) de la API REST.

¿Por qué son diferentes los límites de tasa de la API? Con [GraphQL](/graphql), una llamada a GraphQL puede reemplazar [varias llamadas REST](/graphql/guides/migrating-from-rest-to-graphql). Una sola llamada compleja de GraphQL puede ser el equivalente a miles de solicitudes de REST. Si bien una sola llamada de GraphQL caería muy debajo del límite de tasa de la API de REST, la consulta podría ser igual de cara en términos de procesamiento para los servidores de GitHub.

Para representar con precisión el costo de una consulta al servidor, GraphQL API calcula la **puntuación de límite de frecuencia** de una llamada en función de una escala de puntos normalizada. Los factores de puntuación de una consulta en argumentos "firs" y "last" en una conexión padre y sus hijos.

* La fórmula utiliza los argumentos `first` y `last` en una conexión primaria y en sus secundarias para calcular previamente la carga potencial en los sistemas de GitHub, tales como MySQL, ElasticSearch y Git.
* Cada conexión nueva tiene su propio valor de puntos. Los puntos se combinan con otros puntos desde la llamada en una puntuación de tasa límite general.

El límite de frecuencia de GraphQL API es de **5000 puntos por hora**. 

Ten en cuenta que 5000 puntos por hora no es lo mismo que 5000 llamadas por hora: GraphQL API y la API REST utilizan límites de frecuencia diferentes.

{% note %}

**Nota**: La fórmula y el límite de frecuencia actuales están sujetos a cambios mientras observamos cómo los desarrolladores utilizan GraphQL API.

{% endnote %}

### Recuperar el estado de límite de tasa de una llamada

Con la API REST, puedes revisar el estado del límite de frecuencia [inspeccionando](/rest/overview/resources-in-the-rest-api#rate-limiting) los encabezados HTTP devueltos.

Con GraphQL API, puedes comprobar el estado del límite de frecuencia consultando campos del objeto `rateLimit`:

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}
```

* El campo `limit` devuelve el número máximo de puntos que se permite consumir al cliente en un periodo de 60 minutos.

* El campo `cost` devuelve el costo en puntos para la llamada actual que cuenta con respecto al límite de tasa.

* El campo `remaining` devuelve la cantidad de puntos restantes en el periodo de límite de tasa actual.

* El campo `resetAt` devuelve la hora a la que se restablece la ventana de límite de tasa actual en [segundos UTC](http://en.wikipedia.org/wiki/Unix_time).

### Calcular el puntaje de límite de tasa antes de ejecutar la llamada

Al consultar el objeto `rateLimit`, se devuelve la puntuación de una llamada, pero ejecutar la llamada cuenta con respecto al límite. Para evitar este dilema, puedes calcular el puntaje de una llamada antes de ejecutarla. Los cálculos siguientes funcionan casi de la misma manera que el costo que devuelve `rateLimit { cost }`.

1. Agrega la cantidad de solicitudes requeridas para completar cada conexión única en la llamada. Suponga que todas las solicitudes alcanzarán los límites de argumentos `first` o `last`.
2. Divida la cantidad entre **100** y redondee el resultado para obtener el costo final agregado. Este paso normaliza las cantidades grandes.

{% note %}

**Nota**: El costo mínimo de una llamada a GraphQL API es **1**, que representa una única solicitud.

{% endnote %}

Aquí se muestra una consulta y cálculo de puntaje de ejemplo:

```graphql
query {
  viewer {
    login
    repositories(first: 100) {
      edges {
        node {
          id

          issues(first: 50) {
            edges {
              node {
                id

                labels(first: 60) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Esta consulta requiere de 5,101 solicitudes para completarse:

* Aunque se devuelven 100 repositorios, la API se tiene que conectarse a la cuenta del visor **una vez** para obtener la lista de repositorios. Por lo tanto, las solicitudes de repositorios = **1**
* Aunque se devuelven 50 incidencias, la API tiene que conectarse a cada uno de los **100** repositorios para obtener la lista de problemas. Por lo tanto, solicitudes de problemas = **100**
* Aunque se devuelven 60 etiquetas, la API tiene que conectarse a cada uno de los **5000** problemas potenciales totales para obtener la lista de etiquetas. Por lo tanto, solicitudes de etiquetas = **5000**
* Total = **5101**

Si lo dividimos entre 100 y lo redondeamos, obtenemos la puntuación final de la consulta: **51**.
