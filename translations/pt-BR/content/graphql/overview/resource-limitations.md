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
ms.openlocfilehash: 7a0f040b86435573171c4022a72f8d558ad06c29
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381421'
---
## Limite do nó

Para serem aprovados na validação de [esquema](/graphql/guides/introduction-to-graphql#schema), todas as [chamadas](/graphql/guides/forming-calls-with-graphql) à API do GraphQL precisam atender a estes padrões:

* Os clientes precisam fornecer um argumento `first` ou `last` em qualquer [conexão](/graphql/guides/introduction-to-graphql#connection).
* Os valores de `first`e `last` precisam estar entre 1 e 100.
* As chamadas individuais não podem solicitar mais de 500 mil [nós](/graphql/guides/introduction-to-graphql#node) no total.

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

O limite da API do GraphQL é diferente dos [limites de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting) da API REST.

Por que os limites de taxa de API são diferentes? Com o [GraphQL](/graphql), uma chamada do GraphQL pode substituir [várias chamadas REST](/graphql/guides/migrating-from-rest-to-graphql). Uma chamada única e complexa do GraphQL poderia ser o equivalente a milhares de solicitações de REST. Embora uma única chamada GraphQL fique bem abaixo do limite de taxa de API REST, a consulta pode ser muito cara para os servidores do GitHub calcularem.

Para representar com precisão o custo do servidor de uma consulta, a API do GraphQL calcula a **pontuação de limite de taxa** de uma chamada com base em uma escala normalizada de pontos. Os fatores de pontuação de uma consulta no primeiro e último argumentos em uma conexão principal e suas conexões auxiliares.

* A fórmula usa os argumentos `first` e `last` em uma conexão pai e os filhos para calcular previamente a carga potencial nos sistemas do GitHub, como o MySQL, o ElasticSearch e o Git.
* Cada nova conexão tem o seu valor próprio de pontos. Os pontos são combinados com outros pontos da chamada para uma pontuação de limite de taxa geral.

O limite de taxa da API do GraphQL é de **5 mil pontos por hora**. 

Observe que 5 mil pontos por hora não é o mesmo que 5 mil chamadas por hora: a API do GraphQL e a API REST usam limites de taxa diferentes.

{% note %}

**Observação**: a fórmula e o limite de taxa atuais estão sujeitos a alterações, conforme observamos como os desenvolvedores usam a API do GraphQL.

{% endnote %}

### Retornar o status de limite da chamada

Com a API REST, você pode verificar o status do limite de taxa [inspecionando](/rest/overview/resources-in-the-rest-api#rate-limiting) os cabeçalhos HTTP retornados.

Com a API do GraphQL, você pode verificar o status do limite de taxa consultando campos no objeto `rateLimit`:

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

* O campo `limit` retorna o número máximo de pontos que o cliente tem permissão para consumir em uma janela de 60 minutos.

* O campo `cost` retorna o custo de ponto para a chamada atual que é contado no limite de taxa.

* O campo `remaining` retorna o número de pontos restantes na janela de limite de taxa atual.

* O campo `resetAt` retorna o tempo em que a janela de limite de taxa atual é redefinida em [segundos de época UTC](http://en.wikipedia.org/wiki/Unix_time).

### Calcular um limite de taxa antes de executar a chamada

A consulta do objeto `rateLimit` retorna a pontuação de uma chamada, mas a execução da chamada é contada no limite. Para evitar esse dilema, você pode calcular a pontuação de uma chamada antes de executá-la. O cálculo a seguir resulta aproximadamente no mesmo custo retornado por `rateLimit { cost }`.

1. Adicione o número de solicitações necessárias para atender cada conexão única na chamada. Suponha que cada solicitação atingirá os limites dos argumentos `first` e `last`.
2. Divida o número por **100** e arredonde o resultado para obter o custo de agregação final. Esta etapa normaliza números grandes.

{% note %}

**Observação**: o custo mínimo de uma chamada à API do GraphQL é **1**, representando uma solicitação individual.

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

* Embora estejamos retornando 100 repositórios, a API precisa se conectar à conta do visualizador **uma vez** para obter a lista de repositórios. Portanto, as solicitações de repositórios = **1**
* Embora estejamos retornando 50 problemas, a API precisa se conectar a cada um dos **100** repositórios para obter a lista de problemas. Portanto, as solicitações de problemas = **100**
* Embora estejamos retornando 60 rótulos, a API precisa se conectar a cada um dos **cinco mil** possíveis problemas totais para obter a lista de rótulos. Portanto, as solicitações de rótulos = **5.000**
* Total = **5.101**

Dividindo isso por 100 e arredondando o resultado, obtemos a pontuação final da consulta: **51**
