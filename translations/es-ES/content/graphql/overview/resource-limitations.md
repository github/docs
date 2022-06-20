---
title: Limitaciones de los recursos
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
---

## Límite de nodo

To pass [schema](/graphql/guides/introduction-to-graphql#schema) validation, all GraphQL API [calls](/graphql/guides/forming-calls-with-graphql) must meet these standards:

* Los clientes deben suministrar un argumento `first` o `last` en cualquier [conexión](/graphql/guides/introduction-to-graphql#connection).
* Los valores de `first` y `last` deben estar dentro de 1-100.
* Las llamadas individuales no pueden solicitar más de 500,000 [nodos](/graphql/guides/introduction-to-graphql#node) en total.

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

## Limite de tasa

The GraphQL API limit is different from the REST API's [rate limits](/rest/overview/resources-in-the-rest-api#rate-limiting).

¿Por qué son diferentes los límites de tasa de la API? Con [GraphQL](/graphql), una llamada de GraphQL puede reemplazar [varias llamadas de REST](/graphql/guides/migrating-from-rest-to-graphql). Una sola llamada compleja de GraphQL puede ser el equivalente a miles de solicitudes de REST. Si bien una sola llamada de GraphQL caería muy debajo del límite de tasa de la API de REST, la consulta podría ser igual de cara en términos de procesamiento para los servidores de GitHub.

To accurately represent the server cost of a query, the GraphQL API calculates a call's **rate limit score** based on a normalized scale of points. Los factores de puntuación de una consulta en argumentos "firs" y "last" en una conexión padre y sus hijos.

* La fórmula utiliza los argumentos `first` y `last` en una conexión padre y en sus hijos para pre-calcular la carga potencial en los sistemas de GitHub, tal como MySQL, ElasticSearch y Git.
* Cada conexión nueva tiene su propio valor de puntos. Los puntos se combinan con otros puntos desde la llamada en una puntuación de tasa límite general.

The GraphQL API rate limit is **5,000 points per hour**.

Note that 5,000 points per hour is not the same as 5,000 calls per hour: the GraphQL API and REST API use different rate limits.

{% note %}

**Note**: The current formula and rate limit are subject to change as we observe how developers use the GraphQL API.

{% endnote %}

### Recuperar el estado de límite de tasa de una llamada

With the REST API, you can check the rate limit status by [inspecting](/rest/overview/resources-in-the-rest-api#rate-limiting) the returned HTTP headers.

With the GraphQL API, you can check the rate limit status by querying fields on the `rateLimit` object:

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

* El campo `limit` devuelve el número máximo de puntos que se permite consumir al cliente en una ventana de 60 minutos.

* El campo `cost` devuelve el costo en puntos para la llamada actual que cuenta contra el límite de tasa.

* El campo `remaining` devuelve la cantidad de puntos restantes en la ventana de límite de tasa actual.)

* EL campo `resetAt` devuelve la hora en la que se reinicia la ventana de límite de tasa actual en [segundos de satélite UTC](http://en.wikipedia.org/wiki/Unix_time).

### Calcular el puntaje de límite de tasa antes de ejecutar la llamada

Al consultar el objeto `rateLimit` se devuelve el puntaje de una llamada, pero ejecutar la llamada tiene un costo en el límite. Para evitar este dilema, puedes calcular el puntaje de una llamada antes de ejecutarla. Los siguientes cálculos funcionan casi de la misma manera que lo que devuelve `rateLimit { cost }`.

1. Agrega la cantidad de solicitudes requeridas para completar cada conexión única en la llamada. Asume que cada solicitud alcanzará los límites de los argumentos `first` o `last`.
2. Divide la cantidad entre **100** y redondea el resultado para obtener el costo final agregado. Este paso normaliza las cantidades grandes.

{% note %}

**Note**: The minimum cost of a call to the GraphQL API is **1**, representing a single request.

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

* Aunque se devolvieron 100 repositorios, la API se tiene que conectar a la cuenta del visualizador **una vez** para obtener la lista de repositorios. Así que, las solicitudes de repositorios = **1**
* Aunque estámos obteniendo 50 informes de problemas de vuelta, la API tiene que conectarse a cada uno de los **100** repositorios para obtener la lista de informes de problemas. Así que, las solicitudes de informes de problemas = **100**
* Aunque estamos obteniendo 60 etiquetas de vuelta, la API se tiene que conectar a cada uno de los **5,000** informes de problemas potenciales totales para obtener la lista de etiquetas. Así que, las solicitudes de etiquetas = **5,000**
* Total = **5,101**

Si lo dividimos entre 100 y lo redondeamos, obtenemos el puntaje final de la consulta: **51**
