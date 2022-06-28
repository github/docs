---
title: Limitações de recursos
intro: 'A API do GraphQL de {% data variables.product.prodname_dotcom %} tem limitações de proteção contra chamadas excessivas ou abusivas para os servidores de {% data variables.product.prodname_dotcom %}.'
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

## Limite de nó

To pass [schema](/graphql/guides/introduction-to-graphql#schema) validation, all GraphQL API [calls](/graphql/guides/forming-calls-with-graphql) must meet these standards:

* Os clientes devem fornecer um `primeiro` ou `último` argumento [conexão](/graphql/guides/introduction-to-graphql#connection).
* Os valores de `primeiro` e `último` devem ser entre 1 e 100.
* As chamadas individuais não podem solicitar mais de 500.000 [nós](/graphql/guides/introduction-to-graphql#node)no total.

### Calcular nós em uma chamada

Estes dois exemplos mostram como calcular os nós totais em uma chamada.

1. Consulta simples:

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

2. Consulta complexa:

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

## Limite de taxa

The GraphQL API limit is different from the REST API's [rate limits](/rest/overview/resources-in-the-rest-api#rate-limiting).

Por que os limites de taxa de API são diferentes? Com o [GraphQL](/graphql), uma chamada do GraphQL pode substituir [várias chamadas de REST](/graphql/guides/migrating-from-rest-to-graphql). Uma chamada única e complexa do GraphQL poderia ser o equivalente a milhares de solicitações de REST. Embora uma única chamada GraphQL fique bem abaixo do limite de taxa de API REST, a consulta pode ser muito cara para os servidores do GitHub calcularem.

To accurately represent the server cost of a query, the GraphQL API calculates a call's **rate limit score** based on a normalized scale of points. Os fatores de pontuação de uma consulta no primeiro e último argumentos em uma conexão principal e suas conexões auxiliares.

* A fórmula usa argumentos `primeiros` e `último` na conexão principal e nas conexões secundárias para pré-calcular o potencial de carga nos sistemas do GitHub, como MySQL, ElasticSearch e Git.
* Cada nova conexão tem o seu valor próprio de pontos. Os pontos são combinados com outros pontos da chamada para uma pontuação de limite de taxa geral.

The GraphQL API rate limit is **5,000 points per hour**.

Note that 5,000 points per hour is not the same as 5,000 calls per hour: the GraphQL API and REST API use different rate limits.

{% note %}

**Note**: The current formula and rate limit are subject to change as we observe how developers use the GraphQL API.

{% endnote %}

### Retornar o status de limite da chamada

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

* O campo `limite` retorna o número máximo de pontos que o cliente tem permissão para consumir em uma janela de 60 minutos.

* O campo `custo` retorna o custo do ponto para a chamada atual que conta contra o limite de taxa.

* O campo `restante` retorna o número de pontos restantes na janela de limite de taxa atual).

* O campo `resetAt` retorna o tempo em que a janela de limite de taxa atual é redefinida em [segundos de satélite de UTC](http://en.wikipedia.org/wiki/Unix_time).

### Calcular um limite de taxa antes de executar a chamada

Consultar o objeto `rateLimit` retorna a pontuação de uma chamada, mas executar a chamada tem um custo para o limite. Para evitar esse dilema, você pode calcular a pontuação de uma chamada antes de executá-la. O cálculo a seguir funciona quase da mesma maneira que o que retorna `taxteLimit { cost }`.

1. Adicione o número de solicitações necessárias para atender cada conexão única na chamada. Assuma que todas solicitações atingirão os limites de argumento `primeiro` ou `último`.
2. Divida o número por **100** e arredonde o resultado para obter o custo agregado final. Esta etapa normaliza números grandes.

{% note %}

**Note**: The minimum cost of a call to the GraphQL API is **1**, representing a single request.

{% endnote %}

Aqui está um exemplo de consulta e cálculo de pontuação:

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

Esta consulta exige que 5,101 solicitações sejam atendidas:

* Embora estejamos retornando 100 repositórios, a API tem que se conectar à conta do visualizador **uma vez** para obter a lista de repositórios. Portanto, solicitações para repositórios = **1**
* Embora estejamos retornando 50 problemas, a API tem que se conectar a cada um dos **100** repositórios para obter a lista de problemas. Portanto, solicitações para problemas = **100**
* Embora estejamos retornando 60 etiquetas, a API tem que se conectar a cada um dos **5.000** problemas potenciais totais para obter a lista de etiquetas. Portanto, solicitações de etiquetas = **5.000**
* Total = **5.101**

Se dividirmos por 100 e arredondar, o resultado nos dará a pontuação final da consulta: **51**
